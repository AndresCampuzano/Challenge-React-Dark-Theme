import React from 'react';
import { HeaderStyles } from '../styles/Header';

const Header = ({ propToggleTheme, propTheme }) => {
	const changeColorSwitcher = () => {
		if (propTheme === 'light') {
			return '';
		} else {
			return 'switcher';
		}
	};

	return (
		<header className='header'>
			<HeaderStyles />
			<div className='header--heading'>
				<h1 className='header--heading-title'>Social Media Dashboard</h1>
				<p className='header--heading-followers'>Total Followers: 23,004</p>
			</div>
			<div className='button'>
				<div className='toggleButton'>
					<label className='toggle__label'>
						Dark Mode
						<input
							id='mode'
							className='toggle__input'
							type='checkbox'
							onClick={propToggleTheme}
						/>
						<span
							className={`toggle__switch ${changeColorSwitcher()}`}
						></span>
					</label>
				</div>
			</div>
		</header>
	);
};

export default Header;
