import React, { useEffect } from 'react';

import Editor, { useMonaco, type OnChange } from '@monaco-editor/react';
import { light, slate } from '../editor-themes';
import { useTheme } from 'next-themes';

interface CodeEditorProps {
  onChange?: OnChange;
}

function CodeEditor({ onChange }: CodeEditorProps) {
  const monaco = useMonaco();
  const { theme } = useTheme();

  useEffect(() => {
    // Load & set themes for monaco editor
    if (theme === 'dark' || theme === 'system') {
      // @ts-ignore
      monaco?.editor.defineTheme('slate', slate);
      monaco?.editor.setTheme('slate');
    } else {
      // @ts-ignore
      monaco?.editor.defineTheme('light', light);
      monaco?.editor.setTheme('light');
    }
  }, [monaco, theme]);

  return (
    <Editor
      height="90vh"
      theme={theme === 'dark' || theme === 'system' ? 'slate' : 'light'}
      defaultValue="function checkBalance () {
    
      }"
      defaultLanguage="typescript"
      onChange={onChange}
    />
  );
}

export default CodeEditor;
