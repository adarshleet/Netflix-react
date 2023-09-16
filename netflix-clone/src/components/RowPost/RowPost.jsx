import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { image_url } from '../../constants/constants'

function RowPost(props) {
    const [movies, setMovies] = useState()
    const [hoveredMovieId, setHoveredMovieId] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(props.url)
                console.log(response.data.results)
                setMovies(response.data.results)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData()
    }, [])

    const mouseEnter = (movieId) => {
        setHoveredMovieId(movieId)
    }

    const mouseLeave = () => {
        setHoveredMovieId(null)
    }

    return (
        <div className='row position-relative'>
            <h4>{props.title}</h4>
            <div className='posters'>
                {movies && movies.map((movie) => (
                    <div
                        className='poster-container'
                        onMouseEnter={() => mouseEnter(movie.id)}
                        onMouseLeave={mouseLeave}
                        key={movie.id}
                    >
                        <img
                            className={`poster ${hoveredMovieId === movie.id ? 'hovered' : ''}`}
                            src={`${image_url + movie.backdrop_path}`}
                            alt=''
                        />
                        {hoveredMovieId === movie.id &&
                            <div className='pop-up position-absolute'>
                                <img className='pop-img' src={`${image_url + movie.backdrop_path}`} alt="" />
                                <div className='p-3'>
                                    <div className='description d-flex justify-content-between'>
                                        <div>
                                            <button><i class=" fa-sharp fa-solid fa-play" style={{color: "#000000;"}}></i></button>
                                            <button className='icons-black'><i class="fa-sharp fa-light fa-plus" style={{color: "#000000;"}}></i></button>
                                            <button className='icons-black'><i class="fa fa-thin fa-thumbs-up" style={{color: "#000000;"}}></i></button>
                                        </div>
                                        <div>
                                            <button className='icons-black'><i class="fa-sharp fa-solid fa-angle-down" style={{color: "#000000;"}}></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RowPost
