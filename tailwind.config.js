/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "vietnam" : ["Be Vietnam Pro", "Arial", "sans-serif"],
      },
      backgroundImage:{
        "header-bg" : "url('../images/hero-bg-mobile.svg')",
        "hero-bg" : "url('../images/hero-bg.svg')",
        "header-bg-lg" :"url('../images/hero-bg-desktop.svg')",
        "aricle-bg": "url('../images/article-bg.jpg')",
        "overlay": "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.33%, rgba(0, 0, 0, 0.599049) 99.79%);"
      },
      backgroundPosition:{
        "header-p" : "calc(50% + 120px) -100px",
        "header-p-lg" : "calc(50% + 500px) -200px",
        "hero-p" : "calc(50% + 180px) bottom",
        "main-bg-p" : "calc(50% - 800px) calc(50% + 300px)"
      },
      backgroundColor:{
        "btn-bg" : "#F98F75;",
        "bg-fafa" : "#FAFAFA",
        "bg-custom-red" : "#F3603C",
        "bg-item" : "#FFF0EC",
        "footer-bg" : "#1D1E25"
      },
      colors:{
        "text-color" : "#242D52",
        "btn-text" : "#F3603C",
        "text-hover" : "#f98467"
      },
      boxShadow:{
        "nav" : "0px 10px 20px rgba(80, 86, 98, 0.03);",
        "hero-sh" : "0px 6px 12px rgba(80, 86, 98, 0.03);",
        "btn-shadow": "0px 15px 15px -10px #DB5943;",
        "btn-hover" : "0px 15px 15px -10px #FF9F8E;"
      },
      fontSize:{
        "title-size" : "45px",
        "size-sm" : "13px",
        "title" : "56px",
        "aritcle-size" : "40px",
      },
      borderRadius:{
        "btn-radius" : "22px",
        "item-radius" : "39px"
      },
      maxWidth: {
        "hero-text" : "445px",
        "hero-w" : "153px",
        "hero-w-lg" : "260px",
        "carousel-item" : "350px",
        "carousel-wrap" : "1536px"
      },
      minWidth:{
        "carousel-w" : "320px"
      },
      height:{
        "hero-h" : "139px",
        "hero-h-lg" : "235px"
      },
      lineHeight:{
        "title-l" : "64px",
        "title-md" : "45px"
      },
      letterSpacing:{
        "title-space" : "-1px",
        "title-sm" : "-0.62px",
        "article-space" : "-0.714286px;"
      }
    },
  },
  plugins: [],
}
