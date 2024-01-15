import * as React from 'react';
import Textarea from 'react-textarea-autosize';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { useChat } from 'ai/react';
import { ArrowUpIcon } from '../ui/icons';
import { ChatList } from './chat-list';

export interface PromptProps {
  onSubmit: (value: string) => void;
  isLoading: boolean;
}

export function PromptForm({ onSubmit, isLoading }: PromptProps) {
  const { messages, input, setInput, handleSubmit, handleInputChange } =
    useChat();

  return (
    <>
      <div className=" h-full overflow-y-auto">
        {messages && <ChatList messages={messages} />}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-background relative flex max-h-20 w-auto grow flex-col overflow-hidden sm:rounded-md sm:border sm:pr-12">
          <Textarea
            tabIndex={0}
            rows={1}
            value={input}
            onChange={handleInputChange}
            placeholder="Send a message."
            id="promptForm"
            spellCheck={false}
            className="min-h-[16px] w-auto resize-none bg-transparent px-4 py-[0.8rem] focus-within:outline-none sm:text-sm"
          />
          <div className="absolute right-0 top-2 sm:right-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="submit" size="icon" className="h-8 w-8">
                    <ArrowUpIcon className="w-5" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Send message</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </form>
    </>
  );
}
