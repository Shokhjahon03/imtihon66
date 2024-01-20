import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <div className='fixed flex bottom-0 left-0 w-full h-[80px] bg-white z-10 justify-center items-center'>
        <div className=' flex w-[219px] justify-between items-center'>
            <button className=' text-[14px] font-extrabold leading-[10.08px] text-[#80809B] hover:text-white  w-[117px] h-[40px] rounded-[6px] bg-[#F7F7FF] hover:bg-[#1BC58D]'>Сохранить</button>
            <button className=' text-[14px] font-extrabold leading-[10.08px] text-[#80809B] hover:text-white  w-[94px] h-[40px] rounded-[6px] bg-[#F7F7FF] hover:bg-[#1BC58D]'>Отмена</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
