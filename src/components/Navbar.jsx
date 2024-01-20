import React, { Fragment} from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    let username=JSON.parse(localStorage.getItem('login'))
    // const navigate = useNavigate();
    let logAut=()=>{
        localStorage.removeItem('login')
        // navigate("/login");
    }
  return (
    
    <Fragment>
      <nav className=' w-full fixed top-0 left-0 bg-white'>
        <div className="container">
            <div className="navbar w-full h-[80px] pl-[40px] pr-[40px] flex items-center justify-between">
                <div>
                    <p>Товары</p>
                    <p className=' text-[#B5B5C3]'>Главная / Товары</p>
                </div>
                <div className=' flex gap-9 '>
                    <div className=' flex items-center gap-5'>
                    <i className='bx bxs-user-account text-[#B5B5C3] text-[30px]' ></i>
                    <p className='decoration-dashed'>{username.name}</p>
                    </div>
                   <form>
                   <button onClick={logAut} className=' rounded-2xl flex items-center justify-around w-[105px] h-[40px] hover:bg-slate-400 hover:text-white'>
                    <i className='bx bxs-exit text-[#B5B5C3] text-[30px] '></i>
                    <p>Выйти</p>
                    </button>
                   </form>
                </div>
            </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
