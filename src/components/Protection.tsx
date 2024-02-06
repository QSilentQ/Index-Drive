import React from 'react'
import protection from '../images/protection.svg'
import car from '../images/car.svg'
import heart from '../images/heart.svg'
import money from '../images/money.svg'
import key from '../images/key.svg'
import headphones from '../images/headphones.svg'
import umbrella from '../images/umbrella.svg'

export default function Protection() {
  return (
    <div>
        <div className="flex justify-center flex-col mb-[15px]">
            <img src={protection} alt="protection" className='w-[60px] mx-auto lg:w-[80px]' />
            <span className='mx-auto text-[24px] lg:text-[32px] font-bold'>Не о чем переживать</span>
            <span className='mx-auto text-center text-[16px] lg:text-[24px] lg:max-w-fit max-w-[400px]'>На время поездки в машине Драйва вы прикрыты со всех сторон:</span>
        </div>
        <div className="lg:px-[60px] flex flex-col lg:flex-row lg:gap-[15px] space-y-[15px] lg:space-y-0 mb-[60px]">
            <div className="flex flex-col border-solid border-2 border-black-500 mx-auto shadow-lg items-center rounded-[15px] p-[15px] max-w-[400px] space-y-[5px]">
                <img src={car} alt="car" className='w-[60px]' />
                <span className='text-[16px] font-bold'>Есть ОСАГО</span>
                <span className='text-[15px]'>Обязательная страховка, которая защищает чужую машину, с которой вы столкнулись. Весь ущерб оплатит страховая.</span>
            </div>
            <div className="flex flex-col border-solid border-2 border-black-500 mx-auto shadow-lg items-center rounded-[15px] p-[15px] max-w-[400px] space-y-[5px]">
                <img src={umbrella} alt="umbrella" className='w-[60px]' />
                <span className='text-[16px] font-bold'>Есть КАСКО</span>
                <span className='text-[15px]'>Это необязательная страховка, но она есть. Если вы не виноваты, а второй участник ДТП известен — всё в порядке. Ущерб оплачивает страховая.</span>
            </div>
            <div className="flex flex-col border-solid border-2 border-black-500 mx-auto shadow-lg items-center rounded-[15px] p-[15px] max-w-[400px] space-y-[5px]">
                <img src={heart} alt="heart" className='w-[60px]' />
                <span className='text-[16px] font-bold'>Есть страхование жизни</span>
                <span className='text-[15px]'>Обязательная страховка, которая защищает чужую машину, с которой вы столкнулись. Весь ущерб оплатит страховая.</span>
            </div>
            <div className="flex flex-col border-solid border-2 border-black-500 mx-auto shadow-lg items-center rounded-[15px] p-[15px] max-w-[400px] space-y-[5px]">
                <img src={money} alt="money" className='w-[60px]' />
                <span className='text-[16px] font-bold'>Есть франшиза «Виновника»</span>
                <span className='text-[15px]'>При любых повреждениях вы не заплатите больше 40 000 ₽ за обычные машины, 75 000 ₽ за электрокары и Мустанги, а для Джипов цифра 150 000 ₽.</span>
            </div>
            <div className="flex flex-col border-solid border-2 border-black-500 mx-auto shadow-lg items-center rounded-[15px] p-[15px] max-w-[400px] space-y-[5px]">
                <img src={headphones} alt="headphones" className='w-[60px]'/>
                <span className='text-[16px] font-bold'>Поддержка в ДТП</span>
                <span className='text-[15px]'>Просто пишите в чат, как только что-то случится: оператор будет с вами всё время, пока едет ГИБДД и идёт оформление</span>
            </div>
            <div className="flex flex-col border-solid border-2 border-black-500 mx-auto shadow-lg items-center rounded-[15px] p-[15px] max-w-[400px] space-y-[5px]">
                <img src={key} alt="key" className='w-[60px]'/>
                <span className='text-[16px] font-bold'>Обслуживание парка</span>
                <span className='text-[15px]'>Автомобили в Драйве новенькие, прямо из салона и не задерживаются больше 2 - 3 лет, а также проходят плановое ТО у официальных дилеров.</span>
            </div>
        </div>
    </div>
  )
}
