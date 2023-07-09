'use client'

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Session} from 'next-auth'
import {signIn, signOut} from 'next-auth/react'
import Link from 'next/link';



export default function NavBar ({user}: Session) {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-black'>Functional Beings</h1>
      <ul className='hidden md:flex '>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>Contact</li>
        
        {!user && ( 
        <li className='p-4'>
          <button onClick={() => signIn()} className='whitespace-nowrap'>Sign In</button>
        </li>
        )}
        {user && ( 
        <li className='p-4'>
          <button onClick={() => signOut()} className='whitespace-nowrap'>Sign Out</button>
        </li>
        )}
       
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-black bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-black m-4'>Functional Beings</h1>
          <li className='p-4 border-b boarder-black'>Home</li>
          <li className='p-4 border-b boarder-black'>Company</li>
          <li className='p-4 border-b boarder-black'>Resources</li>
          <li className='p-4 border-b boarder-black'>Contact</li>
        
        {!user && ( 
        <li className='p-4'>
          <button onClick={() => signIn()} className='whitespace-nowrap'>Sign In</button>
        </li>
        )}
        {user && ( 
        <li className='p-4'>
          <button onClick={() => signOut()} className='whitespace-nowrap'>Sign Out</button>
        </li>
        )}
      </ul>
    </nav>
  );
};

