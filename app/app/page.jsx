"use client";
import { useState } from "react";

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl bg-white/5 p-5 text-center">
      <div className="text-3xl font-bold text-white">{kpi}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
}

export default function Page() {
  const [faq, setFaq] = useState(null);

  const providers = [
    { name: "Pragmatic Play", tag: "🎰 Slots/Live" },
    { name: "Evolution", tag: "🎥 Live Casino" },
    { name: "BGaming", tag: "⚡ Slots/Crash" },
    { name: "Yggdrasil", tag: "🪙 Jackpots" },
    { name: "NetEnt", tag: "🧩 Branded" },
    { name: "Red Tiger", tag: "🏆 Daily Drops" },
  ];

  const features = [
    { t: "Una sola API", d: "Integra slots, casino en vivo y sportsbook con un único endpoint estandarizado." },
    { t: "Panel 24/7", d: "Retención, GGR, depósitos y cashout en tiempo real." },
    { t: "Escalabilidad", d: "Infra estable con CDN y caché para picos altos de tráfico." },
    { t: "Compliance", d: "KYC/AML, bloqueo geográfico y herramientas de RG." },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(91,107,255,0.4),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(30,41,59,0.6),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs">
                LATAM READY • B2B • API
              </span>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
                Latam Agregador <span className="text-brand-600">Casino Pro</span>
              </h1>
              <p className="mt-4 text-white/70">
                Integramos <b>slots</b>, <b>casino en vivo</b> y <b>deportivas</b> con una única API.
                Modelo de negocio profesional, métricas en tiempo real y soporte enterprise.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:contact@latamagregador.com?subject=Consulta%20Latam%20Agregador"
                  className="rounded-xl bg-brand-600 hover:bg-brand-700 px-5 py-3 text-sm font-semibold"
                >
                  Solicitar propuesta
                </a>
                <a
                  href="#contacto"
                  className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold"
                >
                  Hablar con ventas
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                <Stat kpi="50+" label="Proveedores" />
                <Stat kpi="10K+" label="Juegos" />
                <Stat kpi="99.9%" label="Uptime" />
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/70">Integración (ejemplo)</div>
              <pre className="mt-2 overflow-auto rounded-xl bg-black/60 p-4 text-xs leading-6">
{`GET https://api.latamagregador.com/v1/games?provider=pragmatic
Authorization: Bearer <TOKEN>

200 OK
{
  "games": [
    { "id": "pp-sweetbonanza", "rtp": 96.5, "type": "slot" }
  ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* PROVEEDORES */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold mb-6">Proveedores destacados</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => (
            <div key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="text-xs text-white/60 mt-1">{p.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Capacidades técnicas</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.t} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-base font-semibold">{f.t}</div>
              <div className="text-sm text-white/70 mt-1">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO & FAQ */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <p className="text-white/70 mt-2">
            Escribinos a <a className="underline" href="mailto:contact@latamagregador.com">
              contact@latamagregador.com
            </a> o contanos tu caso y te enviamos la propuesta.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">FAQ</h3>
            <div className="mt-4 space-y-2">
              {[
                { q: "¿Cómo es el modelo comercial?", a: "Revenue share por proveedor + fee de agregador; se ajusta por volumen." },
                { q: "¿Dan sandbox?", a: "Sí, acceso a entorno de pruebas con credenciales para QA previo a producción." },
                { q: "¿Qué verticales?", a: "Slots, casino en vivo y sportsbook (pre-match y live)." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/10">
                  <button
                    className="w-full text-left p-4"
                    onClick={() => setFaq(faq === i ? null : i)}
                  >
                    <span className="font-medium">{item.q}</span>
                  </button>
                  {faq === i && <div className="px-4 pb-4 text-white/70">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Latam Agregador. B2B • No operamos al consumidor final.
        </footer>
      </section>
    </main>
  );
}
