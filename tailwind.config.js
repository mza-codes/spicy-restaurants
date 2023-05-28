/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4E60FF",
                "primary.200": "#cacbd4",
                "primary.400": "#697BFF",
                secondary: "#2B2B43",
                "secondary.400": "#545563",
                tertiary: "#FFF3ED",
                "gray.200": "#EDEEF2",
                "gray.400": "#83859C",
                error: "#FF5C60",
            },
        },
    },
    plugins: [require("daisyui")],
};
