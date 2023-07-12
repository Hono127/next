import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='container mx-auto lg:px-2 lg:w-2/5'>
      <div className='container flex items-center justify-between mx-auto'>
        <Link href="/" className='text-2xl font-medium'>ああああ</Link>
        <div>
          <ul className='flex items-center justify-between text-sm py-4'>
            <li><Link href="#" className='block px-4 hover:text-sky-900 transition-all'>Home</Link></li>
            <li><Link href="#" className='block px-4 hover:text-sky-900 transition-all'>twitter</Link></li>
            <li><Link href="#" className='block px-4 hover:text-sky-900 transition-all'>Qiita</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar