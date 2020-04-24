import React from 'react';
import '../styles/Header.scss';

const Header = () => {
	return (
		<header class='header'>
			<div class='header--heading'>
				<h1 class='header--heading-title'>Social Media Dashboard</h1>
				<p class='header--heading-followers'>Total Followers: 23,004</p>
			</div>

			<div class='button'>
				<label class='switch-wrap'>
					<input type='checkbox' />
					<div class='switch'></div>
				</label>
			</div>
		</header>
	);
};

export default Header;
