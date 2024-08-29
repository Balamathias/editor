'use client'

import {
    TiptapImage,
    TiptapLink,
    UpdatedImage,
    TaskList,
    TaskItem,
    HorizontalRule,
    StarterKit,
    Placeholder,
    HighlightExtension,
    MarkdownExtension,
    Color,
    Mathematics,
    TextStyle,
    GlobalDragHandle,
  } from "novel/extensions";
  
import { cx } from "class-variance-authority";
import { UploadImagesPlugin,  } from "novel/plugins";
import AutoJoiner from "tiptap-extension-auto-joiner";
import { Fira_Code } from "next/font/google";
import { cn } from "@/lib/utils";
  
  // TODO I am using cx here to get tailwind autocomplete working, idk if someone else can write a regex to just capture the class key in objects
  
  // You can overwrite the placeholder with your own configuration
  const fira = Fira_Code({subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-fira'})

  const placeholder = Placeholder.configure({
    placeholder: 'Start typing... Press "/" to see available options.',
    emptyEditorClass: cx('text-xs tracking-tighter')
  });

  const globalDragHandle = GlobalDragHandle.configure({
      dragHandleWidth: 20,    // default

      // The scrollTreshold specifies how close the user must drag an element to the edge of the lower/upper screen for automatic 
      // scrolling to take place. For example, scrollTreshold = 100 means that scrolling starts automatically when the user drags an 
      // element to a position that is max. 99px away from the edge of the screen
      // You can set this to 0 to prevent auto scrolling caused by this extension
      scrollTreshold: 100     // default
  })

  const autoJoiner = AutoJoiner.configure({
      elementsToJoin: ["bulletList", "orderedList"] // default
  })

  const tiptapImage = TiptapImage.extend({
    addProseMirrorPlugins() {
          return [
              UploadImagesPlugin({
                  imageClass: cx("opacity-20 border border-secondary w-full aspect-square object-contain !max-h-[600px] !rounded-lg"),
              }),
          ];
      },
      }).configure({
      allowBase64: true,
      HTMLAttributes: {
          class: cx("rounded-lg border border-muted aspect-square mt-2"),
      },
  });

  const tiptapLink = TiptapLink.configure({
    HTMLAttributes: {
      class: cx(
        "text-muted-foreground bg-muted-foreground/15 rounded-lg underline underline-offset-[3px] px-1.5 py-0.5 hover:text-primary transition-colors cursor-pointer font-medium",
      ),
    },
  });
  
  const taskList = TaskList.configure({
    HTMLAttributes: {
      class: cx("not-prose pl-2 marker:text-primary"),
    },
  });

  const taskItem = TaskItem.configure({
    HTMLAttributes: {
      class: cx("flex items-start my-4 marker:text-primary"),
    },
    nested: true,
  });
  
  const horizontalRule = HorizontalRule.configure({
    HTMLAttributes: {
      class: cx("mt-4 mb-6 border-t border-muted-foreground"),
    },
  });
  
  const starterKit = StarterKit.configure({
    bulletList: {
      HTMLAttributes: {
        class: cx("list-disc list-outside leading-normal marker:text-primary mt-2 ml-4"),
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: cx("list-decimal list-outside leading-normal marker:text-primary mt-2 ml-4"),
      },
    },
    listItem: {
      HTMLAttributes: {
        class: cx("leading-normal marker:text-primary"),
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: cx("border-l-4 border-primary p-2 py-2.5 bg-secondary/80 rounded-tr-lg rounded-br-lg border-none", 'rounded-lg md:px-4'),
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: cx("rounded-sm bg-muted border p-5 font-google font-medium", fira.className),
      },
    },
    code: {
      HTMLAttributes: {
        class: cx("rounded-md bg-blue-500/15 text-blue-500 px-1.5 py-0.5 !font-google font-medium"),
        spellcheck: "false",
      },
    },
    heading: {
      HTMLAttributes: {
        class: cx("font-semibold py-2 text-2xl bg-gradient-to-l from-blue-600 via-pink-600 to-violet-500 bg-clip-text text-transparent", {
          
        }),
        spellcheck: "false",
      },
      levels: [1, 2, 3, 4],
    },
    horizontalRule: false,
    dropcursor: {
      color: "#DBEAFE",
      width: 4,
    },

    paragraph: {
      HTMLAttributes: {
        class: cn('text-lg leading-relaxed text-gray-800 dark:text-gray-200')
      }
    },

    gapcursor: false,
  });
  
  export const defaultExtensions = [
    starterKit,
    placeholder,
    tiptapLink,
    tiptapImage,
    UpdatedImage,
    taskList,
    taskItem,
    horizontalRule,
    HighlightExtension,
    MarkdownExtension,
    Color,
    Mathematics,
    globalDragHandle,
    autoJoiner
  ];
  