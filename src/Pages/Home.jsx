import React from 'react'
import './Styles.css'
import heroImg from '../assets/Hero.png'
import about from '../assets/About Us.png'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Rectangle 84.png'
import icon4 from '../assets/Icon4.png'
import play from '../assets/Play_icon.png'
import course1 from '../assets/Course1.png'
import course2 from '../assets/Course2.png'
import course3 from '../assets/Course3.png'
import course4 from '../assets/Course4.png'
import course5 from '../assets/Course5.png'
import course6 from '../assets/Course6.png'
import mission from '../assets/Mission.png'

const Home = () => {
  return (
    <div className='Home'>
      
{/* START HERO SECTION */}
    <div className='hero'>
        <div className='leftSide'>
            <h1>GOD GIVE US POWER TO BELIEVE</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <button className='Btn'>About Us</button>
            <button className='Btn'>Our Courses</button>
        </div>
        <div className='rghtSide'>
            <img src={heroImg} alt="" />
        </div>
    </div>   
{/* END HERO SECTION */}

{/* START ABOUT SECTION */}
    <div className='About container'>
        <div className='imgAbout'>
            <img src={about} alt="" />
        </div>
        <div className='imgText'>
            <h4>Know More About</h4>
            <h2>Renovación Cristiana</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
            <button className='btn'>Know More</button>
        </div>
    </div>
{/* END ABOUT SECTION */}

{/* START ICONS SECTION */}
    <div className='icons container'>
        <div className='icon'>
            <img src={icon1} alt="" />
            <h4>Vision</h4>
            <p>Lorem Ipsum is simply dummy text of the printing /typesetting industry been the industry's standard.</p>
            <button className='btn1'>Read More</button>
        </div>
        <div className='icon'>
            <img src={icon2} alt="" />
            <h4>Mission</h4>
            <p>Lorem Ipsum is simply dummy text of the printing /typesetting industry been the industry's standard.</p>
            <button className='btn1'>Read More</button>
        </div>
        <div className='icon'>
            <img src={icon3} alt="" />
            <h4>Principal</h4>
            <p>Lorem Ipsum is simply dummy text of the printing /typesetting industry been the industry's standard.</p>
            <button className='btn1'>Read More</button>
        </div>
        <div className='icon'>
            <img src={icon4} alt="" />
            <h4>Meetings</h4>
            <p>Lorem Ipsum is simply dummy text of the printing /typesetting industry been the industry's standard.</p>
            <button className='btn1'>Read More</button>
        </div>
    </div>
{/* END ICONS SECTION */}

{/* START VIDEO SECTION */}
<div className='container'>
    <div className='video container'>
        <img src={play} alt="" className='playIcon'/>
    </div>
</div>
{/* END VIDEO SECTION */}


{/* START COURSE SECTION */}
<div className='container'>
<div className='courses'>
    <div className='topSec'>
    <div className='textBtn'>
        <h4>Our Courses</h4>
        <h2>Grow The Faith of Jesus Christ</h2>
    </div>
    <button className='btn'>All Courses</button>
    </div>

    <div className='allCourse'>
        <div className='c1'>
            <img src={course1} alt="" />
            <h3>$12.00</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and.</p>
            <p className='time'>05 hourse 14 minutes</p>
        </div>    
        <div className='c1'>
            <img src={course2} alt="" />
            <h3>$12.00</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and.</p>
            <p className='time'>05 hourse 14 minutes</p>
        </div>    
        <div className='c1'>
            <img src={course3} alt="" />
            <h3>$12.00</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and.</p>
            <p className='time'>05 hourse 14 minutes</p>
        </div>    
    </div>
    <div className='allCourse'>
        <div className='c1'>
            <img src={course4} alt="" />
            <h3>$12.00</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and.</p>
            <p className='time'>05 hourse 14 minutes</p>
        </div>    
        <div className='c1'>
            <img src={course5} alt="" />
            <h3>$12.00</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and.</p>
            <p className='time'>05 hourse 14 minutes</p>
        </div>    
        <div className='c1'>
            <img src={course6} alt="" />
            <h3>$12.00</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and.</p>
            <p className='time'>05 hourse 14 minutes</p>
        </div>    
    </div>
    </div>
</div>
{/* END COURSE SECTION */}

{/* START DONATE SECTION */}

<div className='dnt'>
    <div className='container'>
        <div className='donate'>
             <div className='dntText'>
                <h4>Donate To</h4>
                <h2>Support Our Mission</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button className='btn'>Donate Now</button>
            </div>
             <div className='dntImg'>
                 <img src={mission} alt="" />
            </div>
        </div>
    </div>
</div>

{/* END DONATE SECTION */}

     </div>
  )
}

export default Home
