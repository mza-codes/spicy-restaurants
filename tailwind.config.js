/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4E60FF",
                "primary.200": "#F3F4FF",
                "primary.400": "#697BFF",
                secondary: "#2B2B43",
                "secondary.400": "#545563",
                tertiary: "#FFF3ED",
                "gray.200": "#EDEEF2",
                "gray.400": "#83859C",
            },
        },
    },
    plugins: [],
};
