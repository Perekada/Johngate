import React, { useEffect, useState } from 'react'
import {FaWallet, FaShoppingCart, FaShoppingBag, FaArrowRight} from 'react-icons/fa'
import Swapper from './Swapper'
import sub_banner from '../Images/sub_banner.jpg'
import './index.css'
import {data} from './product_image'

const Home = () => {
  const [slide,setSlide] = useState(data.slice(0,4))
  const [picIndex, setPicIndex] = useState(1)


  const productSlide = () =>{
	setPicIndex(picIndex + 1)

	 if(picIndex === 0){
		 setSlide(data.slice(0,4))
		}
	 if(picIndex === 1){
		setSlide(data.slice(4,8))
	 }
	 if(picIndex === 2){
		setSlide(data.slice(8,13))
	 }
	 if(picIndex >=3){
		 setSlide(data.slice(0,4))
		 setPicIndex(1)
	 }
  }

  useEffect(()=>{
	let pLine = setTimeout(()=>{
		productSlide()
	},3000)
	return () => clearTimeout(pLine)
  },[picIndex, productSlide])

  return (
		<div>
			<Swapper />
			<section className='box-wrapper'>
				<a
					href='/about'
					className='box'>
					<FaShoppingBag />
					what we do
				</a>
				<a
					href='/how-to-order'
					className='box'>
					<FaShoppingCart />
					how to order
				</a>
				<a
					href='/payments'
					className='box'>
					<FaWallet />
					payment options
				</a>
			</section>
			<section className='new-wrapper'>
				<div className='new-box'>
					<h3>payment options on goods</h3>
					<p>online payment procedure is secured and orders are instant</p>
				</div>
				<div className='new-box'>
					<h3>mission statement</h3>
					<p>your convenience in driving is our passion and concern</p>
				</div>
				<div className='new-box'>
					<h3>our core values</h3>
					<p>driving with confidence and passion</p>
				</div>
				<div className='new-box'>
					<h3>shop smarter</h3>
					<p>
						shop faster from our website or visit any of our nearby branches and
						have it safely delivered to you
					</p>
				</div>
			</section>
			<section>
					<h3 style={{marginLeft:'2rem'}}>
						Johngate a trusted Supplies of motor tyres,tubes,batteries and
						generator
					</h3>
				<div className='mid-section'>
					<img
						src={sub_banner}
						alt=''
					/>
					<form action="" className='feedback'>
						<h3>send us your feedback and complaints</h3>
							<label>
							<h4>Name:</h4>
							<input type="text" />
							</label>
							<label>
							<h4>Email:</h4>
							<input type="email" />
							</label>
							<label htmlFor="">
								<h4>Feedback/Complaint:</h4>
								<textarea name="" id="" cols="30" rows="10"></textarea>
							</label>
						<button>submit</button>
					</form>
				</div>
        <div className='product-row'>
				{slide.map(({ id, title, image }) => {
          return (
						<section key={id}>
							<img
								src={image}
								alt=''/>
							<h5 style={{ marginBottom: '9px' }}>{title}</h5>;
						</section>
					);
				})}
			<button className='product-btn' onClick={productSlide}><FaArrowRight/></button>
        </div>
			</section>
			{/* <section>
				<h3>list of our clients</h3>
			</section> */}
			<footer></footer>
		</div>
	);
}


export default Home