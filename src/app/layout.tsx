import Navbar from "@/components/Nav/Navbar";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtreeFont = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify - Web Player: Music for everyone",
  description: "Music for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtreeFont.className}>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
