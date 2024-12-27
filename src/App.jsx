import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// export const API_URL =  "https://6597a585668d248edf231e3d.mockapi.io/AxiosTask"
export const API_URL =  "https://676e8c6fdf5d7dac1ccaff9a.mockapi.io/users"

function App() {

  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router}/>
  </>
}

export default App
