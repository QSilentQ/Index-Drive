import React from 'react'
import bg_logIn from '../images/logIn_bg.svg'
import circle from '../images/circle.svg'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default function RegIn() {
  return (
    <div className='flex justify-center '>
        <img src={bg_logIn} alt="bg_logIn" className='absolute blur-[1px] left-[-200px] z-[-1]'/>
        <img src={circle} alt="circle" className=' absolute blur-[1px] right-[-300px] z-[-1]'/>
        <div className="flex flex-col mt-[55px] pt-[50px] px-[50px] pb-[30px] bg-white opacity-90 rounded-[15px] border-2 border-black-500 shadow-lg">
            <img src={logo} alt="logo" className='w-[175px] m-auto '/>
            <div className="flex justify-center mt-[30px] text-[20px] font-medium">
                <span className=''>Регистрация</span>
            </div>
            <div className="flex mt-[15px] flex-col text-[20px] gap-[15px]">
              <input type="text" placeholder='Имя' className='border-solid border-b-2 border-[#D6D6D6]'/>
              <input type="text" placeholder='Фамилия' className='border-solid border-b-2 border-[#D6D6D6]'/>
              <input type="text" placeholder='Логин' className='border-solid border-b-2 border-[#D6D6D6]'/>
              <input type="text" placeholder='Телефон' className='border-solid border-b-2 border-[#D6D6D6]'/>
              <input type="text" placeholder='Пароль' className='border-solid border-b-2 border-[#D6D6D6]'/>
              <input type="text" placeholder='Повторите пароль' className='border-solid border-b-2 border-[#D6D6D6]'/>
            </div>
            <div className="my-[20px] flex justify-center">
              <Link to="/auth">
                <button className='px-[30px] py-[10px] lg:text-[24px] text-[18px] bg-[#FDE14B] rounded-[10px]'>Зарегистрироваться</button>
              </Link>
            </div>
            <div className="">
                <div className="space-x-[5px] lg:w-[300px] w-[226px]">
                <input type="checkbox" name="" id="" />
                <span>Я принимаю <a href="/" className='text-[#0066FF]'>пользовательское соглашение</a> и <a href="/" className='text-[#0066FF]'>обработку персональных данных</a></span>
              </div>
              <div className="space-x-[5px] lg:w-[300px] w-[226px] mt-[10px]">
                <input type="checkbox" name="" id="" />
                <span>Я не хочу получать рекламу и другие предложения от этого сервиса Index'а</span>
              </div>
            </div>
        </div>
    </div>
  )
}
