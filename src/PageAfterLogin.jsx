export default function PageAfterLogin({ handleExit }) {
  return (
    <>
      <h2>Вы успешно авторизованы</h2>
      <button onClick={handleExit}>
        Выйти
      </button>
    </>
  )
}