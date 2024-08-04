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
              <i className="fa fa-user"></i>
            </label>
            <label>
              <input
                name="email"
                type="email"
                value={user.email || ''}
                onChange={handleUserInput}
                required
                placeholder="Ваш email:"
              />
              <i className="fa fa-envelope"></i>
            </label>
            <label>
              <input
                name="password"
                type="password"
                value={user.password || ''}
                onChange={handleUserInput}
                required
                placeholder="Пароль:"
                minLength='4'
                title="Пароль должен состоять минимум из 4 символов"
              />
              <i className="fa fa-lock"></i>
            </label>
            <label>
              <input
                name="confirmPassword"
                type="password"
                value={user.confirmPassword || ''}
                onChange={handleUserInput}
                required
                placeholder="Подтвердите пароль:"
                minLength='4'
                title="Пароль должен состоять минимум из 4 символов"
              />
              <i className="fa fa-lock"></i>
            </label>
            <button type="submit">Зарегистрироваться</button>
          </form>
        </>
      ) : (
        <>
          <h2>Регистрация прошла успешно!</h2>
          <button onClick={handleAfterRegistration}>Вернуться к входу</button>
        </>
      )}
    </>
  );
}
