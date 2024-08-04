import './App.css'
import { useState } from 'react'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'
import PageAfterLogin from './PageAfterLogin'
import ForgotPasswordPage from './ForgotPasswordPage'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [authorized, setAuthorized] = useState(false)
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [userExist, setUserExist] = useState(true)
  const [forgotPassword, setForgotPassword] = useState(false)
  const [registeredUserName, setRegisteredUserName] = useState('')
  
  function handleLogin(e) {
    e.preventDefault()
    const loggedInUser = users.find(user => user.email === email && user.password === password)
    if (!loggedInUser) {
      return alert('Пользователя не существует, проверьте данные или зарегистрируйтесь')
    }
    setAuthorized(true)
    setUser(loggedInUser)
    setEmail('')
    setPassword('')
    setCheckbox(false)
  }

  function handleRegistration() {
    setUserExist(false)
    setEmail('');
    setPassword('');
    setCheckbox(false);
  }

  function handleExit() {
    setAuthorized(false)
    setUser({})
  }

  function handleUserInput({ target }) {
    const { name, value } = target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  function onRegistrationSubmit(e) {
    e.preventDefault()
    if (users.some((u) => u.email === user.email)) {
      return alert('Пользователь с таким email уже существует')
    }
    if (user.password !== user.confirmPassword) {
      return alert('Пароли не совпадают')
    }
    setUsers(prevUsers => [...prevUsers, user])
    setRegisteredUserName(user.name)
    setRegistrationSuccess(true)
    setUser({})
  }

  function handleAfterRegistration() {
    setAuthorized(false)
    setRegistrationSuccess(false)
    setForgotPassword(false)
    setUserExist(true)
    setUser({})
  }

  function handleForgotPassword(e) {
    e.preventDefault()
    setForgotPassword(true)
  }

  function handleForgotPasswordSubmit(e) {
    e.preventDefault()
    alert(`Письмо с инструкциями по восстановлению пароля выслано на почту ${email}`)
    setForgotPassword(false)
    setEmail('')
  }

  return (
    <div className="App">
      {!authorized && !registrationSuccess && !forgotPassword && userExist && (
        <LoginPage 
          email={email} 
          setEmail={setEmail}
          password={password} 
          setPassword={setPassword}
          checkbox={checkbox}
          setCheckbox={setCheckbox} 
          authorized={authorized} 
          handleLogin={handleLogin}
          userExist={userExist}
          handleRegistration={handleRegistration}
          handleForgotPassword={handleForgotPassword}
          forgotPassword={forgotPassword}
          handleForgotPasswordSubmit={handleForgotPasswordSubmit}
        />
      )}
      {authorized && (
        <PageAfterLogin handleExit={handleExit} user={user} />
      )}
      {forgotPassword && (
        <ForgotPasswordPage 
          email={email} 
          setEmail={setEmail} 
          forgotPassword={forgotPassword} 
          handleForgotPasswordSubmit={handleForgotPasswordSubmit} 
        />
      )}
      {!userExist && (
        <RegistrationPage 
          user={user} 
          handleUserInput={handleUserInput} 
          onRegistrationSubmit={onRegistrationSubmit} 
          registrationSuccess={registrationSuccess} 
          handleAfterRegistration={handleAfterRegistration}
          registeredUserName={registeredUserName}
        />
      )}
    </div>
  )
}

export default App
