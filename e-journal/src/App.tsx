import { Container } from 'react-bootstrap'
import './App.css'
import { Header } from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './components/pages/MainPage/MainPage'
import { AuthPage } from './components/pages/AuthPage/AuthPage'
import { AdminPage } from './components/pages/AdminPage/AdminPage'
import { ProfilePage } from './components/pages/ProfilePage/ProfilePage'
import { useEffect } from 'react'
import { UserInStorage } from './localStorageManager/types/userInStorage'
import { appAxios } from './appAxios/appAxios'
import { useAppDispatch, useAppSelector } from './Redux/storehooks'
import { setUserFromStorage } from './Redux/features/user/userSlice'
function App() {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userFromStorage : UserInStorage = JSON.parse(localStorage.getItem("user")!);
    async function checkToken(token : string) {
        const response = await appAxios.post<boolean>("/user/check-auth-token", {}, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
        if(!user.isLogin && response.data){
            dispatch(setUserFromStorage(userFromStorage))
        }
    }
    if(user.JwtToken === "" && userFromStorage){
      checkToken(userFromStorage.jwtToken)
    }
}, [])

  return (
    <>
        <Container className=' bg-pink-200 min-h-screen max-h-[200vh]' fluid>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<MainPage />}/>
              <Route path='/main' element={<MainPage />}/>
              <Route path='/admin' element={<AdminPage />}/>
              <Route path='/profile' element={<ProfilePage />}/>
              <Route path='/auth' element={<AuthPage />}/>
            </Routes>
          </BrowserRouter>
        </Container>
    </>
  )
}

export default App
