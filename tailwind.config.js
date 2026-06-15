/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f7f7f4',
        paper: '#ffffff',
        ink: '#0e1311',
        'ink-soft': '#3a423f',
        muted: '#8a928e',
        line: '#e3e3dd',
        'line-soft': '#eeeee9',
        mint: '#0a66c2',
        'mint-deep': '#004182',
        'mint-tint': '#d7e7f7',
        dark: '#0a1626',
        'dark-2': '#0e1d33',
      },
      fontFamily: {
        display: ['"Red Hat Display"', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        maxw: '1160px',
      },
      letterSpacing: {
        'mono-wide': '0.18em',
      },
    },
  },
  plugins: [],
}
