/**
 * @description
 * This theme is based on the default light theme of VSCode.
 */
const light = {
  base: 'vs',
  inherit: true,
  rules: [
    {
      background: 'FFFFFF',
      token: '',
    },
    {
      foreground: '00b418',
      token: 'comment',
    },
    {
      foreground: '0206ff',
      fontStyle: 'italic',
      token: 'variable',
    },
    {
      foreground: '0100b6',
      fontStyle: 'bold',
      token: 'keyword',
    },
    {
      foreground: 'cd0000',
      fontStyle: 'italic',
      token: 'constant.numeric',
    },
    {
      foreground: 'c5060b',
      fontStyle: 'italic',
      token: 'constant',
    },
    {
      foreground: '585cf6',
      fontStyle: 'italic',
      token: 'constant.language',
    },
    {
      foreground: 'd80800',
      token: 'string',
    },
    {
      foreground: '26b31a',
      token: 'constant.character.escape',
    },
    {
      foreground: '26b31a',
      token: 'string source',
    },
    {
      foreground: '1a921c',
      token: 'meta.preprocessor',
    },
    {
      foreground: '0c450d',
      fontStyle: 'bold',
      token: 'keyword.control.import',
    },
    {
      foreground: '0000a2',
      fontStyle: 'bold',
      token: 'entity.name.function',
    },
    {
      foreground: '0000a2',
      fontStyle: 'bold',
      token: 'keyword.other.name-of-parameter.objc',
    },
    {
      fontStyle: 'italic',
      token: 'entity.name.type',
    },
    {
      fontStyle: 'italic',
      token: 'entity.other.inherited-class',
    },
    {
      fontStyle: 'italic',
      token: 'variable.parameter',
    },
    {
      foreground: '70727e',
      token: 'storage.type.method',
    },
    {
      fontStyle: 'italic',
      token: 'meta.section entity.name.section',
    },
    {
      fontStyle: 'italic',
      token: 'declaration.section entity.name.section',
    },
    {
      foreground: '3c4c72',
      fontStyle: 'bold',
      token: 'support.function',
    },
    {
      foreground: '6d79de',
      fontStyle: 'bold',
      token: 'support.class',
    },
    {
      foreground: '6d79de',
      fontStyle: 'bold',
      token: 'support.type',
    },
    {
      foreground: '06960e',
      fontStyle: 'bold',
      token: 'support.constant',
    },
    {
      foreground: '21439c',
      fontStyle: 'bold',
      token: 'support.variable',
    },
    {
      foreground: '687687',
      token: 'keyword.operator.js',
    },
    {
      foreground: 'ffffff',
      background: '990000',
      token: 'invalid',
    },
    {
      background: 'ffd0d0',
      token: 'invalid.deprecated.trailing-whitespace',
    },
    {
      background: '427ff530',
      token: 'text source',
    },
    {
      background: '427ff530',
      token: 'string.unquoted',
    },
    {
      foreground: '68685b',
      token: 'meta.xml-processing',
    },
    {
      foreground: '68685b',
      token: 'declaration.xml-processing',
    },
    {
      foreground: '888888',
      token: 'meta.doctype',
    },
    {
      foreground: '888888',
      token: 'declaration.doctype',
    },
    {
      fontStyle: 'italic',
      token: 'meta.doctype.DTD',
    },
    {
      fontStyle: 'italic',
      token: 'declaration.doctype.DTD',
    },
    {
      foreground: '1c02ff',
      token: 'meta.tag',
    },
    {
      foreground: '1c02ff',
      token: 'declaration.tag',
    },
    {
      fontStyle: 'bold',
      token: 'entity.name.tag',
    },
    {
      fontStyle: 'italic',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: '0c07ff',
      fontStyle: 'bold',
      token: 'markup.heading',
    },
    {
      foreground: '000000',
      fontStyle: 'italic',
      token: 'markup.quote',
    },
    {
      foreground: 'b90690',
      token: 'markup.list',
    },
  ],
  colors: {
    'editor.foreground': '#000000',
    'editor.background': '#FFFFFF',
    'editor.selectionBackground': '#C3DCFF',
    'editor.lineHighlightBackground': '#00000012',
    'editorCursor.foreground': '#000000',
    'editorWhitespace.foreground': '#BFBFBF',
  },
};

/**
 * @description
 * This theme is based on shadcnui slate theme, which is currently used as default theme for the web app.
 */
const slate = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      background: '24292e',
      token: '',
    },
    {
      foreground: '959da5',
      token: 'comment',
    },
    {
      foreground: '959da5',
      token: 'punctuation.definition.comment',
    },
    {
      foreground: '959da5',
      token: 'string.comment',
    },
    {
      foreground: 'c8e1ff',
      token: 'constant',
    },
    {
      foreground: 'c8e1ff',
      token: 'entity.name.constant',
    },
    {
      foreground: 'c8e1ff',
      token: 'variable.other.constant',
    },
    {
      foreground: 'c8e1ff',
      token: 'variable.language',
    },
    {
      foreground: 'b392f0',
      token: 'entity',
    },
    {
      foreground: 'b392f0',
      token: 'entity.name',
    },
    {
      foreground: 'f6f8fa',
      token: 'variable.parameter.function',
    },
    {
      foreground: '7bcc72',
      token: 'entity.name.tag',
    },
    {
      foreground: 'ea4a5a',
      token: 'keyword',
    },
    {
      foreground: 'ea4a5a',
      token: 'storage',
    },
    {
      foreground: 'ea4a5a',
      token: 'storage.type',
    },
    {
      foreground: 'f6f8fa',
      token: 'storage.modifier.package',
    },
    {
      foreground: 'f6f8fa',
      token: 'storage.modifier.import',
    },
    {
      foreground: 'f6f8fa',
      token: 'storage.type.java',
    },
    {
      foreground: '79b8ff',
      token: 'string',
    },
    {
      foreground: '79b8ff',
      token: 'punctuation.definition.string',
    },
    {
      foreground: '79b8ff',
      token: 'string punctuation.section.embedded source',
    },
    {
      foreground: 'c8e1ff',
      token: 'support',
    },
    {
      foreground: 'c8e1ff',
      token: 'meta.property-name',
    },
    {
      foreground: 'fb8532',
      token: 'variable',
    },
    {
      foreground: 'f6f8fa',
      token: 'variable.other',
    },
    {
      foreground: 'd73a49',
      fontStyle: 'bold italic underline',
      token: 'invalid.broken',
    },
    {
      foreground: 'd73a49',
      fontStyle: 'bold italic underline',
      token: 'invalid.deprecated',
    },
    {
      foreground: 'fafbfc',
      background: 'd73a49',
      fontStyle: 'italic underline',
      token: 'invalid.illegal',
    },
    {
      foreground: 'fafbfc',
      background: 'd73a49',
      fontStyle: 'italic underline',
      token: 'carriage-return',
    },
    {
      foreground: 'd73a49',
      fontStyle: 'bold italic underline',
      token: 'invalid.unimplemented',
    },
    {
      foreground: 'd73a49',
      token: 'message.error',
    },
    {
      foreground: 'f6f8fa',
      token: 'string source',
    },
    {
      foreground: 'c8e1ff',
      token: 'string variable',
    },
    {
      foreground: '79b8ff',
      token: 'source.regexp',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp.character-class',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp constant.character.escape',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp source.ruby.embedded',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp string.regexp.arbitrary-repitition',
    },
    {
      foreground: '7bcc72',
      fontStyle: 'bold',
      token: 'string.regexp constant.character.escape',
    },
    {
      foreground: 'c8e1ff',
      token: 'support.constant',
    },
    {
      foreground: 'c8e1ff',
      token: 'support.variable',
    },
    {
      foreground: 'c8e1ff',
      token: 'meta.module-reference',
    },
    {
      foreground: 'fb8532',
      token: 'markup.list',
    },
    {
      foreground: '0366d6',
      fontStyle: 'bold',
      token: 'markup.heading',
    },
    {
      foreground: '0366d6',
      fontStyle: 'bold',
      token: 'markup.heading entity.name',
    },
    {
      foreground: 'c8e1ff',
      token: 'markup.quote',
    },
    {
      foreground: 'f6f8fa',
      fontStyle: 'italic',
      token: 'markup.italic',
    },
    {
      foreground: 'f6f8fa',
      fontStyle: 'bold',
      token: 'markup.bold',
    },
    {
      foreground: 'c8e1ff',
      token: 'markup.raw',
    },
    {
      foreground: 'b31d28',
      background: 'ffeef0',
      token: 'markup.deleted',
    },
    {
      foreground: 'b31d28',
      background: 'ffeef0',
      token: 'meta.diff.header.from-file',
    },
    {
      foreground: 'b31d28',
      background: 'ffeef0',
      token: 'punctuation.definition.deleted',
    },
    {
      foreground: '176f2c',
      background: 'f0fff4',
      token: 'markup.inserted',
    },
    {
      foreground: '176f2c',
      background: 'f0fff4',
      token: 'meta.diff.header.to-file',
    },
    {
      foreground: '176f2c',
      background: 'f0fff4',
      token: 'punctuation.definition.inserted',
    },
    {
      foreground: 'b08800',
      background: 'fffdef',
      token: 'markup.changed',
    },
    {
      foreground: 'b08800',
      background: 'fffdef',
      token: 'punctuation.definition.changed',
    },
    {
      foreground: '2f363d',
      background: '959da5',
      token: 'markup.ignored',
    },
    {
      foreground: '2f363d',
      background: '959da5',
      token: 'markup.untracked',
    },
    {
      foreground: 'b392f0',
      fontStyle: 'bold',
      token: 'meta.diff.range',
    },
    {
      foreground: 'c8e1ff',
      token: 'meta.diff.header',
    },
    {
      foreground: '0366d6',
      fontStyle: 'bold',
      token: 'meta.separator',
    },
    {
      foreground: '0366d6',
      token: 'meta.output',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.tag',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.curly',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.round',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.square',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.angle',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.quote',
    },
    {
      foreground: 'd73a49',
      token: 'brackethighlighter.unmatched',
    },
    {
      foreground: 'd73a49',
      token: 'sublimelinter.mark.error',
    },
    {
      foreground: 'fb8532',
      token: 'sublimelinter.mark.warning',
    },
    {
      foreground: '6a737d',
      token: 'sublimelinter.gutter-mark',
    },
    {
      foreground: '79b8ff',
      fontStyle: 'underline',
      token: 'constant.other.reference.link',
    },
    {
      foreground: '79b8ff',
      fontStyle: 'underline',
      token: 'string.other.link',
    },
  ],
  colors: {
    'editor.foreground': '#f8f8f2',
    'editor.background': '#020817',
    'editor.selectionBackground': '#44475a',
    'editor.lineHighlightBackground': '#020817',
    'editorCursor.foreground': '#f8f8f0',
    'editorWhitespace.foreground': '#3B3A32',
    'editorIndentGuide.activeBackground': '#9D550FB0',
    'editor.selectionHighlightBorder': '#222218',
  },
};

export { light, slate };
