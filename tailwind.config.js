/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atelier: {
          bg: "#F7F5F2",
          surface: "#FFFFFF",
          card: "#FAF9F6",
          dark: "#111111",
          deepDark: "#0B0A0C",
          muted: "#716E6A",
          hairline: "rgba(17, 17, 17, 0.08)",
          hairlineDark: "rgba(255, 255, 255, 0.12)",
          bordeaux: {
            DEFAULT: "#6B1425",
            hover: "#56101E",
            glow: "rgba(107, 20, 37, 0.25)",
            light: "#8C1D34",
            subtle: "#F9ECEF"
          },
          gold: "#C5A880",
          champagne: "#EBDCCB"
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Didot", "'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      animation: {
        'drift-slow': 'drift 12s ease-in-out infinite alternate',
        'drift-reverse': 'driftReverse 15s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(-18px) rotate(2.5deg)' },
        },
        driftReverse: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(16px) rotate(-2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.02)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
