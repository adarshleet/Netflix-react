import { API_KEY } from "./constants/constants";
export const TvShows = `/discover/tv?api_key=${API_KEY}`
export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documenteries = `/discover/movie?api_key=${API_KEY}&with_genres=99`

