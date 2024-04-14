import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#293633",
      green: {
        200: "#31C4AB",
        300: "#29A38F",
        400: "#1F7B6B",
        500: "#186256",
        600: "#104139",
      },
      yellow: {
        300: "#FFD270",
        400: "#FFC03A",
        500: "#FFB81F",
      },
      gray: {
        100: "#F4F5F5",
        200: "#DFE2E1",
        300: "#C9CFCE",
        400: "#B4BBBA",
        500: "#9AA4A2",
        600: "#899492",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
}

export default config
