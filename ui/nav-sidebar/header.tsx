import Link from 'next/link';
import React from 'react';
import { NextLogo } from '../next-logo';

function Logo() {
  return (
    <div className="border-white-30 group-hover:border-white-50 h-7 w-7 rounded-full border">
      <NextLogo />
    </div>
  );
}

export default function Header() {
  return (
    <div className="flex h-14 items-center px-3 py-4 lg:h-auto">
      <Link
        href="/"
        className="group flex w-full items-center gap-x-2.5"
        onClick={close}
      >
        <Logo />
        <h3 className="font-semibold tracking-wide">kode</h3>
      </Link>
    </div>
  );
}
