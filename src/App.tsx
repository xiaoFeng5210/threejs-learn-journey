import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StarrySkyBox from './components/StarrySkyBox'
import { router } from './router/router.tsx'
import { RouterProvider, } from "react-router-dom";
import './App.css'

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
