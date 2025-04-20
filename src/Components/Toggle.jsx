import React, { useState } from 'react'

const Toggle = ({isChecked, setIsChecked}) => {

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        {/* Background track */}
        <div
          className={`block h-8 w-[80px] rounded-full transition ${
            isChecked ? 'bg-black' : 'bg-white'
          }`}
        ></div>

        {/* Toggle dot */}
        <div
          className={`dot absolute top-1 flex h-6 w-6 items-center justify-center rounded-full  transition-all duration-300 ${
            isChecked ? 'translate-x-12.5 bg-white' : 'translate-x-1 bg-black'
          }`}
        >
          
        </div>
      </div>
    </label>
  )
}

export default Toggle

