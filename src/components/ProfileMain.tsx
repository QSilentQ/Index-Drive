import React from 'react'
import profile from '../images/profile.svg'


export default function ProfileMain() {
  return (
    <div className='flex flex-col lg:flex lg:flex-row lg:justify-center lg:mt-[110px] gap-[20px] lg:gap-[100px]'>
      <div className="flex flex-col lg:gap-[20px] text-center justify-center">
        <img src={profile} alt="profile" className='mx-auto w-[200px] lg:w-[350px]'/>
        <button>Изменить фото</button>
        <span className='text-blue-600'>Пользовательское соглашение</span>
        <span className='text-blue-600'>Соглашение на обработку персональных данных</span>
      </div>     
      <div className="mx-[15px] mb-[15px]">
        <div className="pl-[35px] mb-[10px]">
          <span className='p-[5px] border-b-2 border-sky-600'>Личные данные</span>
          <span></span>
          <span></span>
        </div>
      <div className="p-[25px] mx-[15px] border-solid border-2 border-black-500 shadow-lg rounded-[15px] flex flex-col gap-[15px]">
        <div className="flex justify-between lg:gap-[320px]">
          <span className=''>Имя</span>
          <span className='w-[200px] p-[10px] text-neutral-400 border-solid border-2 border-black-500 shadow-lg rounded-[15px]'>Иван</span>
        </div>
        <div className="flex justify-between">
          <span className=''>Фамилия</span>
          <span className='w-[200px] p-[10px] border-solid text-neutral-400 border-2 border-black-500 shadow-lg rounded-[15px]'>Иванов</span>
        </div>
        <div className="flex justify-between">
          <span className=''>Отчество</span>
          <span className='w-[200px] p-[10px] border-solid text-neutral-400 border-2 border-black-500 shadow-lg rounded-[15px]'>Иванович</span>
        </div>
        <div className="flex justify-between">
          <span className=''>Телефон</span>
          <span className='w-[200px] p-[10px] border-solid text-neutral-400 border-2 border-black-500 shadow-lg rounded-[15px]'>7 (999) 999-99-99</span>
        </div>
        <div className="flex justify-between">
          <span className=''>Почта</span>
          <span className='w-[200px] p-[10px] border-solid text-neutral-400 border-2 border-black-500 shadow-lg rounded-[15px]'>index@index.ru</span>
        </div>
        <div className="flex justify-between">
          <span className=''>Паспорт</span>
          <span className='w-[200px] p-[10px] border-solid text-neutral-400 border-2 border-black-500 shadow-lg rounded-[15px]'>99 99 999999</span>
        </div>
        <div className="flex justify-between">
          <span className=''>Номер вод. прав</span>
          <span className='w-[200px] p-[10px] border-solid text-neutral-400 border-2 border-black-500 shadow-lg rounded-[15px]'>99 99 999999</span>
        </div>
        <div className="flex justify-center mt-[25px]">
          <button className='border-2 px-[55px] py-[10px] rounded-[10px] border-yellow-300 bg-yellow-300 shadow-lg'>Сохранить</button>
        </div>
      </div>
      </div>     
    </div>
  )
}
