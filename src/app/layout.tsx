import "./globals.css";
import { Figtree } from "next/font/google";

const figtreeFont = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify",
  description: "A Spotify Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtreeFont.className}>{children}</body>
    </html>
  );
}
