/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: "#8056DA",
      },
      fontSize: {
        "display-large": "57px",
        "display-medium": "45px",
        "display-small": "36px",
        "headline-large": "32px",
        "headline-medium": "28px",
        "headline-small": "24px",
        "title-large": "22px",
        "title-medium": "16px",
        "title-small": "14px",
        "label-large": "14px",
        "label-medium": "12px",
        "label-small": "11px",
        "body-large": "16px",
        "body-medium": "14px",
        "body-small": "12px",
        "p-md": "16px",
        "p-sm": "12px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
