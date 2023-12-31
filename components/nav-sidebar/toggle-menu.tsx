import React from 'react';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';

interface ToggleMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ToggleMenu({ isOpen, setIsOpen }: ToggleMenuProps) {
  return (
    <button
      type="button"
      className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="font-medium text-gray-100 group-hover:text-gray-400">
        Menu
      </div>
      {isOpen ? (
        <XIcon className="block w-6 text-gray-400" />
      ) : (
        <MenuAlt2Icon className="block w-6 text-gray-400" />
      )}
    </button>
  );
}
