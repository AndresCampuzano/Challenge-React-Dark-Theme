import React from 'react';
import { ArticleMainStyles } from '../styles/ArticleMain';

const ArticleMain = (props) => {
	const { socialAccount, followersNumber, alertArrow, alertUpdate } = props;
	return (
		<article className='article'>
			<ArticleMainStyles />
			<div className='article--social'>
				<img src='xxx' alt='facebook' className='article--social-image' />
				<p className='article--social-account'>{socialAccount}</p>
			</div>
			<div className='article--followers'>
				<p className='article--followers-number'>{followersNumber}</p>
				<p className='article--followers-title'>FOLLOWERS</p>
			</div>
			<div className='article--alert'>
				<span className='article--alert-arrow'>{alertArrow}</span>
				<p className='article--alert-update'>{alertUpdate} Today</p>
			</div>
		</article>
	);
};

export default ArticleMain;
