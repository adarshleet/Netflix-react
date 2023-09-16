import React from 'react'
import logo from './img/logo.png';
import bell from './img/bell.png'
import search from './img/search.png'
import profile from './img/profile.png'
import './Navbar.css'

function Navbar() {
    return (
        <header className='d-flex align-items-center justify-content-between px-5'>
            <div className='d-flex'>
                <div className='logo'>
                    <img className='img-fluid my-2' src={logo} alt="" />
                </div>
                <div className='links d-flex align-items-center'>
                    <ul className='d-flex'>
                        <li className='fw-bold'>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by languages</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex'>
                <div className='p-3'>
                    <img src={search} alt="" />
                </div>
                <div className='p-3'>
                    <img src={bell} alt="" />
                </div>
                <div className='p-3'>
                    <img src={profile} className='rounded-1' alt="" />
                </div>
            </div>
        </header>
    )
}

export default Navbar
