"use client";
import "@/app/css/global.css";

export default function SedesolLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 to-blue-100">

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col p-8">
        <div className="max-w-6xl mx-auto w-full">{children}</div>
      </main>
    </div>
  );
}
