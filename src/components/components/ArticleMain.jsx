import React from 'react';
import { ArticleMainStyles } from '../styles/ArticleMain';

const ArticleMain = () => {
	return (
		<article className='article'>
			<ArticleMainStyles />
			<div className='article--social'>
				<img src='xxx' alt='facebook' className='article--social-image' />
				<p className='article--social-account'>@nathanf</p>
			</div>
			<div className='article--followers'>
				<p className='article--followers-number'>1987</p>
				<p className='article--followers-title'>FOLLOWERS</p>
			</div>
			<div className='article--alert'>
				<span className='article--alert-arrow'>↑</span>
				<p className='article--alert-update'>Today</p>
			</div>
		</article>
	);
};

export default ArticleMain;
