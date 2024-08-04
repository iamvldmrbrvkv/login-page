import './App.css'
import { useState } from 'react'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'
import PageAfterLogin from './PageAfterLogin'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [authorized, setAuthorized] = useState(false)
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [userExist, setUserExist] = useState(false)
  const [forgotPassword, setForgotPassword] = useState(false)
  
  function handleLogin(e) {
    e.preventDefault()
    let userExists = false;
    function checkUserExist(users, email, password) {
      userExists = users.some(user => user.email === email && user.password === password);
      if (!userExists) {
        alert('Пользователя не существует, проверьте данные или зарегистрируйтесь');
      }
    }
    
    checkUserExist(users, email, password)
    
    if (userExists) {
      setAuthorized(true);
      setEmail('');
      setPassword('');
      setCheckbox(false);
    }
  }

  function handleRegistration() {
    setUserExist(true)
    setEmail('');
    setPassword('');
    setCheckbox(false);
  }

  function handleExit() {
    setAuthorized(false)
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
    setRegistrationSuccess(true)
  }

  function handleAfterRegistration() {
    setAuthorized(false)
    setUserExist(false)
    setRegistrationSuccess(false)
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
      {!authorized && !userExist ? (
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
      ) : !userExist && (
        <PageAfterLogin authorized={authorized} handleExit={handleExit} />
      )}
      {userExist && (
        <RegistrationPage 
          user={user} 
          handleUserInput={handleUserInput} 
          onRegistrationSubmit={onRegistrationSubmit} 
          registrationSuccess={registrationSuccess} 
          handleAfterRegistration={handleAfterRegistration}
        />
      )}
    </div>
  )
}

export default App
