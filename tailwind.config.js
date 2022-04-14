module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "orange": "#CC634F",
      "white": "#fff",
      "purple": "#8F83DA",
      "green": "#86DA83",
      "blue": "#6085D8",
      "grey": "#F9F9F9",
      "check-grey": "#F2F4F9",
      "border-grey": "#D8D8D8",
      "tag-outline": "#F5F5F5",
      "place-grey": "#B3B3B3",
      "text-grey": "#5B5B5B"
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
