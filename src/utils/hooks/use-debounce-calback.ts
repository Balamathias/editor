import { EditorInstance } from "novel";
import { useCallback, useEffect, useRef } from "react";

export default function useDebouncedCallback(callback: (editor: EditorInstance) => Promise<void>, delay: number) {
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