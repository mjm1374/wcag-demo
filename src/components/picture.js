import './picture.css';

const Picture = ({ data, type }) => {
	const img = data.img;
	const useAlt = type === 'good' ? data.goodAlt : data.badAlt;

	return (
		<a href='/'>
			<div className='photo' tab-index='-1'>
				<img src={img} alt={useAlt} className='img' />

				{/* {useAlt} */}
			</div>
		</a>
	);
};

export default Picture;
