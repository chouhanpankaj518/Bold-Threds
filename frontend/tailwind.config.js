/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

    theme: {
      extend: {
        keyframes: {
          rotateLR: {
            '0%': { transform: 'rotateY(0)' },  // Start off-screen to the left
            '50%': { transform: 'rotateY(30deg)' },  // Move to off-screen to the right
            '100%': { transform: 'rotateY(0)' },
          },
        },
        animation: {
          rotateLR: 'rotateLR 2s linear infinite',
        },
      },
    },
    plugins: [],
  };
