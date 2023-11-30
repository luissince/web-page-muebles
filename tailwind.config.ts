import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'qgray-border': 'rgb(239 239 239/1)',
        'search-btn': 'rgb(255 187 56/1)',
        'qyellow': 'rgb(255 187 56/1)'
      },
      backgroundImage: {
        'portada': "url('/assets/section-category-1.jpg')",
        'postBrandLeft': "url('/assets/campaign-cover-countdown.jpg')",
        'postBrandRight': "url('/assets/download-app-cover.png')",
        'popularSaleLeft': "url('/assets/section-category-2.jpg')",
        'popularSaleRightOne': "url('/assets/product-img-5.jpg')",
        'popularSaleRightTwo': "url('/assets/product-img-6.jpg')",
        'popularSaleRightThree': "url('/assets/product-img-7.jpg')",
        'newArrivals1': "url('/assets/product-img-1.jpg')",
        'newArrivals2': "url('/assets/product-img-2.jpg')",
        'newArrivals3': "url('/assets/product-img-3.jpg')",
        'newArrivals4': "url('/assets/product-img-4.jpg')",
        'newArrivals5': "url('/assets/product-img-5.jpg')",
        'newArrivals6': "url('/assets/product-img-6.jpg')",
        'newArrivals7': "url('/assets/product-img-7.jpg')",
        'newArrivals8': "url('/assets/product-img-8.jpg')",
        'newArrivals9': "url('/assets/product-img-9.jpg')",
        'newArrivals10': "url('/assets/product-img-10.jpg')",
        'newArrivals11': "url('/assets/product-img-1.jpg')",
        'newArrivals12': "url('/assets/product-img-2.jpg')",
        'discount': "url('/assets/discount-banner-1.jpg')"
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        guindaLigth: '#FD9398',
        guindaClaro: "#BF1B23",
        guindaOscuro: "#9b0d13",
        grisClaro: "#636363",
        qblack: "rgb(34 34 34/1)",
        qgray: "rgb(121 121 121/1)",
        qblacktext: "rgb(29 29 29/1)",
        qyellow: "rgb(255 187 56/1)",
        qred: "rgb(239 38 44/1)",
        primarygray: "rgb(248 248 248/1)"
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
        primaSans: ["sans-serif"],
      },
      borderColor:{
        'qgray-border': "rgb(239 239 239/1)"
      },
      fontWeight: {
        boldCustomer: '400',
      },
      padding: {
        a: "19.2px 34.4px 40px 34px",
      },
      boxShadow: {
        // x y opacidad tamaño de profundidad color, borde-> x y opacidad tamaño color
        shadowPilares: "-5px 20px 25px 10px rgb(223 36 36 / 0.1), 0 4px 6px -4px rgb(223 36 36 / 0.1)",
      },
      animation: {
        'animate-spin': 'spin 4s linear infinite',
        'animate-spin-reverse': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        "spin-reverse": {
          'to': { transform: 'rotate(-1turn)' },
        }
      }
    }, 
    screens: {
      "xxs": "280px",
      "xs": "320px",
      "ss": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "x": "1216px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}
export default config
