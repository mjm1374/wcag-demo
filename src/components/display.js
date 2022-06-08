import './display.css';

const Display = ({ image }) => {
	if (image !== '') {
		return (
			<div className='display' tab-index='-1'>
				<img src={image} alt='xxx' className='display--img' />
			</div>
		);
	}
};

export default Display;
