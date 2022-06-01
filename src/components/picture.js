import './picture.css';

const Picture = ({ data, type }) => {
	const img = data.img;
	const useAlt = type === 'good' ? data.goodAlt : data.badAlt;

	return (
		<div className='photo'>
			<a href='/'>
				<img src={img} alt={useAlt} className='img' />
			</a>
		</div>
	);
};

export default Picture;
