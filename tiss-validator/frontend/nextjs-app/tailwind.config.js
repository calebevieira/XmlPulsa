/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neonCyan: '#00ffff',
        neonPurple: '#9d00ff',
        neonGreen: '#00ff9d',
        neonPink: '#ff00d4',
        darkBg: '#0f0f0f'
      },
      fontFamily: {
        digital: ['"Share Tech Mono"', 'monospace']
      },
      boxShadow: {
        neon: '0 0 10px rgba(0,255,255,0.8)',
      }
    }
  },
  plugins: [],
};
