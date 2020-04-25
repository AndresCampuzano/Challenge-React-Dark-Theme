import React from 'react';
import { ArticleSmallStyles } from '../styles/ArticleSmall';
import { MediaStyles } from '../styles/Media';

const ArticleSmall = (props) => {
	const {
		textTitle,
		articleSmallNumbers,
		numbersPercent,
		socialImage,
	} = props;
	return (
		<article className='articleSmall'>
			<ArticleSmallStyles />
			<MediaStyles />
			<div className='articleSmall--text'>
				<p className='articleSmall--text-title'>{textTitle}</p>
				<img
					className='articleSmall--text-social'
					src={socialImage}
					alt='Facebook'
				/>
			</div>
			<div className='articleSmall--numbers'>
				<p className='articleSmall--numbers-number'>
					{articleSmallNumbers}
				</p>
				<p className='articleSmall--numbers-percept'>{numbersPercent}%</p>
			</div>
		</article>
	);
};

export default ArticleSmall;
