import React from 'react'
import Home from "./Home"
import Navbar from './Navigation/Navbar'
import ProductView from './Products/Products';

function App() {
  return (
		<div className='App'>
			<Navbar />
			<div className='divider'>
				<Home className='page' />
				<ProductView className='page' />
			</div>
		</div>
	);
}

export default App;
