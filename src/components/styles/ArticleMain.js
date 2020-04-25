import { createGlobalStyle } from 'styled-components';

export const ArticleMainStyles = createGlobalStyle`

.article {
	background-color: ${({ theme }) => theme.backgroundCard};
	position: relative;
	width: 255px;
	min-width: 255px;
	height: 200px;
	min-height: 200px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5px auto;
}

.Facebook::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 4px;
	background-color:  ${({ theme }) => theme.Facebook};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.Twitter::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 4px;
	background-color: ${({ theme }) => theme.Twitter};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}
.Instagram::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 4px;
	background-color: ${({ theme }) => theme.InstagramBG};
	background: ${({ theme }) => theme.Instagram};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}
.Youtube::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 4px;
	background-color: ${({ theme }) => theme.Youtube};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.article:hover {
	background-color: ${({ theme }) => theme.backgroundCardHover};
	cursor: pointer;
}

.article--social {
	display: flex;
	padding: 10px;
	color: ${({ theme }) => theme.desaturateColor};
	font-weight: bold;
}

.article--social img {
	margin-right: 10px;
}

.article--followers {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.article--followers-number {
	font-size: 50px;
	padding: 10px;
	font-weight: bold;
}

.article--followers-title {
	color: ${({ theme }) => theme.desaturateColor};
}

.article--alert {
	display: flex;
	padding: 15px;
	flex-direction: row;
	color: var(--limeGreen-color);
	font-weight: bold;
}

.article--alert img {
	object-fit: contain;
}

.green {
	color: ${({ theme }) => theme.limeGreen};
}

.red {
	color: ${({ theme }) => theme.brightRed};
}`;
