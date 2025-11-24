"use client";

import { useNotesStore } from "@/lib/store";

export default function TopBar() {
  const { selectedId, deleteNote } = useNotesStore((s) => ({
    selectedId: s.selectedId,
    deleteNote: s.deleteNote,
  }));

  return (
    <header className="h-12 flex items-center justify-end border-b border-gray-200 px-4 bg-white">
      {selectedId && (
        <button
          onClick={() => deleteNote(selectedId)}
          className="text-sm text-red-600 hover:underline"
          aria-label="Delete selected note"
        >
          Delete
        </button>
      )}
    </header>
  );
}
