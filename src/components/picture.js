import React from 'react';

import './picture.css';

const Picture = ({ data, type, setDisplay }) => {
	const img = data.img;
	//const useAlt = type === 'good' ? data.goodAlt : data.badAlt;
	let useAlt = data.crapAlt;
	switch (type) {
		case 'good':
			useAlt = data.goodAll;
			break;
		case 'bad':
			useAlt = data.badAlt;
			break;
		default:
			useAlt = data.carpAlt;
	}

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
			}}>
			<div className='photo'>
				<img src={img} alt={useAlt} className='img' />
			</div>
		</a>
	);
};

export default Picture;
