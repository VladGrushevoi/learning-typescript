import { Container } from 'react-bootstrap'
import './App.css'
import { MainPage } from './components/pages/MainPage/MainPage'
import { Header } from './components/header/Header'

function App() {

  return (
    <>
      <Container className='h-full bg-pink-200 min-h-screen' fluid>
        <Header />
        <MainPage />
        {/* <Footer /> */}
      </Container>
    </>
  )
}

export default App
