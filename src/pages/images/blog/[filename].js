import { createHash } from 'node:crypto';

export const prerender = true;

export function getStaticPaths() {
  const assets = import.meta.glob('../../../editorial-assets/*.json', { eager: true, import: 'default' });
  const names = new Set();
  return Object.values(assets).map((asset) => {
    const { filename, bytes, gitBlobSha, base64 } = asset;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.webp$/.test(filename) || names.has(filename)) throw new Error('Invalid or duplicate editorial asset filename');
    names.add(filename);
    const data = Buffer.from(base64, 'base64');
    if (data.toString('base64') !== base64 || data.length !== bytes || bytes > 150000 || data.length < 12 || data.toString('ascii', 0, 4) !== 'RIFF' || data.toString('ascii', 8, 12) !== 'WEBP' || data.readUInt32LE(4) + 8 !== data.length) throw new Error('Invalid editorial WebP');
    const hash = createHash('sha1').update('blob ' + data.length + '\0').update(data).digest('hex');
    if (hash !== gitBlobSha) throw new Error('Editorial asset integrity mismatch');
    return { params: { filename }, props: { base64 } };
  });
}

export function GET({ props }) {
  return new Response(Buffer.from(props.base64, 'base64'), { headers: { 'Content-Type': 'image/webp' } });
}
