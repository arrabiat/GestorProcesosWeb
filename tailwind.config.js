/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    fontFamily: {
		BricolageGrotesque:['Bricolage Grotesque', 'Sans-Serif']
    },
    extend: {},
	colors: {
		'blue-app':'#ECF1F8',
		'blue-icon-login':'#E6ECF5',
		'gray-border-login':'#C0D0E6',
		'blue-text-link':'#0081F9',
		'blue-button':'#0081F9',
		'blue-button-hover':'#0063F9',
		'white':'#FFFFFF'
	}
  },
  plugins: [],
}

