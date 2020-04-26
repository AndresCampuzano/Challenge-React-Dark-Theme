import { createGlobalStyle } from 'styled-components';

export const MediaStyles = createGlobalStyle`

@media (max-width: 1035px) {
	.article {
		width: 45%;
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
	}

	.header--heading {
		padding-bottom: 30px;
		width: 90%;
		border-bottom: 1px solid white;
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
	
	.article {
		width: 90%;
	}
	.articleSmall {
		width: 90%;
	}
}`;
