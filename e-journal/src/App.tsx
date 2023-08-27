import { Container } from 'react-bootstrap'
import './App.css'
import {RouterProvider} from 'react-router-dom'
import { getRoutes } from './router'
import { Header } from './components/header/Header'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <Container className=' bg-pink-200 min-h-screen max-h-[200vh]' fluid>
        <Header />
        <RouterProvider router={getRoutes()}/>
      </Container>
      </Provider>
    </>
  )
}

export default App
