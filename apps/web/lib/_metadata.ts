import { Metadata } from 'next';

const _metadata: Metadata = {
  metadataBase: new URL('https:///www.aungpyaephyo.com'),
  title: {
    default: 'Turborepo',
    template: '%s | Turborepo',
  },
  description: 'Description of Turborepo.',
  keywords: ['turborepo'],
  openGraph: {
    title: 'Turborepo',
    description: 'Description of Turborepo.',
    url: 'https:///www.aungpyaephyo.com',
    siteName: 'Turborepo',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Turborepo',
    card: 'summary_large_image',
  },
  verification: {
    google: 'Enter your Google Search Console verification code here',
  },
};

export default _metadata;
