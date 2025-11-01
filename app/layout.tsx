import "./css/global.css";

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
