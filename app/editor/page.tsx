'use client';
import React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import CodeEditor from '@/components/editor';
import { PromptForm } from '@/components/chat/prompt-form';

function EditorWorkSpace() {
  return (
    <div
      style={{
        height: 'calc(100vh - 4rem)',
      }}
    >
      <ResizablePanelGroup direction="horizontal" className="w-full  border">
        <ResizablePanel defaultSize={65}>
          <div className="flex h-full">
            <CodeEditor />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={35} className="relative w-full">
          <div className="absolute bottom-2 w-full px-2 ">
            <PromptForm onSubmit={(e) => console.log(e)} isLoading={false} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
export default EditorWorkSpace;
