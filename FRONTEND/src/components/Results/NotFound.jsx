import styles from './NotFound.module.scss'

function NotFound({message, setHomeSearchDone, handleReturn}) {
  return (
    <div className={styles.container}>
      <h2>{message}</h2>
      <hr />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio provident architecto sapiente accusamus ad neque earum consequatur dignissimos, voluptatibus amet culpa quod!</p>
      <h3 onClick={handleReturn}>Volver a la página principal</h3>
    </div>
  )
}

export default NotFound