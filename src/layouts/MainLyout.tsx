import { useState } from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <header className='flex h-18 w-full items-center justify-between bg-blue-300 p-4'>
        <div>Logo</div>
        <div>menu</div>
        <div onClick={() => setIsLoggedIn(!isloggedIn)}>
          {!isloggedIn ? (
            <button className='rounded-md bg-green-400 px-4 py-2 text-xl font-semibold hover:cursor-pointer'>
              Login
            </button>
          ) : (
            <div className='aspect-square h-14 w-auto rounded-full bg-slate-600'></div>
          )}
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default MainLayout
