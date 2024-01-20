import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
const LoginP = () => {
    let  navigate = useNavigate();
let [values,setVal]=useState(
    {
        name:'',
        parol:''
    }
)
    // let Onsubmited=(event)=>{
    //     event.preventDefault()
    // }
    let HendalSubmit=()=>{
        if(values.name!=='' && values.parol!=='' && values.parol.length>8){
           return  localStorage.setItem('login',JSON.stringify(values))
        }

    }
  return (
    <div className=' w-full h-full bg-black'>
        <div className="container">
        <form className=' h-dvh flex flex-col items-center justify-center gap-10 '>
            <h2 className='text-white'>Login</h2>
        <input className=' bg-[#551a4b] pl-[20px] rounded-3xl pt-[20px] pb-[20px]' type="text" placeholder='# ismingiz' name='name' onChange={(e)=>setVal({
            name:e.target.value,
            parol:values.parol,
        })}/>
        <input className=' bg-[#551a4b] pl-[20px] rounded-3xl pt-[20px] pb-[20px]' type="text" placeholder='# parol' name='parol' onChange={(e)=>setVal({
               name:values.name, 
            parol:e.target.value,
        })}/>
        {/* <button onClick={()=>HendalSubmit()} type='submit'>add</button> */}
        <button onClick={()=>HendalSubmit()} type='submit' className="bookmarkBtn">
  <span className="IconContainer">
    <svg viewBox="0 0 384 512" height="0.9em" class="icon">
      <path
        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
      ></path>
    </svg>
  </span>
  <p className="text">Enter</p>
</button>
      </form>
        </div>
    </div>
  )
}

export default LoginP
