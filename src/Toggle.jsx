import React, { useState } from 'react'
import './App.css';

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false)
    let bg = "";
    const handleToggle = ()=>{
      setIsToggled(!isToggled)
    }
  return (
    <div onClick={handleToggle} className='w-ful h-screen flex items-center justify-center bg-slate-300'>
        <div className={`swtich_toggle rounded-full  duration-1000  p-10 bg-slate-500 
           ${isToggled? "on" : "off"}`

        }>
            <span className={`rounded-full text-white p-6  ${isToggled?"on": "off"} `}>{isToggled?"On": "OFF"}</span>
        </div>
    </div>
  )
}

export default Toggle
