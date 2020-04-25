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
	margin: 5px auto;
}

.articleSmall:hover {
	background-color: ${({ theme }) => theme.backgroundCardHover};
	cursor: pointer;
}

.articleSmall--text {
	display: flex;
	margin-bottom: 25px;
}

.articleSmall--text-title {
	margin-right: 48px;
}

.articleSmall--numbers {
	justify-content: right;
}

.articleSmall--numbers-number {
	margin-right: 170px;
}

.articleSmall--numbers {
	display: flex;
}

.articleSmall--numbers-percept {
	color: var(--limeGreen-color);
}`;
