import React from 'react'
import Image from "next/image";
import Logo from "../../public/Logo.svg";
const TopBar = () => {
  return (
    <div className="fixed top-0 w-full bg-white z-[99999]">
        <div className="flex sm:px-24 px-2 p-4 justify-center items-center gap-10 ">
          <Image
            src={Logo}
            alt="Techlanz logo"
            width={95}
            height={38}
            priority
          />
        </div>
      </div>
  )
}

export default TopBar