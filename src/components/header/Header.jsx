import React from 'react'
import './header.css'
import Nav from '../nav/Nav'
import Home from '../../assets/Home.png'

const Header = () => {
    return (
        <header>
            <Nav/>
            <div className='home'>
            <div className='content'>
                    <h1>Find your own Happiness</h1>
                    <p>The best gifs for those you love.
                        Fresh flower delivery daily and around a clock. 
                    </p>
                    <a href="#shop" className='btn btn__header'>Shop Now</a>
                </div>
                <div className='image'>
                    <img src={Home} alt="home" />
                </div>
            </div >
        </header>
    )
}

export default Header