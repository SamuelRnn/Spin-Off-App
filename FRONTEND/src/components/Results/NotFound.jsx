import styles from './NotFound.module.scss'

function NotFound({message, setHomeSearchDone, handleReturn}) {
  let explanation = message === 'Too many results.' ? 'We store information of lots of movies... A big amount of   them matched your search, try typing something more especific!' : 'The movie you searched does not exist!'
  return (
    <div className={styles.container}>
      <h2>{message}</h2>
      <hr />
      <p>{explanation}</p>
      <h3 className={styles.return} onClick={handleReturn}>Volver a la página principal</h3>
    </div>
  )
}

export default NotFound