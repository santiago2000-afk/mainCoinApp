import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.jsx',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui'],
                display: ['Space Grotesk', 'Manrope', 'sans-serif'],
                body: ['DM Sans', 'sans-serif'],
              },
        },
    },
    plugins: [],
};
