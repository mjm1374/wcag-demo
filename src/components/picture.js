import React from 'react';

import './picture.css';

const Picture = ({ data, type, setDisplay }) => {
	const img = data.img;
	const useAlt = type === 'good' ? data.goodAlt : data.badAlt;

	const setDisplayImg = (img) => {
		setDisplay(img);
	};

	return (
		<a
			href='/'
			onFocus={(e) => {
				setDisplayImg(img);
			}}
			onClick={(e) => {
				e.preventDefault();
				setDisplayImg(img);
			}}>
			<div className='photo'>
				<img src={img} alt={useAlt} className='img' />
			</div>
		</a>
	);
};

export default Picture;
