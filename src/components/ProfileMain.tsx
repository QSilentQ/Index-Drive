import React from 'react'
import profile from '../images/profile.svg'


export default function ProfileMain() {
  return (
    <div>
      <div className="flex flex-col text-center ">
        <img src={profile} alt="profile" className='mx-auto w-[200px]'/>
        <button>Изменить фото</button>
        <span>Пользовательское соглашение</span>
        <span>Соглашение на обработку персональных данных</span>
      </div>     
      <div className="">
              
      </div>     
    </div>
  )
}
