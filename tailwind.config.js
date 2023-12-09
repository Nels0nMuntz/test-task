/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        "primary-white": "var(--primary-white)",
        "primary-black": "var(--primary-black)",
        "primary-grey": "var(--primary-grey)",
        "primary-grey-light": "var(--primary-grey-light)",
        "primary-blue": "var(--primary-blue)",
        "primary-blue-light": "var(--primary-blue-light)",
        "primary-orange": "var(--primary-orange)",

        "secondary-grey": "var(--secondary-grey)",
        "secondary-grey-light": "var(--secondary-grey-light)",

        "chart-kp1": "var(--chart-kp1)",
        "chart-kp2": "var(--chart-kp2)",
        "chart-kp3": "var(--chart-kp3)",
        "chart-kp4": "var(--chart-kp4)",
        "chart-kp5": "var(--chart-kp5)",
      },
      boxShadow: {
        card: "0px 8px 24px 0px rgba(81, 85, 195, 0.08)",
      },
      screens: {
        "3xl": { max: "1599px" },
        "2xl": { max: "1199px" },
        xl: { max: "1023px" },
        lg: { max: "991px" },
        md: { max: "767px" },
        sm: { max: "575px" },
      },
    },
  },
  plugins: [],
};
