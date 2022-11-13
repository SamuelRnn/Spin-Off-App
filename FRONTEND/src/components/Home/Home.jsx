import SearchBar from '../SearchBar/SearchBar'
import Results from '../Results/Results';
import styles from './Home.module.scss'
import { useState } from 'react';

function Home() {
  const [searchDone, setSearchDone] = useState(false)

  return (
    <>
      {
      searchDone ? <Results setHomeSearchDone={setSearchDone}/>
        :
        <div className={styles.container}>
          <div className={styles.text_container }>
            <h2>Search movies and series, rate them and make your own list</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem a officia maiores reiciendis, commodi fuga perspiciatis eius nesciunt sint placeat inventore magnam dolorem itaque rerum illo nemo quam accusamus?</p>
          </div>
          <SearchBar setSearchDone={setSearchDone}/>
        </div> 
      }
    </>
  )
}

export default Home