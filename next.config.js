/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_TRANSLATION_CONFIG: JSON.stringify({
      languages: [
        { title: "English", name: "en" }, 
        { title: "Kiswahili", name: "sw" },
        { title: "Arabic", name: "ar" },
        { title: "Chinese(Simplified)", name: "zh-CN" },
        { title: "Chinese(Traditional)", name: "zh-Hant" },
        { title: "Français", name: "fr" },
        { title: "Japanese", name: "ja" },
        { title: "Portuguese", name: "pt" },
        { title: "Russian", name: "rus" },
        { title: "Español", name: "es" },
      ],
      defaultLanguage: "en",
    }),
  },
};

module.exports = nextConfig;
