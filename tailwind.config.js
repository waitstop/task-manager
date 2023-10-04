/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class", '[data-mode="dark"]'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
              text: "rgba(var(--text), <alpha-value>)",
              background: "rgba(var(--background), <alpha-value>)",
              primary: "rgba(var(--primary), <alpha-value>)",
              secondary: "rgba(var(--secondary), <alpha-value>)",
              accent: "rgba(var(--accent), <alpha-value>)"
            },
            keyframes: {
                "accordion-down": {
                    from: {height: 0},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: 0},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
