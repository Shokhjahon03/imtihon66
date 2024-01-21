import React, { useEffect, useState } from 'react'
import AddNavbar from '../components/AddNavbar'
import SidBar from '../components/SidBar'
import Footer from '../components/Footer'
import 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddProuductsP = ({x,setX}) => {
  let [datass,setdats]=useState([])
  let navgatsiya=useNavigate()
  let [newdata,setNewdata]=useState({
      title:'',
      price:'',
      stock:'',
      category:''
  })
let [s,setS]=useState(false)



  // edit uchun....................................

  let idData=async ()=>{
    try {
      let a=await axios.get(`http://localhost:3000/products/${x}`)
      let b= await a.data
      if (x) {
        setNewdata(b)
      }
      console.log(b);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    idData()
  },[x])





  // .............................................
  let datas=async ()=>{
    let xx=await axios.get('http://localhost:3000/products')
    let y=await xx.data
    setdats(y)
  }




  // home.........................................
  let goHome=()=>{
    navgatsiya('/')
  }

 



  // data...............................................
  useEffect(()=>{
    datas()
    console.log(x);
  },[])



// post..................................................
let AddProud=()=>{
 
 if(newdata.title!==''){
  if (x!=='') {
    axios.put(`http://localhost:3000/products/${x}`,newdata)
    setX('')
    navgatsiya('/')
  }else{
    axios.post('http://localhost:3000/products',newdata)
    setX('')
    navgatsiya('/')
  }
  
 }else{
  setS(true)
 }
 

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
            {s && <p className=' text-red-600'>malumotlar toliq kiritilmagan</p>}
              <form className='forms pt-[21px] pl-[49px] pb-[129px]'>
                 <div className=' mb-[30px]'>
                 <label htmlFor="one">title {!newdata.title && <span className=' inline-block text-red-600'>*</span>}</label> <br />
                 <input name='title' onChange={(e)=>setNewdata({
                  title:e.target.value,
                  price:newdata.price,
                  stock:newdata.stock,
                  category:newdata.category
                 })} id='1' className='w-[764px] h-[44px] bg-[#F6F6FB] rounded-[6px]' type="text"  value={newdata.title}  />
                 </div>
                 <div className='flex justify-between w-[764px] pb-[21px] mb-[30px]'>
                            <div>
                                   <label htmlFor="one">price {!newdata.price && <span className=' inline-block text-red-600'>*</span>}</label> <br />
                                <input name='price' onChange={(e)=>setNewdata({
                  title:newdata.title,
                  price:e.target.value,
                  stock:newdata.stock,
                  category:newdata.category
                 })} id='2' className='w-[362px] h-[44px] bg-[#F6F6FB] rounded-[6px]' type="text" value={newdata.price}  />
                            </div>
                            <div>
                                   <label htmlFor="one">stock {!newdata.stock && <span className=' inline-block text-red-600'>*</span>}</label> <br />
                                <input name='stock' onChange={(e)=>setNewdata({
                  title:newdata.title,
                  price:newdata.price,
                  stock:e.target.value,
                  category:newdata.category
                 })} id='3' className='w-[362px] h-[44px] bg-[#F6F6FB] rounded-[6px]' type="text" value={newdata.stock}   />
                            </div>
                 </div>
                  <div className=' mb-[92.74px]'>
                  <label htmlFor="one">category {!newdata.category && <span className=' inline-block text-red-600'>*</span>}</label> <br />
                 <input onChange={(e)=>setNewdata({
                  title:newdata.title,
                  price:newdata.price,
                  stock:newdata.stock,
                  category:e.target.value
                 })} id='4' className='w-[764px] h-[110px] bg-[#F6F6FB] rounded-[6px]' type="text" name='category' value={newdata.category}  />
                  </div>
              </form>
          </div>
      </div>
      <Footer AddProud={AddProud}/>
    </div>
  )
}

export default AddProuductsP
