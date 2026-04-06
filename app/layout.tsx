
import React from 'react';
import './globals.css';
export const metadata = {
  title: 'SOPHIA MARTINEZ',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
