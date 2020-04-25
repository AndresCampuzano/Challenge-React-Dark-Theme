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
	.article {
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
