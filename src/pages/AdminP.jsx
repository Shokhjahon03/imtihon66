import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SidBar from '../components/SidBar'
import 'axios'
import 'react-router-dom'
import axios from 'axios'
import imgss from '../assets/image2.png'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import togri from '../assets/togri.svg'
import edit from '../assets/edit.svg'
import trash from '../assets/trsh.svg'
const AdminP = ({x,setX}) => {

  let [editprod,setEdit]=useState([])
// confirm("Want to delete?")
 let navigates=useNavigate()
  let [productalar,setProd]=useState([])
  // let [search,setSearch]=useState('')
  let[searchvalue,seTsearch]=useState({name:''})
  let funckSearch=(search)=>{
    let serchdata=productalar.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
    setProd(serchdata)
  }

  useEffect(()=>{
    funckSearch(searchvalue)

  },[searchvalue])
  let Axiosdata= async ()=>{
   try {
    let res= await axios.get('http://localhost:3000/products')
    let prods=await res.data
    setProd (prods)
   } catch (error) {
    console.log(error);
   }
  }
  // main logic............

  let daletProduct=(id)=>{
     if (confirm("Ushbu product yo'q qilinsinmi")) {
      axios.delete(`http://localhost:3000/products/${id}`)
   .catch(error => {
     console.error('Error deleting resource:', error);
   });
   Axiosdata()
     }
  }

  let editProduct=(id)=>{
    // let editp=productalar.filter((e)=>id===e.id)
        setX(id)
      navigates('/add')


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
              <p>Все товары ({productalar.length})</p>
              <input onChange={(e)=>seTsearch({name:e.target.value})} className=' bg-[#F7F7FF] w-[250px] h-[40px] rounded-[12px] pl-[24px] ' type="search" placeholder='Поиск Бренд'/>
              <i class='bx bx-search-alt-2 absolute top-[11.5px] left-[908px] z-5 text-[#A4A4BA] text-[18px]'></i>
            </div>
            <div className='w-full'>
              <table>
              <tr className='h-[50px] text-[#B5B5C3]'>
                  <th className=' flex pl-[25px] gap-5 pr-[150px] items-center h-full pt-[12px]'> <img src={togri} alt="alt" /> <p className=' font-extrabold text-[12px] uppercase leading-[8.6px]'>Наименование</p></th>
                   <th className=' pr-[120px] font-extrabold text-[13px] leading-[9.6px]'>Артикул</th>
                   <th className=' pr-[120px] font-bold text-[15px]  leading-[10.8px]'>Бренд</th>
                   <th className=' pr-[120px] font-bold text-[15px]  leading-[10.8px]'>Цена</th>
                   <th className=' pr-[120px] font-bold text-[15px] leading-[10.8px]'>категория</th>
               </tr>
               {
                productalar.map((e,index)=>(
                  <tr key={index}>
                  <td className=' flex gap-5 pl-[25px]'>
                    <img src={togri} alt="alt" />
                    <p>Товар {index}</p>
                  </td>
                  <td >{e.stock}</td>
                  <td>{e.title}</td>
                  <td> <span className=' inline-block text-yellow-300 text-[20px]'>$</span> {e.price}</td>
                  <td>{e.category}</td>
                  <td className='pr-[10px]'>
                    <div className='flex gap-[10px]'>
                      <button onClick={()=>editProduct(e.id)}><img src={edit} alt="alt" /></button>
                      <button onClick={()=>daletProduct(e.id)}><img src={trash} alt="alt" /></button>
                    </div>
                  </td>
                </tr>
                ))
               }
              </table>
              <Link to='/add'>add</Link>
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
