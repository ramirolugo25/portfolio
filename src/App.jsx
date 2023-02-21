import { useEffect, useState } from 'react';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import './styles/app.css';


export const App = () => {

  const [darkTheme, setDarkTheme] = useState(false)

  const onHandleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  useEffect(() => {
    if (darkTheme){
      document.body.style.backgroundColor = '#212529';
    }else{
      document.body.style.backgroundColor = 'white';
    }
  }, [darkTheme])
  

  return (
    <>
      <Header onHandleTheme={onHandleTheme} darkTheme={darkTheme}/>
      <Presentation darkTheme={darkTheme}/>
      <Skills darkTheme={darkTheme}/>
      <Projects darkTheme={darkTheme}/>
      <Contact darkTheme={darkTheme}/>
    </>
  )
}
