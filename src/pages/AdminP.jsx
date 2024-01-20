import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SidBar from '../components/SidBar'
import 'axios'
import 'react-router-dom'
import axios from 'axios'
import imgss from '../assets/image2.png'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
const AdminP = () => {
  let [x,setX]=useState(false)
  // logik Loader...........................
// let load=()=>{
//   setInterval(() => {
//     setX(false)
//   }, 3000);
// }
// useEffect(()=>{
//   load()
// },[])
  //.......................................
 let navigates=useNavigate()
  let [productalar,setProd]=useState([])
  let Axiosdata= async ()=>{
    let res= await axios.get('http://localhost:3000/products')
    let prods=await res.data
    setProd (prods)
  }
  useEffect(()=>{
    Axiosdata()
  },[])
  let locat=()=>{
    navigates('/add')
  }

  return (
    <div>
     <Navbar/>
     <SidBar/>
      {/* {
        x?<Loader/>:''
      } */}
      {
        productalar
        ?
        <div className='w-[1450px]  mt-[80px] bg-[#EEEEF5] ml-[97px] flex justify-center items-center pt-[40px] pb-[100px]'>
          <div className=' w-[1179px] flex flex-col items-center pt-[30px] bg-white rounded-[12px]'>
            <div className='ddd w-full flex justify-between pl-[25px] pr-[25px] relative pb-[43px]'>
              <p>Все товары (5)</p>
              <input className=' bg-[#F7F7FF] w-[250px] h-[40px] rounded-[12px] pl-[24px] ' type="search" placeholder='Поиск Бренд'/>
              <i class='bx bx-search-alt-2 absolute top-[11.5px] left-[908px] z-40 text-[#A4A4BA] text-[18px]'></i>
            </div>
            <div className='w-full'>
              <ul className=' flex w-full gap-20'>
                <li className=' flex w-[156px] justify-between mr-[183px]'>
                  <img src="" alt="alt" />
                  <p>Наименование</p>
                  </li>
                  <li className='w-[56px] mr-[134px]'>Таблица</li>
                  <li className='w-[54px] mr-[98px]'>Бренд</li>
                  <li className='w-[45px] mr-[106px]'>Цена</li>
                  <li className='w-[152px] '>Цена со скидкой</li>
              </ul>
            </div>
          </div>
        </div>
        :
        <div className='w-[1450px]  mt-[80px] bg-[#EEEEF5] ml-[97px] flex justify-center items-center pt-[40px] pb-[100px]'>
            <div className=' w-[1179px] flex flex-col items-center pt-[30px] bg-white rounded-[12px]'>
                  <p className='mb-[64px] font-extrabold text-[21px] leading-[15.12px]'>Вы пока не создали ни одного товара</p>
                  <img className='mb-[66px]' src={imgss} alt="alt" />
                  <button onClick={locat} className=' font-extrabold text-[15px] leading-[18.83px] mb-[89px] w-[223px] h-[48px] rounded-[6px] bg-[#1BC58D] text-white hover:bg-slate-500'>Создать первый товар</button>
            </div>
        </div>
      }
    </div>
  )
}

export default AdminP
