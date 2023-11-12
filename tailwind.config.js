/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'cable-pattern': "url('/img/cables.jpg')",
            },
            // that is actual animation
            keyframes: theme => ({
                fadeOut: {
                    '0%': { color: theme('colors.transparent') },
                    '100%': { color: theme('colors.black') },
                },
            }),
            // that is animation class
            animation: {
                fade: 'fadeOut 1s ease-in-out',
            },
        },
        plugins: [],
        screens: {
            'xs': '480',
            // => @media (min-width: 480px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    }
}

