import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();
  useEffect(() => {setMounted(true)}, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className='h-screen w-screen flex flex-col space-y-10 items-center justify-center'>
        <h1 className='font-bold text-2xl'>Hello World!</h1>
        <button
         className='bg-black p-3 rounded-2xl text-white font-bold dark:text-black dark:bg-white'
         onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}
         >Toggle to { theme === 'light' ? 'Dark' : 'Light' }</button>
      </div>
      
    </div>
  )
}

export default Home
