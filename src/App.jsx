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
  const [reqistrationSuccess, setReqistrationSuccess] = useState(false)
  const [userExist, setUserExist] = useState(false)
  
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
    setUserExist(!userExist)
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
    if (user.password !== user.confirmPassword) {
      return alert('Пароли не совпадают')
    }
    setUsers(prevUsers => [...prevUsers, user])
    setReqistrationSuccess(true)
  }

  function handleAfterRegistration() {
    setAuthorized(!authorized)
    setUserExist(!authorized)
  }

  return (
    <>
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
      />
      ) : !userExist && (
        <PageAfterLogin authorized={authorized} handleExit={handleExit} />
      )}
      {userExist && (<RegistrationPage 
          user={user} 
          handleUserInput={handleUserInput} 
          onRegistrationSubmit={onRegistrationSubmit} 
          reqistrationSuccess={reqistrationSuccess} 
          handleAfterRegistration={handleAfterRegistration}
        />)}
    </>
  )
}

export default App