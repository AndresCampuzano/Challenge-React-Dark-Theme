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
			<Header propTheme={toggleTheme} />
			<Main>
				<ArticleMain
					socialImage={FacebookImage}
					socialAccount='@nathanf'
					followersNumber='1987'
					alertArrow='↑'
					alertUpdate='12'
				/>
				<ArticleMain
					socialImage={TwitterImage}
					socialAccount='@nathanf'
					followersNumber='1044'
					alertArrow='↑'
					alertUpdate='99'
				/>
				<ArticleMain
					socialImage={InstagramImage}
					socialAccount='@realnathanf'
					followersNumber='11k'
					alertArrow='↑'
					alertUpdate='1099'
				/>
				<ArticleMain
					socialImage={YoutubeImage}
					socialAccount='Nathan F.'
					followersNumber='8239'
					alertArrow='↓'
					alertUpdate='144'
				/>
			</Main>
			<OverviewTitle />
			<OverviewContainer>
				<ArticleSmall
					textTitle='Page Views'
					socialImage={FacebookImage}
					articleSmallNumbers='87'
					numbersPercent='3'
				/>
				<ArticleSmall
					textTitle='Likes'
					socialImage={FacebookImage}
					articleSmallNumbers='52'
					numbersPercent='2'
				/>
				<ArticleSmall
					textTitle='Likes'
					socialImage={InstagramImage}
					articleSmallNumbers='5462'
					numbersPercent='2257'
				/>
				<ArticleSmall
					textTitle='Profile Views'
					socialImage={InstagramImage}
					articleSmallNumbers='52k'
					numbersPercent='1375'
				/>
				<ArticleSmall
					textTitle='Retweets'
					socialImage={TwitterImage}
					articleSmallNumbers='117'
					numbersPercent='303'
				/>
				<ArticleSmall
					textTitle='Likes'
					socialImage={TwitterImage}
					articleSmallNumbers='507'
					numbersPercent='3553'
				/>
				<ArticleSmall
					textTitle='Likes'
					socialImage={YoutubeImage}
					articleSmallNumbers='107'
					numbersPercent='10'
				/>
				<ArticleSmall
					textTitle='Total Views'
					socialImage={YoutubeImage}
					articleSmallNumbers='1407'
					numbersPercent='12'
				/>
			</OverviewContainer>
		</ThemeProvider>
	);
}

export default App;
