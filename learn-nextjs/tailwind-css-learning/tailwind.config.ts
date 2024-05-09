import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ] /* where tailwind will be used in this project*/,
  theme: {
    extend: {
      colors: {
        primary: "#fefc2f2",
      },
    },
  } /* what are my default styles for this project */,
  plugins:
    [] /* which third party libraries I want to use that are built with tailwindcss */,
};
export default config;
