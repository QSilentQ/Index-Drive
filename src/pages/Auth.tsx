import React from 'react'
import Header from '../components/Header'
import LogIn from '../components/LogIn'

export default function Auth() {
  return (
    <div className='w-[100vw] h-[100vh] relative overflow-x-hidden overflow-y-hidden'>
        <Header/>
        <LogIn/>
    </div>
  )
}
