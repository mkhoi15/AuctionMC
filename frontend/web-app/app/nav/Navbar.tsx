import React from 'react'
import { IoCarSportOutline } from 'react-icons/io5'
import Search from './Search'
import Logo from './Logo'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md'>
      {/* Left side*/}
      <Logo />
      <div className='flex justify-center w-3/5'>
        <Search />
      </div>
      <div className='flex justify-center'>
        Right
      </div>
    </header>
  )
}
