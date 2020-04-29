import { createGlobalStyle } from 'styled-components';

export const MediaStyles = createGlobalStyle`

@media (max-width: 1035px) {

	.header {
		width: 95%;
	}

	.article {
		width: 45%;
	}

	.overview--title {
		width: 95%;
	}

	.articleSmall {
		width: 45%;
	}
}

@media (max-width: 651px) {

	.header {
		margin-top: 25px;
		display: flex;
		flex-direction: column;
		height: auto;
		width: 90%;
	}

	.header--heading {
		padding-bottom: 30px;
		width: 90%;
		border-bottom: 1px solid ${({ theme }) => theme.lineColor};
	}

	.button {
		width: 80%;
		margin: auto;
		margin-top: 20px;
		margin-bottom: 25px;
	}

	.toggle__label {
		justify-content: space-between;
	}

	.article {
		width: 80%;
	}

	.overview--title {
		width: 80%;

	}
	.articleSmall {
		width: 80%;
	}
}

@media (max-width: 530px) {

	.header {
		width: 98%;
	}

	.article {
		width: 90%;
	}
	.overview--title {
		width: 90%;

	}
	.articleSmall {
		width: 90%;
	}
}`;
