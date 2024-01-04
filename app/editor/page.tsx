'use client';
import React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

function ResizableDemo() {
  return (
    <div
      style={{
        height: 'calc(100vh - 4rem)',
      }}
    >
      <ResizablePanelGroup direction="horizontal" className="w-full  border">
        <ResizablePanel defaultSize={10}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">file</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">IDE</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">ChatBot</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
export default ResizableDemo;
