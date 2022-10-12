import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const SingleProduct = (props) => {
	const { id, title, desc, items } = props.product;
	const [showInfo, setShowInfo] = useState(false);
	function Information() {
		if (showInfo === true) {
			return (
				<div>
					<h5>{desc}</h5>
					<ul>
						{items.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>
			);
		}
		return null;
	}
	return (
		<article>
			<div className='question'>
				<header>
					<h4>{title}</h4>
					<button
						onClick={() => {
							setShowInfo(!showInfo);
						}}
						className='btn'>
						{showInfo ? <HiMinus /> : <HiPlus />}
					</button>
				</header>
				<p>{Information()}</p>
			</div>
		</article>
	);
};
 export default SingleProduct