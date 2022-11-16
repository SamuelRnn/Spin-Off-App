import styles from './UserForms.module.scss';
import { Link, useHistory } from 'react-router-dom'
const Login = () => {
  const history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/");
  }
  return (
    <div className={styles.page_container}>
      <div className={styles.main_container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Username'/>
          <input type='password' placeholder='Password'/>
          <a className={styles.links} href='#'>Forgot password?</a>
          <input type="submit" value="Login"/>
        </form>
        <div className={styles.register_link}>
          <p>You don't have an account yet?</p>
          <Link className={styles.links} to='register'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;