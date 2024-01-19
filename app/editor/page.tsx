'use client';
import React from 'react';
import { useChat } from 'ai/react';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import CodeEditor from '@/components/editor';
import ChatPanel from '@/components/chat/chat-panel';

function EditorWorkSpace() {
  const { messages, input, handleSubmit, handleInputChange, isLoading, stop } =
    useChat();

  // TODO: Retrieve code in editor & pass to ChatBot

  return (
    <div
      style={{
        height: 'calc(100vh - 4rem)',
      }}
    >
      <ResizablePanelGroup direction="horizontal" className="w-full  border">
        <ResizablePanel defaultSize={65}>
          <div className="flex h-full">
            <CodeEditor
              onChange={(value) =>
                console.log(`Value ${JSON.stringify(value, null, 2)}`)
              }
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={35} className="relative w-full">
          <div className="absolute bottom-2 w-full px-2 ">
            <ChatPanel
              messages={messages}
              input={input}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              isLoading={isLoading}
              stop={stop}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
export default EditorWorkSpace;
