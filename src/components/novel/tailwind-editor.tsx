"use client";

import { EditorContent, EditorInstance, EditorRoot, JSONContent } from "novel";
import { useCallback, useEffect, useRef, useState } from "react";

const TailwindEditor = () => {
  const [content, setContent] = useState<JSONContent | null>(null);
  const [saved, setSaveStatus] = useState("")

  const debouncedUpdates = useDebouncedCallback(async (editor: EditorInstance) => {
    const json = editor.getJSON();
    setContent(json);
    setSaveStatus("Saved");
  }, 500);

  return (
    <EditorRoot>
      <EditorContent
        initialContent={content!}
        onUpdate={(editor) => debouncedUpdates(editor.editor)}
      />
    </EditorRoot>
  );
};
export default TailwindEditor;

function useDebouncedCallback(callback: (editor: EditorInstance) => Promise<void>, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback(
    async (editor: EditorInstance) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(async () => {
        await callback(editor);
      }, delay);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}

function _useDebouncedCallback(arg0: (editor: EditorInstance) => Promise<void>, arg1: number) {
  throw new Error("Function not implemented.");
}

