import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full bg-white fixed bottom-0 right-0'>
    <div className='foot1 p-2'>
      <div className="  flex flex-row space-x-2  w-full items-center">
      <div>
        <Link href={'/'}>
          <Image src={'/images/fb.png'} alt='' width={20} height={20}/>
        </Link>
      </div>

      <div>
        <Link href={'/'}>
          <Image src={'/images/insta.png'} alt='' width={20} height={20}/>
        </Link>
      </div>

      <div>
        <Link href={'/'}>
          <Image src={'/images/twit.png'} alt='' width={20} height={20}/>
        </Link>
      </div>

      <div>
        <Link href={'/'}>
          <Image src={'/images/what.png'} alt='' width={20} height={20}/>
        </Link>
      </div>

      <div>
        <Link href={'/'}>
          sebatien.tamegnon@gmail.com
        </Link>
      </div>

      <div>
        <Link href={'/'}>
          +228 92 38 86 81
        </Link>
      </div>
      </div>

      


      <div className='flex flex-row space-x-10  pl-32'>
      <div>
        <Link href={'/'}>
          About
        </Link>
      </div>

      <div>
        <Link href={'/'}>
          Confidentialité
        </Link>
      </div>
      </div>

    </div>
  </footer>
  )
}

export default Footer