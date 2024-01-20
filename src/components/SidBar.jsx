import { Fragment } from "react"
import mask from '../assets/mask.svg'
import savat from '../assets/1.svg'
import profil from '../assets/Профиль.svg'
const SidBar = () => {
  return (
    <Fragment>
      <div className="Saidbar z-20 w-[97px] h-[768px] fixed top-0 left-0 bg-[#5B5CE2] flex flex-col pt-[30px] items-center">
        <div className="mb-[38px]">
            <img className="w-[62px] h-[62px]" src={mask} alt="alt" />
        </div>
        <div className=" flex w-[49px] h-[150px] flex-col">
            <button className="w-full h-[50px] rounded-lg flex items-center justify-center hover:bg-[#6C6DE5]"><i className='bx bxs-cog text-[#E9E9FF] text-[30px]'></i></button>
            <button className="w-full h-[50px] rounded-lg flex items-center justify-center hover:bg-[#6C6DE5]"><img className="w-[50px] h-[30px]" src={profil} alt="alt" /></button>
            <button className="w-full h-[50px] rounded-lg flex items-center justify-center hover:bg-[#6C6DE5]"><img className="w-[50px] h-[30px]" src={savat} alt="alt" /></button>
        </div>
      </div>
    </Fragment>
  )
}

export default SidBar
