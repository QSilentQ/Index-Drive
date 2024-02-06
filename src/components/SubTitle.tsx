import React from 'react'

export default function SubTitle() {
  return (
    <div>
        <div className="grid">
            <div className="bg-[#F9E216] w-[300px] lg:w-[700px] pl-[80px] py-[5px] mt-[25px] shadow-lg mb-[10px]">
                <span className='text-[24px] lg:text-[64px] font-bold'>ИНДЕКС ДРАЙВ</span>
            </div>
            <span className='ml-[15px] lg:ml-[80px] text-[20px] lg:text-[32px] font-medium'>ТЕПЕРЬ В ТВОЕМ ГОРОДЕ</span>
        </div>
        <div className="lg:flex lg:justify-between px-[10px] lg:px-[160px] items-center mt-[20px] text-[16px] lg:text-[32px]">
            <ul className='list-disc space-y-[20px] ml-[35px] lg:ml-[110px]'>
                <li>Выбор лююбого удобного автомобиля</li>
                <li>Возможность выбора даты, времени и места</li>
                <li>Выбор тарифа</li>
                <li>Удобная система оплаты</li>
            </ul>
            <div className="mt-[20px] grid gap-[5px] px-[15px] mx-[10px] pt-[10px] pb-[15px] border-solid border-2 border-black-500 shadow-lg rounded-[15px] 
            bg-[#ffffff] w-fit h-fit lg:w-[780px] lg:h-[100%] lg:px-[30px] lg:py-[20px]">
                <div className="lg:text-[64px] text-[32px] font-bold">НАЧНИТЕ ПОЛЬЗОВАТЬСЯ СЕЙЧАС</div>
                <div className="flex lg:flex-row flex-col gap-[10px] justify-between">
                    <input type=" text" className=' rounded-[10px] pl-[15px] lg:text-[24px] border-solid border-2 border-black-500 py-[3px] lg:w-[100%]'/>
                    <button className='bg-[#F9E216] lg:w-fit lg:text-[18px] whitespace-nowrap font-bold text-[14px] rounded-[10px] py-[5px] px-[10px]'>СОЗДАТЬ ПРОФИЛЬ</button>
                </div>
                <div className="lg:text-[15px] flex gap-[10px]">
                    <input type="checkbox" />
                    <span>Я принимаю <span className='text-[#EBB804]'>Политику конфиденциальности</span></span>
                </div>
            </div>
        </div>
    </div>
  )
}
