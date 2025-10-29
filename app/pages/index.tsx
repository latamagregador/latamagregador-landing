import Head from "next/head";

export default function Home() {
  const providers = [
    { name: "Pragmatic Play", badge: "🎰 Slots / Live" },
    { name: "Evolution", badge: "🎥 Live Casino" },
    { name: "BGaming", badge: "⚡ Slots / Crash" },
    { name: "Betsoft", badge: "🧩 3D Slots" },
    { name: "Playson", badge: "⚡ High RTP" },
    { name: "Yggdrasil", badge: "🪙 Jackpots" },
    { name: "Red Tiger", badge: "🗓️ Daily Drops" },
    { name: "Ezugi", badge: "🎲 Live Tables" },
  ];

  return (
    <>
      <Head>
        <title>Latam Agregador Casino — Integración Pro</title>
        <meta
          name="description"
          content="Agregador LATAM: slots, casino en vivo y sportsbook en una sola API. Onboarding rápido y soporte enterprise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
        {/* Hero */}
        <section
          style={{
            padding: "64px 24px",
            background:
              "radial-gradient(1200px 400px at 10% -10%, #1f2937 0%, #0b0f19 40%, #0b0f19 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                marginBottom: 16,
                fontSize: 12,
                letterSpacing: 0.5,
              }}
            >
              LATAM AGREGADOR CASINO
            </div>

            <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: 0 }}>
              Una sola API. <span style={{ color: "#93c5fd" }}>Todos los juegos.</span>
            </h1>
            <p style={{ marginTop: 16, color: "#cbd5e1", fontSize: 18 }}>
              Integra slots, casino en vivo y deportivas en un único endpoint estandarizado.
              Lanzamiento rápido, performance enterprise y soporte 24/7.
            </p>

            <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center" }}>
              <a
                href="mailto:contact@latamagregador.com?subject=Demo%20LATAM%20Agregador"
                style={{
                  padding: "12px 18px",
                  borderRadius: 10,
                  background: "white",
                  color: "#0b0f19",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Solicitar demo
              </a>
              <a
                href="#contacto"
                style={{
                  padding: "12px 18px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Ver capacidades
              </a>
            </div>

            {/* Logos simples */}
            <div
              style={{
                marginTop: 36,
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 16,
                opacity: 0.9,
              }}
            >
              {["Pragmatic Play", "Evolution", "BGaming", "Betsoft"].map((l) => (
                <div
                  key={l}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px dashed rgba(255,255,255,0.08)",
                    fontSize: 13,
                    color: "#cbd5e1",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proveedores */}
        <section style={{ padding: "48px 24px", background: "white" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ margin: 0, fontSize: 28 }}>Proveedores activos</h2>
            <p style={{ marginTop: 8, color: "#475569" }}>
              Integraciones disponibles para filtros y badges en catálogo.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 16,
                marginTop: 16,
              }}
            >
              {providers.map((p) => (
                <div
                  key={p.name}
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    border: "1px solid #e5e7eb",
                    background: "#f8fafc",
                  }}
                >
                  <div style={{ fontWeight: 700 }}>{p.name}</div>
                  <div style={{ marginTop: 6, fontSize: 13, color: "#334155" }}>{p.badge}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" style={{ padding: "48px 24px", background: "#0b1220", color: "white" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ margin: 0, fontSize: 28 }}>Contacto & comenzar</h2>
            <p style={{ marginTop: 8, color: "#cbd5e1" }}>
              Escríbenos para recibir credenciales sandbox y propuesta comercial.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 16,
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:contact@latamagregador.com"
                style={{
                  padding: "12px 18px",
                  borderRadius: 10,
                  background: "white",
                  color: "#0b1220",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                contact@latamagregador.com
              </a>
              <span style={{ opacity: 0.7 }}>•</span>
              <span style={{ opacity: 0.85 }}>Dominio: latamagregador.com</span>
            </div>
          </div>
        </section>

        <footer style={{ padding: 20, textAlign: "center", background: "#070b13", color: "#9ca3af" }}>
          © {new Date().getFullYear()} Latam Agregador — Todos los derechos reservados
        </footer>
      </main>
    </>
  );
}
