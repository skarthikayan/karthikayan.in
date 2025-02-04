/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        tags: "var(--color-tags)",
        textTags: "var(--color-text-tags)",
        textPrimary: "var(--color-text-primary)",
        textTitle: "var(--color-text-title)",
        sectionTitle: "var(--color-text-section-title)",
        primaryTransparent: "var(--color-primary-transparent)",
      },
    },
  },
  plugins: [],
};
