'use client'

import {
    EditorBubble,
    EditorBubbleItem,
    EditorCommand,
    EditorCommandEmpty,
    EditorCommandItem,
    EditorCommandList,
    EditorContent,
    EditorInstance,
    EditorRoot,
    JSONContent,
  } from "novel";
import { defaultExtensions } from "./extentions";
import { handleCommandNavigation } from "novel/extensions";
import { slashCommand, suggestionItems } from "./slash-commands";

import { NodeSelector } from "./selectors/node-selector";
import { LinkSelector } from "./selectors/link-selector";
import { ColorSelector } from "./selectors/color-selector";
import { TextButtons } from "./selectors/text-buttons";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { uploadFn } from "./image-upload";
import useDebouncedCallback from "@/utils/hooks/use-debounce-calback";
import { toast } from "sonner";
import { cx } from "class-variance-authority";

require("@tailwindcss/typography");

const STORAGE_KEY = 'content'
  
export default function Previewer ({initialContent}: { initialContent: JSONContent }) {
    const openAI = false
    const [openNode, setOpenNode] = useState(false)
    const [openLink, setOpenLink] = useState(false)
    const [openColor, setOpenColor] = useState(false)

    const [content, setContent] = useState<JSONContent | null>(initialContent);
    const [saved, setSaveStatus] = useState("")

    const saveToLocalStorage = (json: JSONContent) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(json)) 
        } catch (error) {
            console.log(error)
        }
    }

    const debouncedUpdates = useDebouncedCallback(async (editor: EditorInstance) => {
        const json = editor.getJSON();
        setContent(json);
        saveToLocalStorage(json)
        setSaveStatus("Saved");

        // console.log(content)
    }, 500);
    
    return (
        <EditorRoot>
            <EditorContent
                extensions={[...defaultExtensions, slashCommand]}
                editorProps={{
                    handleDOMEvents: {
                        keydown: (_view, event) => {
                            handleCommandNavigation(event);
                            // @ts-ignore
                            if ((event.key === 'Control' || event.key === 'Meta') && event.key === 's') {
                                saveToLocalStorage(content!)
                                toast.info("Content saved to local storage successfully.")
                            }
                        },
                    },
                    attributes: {
                        class: cx(`prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`, 'focus:outline-none cursor-primary'),
                    },
                    handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
                    handleDrop: (view, event, _slice, moved) =>  handleImageDrop(view, event, moved, uploadFn),
                }}
                autofocus
                onUpdate={({ editor }) => {debouncedUpdates(editor)}}
                initialContent={content!}
                editable={false}
            >
                <EditorCommand className='z-50 h-auto max-h-[330px]  w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all'>
                    <EditorCommandEmpty className='px-2 text-muted-foreground'>No results</EditorCommandEmpty>
                    <EditorCommandList>
                        {suggestionItems.map((item) => (
                            <EditorCommandItem
                                value={item.title}
                                onCommand={(val) => item?.command?.(val)}
                                className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
                                key={item.title}
                            >
                                <div className='flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background'>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className='font-medium'>{item.title}</p>
                                    <p className='text-xs text-muted-foreground'>{item.description}</p>
                                </div>
                            </EditorCommandItem>
                        ))}
                    </EditorCommandList>
                </EditorCommand>

                <EditorBubble
                    tippyOptions={{
                    placement: openAI ? "bottom-start" : "top",
                    }}
                    className='flex w-fit max-w-[90vw] overflow-hidden rounded border border-muted bg-background shadow-xl'
                >
                    <NodeSelector open={openNode} onOpenChange={setOpenNode} />
                    <LinkSelector open={openLink} onOpenChange={setOpenLink} />
                    <TextButtons />
                    <ColorSelector open={openColor} onOpenChange={setOpenColor} />
                </EditorBubble>
            </EditorContent>
        </EditorRoot>
    )
}
  