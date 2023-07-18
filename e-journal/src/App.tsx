import { Container } from 'react-bootstrap'
import './App.css'
import {RouterProvider} from 'react-router-dom'
import { getRoutes } from './router'
import { Header } from './components/header/Header'

function App() {

  return (
    <>
      <Container className=' bg-pink-200 min-h-screen max-h-[200vh]' fluid>
        <Header />
        <RouterProvider router={getRoutes()}/>
      </Container>
    </>
  )
}

export default App
