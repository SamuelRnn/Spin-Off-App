import styles from "./UserForms.module.scss";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { validateRegister } from "./validations";
const Register = () => {
  const history = useHistory();
  const [error, setError] = useState({
    error: false,
    errorClass: 'valid_text',
    userError: false,
    emailError: false,
    passwordError: false
  })
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    });
    setError({
      ...error,
      ...validateRegister(name, value)
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/");
  };
  return (
    <div className={styles.page_container}>
      <div className={styles.main_container}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={error.userError ? styles.invalid_field : undefined}
            maxLength='16'
            onChange={handleInputChange}
            name="username"
            type="text"
            placeholder="Username (max. 16 characters, no spaces)"
            value={form.username}
          />
          <input
            className={error.emailError ? styles.invalid_field : undefined}
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
          />
          <input
            className={error.passwordError ? styles.invalid_field : undefined}
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Password (min. 8 characters)"
            value={form.password}
          />
          <p className={`${styles.text} ${styles[error.errorClass]}`}>
            {error.error || 'Make sure to fill all fields correctly'}
          </p>
          <input disabled={!form.username || !form.email || form.password.length < 8} type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
