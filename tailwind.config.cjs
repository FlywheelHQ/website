/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Roboto",
                    "Inter Variable",
                    "Inter",
                    ...defaultTheme.fontFamily.sans,
                ],
                mono: [
                    "Roboto Mono",
                    ...defaultTheme.fontFamily.mono,
                ],
            },
            colors: {
                background: {
                    DEFAULT: '#0D0119', // Midnight Blue
                },
                primary: {
                    DEFAULT: '#5A3DB8', // Muted Cerulean
                },
                secondary: {
                    DEFAULT: '#D7BCE8', // Sage Green
                },
                tertiary: {
                    DEFAULT: '#5D5D81', // Lavender Gray
                },
                text: {
                    DEFAULT: '#FEFCFD', // Pearl White
                },
                highlight: {
                    DEFAULT: '#5E6A7E', // Slate Gray
                },
                warning: {
                    DEFAULT: '#D4AF37', // Muted Gold
                },
                error: {
                    DEFAULT: '#A3242B', // Burgundy
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
