const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "transparent": "transparent",
                "primary": {
                    lighter: "#89C64D",
                    DEFAULT: "#64A446",
                    darker: "#3E703D"
                },
                "gray": {
                    lightest: "#e9ebec",
                    lighter: "#dee1e3",
                    DEFAULT: "#D4D7DA",
                    darker: "#AEB0B2",
                    darkest: "#6C757D"
                },
                "black": "#291d1e",
                "white": "#ffffff",
                "background": "#F3F3F3"
            },
            backgroundImage: {
                "food": "url('/images/background.svg')"
            },
            maxWidth: {
                'cookbook': '120rem'
            },
            screens: {
                '3xl': '2000px'
            },
            fontSize: {
                "4xs": "0.375rem",
                "3xs": "0.5rem",
                "2xs": "0.625rem"
            },
            fontFamily: {
                "cookbook": ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
                "recipe": ["Rubik", ...defaultTheme.fontFamily.sans]
            },
            borderWidth: {
                1: "1px"
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
    ],
}
