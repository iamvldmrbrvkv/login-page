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
  const [users, setUsers] = useState([])
  const [reqistrationSuccess, setReqistrationSuccess] = useState(false)
  const [name, setName] = useState('')
  
  function handleLogin(e) {
    e.preventDefault()
  /*   if (users.length === 0) {
      return alert('Пользователя не сущесвует, пожалуйста зарегисрируйтесь')
    } */
    setAuthorized(!authorized)
    setEmail('')
    setPassword('')
    setCheckbox(!checkbox)
  }

  function handleExit() {
    setAuthorized(!authorized)
  }

  function onRegisterSubmit(e) {
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
    {!authorized ? (
      <LoginPage 
      email={email} 
      setEmail={setEmail}
      password={password} 
      setPassword={setPassword}
      checkbox={checkbox}
      setCheckbox={setCheckbox} 
      authorized={authorized} 
      handleLogin={handleLogin}
    />) : authorized ? (
      <PageAfterLogin authorized={authorized} handleExit={handleExit} />
    ) : !users && (
      <>
        <RegistrationPage />
      </>
    )}
    </>
  )
}

export default App
