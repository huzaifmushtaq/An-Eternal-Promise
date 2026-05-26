import "./globals.css";
import MusicProvider from "@/components/MusicProvider";

export const metadata = {
  title: " Birthday Special _ MEHRU ❤️ ",
  description: "A little surprise made just for you, open it with a smile ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}
