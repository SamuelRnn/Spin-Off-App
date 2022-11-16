import SearchBar from '../SearchBar/SearchBar'
import MovieCard from '../MovieCard/MovieCard'
import styles from './Results.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { resetMatchingMovies } from '../../redux/actions'
import NotFound from './NotFound'
import { useHistory } from 'react-router-dom'

function Results({ setHomeSearchDone }) {
  const movies = useSelector(state => state.movies)
  const searchTitle = useSelector(state => state.search)
  const dispatch = useDispatch();
  const history = useHistory()
  const [searchDone, setSearchDone] = useState(false)
  
  const handleReturn = () => {
    dispatch(resetMatchingMovies())
    history.push('/')
  }

  return (
    <div className={styles.container}>
      <SearchBar setSearchDone={setSearchDone}/>
      {
        movies.Response === 'False' ?
        <NotFound message={movies.Error} setHomeSearchDone={setHomeSearchDone} handleReturn={handleReturn}/>
        : 
        <>
          <div className={styles.results_info}>
            <h2>Resultados para<span>{searchTitle}</span></h2>
            <div></div>
          </div>
          <h3 className={styles.return} onClick={handleReturn}>Let's go back to the start</h3>
          <ul className={styles.results_container}>
            {
              movies.Search?.map(movie => 
                <MovieCard
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  movieId={movie.imdbID}
                  poster={movie.Poster}
                />
              )
            }
          </ul>
        </>
      }
    </div>
  )
}

export default Results;