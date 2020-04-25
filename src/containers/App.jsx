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
				<ArticleMain />
				<ArticleMain />
				<ArticleMain />
				<ArticleMain />
			</Main>
			<OverviewTitle />
			<OverviewContainer>
				<ArticleSmall />
				<ArticleSmall />
				<ArticleSmall />
				<ArticleSmall />
				<ArticleSmall />
				<ArticleSmall />
				<ArticleSmall />
				<ArticleSmall />
			</OverviewContainer>
		</ThemeProvider>
	);
}

export default App;
