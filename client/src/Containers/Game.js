import React from 'react'
import DoubleIt from '../Components/JUP/DoubleIt'
import IsEven from '../Components/JUP/IsEven'
import LongestString from '../Components/JUP/LongestString'
import SumArray from '../Components/JUP/SumArray'
import WhatExtension from '../Components/JUP/WhatExtension'

const Game = () => {
	return (
		<div className="container">
			<ul className="polls">
				<li><DoubleIt /></li>
				<li><IsEven /></li>
				<li><WhatExtension /></li>
				<li><LongestString /></li>
				<li><SumArray /></li>
			</ul>

		</div>
	)
}
 
export default Game
