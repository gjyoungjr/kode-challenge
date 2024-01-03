import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
  name: string;
  email: string;
}

export default function UserAvatar({ name }: UserAvatarProps) {
  return (
    <Avatar className="h-8 w-8 cursor-pointer">
      <AvatarImage src={`https://avatar.tobi.sh/${name}`} alt={name} />
      <AvatarFallback className="text-xs">
        {name && name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
