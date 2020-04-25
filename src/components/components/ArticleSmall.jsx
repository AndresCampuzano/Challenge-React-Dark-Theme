import React from 'react';
import { ArticleSmallStyles } from '../styles/ArticleSmall';

const ArticleSmall = () => {
	return (
		<article className='articleSmall'>
			<ArticleSmallStyles />
			<div className='articleSmall--text'>
				<p className='articleSmall--text-title'>Page Views</p>
				<img
					className='articleSmall--text-social'
					src='xxx'
					alt='Facebook'
				/>
			</div>
			<div className='articleSmall--numbers'>
				<p className='articleSmall--numbers-number'>87</p>
				<p className='articleSmall--numbers-percept'>3%</p>
			</div>
		</article>
	);
};

export default ArticleSmall;
