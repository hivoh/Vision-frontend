import  { JSX } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { router } from './router'

function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#F2F2F2',
            border: '1px solid #d2813d'
          },
          success: {
            iconTheme: {
              primary: '#27AE60',
              secondary: '#FFFFFF',
            },
          },
          error: {
            iconTheme: {
              primary: '#E85757',
              secondary: '#FFFFFF',
            },
          },
        }}
      />
    </>
  )
}

export default App