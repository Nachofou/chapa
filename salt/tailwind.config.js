/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        ashGrey: 'rgb(189 187 166)',
        amber: 'rgb(247 184 25)',
        airBlue: 'rgb(126 161 186)',
        fernGreen: 'rgb(71 102 58)',
        brick: 'rgb(179 68 24)',
        brown: 'rgb(186 119 47)',
      },
      fontFamily: {
        // Tipografía display (titulares grandes) y de texto.
        // Reemplazables por las fuentes con licencia del cliente.
        display: ['var(--fuente-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        texto: ['var(--fuente-texto)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['2.125rem', { lineHeight: '2.3375rem', letterSpacing: '-.01em', fontWeight: '400' }],
        'h1-large': ['2.625rem', { lineHeight: '2.8875rem', letterSpacing: '-.01em', fontWeight: '400' }],
        h2: ['.8125rem', { lineHeight: '.875rem', letterSpacing: '-.01em' }],
        p1: ['.8125rem', { lineHeight: '.875rem', letterSpacing: '-.01em' }],
        practice: ['.8125rem', { lineHeight: '.875rem', letterSpacing: '-.005em' }],
        body: ['1rem', { lineHeight: '1.1', letterSpacing: '.005rem', fontWeight: '400' }],
        'body-mobile': ['.875rem', { lineHeight: '1.1', letterSpacing: '.005em' }],
        content: ['1.375rem', { lineHeight: '1.1', letterSpacing: '.005em', fontWeight: '400' }],
        'content-large': ['1.875rem', { lineHeight: '2.0625rem', letterSpacing: '.005em', fontWeight: '400' }],
      },
      spacing: {
        15: '15px',
        30: '30px',
        100: '100px',
        200: '200px',
      },
      gridTemplateColumns: {
        22: 'repeat(22, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
      },
      gridColumnStart: {
        13: '13', 14: '14', 15: '15', 16: '16', 17: '17', 18: '18', 19: '19', 20: '20', 21: '21', 22: '22',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13', 'span-14': 'span 14 / span 14', 'span-15': 'span 15 / span 15',
        'span-22': 'span 22 / span 22',
      },
    },
  },
  plugins: [],
};
