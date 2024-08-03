export default function RegistrationPage({
  user, 
  handleUserInput, 
  onRegistrationSubmit, 
  reqistrationSuccess, 
  handleAfterRegistration
}) {
  
  return (
    <>
      {!reqistrationSuccess ? (
        <>
        <h2>Введите необходимые поля</h2>
        <form onSubmit={onRegistrationSubmit}>
        <label>
          <input
            name="name"
            type="text"
            value={user.name || ''}
            onChange={handleUserInput}
            required
            placeholder="Введите ваше имя"
          />
        </label>
        <br />
          <label>
          <input
            name="email"
            type="email"
            value={user.email || ''}
            onChange={handleUserInput}
            required
            placeholder="Введите ваш email"
          />
        </label>
      <br />
        <label>
          <input
            name="password"
            type="password"
            value={user.password || ''}
            onChange={handleUserInput}
            // pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
            required
            minLength="1"
            maxLength="11"
            placeholder="Пароль:"
          />
        </label>
        <br />
        <label>
          <input
            name="confirmPassword"
            type="password"
            value={user.confirmPassword || ''}
            onChange={handleUserInput}
            // pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
            required
            minLength="1"
            maxLength="11"
            placeholder="Подтвердите пароль:"
          />
        </label>
        <br />
        <button type="submit" >
          Подтвердить регистрацию
        </button>
      </form></>) : (
        <>
          <h2>Вы успешно создали аккаунт</h2>
          <button onClick={handleAfterRegistration}>
            Войти
          </button>
        </>)}
    </>
  )
}