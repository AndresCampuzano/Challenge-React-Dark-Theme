import React from 'react';
import { HeaderStyles } from '../styles/Header';

const Header = ({ propTheme }) => {
	return (
		<header className='header'>
			<HeaderStyles />
			<div className='header--heading'>
				<h1 className='header--heading-title'>Social Media Dashboard</h1>
				<p className='header--heading-followers'>Total Followers: 23,004</p>
			</div>
			<div className='button'>
				<label className='switch-wrap'>
					<button onClick={propTheme}>Toggle theme</button>
				</label>
			</div>
		</header>
	);
};

export default Header;
