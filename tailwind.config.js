/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/(tabs)/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "barlow-400": "Barlow_400Regular",
        "barlow-bold": "Barlow_700Bold",
        "barlow-black": "Barlow_900Black",
        "barlow-semibold": "Barlow_600SemiBold",
      },
      colors:{
        light: "#F6F6F6",
        brand: "#0D9347",
      }
    },
  },
  plugins: [],
}