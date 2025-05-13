import { useState } from 'react'
import style from './App.module.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  function handleMode(){
    setDarkMode(prev=>{
      return !prev
    })
  }
  return (
    <div className={`${style.container} ${darkMode? style.containerDark : style.containerLight}`}>
    <Header mode={darkMode} handleMode = {handleMode}/>
    <Main mode = {darkMode}/>
    </div>
  )
}

export default App
