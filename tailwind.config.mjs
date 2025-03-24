import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      transparent: "transparent",
      current: "currentColor",
      black: {
        DEFAULT: "#262624",
        1: "#121214",
        2: "#0E0E10",
      },
      gray: {
        DEFAULT: "#F2F2F2",
        1: "#616265",
      },
      pink: {
        DEFAULT: "#D9736A",
      },
      green: {
        DEFAULT: "#898C35",
        1: "#BEBF8E",
      },
    },
    extend: {},
  },
  plugins: [typography],
};
