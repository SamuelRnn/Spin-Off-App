import SearchBar from '../SearchBar/SearchBar'
import Results from '../Results/Results';
import styles from './Home.module.scss'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandQuote } from '../../redux/actions'
import { useHistory } from 'react-router-dom';

function Home() {
  const [searchDone, setSearchDone] = useState(false)
  const quote = useSelector(state => state.randQuote)
  const dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    dispatch(getRandQuote())
    return ()=>{
      dispatch(getRandQuote(true))
    }
  },[searchDone])

  return (
    <>
      {
      searchDone ? history.push('/results')
        :
        <>
          <div className={styles.container}>
            <div className={styles.text_container }>
              <h2>{quote ? `"${quote.quote}"` : '[Insert beautiful random quote here]'}</h2>
              {quote ? <h3>{quote.role} from <i>"{quote.show}"</i></h3> : null}
              <hr />
              <p>Find your favorites movies and series<i>(maybe)</i>, rate them and add them to your lists. Don't worry, we'll show you a nice <s>Not Found</s> sign if we couldn't find it. Be especific with your search. Enjoy!</p>
            </div>
            <SearchBar setSearchDone={setSearchDone}/>
          </div> 
          <a className={styles.git_link} href="https://github.com/SamuelRnn" target="_blank">Made by SamuelRnn</a>
        </>
      }
    </>
  )
}

export default Home