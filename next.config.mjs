import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'imagedelivery.net' }],
    qualities: [75, 90],
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
