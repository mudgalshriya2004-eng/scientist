import "./globals.css";

export const metadata = {
  title: "Indian Scientists Encyclopedia 🇮🇳",
  description: "Explore Indian scientific legends"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
