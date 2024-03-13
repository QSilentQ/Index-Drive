import React from 'react'
import bg_logIn from '../images/logIn_bg.svg'
import circle from '../images/circle.svg'
import logo from '../images/logo.svg'
import vk from '../images/vk.svg'
import google from '../images/google.svg'
import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
    <div className='flex justify-center '>
        <img src={bg_logIn} alt="bg_logIn" className=' absolute blur-[1px] left-[-200px] z-[-1]'/>
        <img src={circle} alt="circle" className=' absolute blur-[1px] right-[-300px] z-[-1]'/>
        <div className="mt-[120px] w-fit bg-white opacity-90 border-2 border-black-500 shadow-lg items-center rounded-[15px] relative z-[2] flex flex-col pt-[55px] px-[27px] pb-[33px]">
            <div className="flex flex-col">
                <img src={logo} alt="logo" className='mx-auto' />
                <span className='text-[24px] mt-[20px] font-medium' >Вход в личный кабинет</span>
                <span className='mx-auto mt-[35px] text-[20px] font-medium'>Войдите с Index ID</span>
            </div>
            <div className="border-2 border-slate-200 text-[20px] flex gap-[5px] p-[5px] mt-[15px] rounded-[10px]">
                <button className='px-[40px] py-[7px] rounded-[10px] bg-[#FDE14B]'>Почта</button>
                <button className='px-[30px] py-[7px] border-2 border-gray-300 rounded-[10px]'>Телефон</button>
            </div>
            <span className='text-blue-600 font-medium'>Не помню</span>
            <div className="border-2 border-black-500 text-[20px] flex gap-[5px] p-[5px] mt-[15px] rounded-[10px]">
                <input type="text" className='px-[20px] py-[7px]' placeholder='Номер или E-mail'/>
            </div>
              <div className="flex flex-col mt-[25px] gap-[20px]">
                <Link to='/profile'>
                    <button className='w-full px-[80px] py-[13px] rounded-[15px] bg-[#FDE14B]'>Войти</button>
                </Link>
                <Link to='/reg'>
                    <button className='border-2 border-black-500 px-[80px] py-[13px] rounded-[15px]'>Создать ID</button>
                </Link>
            </div>
            <div className="flex gap-[20px] mt-[25px]">
                    <img src={vk} alt="vk" />
                <img src={google} alt="google" />
            </div>
        </div>
    </div>
  )
}
