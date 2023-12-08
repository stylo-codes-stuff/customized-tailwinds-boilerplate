import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/js/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {

            },
            colors: {
            },
            fontFamily: {
                sans: [
                    'Lucida Sans',
                    'Lucida Sans Regular',
                    'Lucida Grande',
                    'Lucida Sans Unicode',
                    'Geneva',
                    'Verdana',
                    'sans-serif',
                ],
            },
            animation: {
                'bounce-in': 'bounce-in-top 1.1s both',
            },
            keyframes: {
                'bounce-in-top': {
                    '0%': {
                        transform: 'translateY(-500px)',
                        'animation-timing-function': 'ease-in',
                        opacity: '0',
                    },
                    '38%': {
                        transform: 'translateY(0)',
                        'animation-timing-function': 'ease-out',
                        opacity: '0',
                    },

                    '55%': {
                        transform: 'translateY(-65px)',
                        'animation-timing-function': 'ease-in',
                    },

                    '72%': {
                        transform: 'translateY(0)',
                        'animation-timing-function': 'ease-out',
                    },

                    '81%': {
                        transform: 'translateY(-28px)',
                        'animation-timing-function': 'ease-in',
                    },

                    '90%': {
                        transform: 'translateY(0)',
                        'animation-timing-function': 'ease-out',
                    },

                    '95%': {
                        transform: 'translateY(-8px)',
                        'animation-timing-function': 'ease-in',
                    },

                    '100%': {
                        transform: 'translateY(0)',
                        'animation-timing-function': 'ease-out',
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;