import PageAfterLogin from "./PageAfterLogin";
import ForgotPasswordPage from "./ForgotPasswordPage";

export default function LoginPage({
  email, 
  setEmail,
  password, 
  setPassword,
  checkbox, 
  setCheckbox,
  authorized, 
  handleLogin,
  handleRegistration,
  userExist,
  handleForgotPassword,
  forgotPassword,
  handleForgotPasswordSubmit
}) {
  return (
    <>
    {!authorized && !forgotPassword ? <><h1>Лучший в мире сайт</h1>
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
      </label>
      <br />
      <label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          // pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
          required
          minLength="1"
          maxLength="11"
          placeholder="Пароль:"
        />
      </label>
      <br />
      <input
        name='checkbox'
        type='checkbox'
        checked={checkbox}
        onChange={e => setCheckbox(e.target.checked)}
      />
      <span>Запомнить меня на этом компьютере</span>
      <br />
      <a href="#" onClick={handleForgotPassword}>Забыли пароль?</a>
      <button type="submit" >
        Войти
      </button>
      <button onClick={handleRegistration} >
        Зарегистрироваться
      </button>
    </form>
    </> : !userExist && !forgotPassword && <PageAfterLogin handleClick={handleLogin}/>}
    {forgotPassword && <ForgotPasswordPage email={email} setEmail={setEmail} forgotPassword={forgotPassword} handleForgotPasswordSubmit={handleForgotPasswordSubmit} />}
  </>
  )
}