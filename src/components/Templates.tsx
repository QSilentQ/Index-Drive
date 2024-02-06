import React from 'react'
import templates from '../images/templates.svg'

export default function Templates() {
  return (
    <div className='mt-[60px]'>
        <div className="flex justify-center">
            <img src={templates} alt="templates" className='w-[55px] lg:w-[80px]'/>
        </div>
        <div className="flex flex-col space-y-[10px] mb-[15px] mt-[15px]">
            <span className='mx-auto lg:text-[32px] text-[16px] font-bold'>Наши машины для вашей жизни</span>
            <span className='mx-auto text-[16px] lg:text-[24px] text-center font-medium '>Понажимайте, и увидите, какие автомобили по каким тарифам можно взять</span>
        </div>
        <div className="mydict flex justify-center mb-[60px]">
          <div className="">
            <label>
              <input type="radio" name="radio"/>
              <span>На работу</span>
            </label>
            <label>
              <input type="radio" name="radio"/>
              <span>В аэропорт</span>
            </label>
            <label>
              <input type="radio" name="radio"/>
              <span>Переезд</span>
            </label>
            <label>
              <input type="radio" name="radio"/>
              <span>С детьми</span>
            </label>
            <label>
              <input type="radio" name="radio"/>
              <span>На свидание</span>
            </label>
          </div>
        </div>
      <div className="flex space-x-[15px] justify-center mb-[60px]">
        <div className="w-[180px] h-[180px] border-solid border-2 border-black-500 shadow-lg rounded-[15px]"></div>
        <div className="w-[180px] h-[180px] border-solid border-2 border-black-500 shadow-lg rounded-[15px]"></div>
      </div>
    </div>
  )
}
