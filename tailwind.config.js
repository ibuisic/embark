module.exports = {
  theme: {
    // Adjusting colors
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
      lighter: '#b3bcf5',
      default: '#5c6ac4',
      gray: {
        100: '#f7fafc',
        200: '#e2e8f0',
        300: '#a0aec0',
        400: '#4a5568',
        500: '#1a202c',
      },
    },
    theme: {
      // Adjusting spacing
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
    },
    extend: {}
  },
  variants: {
    // example of updating variants
    backgroundColor: ['hover', 'focus'],
  },
  plugins: [],
  corePlugins: {
    // remove core plugin
    borderRadius: false,
  }
}
