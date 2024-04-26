import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from './ui/button'
import Sidebar from './Sidebar'
import pinPost from '../assets/pinPost.png'

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

  const navigate = useNavigate()

  const clickHandler = () => {
    navigate('/login')
  }

  return (
    <nav className='px-2.5 py-4 flex justify-between items-center border-b border-blue-300 sticky h-16'>
      <Link to='/'>
        <img src={pinPost} alt="A pinPost logo" className='w-32 h-12' />
      </Link>
      <Button
        asChild
        onClick={() => setToggleMenu((prev) => !prev)}
        variant='outline'
      >
        <Sidebar toggleMenu={toggleMenu} />
      </Button>
      <Button
        onClick={clickHandler}
        className='hidden md:block'
      >
        Login
      </Button>
    </nav>
  )
}

export default MainNavigation