import React from 'react'
import { Outlet } from 'react-router-dom'
import  {Header , Navigation}  from '../Public/'

function Home() {
  console.log('re-render home')
  return (
    <div className='w-full flex gap-6 flex-col items-center h-full'>
            <Header />
            <Navigation />
            <div className='w-4/5 lg:w-3/5 flex flex-col items-center justify-start mt-3'>
                <Outlet />
            </div>
            <div className='h-[500px]'>

            </div>
        </div>
    
  )
}

export default Home