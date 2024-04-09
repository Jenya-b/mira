import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		border: 0;
	}
	*,
	*::before,
	*::after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	:focus,
	:active {
		outline: none;
	}
	a:focus,
	a:active {
		outline: none;
	}
	nav,
	footer,
	header,
	section,
	aside {
		display: block;
	}
	input,
	button,
	textarea {
		font-family: inherit;
	}
	input::-ms-clear {
		display: none;
	}
	button {
		cursor: pointer;

		@media (max-width: 1000px) {
			-webkit-appearance: none;
			-moz-appearance: none;
		}
	}
	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
	a,
	a:visited {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	img {
		vertical-align: top;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: 400;
	}
	html,
	body {
		font-family: "Onest", sans-serif;
		width: 100%;
		font-style: normal;
		line-height: normal;
		font-size: 14px;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		color: ${({ theme }) => theme.colors.textPrimary};
		
		::-webkit-scrollbar {
  		display: none;
		}
	}
	body {
	  min-height: 100vh;
	  min-height: -webkit-fill-available;
	}
	html {
	  height: -webkit-fill-available;
	}
	body::-webkit-scrollbar {
  	display: none;
	}
	#root{
	}
`;
