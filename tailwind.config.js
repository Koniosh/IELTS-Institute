/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        "primary-dark": "#4f46e5",
        secondary: "#ec4899",
        accent: "#10b981",
        dark: "#1e293b",
        light: "#f8fafc",
        "gradient-1": "#667eea",
        "gradient-2": "#764ba2",
        "gradient-3": "#f093fb",
        "gradient-4": "#f5576c",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        gradient: "gradient 3s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="a" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%236366f1;stop-opacity:0.1" /%3E%3Cstop offset="100%25" style="stop-color:%23ec4899;stop-opacity:0.1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23a)" /%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};
