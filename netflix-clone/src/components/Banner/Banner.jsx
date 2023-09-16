import React from 'react'
import './Banner.css'
import title from './img/movie-title.webp'
import play from './img/play.svg'
import more from './img/round.svg'
import banner from './img/banner.webp'
import RowPost from '../RowPost/RowPost'
import { TvShows } from '../../urls'

function Banner() {
    return (
        <div className='banner'>
            <img className='img-fluid banner-img' src={banner} alt="" />
            <div className='gradient-overlay'>
                <RowPost title={'Critically Acclaimed TV Shows'} url={TvShows}/>
            </div>
            <div className='content ms-5 img-fluid'>
                <div className='my-4'>
                    <img className='img-fluid' src={title} alt="" />
                </div>
                <div className='content-para img-fluid'>
                    <p>Retired intelligence operative Robert McCall reluctantly returns to action to protect a young prostitute from brutal members of the Russian Mafia.</p>
                </div>
                <div className='buttons img-fluid'>
                    <button className='play border-0 px-4 py-2 fw-bold rounded-1'><img className='mb-1 mx-1' src={play} alt="" /> Play</button>
                    <button className='more border-0 px-4 py-2 ms-3 fw-bold text-white rounded-1'><img className='mb-1 mx-1' src={more} alt="" /> More Info</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
