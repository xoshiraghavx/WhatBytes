import React from 'react'
import { Button } from '../ui/button'
import { FaMap  } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border">
      <div className="flex items-center">
        <FaMap className="h-6 w-6 mr-2 text-black sm:h-8 sm:w-8" />
        <h1 className="text-xl font-bold lg:text-3xl">WhatBytes</h1>
      </div>
      <Button variant="outline" className="flex items-center">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQG_ZHtsdSLVxA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699945279822?e=1729728000&v=beta&t=RILKFuAA08migmLsPSWIPEMMNOYnaDeDfuBkDjvvhac"
          alt="Oshi Raghav"
          className="h-6 w-6 rounded-full mr-2"
        />
        <b>Oshi Raghav</b>
      </Button>
    </div>
  );
}

export default Header