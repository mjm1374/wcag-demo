import React, { useState } from 'react';
import Select from 'react-select';
import FormControl from '@mui/material/FormControl';
import Picture from './components/picture';
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
			label: 'Good Alt',
			value: 'good',
		},
		{
			label: 'Bad Alt',
			value: 'bad',
		},
	];
	const [altType, setAltType] = useState('bad');
	console.log(altType);

	const handleChange = (e) => {
		setAltType(e.value);
	};

	return (
		<div className='App'>
			<div className='logo'>
				<img src={logo} alt='Deerfield Logo' />
			</div>
			<header className='App-header'>
				<div className='photos'>
					{data.dogs.map((item, index) => {
						return (
							<Picture
								key={index}
								data={item}
								type={altType}></Picture>
						);
					})}
				</div>
				<div className='select-container'>
					<FormControl fullWidth>
						<Select
							styles={customStyles}
							onChange={handleChange}
							defaultValue={options[1]}
							value={options.value}
							options={options}></Select>
					</FormControl>
				</div>
			</header>
		</div>
	);
}

export default App;
