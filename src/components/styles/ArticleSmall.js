import { createGlobalStyle } from 'styled-components';

export const ArticleSmallStyles = createGlobalStyle`

.articleSmall {
	background-color: ${({ theme }) => theme.backgroundCard};
	width: 255px;
	min-width: 255px;
	height: 110px;
	min-height: 110px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 15px auto;
}

.articleSmall:hover {
	background-color: ${({ theme }) => theme.backgroundCardHover};
	cursor: pointer;
}

.articleSmall--numbers,
.articleSmall--text {
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.articleSmall--text-title {
	margin-bottom: 20px;
	color: ${({ theme }) => theme.desaturateColor};
	font-weight: bold;
}

.articleSmall--numbers-number {
	font-weight: bold;
	font-size: 35px;
	/* margin-right: 120px; */
}

.articleSmall--numbers-percept {
	color: ${({ theme }) => theme.limeGreen};
}


`;
