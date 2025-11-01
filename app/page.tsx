// import { redirect } from 'next/navigation'

// export default function Home() {
//   redirect('/')
// }
// app/page.tsx
"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 p-6">
      {/* Contenedor principal */}
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-lg text-center border border-blue-100 transition hover:shadow-blue-200/50 hover:scale-[1.01] duration-300">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-3 tracking-tight">
          Bienvenido a <span className="text-blue-600">SEDESOL Escucha</span>
        </h1>

        <p className="text-slate-600 mb-8 leading-relaxed">
          Este proyecto está construido con{" "}
          <span className="font-semibold text-blue-700">Next.js (App Router)</span>,{" "}
          <span className="font-semibold text-blue-700">TypeScript</span> y{" "}
          <span className="font-semibold text-blue-700">Tailwind CSS v4</span>.
        </p>

        <div className="bg-blue-600/90 text-white rounded-xl py-4 px-6 shadow-md hover:bg-blue-700 transition">
          <p className="text-lg font-medium">
            Empieza a crear tus páginas, rutas y componentes ahora mismo!
          </p>
        </div>
        <div>
          <input 
            type="button" 
            value="Ir al Dashboard"
            onClick={() => window.location.href = '/sedesol/dashboard'} 
          />
        </div>
      </div>
    </div>
  );
}
