import React from 'react'
import audi from '../images/audi.svg'

export default function BookingCar() {
  return (
    <div>
        <div className="lg:ml-[100px] mt-[25px] mb-[10px] flex lg:justify-normal justify-center gap-[15px] items-center lg:gap-[25px]">
            <span className='font-bold lg:text-[28px]'>Бронирование</span>
            <span className='lg:text-[20px]'>Посмотреть историю бронирования</span>
        </div>
        <span className='lg:ml-[100px] lg:text-[24px] font-medium ml-[20px]'>Каталог авто</span>
        <div className="mt-[30px] px-[50px] lg:px-[100px] flex flex-col gap-[20px] lg:flex-row justify-between mb-[60px]">
            <div className="grid lg:grid-cols-2 lg:flex-row gap-[40px] place-content-start">
                <div className="lg:w-[500px] w-[300px] p-[10px] border-2 border-gray-200 rounded-[20px]">
                    <img src={audi} alt="" />
                    <div className="flex justify-between">
                        <span className='font-semibold'>Audi S4</span>
                        <span className='font-medium'>от 7500 руб/сутки</span>
                    </div>
                </div>
                <div className="lg:w-[500px] w-[300px] p-[10px] border-4 border-sky-400 rounded-[20px]">
                    <img src={audi} alt="" />
                    <div className="flex justify-between">
                        <span className='font-semibold'>Audi S4</span>
                        <span className='font-medium'>от 7500 руб/сутки</span>
                    </div>
                </div>
                <div className="lg:w-[500px] w-[300px] p-[10px] border-2 border-gray-200 rounded-[20px]">
                    <img src={audi} alt="" />
                    <div className="flex justify-between">
                        <span className='font-semibold'>Audi S4</span>
                        <span className='font-medium'>от 7500 руб/сутки</span>
                    </div>
                </div>
                <div className="lg:w-[500px] w-[300px] p-[10px] border-2 border-gray-200 rounded-[20px]">
                    <img src={audi} alt="" />
                    <div className="flex justify-between">
                        <span className='font-semibold'>Audi S4</span>
                        <span className='font-medium'>от 7500 руб/сутки</span>
                    </div>
                </div>
                <div className="lg:w-[500px] w-[300px] p-[10px] border-2 border-gray-200 rounded-[20px]">
                    <img src={audi} alt="" />
                    <div className="flex justify-between">
                        <span className='font-semibold'>Audi S4</span>
                        <span className='font-medium'>от 7500 руб/сутки</span>
                    </div>
                </div>
                <div className="lg:w-[500px] w-[300px] p-[10px] border-2 border-gray-200 rounded-[20px]">
                    <img src={audi} alt="" />
                    <div className="flex justify-between">
                        <span className='font-semibold'>Audi S4</span>
                        <span className='font-medium'>от 7500 руб/сутки</span>
                    </div>
                </div>
            </div>
            <div className="border-2 border-stone-200 shadow-lg p-[30px] h-fit rounded-[10px]">
                <div className="flex flex-col text-center">
                    <img src={audi} alt="" />
                    <span className='mb-[30px] text-[30px] font-semibold'>Audi S4</span>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-[8px]">
                        <span className='text-stone-400'>Мощность</span>
                        <span>333 л.с.</span>
                        <span className='text-stone-400'>Объём</span>
                        <span>3.0 л</span>
                        <span className='text-stone-400'>Коробка</span>
                        <span>Робот</span>
                        <span className='text-stone-400'>Тип двигателя</span>
                        <span>Бензиновый</span>
                        <span className='text-stone-400'>Привод</span>
                        <span>Полный</span>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <span className='text-stone-400'>Топливо</span>
                        <span>АИ-95</span>
                        <span className='text-stone-400'>Разгон</span>
                        <span>5.0 с</span>
                        <span className='text-stone-400'>Расход</span>
                        <span>8.1 л</span>
                        <span className='text-stone-400'>Класс авто</span>
                        <span>D</span>
                        <span className='text-stone-400'>Кол-во дверей</span>
                        <span>4</span>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <span className='text-stone-400'>Макс. скорость</span>
                        <span>250 км/ч</span>
                        <span className='text-stone-400'>Длина</span>
                        <span>4716 мм</span>
                        <span className='text-stone-400'>Ширина</span>
                        <span>1826 мм</span>
                        <span className='text-stone-400'>Высота</span>
                        <span>1406 мм</span>
                        <span className='text-stone-400'>Клиренс</span>
                        <span>120 мм</span>
                    </div>
                </div>
                <div className="flex justify-center mt-[35px]">
                    <button className='p-[15px] border-2 border-sky-500 rounded-[15px] text-white bg-sky-500 font-bold'>Оформить бронирование</button>
                </div>
                {/* <div className="flex justify-between">
                    <span>Мощность</span>
                    <span>Топливо</span>
                    <span>Макс. скорость</span>
                </div>
                <div className="flex justify-between">
                    <span>333 л.с.</span>
                    <span>АИ-95</span>
                    <span>250 км/ч</span>
                </div>
                <div className="flex justify-between">
                    <span>Объём</span>
                    <span>Разгон</span>
                    <span>Длина</span>
                </div>
                <div className="flex justify-between">
                    <span>3.0 л</span>
                    <span>5.0 с</span>
                    <span>4716 мм</span>
                </div>
                <div className="flex justify-between">
                    <span>Коробка</span>
                    <span>Расход</span>
                    <span>Ширина</span>
                </div>
                <div className="flex justify-between">
                    <span>Робот</span>
                    <span>8.1 л</span>
                    <span>1826 мм</span>
                </div>
                <div className="flex justify-between">
                    <span>Тип двигателя</span>
                    <span>Класс авто</span>
                    <span>Высота</span>
                </div>
                <div className="flex justify-between">
                    <span>Бензиновый</span>
                    <span>D</span>
                    <span>1406 мм</span>
                </div>
                <div className="flex justify-between">
                    <span>Привод</span>
                    <span>Кол-во дверей</span>
                    <span>Клиренс</span>
                </div>
                <div className="flex justify-between">
                    <span>Полный</span>
                    <span>4</span>
                    <span>120 мм</span>
                </div> */}
            </div>
        </div>
    </div>
  )
}
