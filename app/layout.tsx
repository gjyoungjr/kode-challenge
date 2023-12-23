import '#/styles/globals.css';
import { AddressBar } from '#/ui/address-bar';
import Byline from '#/ui/byline';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Kode',
    template: 'Kode',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
  openGraph: {
    title: 'Next.js App Router Playground',
    description:
      'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" overflow-y-scroll pb-36">
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mb-15 mx-auto lg:py-1">
            <div className="fixed rounded-lg">
              <AddressBar />
            </div>
          </div>
          <div className="mt-20 pl-5 pr-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
