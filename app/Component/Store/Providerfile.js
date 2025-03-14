"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { NextUIProvider } from '@nextui-org/react'

const Providerfile = ({children}) => {
  return (
    <Provider store={store}>
      <NextUIProvider>
       <ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light"
        />
      {children}
     
      </NextUIProvider>
    </Provider>
  )
}

export default Providerfile
