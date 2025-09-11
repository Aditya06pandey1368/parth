// tailwind.config.ts

import type { Config } from "tailwindcss"

const config: Config = {
  // This is the most critical line for the button to work
  darkMode: "class", 

  content: [
    // Make sure these paths are correct for your project structure
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config