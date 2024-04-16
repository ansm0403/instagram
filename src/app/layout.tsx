import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import AuthContext from "./context/AuthContext";
import SWRConfigContext from "./context/SWRConfigContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default : 'instagram',
    template : 'instagram | %s'
  },
  description: "instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body  className = 'w-full bg-neutral-50 overflow-auto'>
        <AuthContext>
          <header className = 'sticky top-0 bg-white z-10 border-b'>
            <div className="max-w-screen-xl mx-auto">
              <Navbar />
            </div>
          </header>
          <main className = 'w-full flex justify-center max-w-screen-xl mx-auto'>
            <SWRConfigContext>
              {children}
            </SWRConfigContext>
          </main>  
        </AuthContext>
        <div id = 'portal' />
      </body>
    </html>
  );
}
