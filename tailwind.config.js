module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
	  fontFamily: {
		  'header': ['Lilita One', 'sans']
	  },
	  textColor: {
		skin: {
		  base: 'var(--color-text-base)',
		}
	  },
	},
  },
  plugins: [],
}
