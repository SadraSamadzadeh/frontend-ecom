import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts/fonts';

export const GlobalStyle = createGlobalStyle`

	${fonts}

	html, body {
		background-color: ${p => p.theme.colors.dark10};
		color: ${p => p.theme.colors.absoulteWhite};
	}


	* {
		box-sizing: border-box;
	}

	a {
        color: inherit;
        text-decoration: none;
    }

	h1 {
		font-size: 32px;
		margin: 0;

	}

	label {
		font-size: 14px;
		pointer-events: none;
	}
`;