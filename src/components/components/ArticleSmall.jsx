import React from 'react';
import { ArticleSmallStyles } from '../styles/ArticleSmall';
import { MediaStyles } from '../styles/Media';
import arrowUpImage from '../images/icon-up.svg';
import arrowDownImage from '../images/icon-down.svg';

const ArticleSmall = (props) => {
	const {
		textTitle,
		articleSmallNumbers,
		numbersPercent,
		socialImage,
		arrowUp,
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
				<div>
					{arrowUp ? (
						<img src={arrowUpImage} alt='arrow image' />
					) : (
						<img src={arrowDownImage} alt='arrow image' />
					)}
					{arrowUp ? (
						<p className='articleSmall--numbers-percept green'>
							{numbersPercent}%
						</p>
					) : (
						<p className='articleSmall--numbers-percept red'>
							{numbersPercent}%
						</p>
					)}
				</div>
			</div>
		</article>
	);
};

export default ArticleSmall;
