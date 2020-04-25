import { createGlobalStyle } from 'styled-components';

export const ArticleMainStyles = createGlobalStyle`

.article {
	background-color: ${({ theme }) => theme.backgroundCard};
	border-top: 3px solid ${({ theme }) => theme.Facebook};
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
}`;
