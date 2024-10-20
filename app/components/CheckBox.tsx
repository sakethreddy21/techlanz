import React from 'react'

const CheckBox = ({state, setState, title}:any) => {
  return (
   
    <div className="flex items-center gap-2 mt-4 justify-center w-full">
    <input
      type="checkbox"
      checked={state}
      onChange={() =>
        setState(!state)
      }
    />
    <label className="text-[#333333] font-medium">
      {title}
    </label>
  </div>
  )
}

export default CheckBox