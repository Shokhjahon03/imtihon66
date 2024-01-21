import React, { Fragment } from 'react'
import 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const ProfileP = ({localValue}) => {
    let navg=useNavigate()
    let daletaccount=()=>{
       if (confirm('Regestratsiya bekor qilinsinmi')) {
        localStorage.removeItem('login')
        navg('/login')
       }
    }
  return (
    <Fragment>
      
    <div className=' w-full h-dvh bg-slate-700 flex justify-center items-center'>
     <div className=' w-[600px]'>
     <img className=' mb-[50px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2AtHue77BMQExNbuAxH3k3B1IWqMcM44OMFGGJJ-8sARIQcFlxW9kbGHXGRxoQG_tgc&usqp=CAU" alt="alt" />
     <div className=' bg-white w-full rounded-2xl pl-[20px] text-gray-700 h-[200px] flex flex-col justify-around'>
        <p className=' uppercase'>User : {localValue.name}</p>
        <hr />
        <p className=' uppercase'>user parol :{localValue.parol}</p>
     </div>
     <button onClick={()=>daletaccount()} className= ' p-[10px] rounded-2xl mt-5 bg-red-600 mr-5'>
        Log Aut
     </button>
     <button onClick={()=>navg('/')} className= ' p-[10px] rounded-2xl mt-5  bg-yellow-300'>
        Go Home
     </button>
     </div>
    </div>

    </Fragment>
  )
}

export default ProfileP
