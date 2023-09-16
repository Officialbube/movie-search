import React from 'react'
import logo from '../../assets/tv.png'
import burger from '../../assets/Menu.png'

const NavBar = () => {
  return (
    <div className="h-[5rem] w-vw border">
        <div className='flex items-center justify-between h-full md:px-[5.94rem]'>
            <div className='flex items-center gap-[0.5rem] md:gap-[1.5rem]'>

                <img src={logo}/>
                <p className='text-[1.5rem] font-[700]'>MovieBox</p>
            </div>
            <div>
                <input type="search" placeholder="What do you want to watch?" className='border w-[8rem] md:w-[32.8rem] px-[0.62rem] rounded-[0.375rem] font-[400]'/>
            </div>
            <div className="flex items-center gap-[1.69rem]">
              <p className="hidden text-[1rem] font-[700]">Sign in</p>
              <div>
                <img src={burger}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar