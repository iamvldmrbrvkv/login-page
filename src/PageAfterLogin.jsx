export default function PageAfterLogin({ handleExit, user }) {
  return (
    <>
      <h2>{user.name}, Вы успешно авторизованы</h2>
      <button onClick={handleExit}>
        Выйти
      </button>
    </>
  )
}
