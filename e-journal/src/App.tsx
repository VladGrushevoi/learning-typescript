import { Container } from 'react-bootstrap'
import './App.css'
import {RouterProvider} from 'react-router-dom'
import { getRoutes } from './router'
import { Header } from './components/header/Header'
import { useMongo } from './mongoRepository/useMongoDb'
import { useState } from 'react'
import { MongoClient } from 'mongodb'

function App() {
  const [connection, setConnection] = useState<MongoClient>()
  Promise.resolve(useMongo()).then(r => setConnection(r.connection))
  connection!.once('connected', () => {
    console.log("Connection on")
  })
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
