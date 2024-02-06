import React from 'react'
import qrcode from '../images/qrcode.svg'
import appstore from '../images/appstore.svg'
import googleplay from '../images/googleplay.svg'

export default function Download() {
  return (
    <div className='h-[100px] lg:h-[400px] bg-[#FDE14B] flex justify-center space-x-[15px] lg:px-[250px] px-[15px] py-[15px] items-center mb-[60px]'>
        <div className="flex">
            <div className="flex flex-col w-[200px] lg:w-fit h-fit">
                <span className='text-[14px] lg:text-[48px] font-bold'>Ваш ключ от машины - наше приложение</span>
                <span className='text-[14px] lg:text-[32px]'>Так скачайте же его</span>
            </div>
        </div>
        <div className="">
            <div className="flex flex-col">
                <img src={appstore} alt="appstore" className='w-[90px] lg:w-[300px]'/>
                <img src={googleplay} alt="googleplay" className='w-[90px] lg:w-[300px]'/>
            </div>
        </div>
        <div className="">
            <img src={qrcode} alt="qrcode" className='w-[62px] lg:w-[300px]'/>
        </div>
    </div>
  )
}
