import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Select from 'react-select';
import FormControl from '@mui/material/FormControl';
import Picture from './components/picture';
import Display from './components/display';
import data from './data/dogs';
import logo from './assets/deerfield.svg';

import './App.css';

function App() {
	const customStyles = {
		control: (base, state) => ({
			...base,
			background: '#fff',
			// match with the menu
			borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
			// Removes weird border around container
			boxShadow: state.isFocused ? null : null,
		}),
		menu: (base) => ({
			...base,
			// override border radius to match the box
			borderRadius: 0,
			// kill the gap
			marginTop: 0,
		}),
		menuList: (base) => ({
			...base,
			// kill the white space on first and last option
			padding: 0,
			color: '#000',
		}),
	};

	const options = [
		{
			label: 'No Alt',
			value: 'crap',
		},
		{
			label: 'Bad Alt',
			value: 'bad',
		},
		{
			label: 'Good Alt',
			value: 'good',
		},
	];
	const [altType, setAltType] = useState('bad');
	const [displayImg, setDisplayImg] = useState('');

	const handleChange = (e) => {
		setAltType(e.value);
	};

	const setDisplay = (img) => {
		setDisplayImg(img);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='logo'>
					<img src={logo} alt='Deerfield Logo' />
				</div>
			</header>
			<div className='container'>
				<Grid container columns={{ xs: 4, md: 12 }}>
					<Grid item xs={2} direction={'column'}>
						<div className='photos'>
							{data.dogs.map((item, index) => {
								return (
									<Picture
										key={index}
										data={item}
										type={altType}
										setDisplay={setDisplay}></Picture>
								);
							})}
							<div className='select-container'>
								<FormControl>
									<Select
										className='dropdown'
										styles={customStyles}
										onChange={handleChange}
										defaultValue={options[1]}
										value={options.value}
										options={options}></Select>
								</FormControl>
							</div>
						</div>
					</Grid>
					<Grid item xs={10}>
						<section>
							<Display image={displayImg} />
						</section>
					</Grid>
				</Grid>

				<div className='select-container'></div>
			</div>
		</div>
	);
}

export default App;
