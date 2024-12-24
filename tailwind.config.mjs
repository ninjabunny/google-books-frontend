/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      ".perspective-900": {
        perspective: "900px",
      },
      ".preserve-3d": {
        transformStyle: "preserve-3d",
      },
      ".transition-transform-075s": {
        transition: "transform 0.75s ease",
      },
      ".rotate-y-30": {
        transform: "rotateY(-30deg)",
      },
      ".content-empty": {
        content: '" "',
      },
      ".page-transform": {
        transform:
          "translateX(calc(200px - 50px / 2 - 3px)) rotateY(90deg) translateX(25px)",
      },
      ".back-cover-transform": {
        transform: "translateZ(-50px)",
      },
    });
  },],
};
