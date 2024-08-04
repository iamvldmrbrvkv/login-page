export default function LoginPage({
  email, 
  setEmail,
  password, 
  setPassword,
  checkbox, 
  setCheckbox,
  handleLogin,
  handleRegistration,
  handleForgotPassword,
}) {
  return (
    <>
      {(
        <>
          <h1>Очень хороший сайт</h1>
          <p>Пожалуйста, авторизуйтесь</p>
          <form onSubmit={handleLogin}>
            <label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Логин:"
              />
              <i className="fa fa-user"></i>
            </label>
            <label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength="1"
                maxLength="11"
                placeholder="Пароль:"
              />
              <i className="fa fa-lock"></i>
            </label>
            <div className="checkbox-container">
              <input
                name='checkbox'
                type='checkbox'
                checked={checkbox}
                onChange={e => setCheckbox(e.target.checked)}
              />
              <span>Запомнить меня на этом компьютере</span>
            </div>
            <button type="submit">Войти</button>
            <a href="#" onClick={handleForgotPassword}>Забыли пароль?</a>
            <button type="button" onClick={handleRegistration}>Зарегистрироваться</button>
          </form>
        </>
      )}
    </>
  )
}
