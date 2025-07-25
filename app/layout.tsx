import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

const body = Inter({
  subsets: ['latin'],
});

const heading = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-plex-mono',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={body.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
