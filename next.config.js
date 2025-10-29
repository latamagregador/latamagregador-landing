/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sin 'output: "export"'. Vercel maneja SSR/static automáticamente.
  // Si en el futuro querés exportar estático, lo vemos con cuidado.
};

module.exports = nextConfig;
