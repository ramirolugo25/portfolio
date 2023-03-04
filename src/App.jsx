import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ThemeProvider } from './context/ThemeProvider';
import './styles/app.css';


export const App = () => {

  return (
    <ThemeProvider>
      <Header />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>
  )
}
