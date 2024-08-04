export default function RegistrationPage({
  user, 
  handleUserInput, 
  onRegistrationSubmit, 
  registrationSuccess, 
  handleAfterRegistration
}) {
  
  return (
    <>
      {!registrationSuccess ? (
        <>
        <h2>Заполните необходимые поля</h2>
        <form onSubmit={onRegistrationSubmit}>
        <label>
          <input
            name="name"
            type="text"
            value={user.name || ''}
            onChange={handleUserInput}
            pattern="^[А-Яа-яЁё\s]+$"
            required
            placeholder="Ваше имя:"
            title="Имя должно содержать только русские буквы и пробелы"
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
            placeholder="Ваш email:"
          />
        </label>
      <br />
        <label>
          <input
            name="password"
            type="password"
            value={user.password || ''}
            onChange={handleUserInput}
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