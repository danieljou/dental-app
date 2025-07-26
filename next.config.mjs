import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

const withPWACfg = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  fallbacks: {
    document: "/offline.html", // Crée ce fichier dans /public
  },
});

const nextConfig = withPWACfg({
  reactStrictMode: true,
});

export default nextConfig;