import { Container } from 'react-bootstrap'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { Header } from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './components/pages/MainPage/MainPage'
import { AuthPage } from './components/pages/AuthPage/AuthPage'
import { AdminPage } from './components/pages/AdminPage/AdminPage'
import { ProfilePage } from './components/pages/ProfilePage/ProfilePage'
function App() {
  return (
    <>
      <Provider store={store}>
        <Container className=' bg-pink-200 min-h-screen max-h-[200vh]' fluid>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<MainPage />}/>
              <Route path='/main' element={<MainPage />}/>
              <Route path='/admin/:id' element={<AdminPage />}/>
              <Route path='/profile/:id' element={<ProfilePage />}/>
              <Route path='/auth' element={<AuthPage />}/>
            </Routes>
          </BrowserRouter>
        </Container>
      </Provider>
    </>
  )
}

export default App
