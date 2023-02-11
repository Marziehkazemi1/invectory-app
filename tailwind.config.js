module.exports = {
    content: ["./public3/**/*.{html,js}","./src/js/theme.js"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
        },
        extend: {
           fontFamily : {
            sans : ["Vazir"],
           },
           padding : {
            "2/3" : "6.6666667%",
            "1/3" : "33.33333%",
           },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        // ...
      ],
      plugins: [
        require('@tailwindcss/typography'),
        // ...
      ],
      plugins: [
        require('@tailwindcss/aspect-ratio'),
        // ...
      ],
};