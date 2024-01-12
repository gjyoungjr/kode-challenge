import React, { useEffect } from 'react';

import Editor, { useMonaco } from '@monaco-editor/react';
import { DraculaTheme } from '../monaco-themes/slate';
import { eiffelLight } from '../monaco-themes/eiffel-light';
import { useTheme } from 'next-themes';

function CodeEditor() {
  const monaco = useMonaco();
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark' || theme === 'system') {
      // @ts-ignore
      monaco?.editor.defineTheme('dracula', DraculaTheme);
      monaco?.editor.setTheme('dracula');
    } else {
      // @ts-ignore
      monaco?.editor.defineTheme('light', eiffelLight);
      monaco?.editor.setTheme('light');
    }
  }, [monaco]);

  return (
    <Editor
      height="90vh"
      theme={theme === 'dark' || theme === 'system' ? 'dracula' : 'light'}
      defaultValue="function x() {}"
      defaultLanguage="typescript"
    />
  );
}

export default CodeEditor;
