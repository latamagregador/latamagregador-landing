export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#0b1020',
      color: '#eaf0ff'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2.2rem', letterSpacing: '.4px' }}>
          LATAM AGREGADOR
        </h1>
        <p style={{ opacity: .9, marginTop: '.5rem' }}>
          Landing deploy OK en Vercel
        </p>
        <a href="https://latamagregador-landing.vercel.app" style={{ color: '#8fd3ff' }}>
          Dominio de ejemplo
        </a>
      </div>
    </main>
  );
}
