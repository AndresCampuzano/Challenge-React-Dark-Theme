import { createGlobalStyle } from 'styled-components';

export const HeaderStyles = createGlobalStyle`

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 140px;
	max-width: 1124px;
	margin: auto;
	/* border: 1px solid red; */
}

.header--heading-title {
	font-size: 32px;
	font-weight: bold;
}

.header--heading-followers {
	font-size: 16px;
	font-weight: bold;
	margin-top: 8px;
	color: ${({ theme }) => theme.desaturateColor};
}

/* button */

.toggle__label {
	display: flex;
	margin-right: 15px;

	color: ${({ theme }) => theme.desaturateColor};
	font-weight: 700;
}

.toggle__input {
	opacity: 0;
	position: absolute;
	height: 0;
	width: 0;
}

.toggle__switch {
	position: relative;
	display: inline-block;
	margin-left: 15px;
	height: 24px;
	width: 48px;

	cursor: pointer;

	background: ${({ theme }) => theme.gradient};
	border-radius: 12px;
}


   .toggle__switch:hover {
	background: ${({ theme }) => theme.gradientHover};
}

.toggle__switch::before {
	content: '';
	position: absolute;
	top: 3px;
	left: 3px;
	height: 18px;
	width: 18px;
	background-color: ${({ theme }) => theme.backgroundCard};
	border-radius: 50%;
	transition: transform 150ms ease-in-out;
}

 /* Animation effect */


   .switcher::before {
	transform: translateX(calc(100% + 6px));
}  


`;
