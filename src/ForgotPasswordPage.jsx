export default function ForgotPasswordPage({ email, setEmail, handleForgotPasswordSubmit, forgotPassword }) {
  return (
    <>
      {forgotPassword && (<>
        <h2>Для восстановления пароля введите ваш email</h2>
        <form onSubmit={handleForgotPasswordSubmit}>
          <label>
            <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Ваш email:"
            />
        </label>
        <br />
            <button type="submit" >
              Подтвердить
            </button>
        </form>
      </>)}
    </>
  )
}