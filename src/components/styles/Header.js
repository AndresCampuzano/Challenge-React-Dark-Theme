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
	color: var(--DesaturatedBlue-Text-color);
}`;
