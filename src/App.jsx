import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from './extensions/Hilghlight';
import "./App.css"

const App = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({
        colors: ['yellow', 'orange', 'pink', 'green', 'blue'], // Customize as needed
        defaultColor: 'yellow',
      }),
    ],
    content: '<p>Highlight your text!</p>',
  });

  if (!editor) {
    return null;
  }

  const applyHighlight = (color) => {
    editor.chain().focus().setHighlight(color).run();
  };

  const removeHighlight = () => {
    editor.chain().focus().unsetHighlight().run();
  };

  return (
    <div>
      <div>
        <h1>Add Highlight </h1>
        {['yellow', 'orange', 'pink', 'green', 'blue'].map((color) => (
          <button
            key={color}
            onClick={() => applyHighlight(color)}
            style={{
              backgroundColor: color,
              border: 'none',
              padding: '10px',
              margin: '5px',
              cursor: 'pointer',
            }}
          />
        ))}
        <button onClick={removeHighlight} style={{ marginLeft: '10px' }}>
          Remove Highlight
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default App;
