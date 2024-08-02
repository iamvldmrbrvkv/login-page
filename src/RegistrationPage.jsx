import { useState } from "react"

export default function RegistrationPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [reqistrationSuccess, setReqistrationSuccess] = useState(false)
  
  function onSubmit(e) {
    e.preventDefault()
    const newUser = {
      name,
      email,
      password
    }

    setUsers(prev => [...prev, newUser])

    setName('');
    setEmail('');
    setPassword('');
    setReqistrationSuccess(!reqistrationSuccess)
  }

  return (
    <>
      {!reqistrationSuccess ? (
        <form onSubmit={onSubmit}>
        <label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Введите ваше имя"
          />
        </label>
        <br />
          <label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Введите ваш email"
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
        <button type="submit" value="Войти" >
          Зарегистрироваться
        </button>
      </form>) : (
        <>
          <h2>Вы успешно создали аккаунт</h2>
        </>)}
    </>
  )
}