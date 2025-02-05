import './globals.css';
import { AuthProvider } from '@/components/AuthProvider';
import type React from 'react';

export const metadata = {
  title: 'Next.js Boilerplate',
  description: 'A Next.js boilerplate with authentication and dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
