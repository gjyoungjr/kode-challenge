'use client';

import React, { Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { navItemIcons } from './global-nav';

function Params() {
  const searchParams = useSearchParams()!;

  return searchParams.toString().length !== 0 ? (
    <div className="px-2 text-gray-500">
      <span>?</span>
      {Array.from(searchParams.entries()).map(([key, value], index) => {
        return (
          <React.Fragment key={key}>
            {index !== 0 ? <span>&</span> : null}
            <span className="px-1">
              <span
                key={key}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
              >
                {key}
              </span>
              <span>=</span>
              <span
                key={value}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
              >
                {value}
              </span>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  ) : null;
}

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-2 p-3.5 lg:px-5 lg:py-3">
      <div className="text-gray-600">
        {navItemIcons[pathname.split('/')[1]]}
      </div>
      <div className="flex items-center gap-x-1 text-sm font-medium">
        <div className="text-gray-400">{pathname.split('/')[1]}</div>
        {pathname ? (
          <>
            <span className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-3 w-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            {pathname
              .split('/')
              .slice(2)
              .map((segment, index, array) => {
                return (
                  <React.Fragment key={segment}>
                    <span>
                      <span
                        key={segment}
                        className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-400"
                      >
                        {segment}
                      </span>
                    </span>
                    {index < array.length - 1 && (
                      <span className="px-1 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-3 w-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
          </>
        ) : null}

        <Suspense>
          <Params />
        </Suspense>
      </div>
    </div>
  );
}
