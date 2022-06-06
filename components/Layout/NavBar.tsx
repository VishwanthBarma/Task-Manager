import React from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import Link from 'next/link';

function NavBar() {
  const { user } = useUser();
  const [enabled, setEnabled] = useState(false);
  const {theme, setTheme} = useTheme();

  console.log(user);

  const changeTheme = () => {
    enabled ? setEnabled(false) : setEnabled(true);
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='w-screen p-[6px] lg:px-32 h-16 bg-black text-white dark:text-black dark:bg-white sticky top-0 flex justify-between items-center shadow-sm shadow-black dark:shadow-white'>
      {/* Profile */}

      <div className={`${user ? 'sm:w-60' : 'sm:w-32 w-14 items-center justify-center'} bg-white dark:bg-black h-full rounded-md flex space-x-2 cursor-pointer hover:bg-slate-100`}>
        {
          user ? (
            <>
            <div className='w-16 h-full relative'>
              {/* Image */}
              <img src={user?.picture} className='object-cover w-16 h-full'></img>
            </div>
            <div className='text-black dark:text-white flex-col justify-center hidden sm:flex'>
              <h1 className='font-bold'>{user?.nickname}</h1>
              <h1 className='text-slate-400 text-[12px]'>{user?.name}</h1>
            </div>
            </>
          ): (
            <>
            <Link href="/api/auth/login">
              <a>
                <h1 className='font-bold hover:dark:text-green-500 dark:text-white text-black sm:text-lg hover:text-green-500'>Login</h1>
              </a>
            </Link>

            </>
          )
        }
      </div>

      {/* Logo */}

      <div>
        <h1 className='text-white dark:text-black font-bold sm:text-2xl text-xl'>Task Manager</h1>
      </div>

      {/* Setting */}
      <div className='bg-gray-700 dark:bg-gray-900 rounded-md flex items-center h-full cursor-default'>
        <div className='bg-slate-800 dark:bg-slate-700 h-full w-14 rounded-md items-center flex justify-center cursor-pointer'>
          <IoSettingsSharp className='h-6 w-6 dark:text-white hover:rotate-45 duration-200'/>
        </div>
        {/* dark mode */}
        <div onClick={changeTheme} className='h-full hidden sm:flex items-center justify-center p-3 text-white cursor-pointer'>
          {
            theme == 'dark' ? (
              <MdDarkMode className='h-6 w-6 dark:text-white hover:dark:text-sky-500'/>
            ):(
              <MdOutlineDarkMode className='h-6 w-6 hover:text-sky-500'/>
            )
          }
        </div>
        {
          user && 
          <Link href="/api/auth/logout">
            <a>
              <div className='h-full hidden sm:flex bg-slate-800 bg-opacity-50 hover:bg-opacity-100 text-white items-center p-3 rounded-md cursor-pointer hover:text-orange-500'>
                <h1 className='font-semibold bg-slate-800 bg-opacity-50 hover:bg-opacity-100'>Logout</h1>
              </div>
            </a>
          </Link>
        }
        {/* <div className='space-x-2 p-3 items-center hidden sm:flex'>
          <h1 className='font-bold dark:text-white'>Theme</h1>
          <Switch
            checked={enabled}
            onChange={changeTheme}
            className={`${enabled ? 'bg-black dark:bg-gray-600' : 'bg-white'}
              relative inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-6 bg-white' : 'translate-x-0 bg-black'}
                pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
        </div> */}
      </div>
    </div>
  )
}

export default NavBar