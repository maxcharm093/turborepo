import Providers from '@/components/providers';
import _metadata from '@/lib/_metadata';
import '@repo/ui/globals.css';
import { cn } from '@repo/ui/lib/utils';
import { ReactNode } from 'react';
// const roboto = Roboto({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
//   weight:  ["400", "500", "700"],
// })

export const generateMetadata = async () => {
  return _metadata;
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
