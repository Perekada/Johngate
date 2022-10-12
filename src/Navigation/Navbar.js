import React  from 'react'
import { links } from './data'
import logo from '../54337johngate.jpg';
import {FaBars} from 'react-icons/fa'
import{useState, useEffect, useRef} from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false);
	const containerRef = useRef(null);
	const linksRef = useRef(null);

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (show) {
			containerRef.current.style.height = `${linksHeight}px`;
		} else {
			containerRef.current.style.height = '0px';
		}
	}, [show]);

  return (
    <nav>
      <div className="nav-center">
      <div className='nav-header'>
        <img src={logo} alt="" className='logo' />
        <button className='nav-toggle' onClick={()=> setShow(!show)}>
          <FaBars/>
        </button>
      </div>
      <div className="links-container" ref={containerRef}>
      <ul className='links' ref={linksRef}>
        {links.map((link) =>{
          const {id,url,text} = link
          return <li key={id}>
            <a href={url}>{text}</a>
          </li>
        })}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar