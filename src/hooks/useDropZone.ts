import { useState, useRef, useCallback } from 'react';
import type { DragEvent } from 'react';

interface UseDropZoneOptions {
  onFiles: (files: File[]) => void;
}

export function useDropZone({ onFiles }: UseDropZoneOptions) {
  const [isDragOver, setIsDragOver] = useState(false);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLElement>) => {
    // Only count as leaving if we actually left the drop zone (not a child)
    if (
      dropZoneRef.current &&
      e.relatedTarget instanceof Node &&
      dropZoneRef.current.contains(e.relatedTarget)
    ) {
      return;
    }
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      setIsDragOver(false);

      const dt = e.dataTransfer;
      if (!dt?.files.length) return;

      const files = Array.from(dt.files);
      onFiles(files);
    },
    [onFiles],
  );

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return {
    isDragOver,
    dropZoneRef,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleClick,
    fileInputRef,
  };
}
