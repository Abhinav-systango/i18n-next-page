/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es", "de"],
    defaultLocale: "en",
    localeDetection: false
  },
};

export default nextConfig;
