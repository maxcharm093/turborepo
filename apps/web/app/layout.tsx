import Providers from '@/components/providers';
import { metadata } from '@/lib';
import '@repo/ui/globals.css';
import { cn } from '@repo/ui/lib/utils';
import { ReactNode } from 'react';
import './globals.css';

export const generateMetadata = async () => {
  return metadata;
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('antialiased')} suppressHydrationWarning>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
