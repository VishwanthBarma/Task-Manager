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

      <div className='h-screen w-screen flex'>
        
      </div>
      
    </div>
  )
}

export default Home
