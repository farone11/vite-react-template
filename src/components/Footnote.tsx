import { BookOpen } from 'lucide-react';

interface FootnoteProps { notes: Array<{ id: string; content: string; source?: string }>; }

export function Footnotes({ notes }: FootnoteProps) {
  return (
    <section className="mt-12 pt-6 border-t border-primary-800">
      <div className="flex items-center space-x-2 mb-4">
        <BookOpen className="w-4 h-4 text-gold-400" />
        <h3 className="font-display text-lg font-semibold text-white">References</h3>
      </div>
      <ol className="space-y-2">
        {notes.map((note, idx) => (
          <li key={note.id} className="flex text-sm">
            <span className="font-mono text-gold-500 mr-3">[{idx + 1}]</span>
            <span className="text-primary-300">{note.content}{note.source && <span className="text-primary-500"> - {note.source}</span>}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}