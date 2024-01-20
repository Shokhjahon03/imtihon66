import React from 'react'
import AddNavbar from '../components/AddNavbar'
import SidBar from '../components/SidBar'
import Footer from '../components/Footer'
import 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const AddProuductsP = () => {

  let navgatsiya=useNavigate()
  let goHome=()=>{
    navgatsiya('/')
  }
  return (
    <div>
      <AddNavbar/>
      <SidBar/>
      <div className='w-[1450px]  mt-[80px] bg-[#EEEEF5] ml-[97px] flex justify-center items-center pt-[40px] pb-[100px]'>
          <div className='w-[1179px] h-[720px] bg-white rounded-[1px] pl-[24px] pt-[6.19px] pr-[25px]'>
            <button onClick={goHome} className='bg-[#F0F0F6] w-[104px] h-[38px] rounded-[5px] mb-[11.1px] font-bold text-[14px] hover:bg-slate-500 hover:text-white'>
            Основные
            </button>
              <form className='forms pt-[21px] pl-[49px] pb-[129px]'>
                 <div className=' mb-[30px]'>
                 <label htmlFor="one">Название</label> <br />
                 <input id='' className='w-[764px] h-[44px] bg-[#F6F6FB] rounded-[6px]' type="text" name=''  />
                 </div>
                 <div className='flex justify-between w-[764px] pb-[21px] mb-[30px]'>
                            <div>
                                   <label htmlFor="one">Бренд</label> <br />
                                <input id='' className='w-[362px] h-[44px] bg-[#F6F6FB] rounded-[6px]' type="text" name=''  />
                            </div>
                            <div>
                                   <label htmlFor="one">Артикул производителя</label> <br />
                                <input id='' className='w-[362px] h-[44px] bg-[#F6F6FB] rounded-[6px]' type="text" name=''  />
                            </div>
                 </div>
                  <div className=' mb-[92.74px]'>
                  <label htmlFor="one">Описание</label> <br />
                 <input id='' className='w-[764px] h-[110px] bg-[#F6F6FB] rounded-[6px]' type="text" name=''  />
                  </div>
                  <div className='flex justify-between w-[476px]'>
                            <div>
                                   <label htmlFor="one">Цена</label> <br />
                                <input id='' className='w-[228px] h-[44px] bg-[#F6F6FB] rounded-[6px]' type="text" name=''  />
                            </div>
                            <div>
                                   <label htmlFor="one">Цена со скидкой</label> <br />
                                <input id='' className='w-[228px] h-[44px] bg-[#F6F6FB] rounded-[6px]' type="text" name=''  />
                            </div>
                 </div>
              </form>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AddProuductsP
