import './globals.css';
import type { Metadata } from 'next';
import { AppLayout } from './components/AppLayout';

export const metadata: Metadata = {
  title: 'Johngate Motors',
  description: 'Trusted supplier of motor tyres, tubes, batteries and generators.',
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
