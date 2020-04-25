import React from 'react';
import { OverviewContainerStyles } from '../styles/OverviewContainer';

const OverviewContainer = ({ children }) => {
	return (
		<section className='overviewContainer'>
			<OverviewContainerStyles />
			{children}
		</section>
	);
};

export default OverviewContainer;
