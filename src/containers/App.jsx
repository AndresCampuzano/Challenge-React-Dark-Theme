// App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/styles/theme';
import { GlobalStyles } from '../components/components/global';

import Header from '../components/components/Header';
import Main from '../components/components/Main';
import ArticleMain from '../components/components/ArticleMain';
import OverviewTitle from '../components/components/OverviewTitle';
import OverviewContainer from '../components/components/OverviewContainer';
import ArticleSmall from '../components/components/ArticleSmall';

import FacebookImage from '../components/images/icon-facebook.svg';
import InstagramImage from '../components/images/icon-instagram.svg';
import TwitterImage from '../components/images/icon-twitter.svg';
import YoutubeImage from '../components/images/icon-youtube.svg';

// The function that toggles between themes
function App() {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	// Return the layout based on the current theme
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Header propToggleTheme={toggleTheme} propTheme={theme} />
			<Main>
				<ArticleMain
					socialImage={FacebookImage}
					type='Facebook'
					socialAccount='@nathanf'
					followersNumber='1987'
					alertArrow={true}
					alertUpdate='12'
				/>
				<ArticleMain
					socialImage={TwitterImage}
					type='Twitter'
					socialAccount='@nathanf'
					followersNumber='1044'
					alertArrow={true}
					alertUpdate='99'
				/>
				<ArticleMain
					socialImage={InstagramImage}
					type='Instagram'
					socialAccount='@realnathanf'
					followersNumber='11k'
					alertArrow={true}
					alertUpdate='1099'
				/>
				<ArticleMain
					socialImage={YoutubeImage}
					type='Youtube'
					socialAccount='Nathan F.'
					followersNumber='8239'
					alertArrow={false}
					alertUpdate='144'
				/>
			</Main>
			<OverviewTitle />
			<OverviewContainer>
				<ArticleSmall
					textTitle='Page Views'
					socialImage={FacebookImage}
					articleSmallNumbers='87'
					arrowUp={true}
					numbersPercent='3'
				/>
				<ArticleSmall
					textTitle='Likes'
					socialImage={FacebookImage}
					articleSmallNumbers='52'
					arrowUp={false}
					numbersPercent='2'
				/>
				<ArticleSmall
					textTitle='Likes'
					socialImage={InstagramImage}
					articleSmallNumbers='5462'
					arrowUp={true}
					numbersPercent='2257'
				/>
				<ArticleSmall
					textTitle='Profile Views'
					socialImage={InstagramImage}
					articleSmallNumbers='52k'
					arrowUp={true}
					numbersPercent='1375'
				/>
				<ArticleSmall
					textTitle='Retweets'
					socialImage={TwitterImage}
					articleSmallNumbers='117'
					arrowUp={true}
					numbersPercent='303'
				/>
				<ArticleSmall
					textTitle='Likes'
					socialImage={TwitterImage}
					articleSmallNumbers='507'
					arrowUp={true}
					numbersPercent='3553'
				/>
				<ArticleSmall
					textTitle='Likes'
					socialImage={YoutubeImage}
					articleSmallNumbers='107'
					arrowUp={false}
					numbersPercent='10'
				/>
				<ArticleSmall
					textTitle='Total Views'
					socialImage={YoutubeImage}
					articleSmallNumbers='1407'
					arrowUp={false}
					numbersPercent='12'
				/>
			</OverviewContainer>
		</ThemeProvider>
	);
}

export default App;
