import React from 'react'
import bg_logIn from '../images/logIn_bg.svg'
import circle from '../images/circle.svg'
import logo from '../images/logo.svg'

export default function RegIn() {
  return (
    <div className='flex justify-center'>
        <img src={bg_logIn} alt="bg_logIn" className=' absolute blur-[1px] left-[-200px] z-[-1]'/>
        <img src={circle} alt="circle" className=' absolute blur-[1px] right-[-300px] z-[-1]'/>
        <div className="flex flex-col mt-[55px] pt-[50px] px-[50px] pb-[30px] bg-white opacity-90 rounded-[15px] border-2 border-black-500 shadow-lg">
            <img src={logo} alt="logo" className='w-[175px]'/>
            <div className="flex justify-center mt-[30px] text-[20px] font-medium">
                <span className=''>Регистрация</span>
            </div>
        </div>
    </div>
  )
}
