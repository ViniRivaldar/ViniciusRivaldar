import "./globals.css";

export const metadata = {
  title: "Vinicius Rivaldar",
  description: "portifólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="bg-branco flex flex-col min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
