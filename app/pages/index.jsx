// pages/index.jsx
import { useState } from "react";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(null);

  const providers = [
    { name: "Pragmatic Play", badge: "🎰 Slots / Live" },
    { name: "Evolution", badge: "🎥 Live Casino" },
    { name: "BGaming", badge: "💥 Slots / Crash" },
    { name: "Betsoft", badge: "🧊 3D Slots" },
    { name: "Playson", badge: "⚡ High RTP" },
    { name: "Yggdrasil", badge: "🪙 Jackpots" },
    { name: "Red Tiger", badge: "🐯 Daily Drops" },
  ];

  const features = [
    { t: "Una sola API", d: "Integra slots, casino en vivo y sportsbook con un único endpoint estandarizado." },
    { t: "Panel 24/7", d: "Métricas GGR, retención, depósitos y cashout en tiempo real." },
    { t: "Escalabilidad", d: "Infra con CDN y colas para picos altos de tráfico." },
    { t: "Compliance", d: "KYC/AML, bloqueo geográfico y herramientas de RG." },
  ];

  return (
    <main className="min-h-screen bg-[#0B1020] text-[#eaf0ff]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Latam Agregador Casino
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Integramos <b>slots, casino en vivo y deportivas</b> con
              infraestructura lista para escalar en LATAM.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-xl px-5 py-3 bg-white text-[#0B1020] font-semibold"
              >
                Solicitar demo
              </a>
              <a
                href="#proveedores"
                className="rounded-xl px-5 py-3 border border-white/20 hover:bg-white/5"
              >
                Ver proveedores
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            {[["99.98%", "Uptime"], ["<120ms", "Latencia"], ["30+", "Proveedores"], ["24/7", "Monitoreo"]].map(
              ([kpi, label], i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-5">
                  <div className="text-3xl font-bold">{kpi}</div>
                  <div className="text-sm text-white/60">{label}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROVEEDORES */}
      <section id="proveedores" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Proveedores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {providers.map((p, i) => (
            <div key={i} className="rounded-xl bg-white/5 p-4">
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="text-sm text-white/60">{p.badge}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">¿Por qué nosotros?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl bg-white/5 p-4">
              <div className="font-semibold">{f.t}</div>
              <div className="text-sm text-white/70">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-3xl mx-auto px-4 py-14">
        <div className="rounded-2xl bg-white/5 p-6">
          <h3 className="text-xl font-bold">Hablemos</h3>
          <p className="text-white/70 mt-2">
            Escribinos a <b>contact@latamagregador.com</b> y coordinamos demo técnica.
          </p>
        </div>
      </section>

      <footer className="text-center text-white/50 text-sm py-8">
        © {new Date().getFullYear()} Latam Agregador Casino — All rights reserved.
      </footer>
    </main>
  );
}
