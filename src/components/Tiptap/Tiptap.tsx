import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Code from '@tiptap/extension-code';
import Link from '@tiptap/extension-link';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';

export default function Tiptap() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
      Code,
      Link,
      BulletList,
      OrderedList,
      ListItem,
      Heading.configure({ levels: [1, 2] }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: '<p>Escribe aquí...</p>',
  });

  if (!editor) return null;

  return (
    <div className="border border-Jborder rounded-md p-4 h-full">
      {/* Botones de formato */}
      <div className="flex gap-2 mb-2 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive('bold') ? 'bg-gray-200' : ''
          }`}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive('italic') ? 'bg-gray-200' : ''
          }`}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive('underline') ? 'bg-gray-200' : ''
          }`}
        >
          U
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive('strike') ? 'bg-gray-200' : ''
          }`}
        >
          ~S~
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-2 py-1 border rounded ${
            editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''
          }`}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-2 py-1 border rounded ${
            editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''
          }`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive('bulletList') ? 'bg-gray-200' : ''
          }`}
        >
          • Lista
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive('orderedList') ? 'bg-gray-200' : ''
          }`}
        >
          1. Lista
        </button>
        <button
          onClick={() => {
            const url = prompt('Ingrese la URL');
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          className="px-2 py-1 border rounded"
        >
          🔗
        </button>

        {/* Botones de alineación */}
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''
          }`}
        >
          ⬅
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''
          }`}
        >
          ⬆
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''
          }`}
        >
          ➡
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-200' : ''
          }`}
        >
          ⬛
        </button>
      </div>

      {/* Área de edición */}
      <EditorContent
        editor={editor}
        className="border border-Jborder p-2 h-96 overflow-y-scroll leading-loose lgCustom:h-auto"
      />
    </div>
  );
}
