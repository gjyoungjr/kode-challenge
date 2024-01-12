import React, { useEffect } from 'react';

import Editor, { useMonaco } from '@monaco-editor/react';
import { light, slate } from '../editor-themes';
import { useTheme } from 'next-themes';

function CodeEditor() {
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
  }, [monaco]);

  return (
    <Editor
      height="90vh"
      theme={theme === 'dark' || theme === 'system' ? 'slate' : 'light'}
      defaultValue="function checkBalance () {
    
      }"
      defaultLanguage="typescript"
    />
  );
}

export default CodeEditor;
