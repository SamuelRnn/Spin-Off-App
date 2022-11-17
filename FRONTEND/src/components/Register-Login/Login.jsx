import styles from "./UserForms.module.scss";
import { Link, useHistory } from "react-router-dom";
import { validateLogin } from "./validations";
import { useState } from "react";

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    password: "",
    loginError: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
      loginError: ''
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validSubmit = await validateLogin(form);

    if (validSubmit.status) {
      history.push("/");
    } else {
      setForm({
        ...form,
        loginError: validSubmit.message,
      });
    }
  };
  return (
    <div className={styles.page_container}>
      <div className={styles.main_container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {
            form.loginError ? (
              <p className={`${styles.text} ${styles.invalid_text}`}>
                {form.loginError}
              </p>
            ) : null
          }
          <input
            className={form.loginError ? styles.invalid_field : undefined}
            onChange={handleChange}
            pattern="^[a-zA-Z0-9_-]*$"
            maxLength="16"
            type="text"
            name="username"
            value={form.username}
            placeholder="Username"
          />
          <input
            className={form.loginError ? styles.invalid_field : undefined}
            onChange={handleChange}
            pattern="^[^\s]*$"
            minLength="8"
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
          />
          <a className={styles.links} href="#">
            Forgot password?
          </a>
          <input
            disabled={!form.username || form.password.length < 8}
            type="submit"
            value="Login"
          />
        </form>
        <div className={styles.register_link}>
          <p>You don't have an account yet?</p>
          <Link className={styles.links} to="register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
