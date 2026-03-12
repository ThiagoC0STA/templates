import { ReactNode, Suspense } from 'react';
import SmoothScrollProvider from '../components/animation/smooth-scroll';
import Footer from '../components/shared/layout/footer/footer';
import Navbar from '../components/shared/layout/navbar/Navbar';
import { fontVariables } from '../utils/font';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        <Suspense>
          <SmoothScrollProvider>
            <Navbar />
            <main className="bg-background-7">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
