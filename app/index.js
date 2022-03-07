import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import './index.css'
import SearchIcon from './search.svg'

import MovieCard from './MovieCard'
const API_URL = "http://www.omdbapi.com?apikey=1274092d";
const movie1 ={
  "Title": "Spiderman",
  "Year": "1990",
  "imdbID": "tt0100669",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  
  const [movies,setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const SearchMovies =  async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search) 

  }


  useEffect( ()=> {
    SearchMovies('spiderman');
  },[])

  return (
    <div className='app'>
       <h1>MovieLand</h1>

       <div className="search">
         <input type="text" placeholder='search for Movies' value={searchTerm}
         onChange={ (e)=> {setSearchTerm(e.target.value)}} />
         <img src={SearchIcon} alt='search' onClick={ ()=> {SearchMovies(searchTerm)}}/> 
       </div>



       {
         movies?.length>0 ? 
        ( <div className='container'>
          {movies.map ( (movie) => (
             <MovieCard movie={movie}/>
          ))}
       </div> ): (
         <div className='empty'>
           <h2>No movies found.</h2>
         </div>
       )

       }
       
    </div>
     
   )
}





ReactDOM.render(
  <App />,
  document.getElementById('app')
	) 