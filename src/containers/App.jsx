// App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/styles/theme';
import { GlobalStyles } from '../components/components/global';
import '../components/components/global2.scss';
import '../components/components/global3.scss';

import Header from '../components/components/Header';

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
			<>
				<Header />
				<div className='box-text'>
					// Pass the toggle functionality to the button
					<button onClick={toggleTheme}>Toggle theme</button>
					<h1>Div 1!</h1>
					<footer></footer>
				</div>
				<div className='box-scss'>
					// Pass the toggle functionality to the button
					<h1>Div 2!</h1>
					<footer></footer>
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
