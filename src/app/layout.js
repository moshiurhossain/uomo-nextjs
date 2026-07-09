import "./globals.css";
// import font family from google
import { Jost } from 'next/font/google'

// font family
const jost = Jost(
  { subsets: ['latin'],
    variable: '--font-jost',
   })

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={jost.className}>{children}</body>
    </html>
  );
}
