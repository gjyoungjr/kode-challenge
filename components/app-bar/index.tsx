'use client';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import UserAvatar from '@/components/user-avatar/vertical-avatar';

const AppBar = () => {
  return (
    <header className="relative flex h-14 items-center  border-b border-solid p-4">
      <nav className={'flex items-center space-x-4 lg:space-x-6'}>
        <Link
          href="/dashboard"
          className="group flex w-full items-center gap-x-2.5"
        >
          <Logo />
          <h3 className="font-semibold tracking-wide">kode</h3>
        </Link>
      </nav>
      <div className="ml-auto">
        <UserAvatar name="Acme" email="acme@gmail.com" />
      </div>
    </header>
  );
};

export default AppBar;
