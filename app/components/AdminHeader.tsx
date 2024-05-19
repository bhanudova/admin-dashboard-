"use client"
import Image from 'next/image'
import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuLayoutGrid } from "react-icons/lu";
import { BsSearch } from "react-icons/bs";
import AdminHeaderNavMenu from './AdminHeaderNavMenu';

const AdminHeader = () => {
  return (
    <div className='py-2.5 flex justify-between shadow-md px-7 items-center fixed w-full top-0 bg-white'>
      <div className='flex items-center gap-2'>
        <Image src={'/phoenix_logo.png'} width={600} height={600} alt='Logo' className='w-7' />
        <h2 className='font-medium text-2xl text-gray-600'>phoenix</h2>
      </div>
      <div className='flex items-center gap-1.5'>
        <div className='transform scale-x-[-1]  bg-[#EBECED] rounded-full p-2'>
          <BsSearch className='w-5 h-5 text-[#3F6AD8] font-bold '/>
        </div>
        <div>
          <AdminHeaderNavMenu />
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div>
          <IoIosNotificationsOutline className='text-2xl' />
        </div>
        <div>
          <LuLayoutGrid className='text-2xl' />
        </div>
        <div>
          <Image src={'/profile_logo.webp'} width={600} height={600} alt='Logo' className='w-10 h-10 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader