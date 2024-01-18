import React from 'react';
import { type UseChatHelpers } from 'ai/react';
import { PromptForm } from './prompt-form';
import { ChatList } from './chat-list';

interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | 'handleInputChange'
    | 'isLoading'
    | 'handleSubmit'
    | 'input'
    | 'messages'
    | 'stop'
  > {}

export default function ChatPanel({
  isLoading,
  handleInputChange,
  handleSubmit,
  input,
  messages,
  stop,
}: ChatPanelProps) {
  return (
    <>
      <div className=" h-full overflow-y-auto">
        {messages && <ChatList messages={messages} />}
      </div>
      <PromptForm
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        stop={stop}
        messages={messages}
      />
    </>
  );
}
