import React, { useState } from 'react';
import Picture from './components/picture';
import data from './data/dogs';

import './App.css';

function App() {
	const [altType, setAltType] = useState('bad');

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

	const handleChange = (e) => {
		console.log('Fruit Selected!!');
		//this.setState({ fruit: e.target.value });
		setAltType(e.target.value);
	};

	return (
		<div className='App'>
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
					<select
						onChange={handleChange}
						defaultValue={{
							label: altType.label,
							value: altType.value,
						}}>
						{options.map((option) => (
							<option value={option.value}>{option.label}</option>
						))}
					</select>
				</div>
			</header>
		</div>
	);
}

export default App;
