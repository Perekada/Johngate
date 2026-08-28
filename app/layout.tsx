// The stylesheet is handled by Next.js at runtime, even when its type declaration
// is not available to the TypeScript language service.
// @ts-expect-error Next.js supports side-effect CSS imports in app layouts.
import './globals.css';
import type { Metadata } from 'next';
import { AppLayout } from './components/AppLayout';

export const metadata: Metadata = {
  title: 'Johngate Motors',
  description: 'Trusted supplier of motor tyres, tubes, batteries and generators.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
