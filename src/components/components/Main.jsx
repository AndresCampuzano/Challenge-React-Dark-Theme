import React from 'react';
import { MainStyles } from '../styles/Main';

const Main = ({ children }) => {
	return (
		<section className='main'>
			<MainStyles />
			{children}
		</section>
	);
};

export default Main;
