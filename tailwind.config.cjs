module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0D6D91",

          "secondary": "#1F47C4",

          "accent": "#2edb79",

          "neutral": "#1B1A28",

          "base-100": "#024466",

          "info": "#A4B7E5",

          "success": "#17BAAA",

          "warning": "#F8C11B",

          "error": "#E45949",
        },
      },
    ],
  }
}
