import React from 'react';
import { ArticleMainStyles } from '../styles/ArticleMain';
import { MediaStyles } from '../styles/Media';
import arrowUpImage from '../images/icon-up.svg';
import arrowDownImage from '../images/icon-down.svg';

const ArticleMain = (props) => {
	const {
		socialAccount,
		followersNumber,
		alertArrow,
		alertUpdate,
		socialImage,
		type,
	} = props;

	return (
		<article className={`article ${type}`}>
			<ArticleMainStyles />
			<MediaStyles />
			<div className='article--social'>
				<img
					src={socialImage}
					alt={socialAccount}
					className='article--social-image'
				/>
				<p className='article--social-account'>{socialAccount}</p>
			</div>
			<div className='article--followers'>
				<p className='article--followers-number'>{followersNumber}</p>
				{type === 'Youtube' ? (
					<p className='article--followers-title'>SUBSCRIBERS</p>
				) : (
					<p className='article--followers-title'>FOLLOWERS</p>
				)}
			</div>
			<div className='article--alert'>
				{alertArrow === true ? (
					<img src={arrowUpImage} alt='arrow image' />
				) : (
					<img src={arrowDownImage} alt='arrow image' />
				)}
				{alertArrow === true ? (
					<p className='article--alert-update green'>
						{alertUpdate} Today
					</p>
				) : (
					<p className='article--alert-update red'> {alertUpdate} Today</p>
				)}
			</div>
		</article>
	);
};

export default ArticleMain;
