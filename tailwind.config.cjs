/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'shimmer': 'shimmer 3s infinite',
                'gridMove': 'gridMove 20s linear infinite',
            },
            keyframes: {
                shimmer: {
                    'to': { transform: 'translateX(200%)' }
                },
                gridMove: {
                    'to': { backgroundPosition: '50px 50px' }
                }
            }
        },
    },
    plugins: [],
}