/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector"],
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["lg"],
    },
    // Height
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ["lg"],
    },
    // Text sizes for all screen sizes
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ["lg"],
    },
    // Font weights
    {
      pattern:
        /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Alignments
    {
      pattern: /text-(left|center|right)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          50: '#f0f9ff',
          100: '#dff2ff',
          200: '#b9e7fe',
          300: '#7bd6fe',
          400: '#26bcfb',
          500: '#0aa9ed', // picton-blue
          600: '#0087ca',
          700: '#006ca4',
          800: '#055b87',
          900: '#0a4b70',
          950: '#07304a',
        },
        secondary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#e29296", // Rojo pálido principal
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
          
        },
        accent: {
          50: "#fefce8",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Amarillo principal
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        warning: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#009da4", // Turquesa principal
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Colores optimizados para salud mental
        mental: {
          // Azul calmante para tests psicológicos
          blue: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
          },
          // Verde esperanza para recursos positivos
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
          },
          // Lavanda suave para apoyo emocional
          lavender: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7c3aed",
            800: "#6b21a8",
            900: "#581c87",
          },
          // Amarillo suave para contenido sensible
          yellow: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
          },
          // Rosa suave para empatía y cuidado
          pink: {
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
          },
        },
        // Colores oscuros optimizados para salud mental
        mentalDark: {
          // Azul oscuro calmante (reducido brillo para menos fatiga visual)
          blue: {
            50: "#0f172a",
            100: "#1e293b",
            200: "#334155",
            300: "#475569",
            400: "#64748b",
            500: "#94a3b8",
            600: "#cbd5e1",
            700: "#e2e8f0",
            800: "#f1f5f9",
            900: "#f8fafc",
          },
          // Verde oscuro esperanza (tonos cálidos para confort)
          green: {
            50: "#14532d",
            100: "#166534",
            200: "#15803d",
            300: "#16a34a",
            400: "#22c55e",
            500: "#4ade80",
            600: "#86efac",
            700: "#bbf7d0",
            800: "#dcfce7",
            900: "#f0fdf4",
          },
          // Lavanda oscuro suave (colores relajantes para la mente)
          lavender: {
            50: "#581c87",
            100: "#6b21a8",
            200: "#7c3aed",
            300: "#9333ea",
            400: "#a855f7",
            500: "#c084fc",
            600: "#d8b4fe",
            700: "#e9d5ff",
            800: "#f3e8ff",
            900: "#faf5ff",
          },
          // Amarillo oscuro suave (reducido para menos fatiga)
          yellow: {
            50: "#78350f",
            100: "#92400e",
            200: "#b45309",
            300: "#d97706",
            400: "#f59e0b",
            500: "#fbbf24",
            600: "#fcd34d",
            700: "#fde68a",
            800: "#fef3c7",
            900: "#fffbeb",
          },
          // Rosa oscuro empático (tonos cálidos para cuidado)
          pink: {
            50: "#831843",
            100: "#9d174d",
            200: "#be185d",
            300: "#db2777",
            400: "#ec4899",
            500: "#f472b6",
            600: "#f9a8d4",
            700: "#fbcfe8",
            800: "#fce7f3",
            900: "#fdf2f8",
          },
          // Fondo principal oscuro optimizado para salud mental
          background: {
            primary: "#0a0f1c", // Azul muy oscuro para reducir fatiga visual
            secondary: "#1a1f2e",
            tertiary: "#2d3748",
          },
          // Texto optimizado para legibilidad en modo oscuro
          text: {
            primary: "#f8fafc", // Blanco cálido
            secondary: "#e2e8f0", // Gris claro cálido
            muted: "#94a3b8", // Gris medio para menos contraste
          },
        },
      },
      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        headings: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInShadowLight: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025);",
          },
        },
        fadeInShadowDark: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25);",
          },
        },
        fadeUp: {
          "0%": { transform: "translateY(1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        fadeInShadowLight: "fadeInShadowLight 500ms ease-in-out forwards",
        fadeInShadowDark: "fadeInShadowDark 500ms ease-in-out forwards",
        fadeUp: "fadeUp 500ms ease-in-out forwards",
      },
    },
  },
  variants: {
    animation: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(function ({ addVariant }) {
      addVariant("dark-me", ".dark_&");
    }),
  ],
};
