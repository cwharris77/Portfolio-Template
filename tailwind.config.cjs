/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        flashWhite: "#f4f4f6",
        timberWolf: "#d4d4d8",
        taupe: "#9999a1",
        battleGray: "#858585",
        french: "#b5b5ba",
        night: "#141414",
        eerieBlack: "#1f1f1f",
        bgDeep: "var(--bg)",
        bgElev: "var(--bg-elev)",
        ink: "var(--ink)",
        inkDim: "var(--ink-dim)",
        accent: "var(--accent)",
        warm: "var(--warm)",
        line: "var(--line)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1f1f1f",
        cardLight: "0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        xmd: "900px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1800px",
      },
      backgroundImage: {
        about:
          "linear-gradient(165deg, rgba(31,38,53,1) 100%, rgba(10,10,14,1) 100%)",
        experience:
          "linear-gradient(150deg, rgba(31,38,53,0.5) 60%, rgba(10,10,14,0.2) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight:
          "linear-gradient(152deg, rgba(23,27,38,0.85) 60%, rgba(10,10,14,0.97) 70%)",
        hero: "linear-gradient(135deg, rgba(31,38,53,0.85) 60%, rgba(10,10,14,0.97) 60%)",
        "hero-mobile":
          "linear-gradient(137deg, rgba(31,38,53,0.85) 60%, rgba(10,10,14,1) 60%)",
        tech: "linear-gradient(165deg, rgba(20,20,20,0.9) 100%, rgba(31,38,53,0.9) 100%), url('/src/assets/backgrounds/wave-light.jpeg')",
      },
      fontFamily: {
        arenq: ["Arenq"],
        beckman: ["Beckman"],
        mova: ["Mova"],
        overcameBold: ["Overcame Bold"],
        overcameOutline: ["Overcame Outline"],
        poppins: ["Poppins", "sans-serif"],
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
        hanken: ['"Hanken Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
