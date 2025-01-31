import React from 'react'
import './NavigationBar.css'
import logo from '../../assets/Logo.png'
import search from '../../assets/search.png'
import user from '../../assets/person.png'
import cart from '../../assets/cart.png'

const NavigationBar = () => {
  return (
    <nav>
      <img src={logo} alt="" className='logoImg' />
      <ul className='menu'>
        <li>Home</li>
        <li>Vision</li>
        <li>Mission</li>
        <li>Principles</li>
        <li>Meetings</li>
        <li>Courses</li>
        <li>About Us</li>
        <li><img src={search} alt="" /></li>
        <li><img src={user} alt="" /></li>
        <li><img src={cart} alt="" /></li>
        <li><button className='Btn'>Donate Now</button></li>
      </ul>
    </nav>
  )
}

export default NavigationBar
