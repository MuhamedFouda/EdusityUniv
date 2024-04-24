import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [sticky, setsticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false)
    })
  }, [])
  
  const[mobileveiw,setmobileveiw]=useState(false)
  const toggleMenu=()=>{
    mobileveiw ? setmobileveiw(false) : setmobileveiw(true);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='' />
      <ul className={mobileveiw? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='compus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-230} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={require('../../assets/menu-icon.png')} className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}
