import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Notes from '../components/Notes/Notes'

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();
  useEffect(() => {setMounted(true)}, []);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className="p-3 lg:px-32">
        <Notes />
      </div>
    
    </div>
  )
}

export default Home
