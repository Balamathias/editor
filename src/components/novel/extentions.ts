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
  
  // TODO I am using cx here to get tailwind autocomplete working, idk if someone else can write a regex to just capture the class key in objects
  
  // You can overwrite the placeholder with your own configuration
  const placeholder = Placeholder.configure({
    placeholder: 'Start typing... Press "/" to see available options.'
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
                  imageClass: cx("opacity-70 rounded-lg border border-stone-200 w-full aspect-square object-contain"),
              }),
          ];
      },
      }).configure({
      allowBase64: true,
      HTMLAttributes: {
          class: cx("rounded-lg border border-muted"),
      },
  });

  const tiptapLink = TiptapLink.configure({
    HTMLAttributes: {
      class: cx(
        "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
      ),
    },
  });
  
  const taskList = TaskList.configure({
    HTMLAttributes: {
      class: cx("not-prose pl-2"),
    },
  });
  const taskItem = TaskItem.configure({
    HTMLAttributes: {
      class: cx("flex items-start my-4"),
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
        class: cx("list-disc list-outside leading-3 -mt-2 ml-4"),
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: cx("list-decimal list-outside leading-3 -mt-2 ml-4"),
      },
    },
    listItem: {
      HTMLAttributes: {
        class: cx("leading-normal -mb-2"),
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: cx("border-l-4 border-primary p-2 py-2.5 bg-secondary/80 rounded-tr-lg rounded-br-lg"),
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: cx("rounded-sm bg-muted border p-5 font-mono font-medium"),
      },
    },
    code: {
      HTMLAttributes: {
        class: cx("rounded-md bg-primary/15 text-primary px-1.5 py-1 font-mono font-medium"),
        spellcheck: "false",
      },
    },
    heading: {
      HTMLAttributes: {
        class: cx("text-xl md:text-2xl font-semibold", {
          
        }),
        spellcheck: "false",
      },
      levels: [1],
    },
    horizontalRule: false,
    dropcursor: {
      color: "#DBEAFE",
      width: 4,
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
  