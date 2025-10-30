// pages/index.jsx
import Head from "next/head";

export default function Home(){
  return (
    <>
      <Head>
        <title>LATAM Agregador Casino — Una sola API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-night/70 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gold/90 ring-2 ring-gold2/50 grid place-items-center text-ink font-extrabold">LA</div>
            <div className="text-sm leading-tight">
              <p className="font-semibold tracking-wide">LATAM AGREGADOR CASINO</p>
              <p className="text-xs text-smoke">One API • All Providers • LATAM Focus</p>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-sm text-smoke">
            <li><a className="hover:text-white transition" href="#proveedores">Proveedores</a></li>
            <li><a className="hover:text-white transition" href="#tecnologia">Tecnología</a></li>
            <li><a className="hover:text-white transition" href="#soluciones">Soluciones</a></li>
            <li><a className="hover:text-white transition" href="#contacto">Contacto</a></li>
          </ul>

          <div className="hidden md:block">
            <a href="#contacto" className="btn-gold">Solicitar Acceso</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden hero-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Texto */}
            <div>
              <div className="badge mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                Integración express • SLA empresarial
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Conectamos <span className="gold-text">LATAM</span> con los mejores{" "}
                <span className="gold-text">proveedores</span> de iGaming a través de una{" "}
                <span className="gold-text">única API</span>.
              </h1>

              <p className="mt-5 text-lg text-smoke max-w-2xl">
                Integra <span className="text-white">slots</span>, <span className="text-white">casino en vivo</span> y{" "}
                <span className="text-white">sportsbook</span> con time-to-market acelerado, paneles en tiempo real y soporte bilingüe.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#contacto" className="btn-gold">Request Access</a>
                <a href="#tecnologia" className="btn-ghost">Ver Tecnología</a>
              </div>

              {/* Métricas */}
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                <div className="card text-center">
                  <div className="text-2xl font-extrabold">99.96%</div>
                  <div className="text-xs text-smoke">Uptime</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-extrabold">&gt;20k</div>
                  <div className="text-xs text-smoke">Apuestas/s</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-extrabold">175+</div>
                  <div className="text-xs text-smoke">Proveedores</div>
                </div>
              </div>
            </div>

            {/* Imagen/Mockup (placeholder simple para empezar) */}
            <div className="relative">
              <div className="aspect-[16/10] rounded-3xl border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,.45)] overflow-hidden">
                <div className="absolute inset-0 grid place-items-center text-smoke">
                  <div className="text-center px-6">
                    <p className="mb-2 text-white/80 font-semibold">Vista de panel</p>
                    <p className="text-sm text-smoke">Acá podemos poner un mockup del dashboard (próximo paso).</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-gold/20 blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 rounded-3xl bg-gold2/10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Proveedores */}
      <section id="proveedores" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold mb-6">Integraciones líderes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Pragmatic", "Playtech", "Yggdrasil", "NetEnt", "Red Tiger", "Betsoft"].map((p) => (
            <div key={p} className="card text-center py-6">{p}</div>
          ))}
        </div>
      </section>

      {/* Tecnología */}
      <section id="tecnologia" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-semibold mb-2">API única</h3>
            <p className="text-sm text-smoke">Unifica KYC, cashier y catálogo con una sola especificación.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Paneles & Métricas</h3>
            <p className="text-sm text-smoke">Retención, GGR, LTV, y alertas en tiempo real.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Soporte LATAM</h3>
            <p className="text-sm text-smoke">Equipo bilingüe, huso horario local, onboarding guiado.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="card flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">¿Listos para integrar?</h3>
            <p className="text-sm text-smoke">Te acompañamos en el go-live con soporte técnico y comercial.</p>
          </div>
          <a href="mailto:paybot2025@gmail.com" className="btn-gold">Contactar</a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-smoke">
        © {new Date().getFullYear()} LATAM Agregador Casino — All rights reserved.
      </footer>
    </>
  );
}

