/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(https://furniro-bucket.s3.us-east-2.amazonaws.com/images/bedroom.png)",
        hero: "url(https://furniro-bucket.s3.us-east-2.amazonaws.com/images/hero.png)"
      }
    },
  },
  plugins: [],
}

