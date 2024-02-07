import React from 'react';
import cIcon from '../images/cIcon.svg';
import googleplay from '../images/googleplay.svg'
import appstore from '../images/appstore.svg'
import qrcode from '../images/qrcode.svg'

export default function Footer() {
	return (
		<div className='text-white bg-[#373737] '>
			<div className='pt-[10px] lg:py-[50px] flex flex-col lg:flex-row items-center lg:flex  gap-[40px] lg:gap-[100px] lg:px-[300px]'>
				<div className='flex flex-col lg:flex-row gap-[10px]'> {/* Text */}
					<div className='mb-[10px] lg:mr-[80px]'>
                        <span className=' font-bold pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Тем, кто уже наш клиент</span>
                        <div className="mt-[15px] flex flex-col space-y-[10px]">
                            <a href="/" className='w-[200px] pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Служба поддержки</a>
                            <a href="/" className='w-[200px] pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Справка</a>
                            <a href="/" className='w-[200px] pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Условия пользования</a>
                            <a href="/" className='w-[200px] pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Договор аренды</a>
                            <a href="/" className='w-[200px] pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Договор аренды простыми словами</a>
                            <a href="/" className='w-[200px] pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Баллы за друзей</a>
                        </div>
                    </div>
					<div className=''>
                        <span className='font-bold pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Тем, кто уже наш клиент</span>
                        <div className="mt-[5px] mb-[20px] flex flex-col space-y-[5px]">
                            <a href="/" className='w-[200px] pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Вакансии</a>
                            <a href="/" className='w-[200px] pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Хотим стать корп. клиентами</a>
                        </div>
                        <span className='w-[200px] font-bold pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>Если вы из СМИ</span>
                        <div className="mt-[5px]">
                            <a href="/" className='w-[200px] pb-[5px] border-2 border-white-500 border-x-[#373737] border-t-[#373737]'>qqsilentqq@gmail.com</a>
                        </div>
                    </div>
				</div>
				<div className='mt-[60px] lg:mt-0 lg:flex gap-[150px] items-center'> {/* Images */}
					<div className='flex flex-col gap-[20px] lg:gap-[60px]'>
                        <img src={googleplay} alt="googleplay" className='w-[200px] lg:w-fit'/>
                        <img src={appstore} alt="appstore" className='w-[200px] lg:w-fit'/>
                    </div>
					<div className='lg:flex lg:mt-[0px] mt-[60px]'>
                        <img src={qrcode} alt="qrcode" className='w-[200px] lg:w-fit'/>
                    </div>
				</div>
			</div>
			<div className='flex justify-center items-center space-x-[10px] p-[15px] mt-[40px] bg-black text-white text-[24px]'>
				<img src={cIcon} alt='cIcon' className='w-[30px]' />
				<span>2023</span>
				<span>Индекс Драйв</span>
			</div>
		</div>
	);
}
