
// Light Theme

export const theme = {
	colors: {
		dark08: '#141414',
		dark10: '#1A1A1A',
		dark20: '#333333',
		absoulteWhite: "#FFFFFF",
		gray50: '#7E7E81',
		secondary: '#4E1FB3',
		secondaryDarker: '#370F7A'

	},
	styles: { // style

	},
	responsive:{
		media : {
			xs: '400px',
			sm: '600px',
			lg: '1000px',
			xl: '1440px',
		},
		whitespace : {
			xs: 25,
			sm: 25,
			lg: 50,
			xl: 100,
		}
	}
};

export type AppTheme = typeof theme;