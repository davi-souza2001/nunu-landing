import type { NextConfig } from 'next';

/**
 * `basePath` vem do ambiente porque ele depende de ONDE o site é servido:
 * em `usuario.github.io/nome-do-repo` precisa ser `/nome-do-repo`, e em
 * domínio próprio precisa ser vazio. O workflow do Pages descobre isso
 * sozinho e injeta aqui — hardcodar quebraria um dos dois casos.
 */
const basePath = process.env.PAGES_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  // Gera HTML estático em `out/`. O GitHub Pages serve arquivo, não roda Node.
  output: 'export',
  basePath,
  // Sem servidor não há otimização de imagem sob demanda.
  images: { unoptimized: true },
};

export default nextConfig;
