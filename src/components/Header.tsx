import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import menu from '../images/menu.svg'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <div className='flex justify-between items-center min-w-[320px] px-[25px] py-[16px]'>
        <div className="">
            <img src={menu} alt="menu" className='lg:hidden' onClick={()=>{setIsSidebarOpen(true)}}/>
            <Menu isOpen={isSidebarOpen} onClose={()=>{setIsSidebarOpen(false)}}>
                <a className='menu-item' href='/'>Главная</a>
                <a className='menu-item' href='/'>Бронирование</a>
                <a className='menu-item' href='/'>Для бизнеса</a>
            </Menu>
            <a href="/">
                <img src={logo} alt="logo" className='hidden lg:block'/>
            </a>

        </div>
        <div className="">
            <img src={logo} alt="logo" className='lg:hidden'/>
            <div className="lg:flex hidden gap-[80px] font-medium text-[20px]">
                <Link to='/'>Главная</Link>
                <Link to='/'>Бронирование</Link>
                <Link to='/'>Для бизнеса</Link>
            </div>
        </div>
        <a href="/auth">
            <div className="w-[45px] h-[45px] bg-[#D9D9D9] rounded-full"></div>
        </a>
    </div>
  )
}
