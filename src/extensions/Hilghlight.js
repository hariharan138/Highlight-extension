import { Mark } from '@tiptap/core';

const Highlight = Mark.create({
  name: 'highlight',

  // Add the default options
  addOptions() {
    return {
      colors: ['yellow', 'orange', 'pink', 'green'], // Customize colors
      defaultColor: 'yellow',
    };
  },

  addAttributes() {
    return {
      color: {
        default: this.options.defaultColor,
        parseHTML: (element) => element.getAttribute('data-color'),
        renderHTML: (attributes) => {
          return {
            'data-color': attributes.color,
            style: `background-color: ${attributes.color || this.options.defaultColor};`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-highlight]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', { ...HTMLAttributes, 'data-highlight': '' }, 0];
  },

  addCommands() {
    return {
      setHighlight:
        (color) =>
        ({ commands }) => {
          return commands.setMark(this.name, { color });
        },
      unsetHighlight:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
});

export default Highlight;
