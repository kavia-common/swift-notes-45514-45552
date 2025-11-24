"use client";

import Sidebar from "@/components/Sidebar";
import NoteEditor from "@/components/NoteEditor";
import EmptyState from "@/components/EmptyState";
import TopBar from "@/components/TopBar";
import { useNotesStore } from "@/lib/store";

export default function Home() {
  const selectedId = useNotesStore((s) => s.selectedId);

  return (
    <main className="h-screen flex">
      <Sidebar />
      <section className="flex-1 flex flex-col bg-gray-50">
        <TopBar />
        <div className="flex-1 overflow-y-auto p-4">
          {selectedId ? <NoteEditor /> : <EmptyState />}
        </div>
      </section>
    </main>
  );
}
