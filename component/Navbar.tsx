import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const NavBar = () => {
  return (
    <header className=''>
      <nav className=' mr-5 fixed top-0 right-0 flex flex-row space-x-8 mt-5'>
          <div>
            <Link className='text-blue-700 text-lg font-bold' href='/'>Home</Link>
          </div>

          <div>
          <Link className='text-blue-700 text-lg font-bold' href='/'>A Propos</Link>
          </div>

          <div className='flex flex-row space-x-2'>
          <div className='mt-1'>
             <Image src='/icons/search.png' alt='' 
             height={20}
             width={20}/>
            </div>
            <input className='border border-3 rounded' type="text" placeholder='search' name='search'/>
          </div>

          <div  className='relative bottom-2'>
           
          <Image src='/icons/rond.png' alt='' 
             height={9}
             width={9}
             className='ml-4'/>

              <Link href={'/'}>
                <Image src='/icons/comment.png' alt='' 
                            height={20}
                            width={20}/>
            </Link>

          
          </div>

          <div>
          <Link href={'/'}>
              <Image src='/icons/history.png' alt='' 
             height={20}
             width={20}/>
              </Link>
          
          </div>

          <div>
          <Link href={'/'}>
              <Image src='/icons/panier.png' alt='' 
             height={20}
             width={20}/>
              </Link>
          
          </div>

          <div className='relative bottom-2'>
          <Image src='/icons/rond.png' alt='' 
             height={9}
             width={9}
             className=''/>
             <Link href={'/'}>
              <Image src='/icons/notif.png' alt='' 
             height={20}
             width={20}/>
              </Link>
          
          </div>

          <div className='relative bottom-1'>
          <Link href={'/'}>
              <Image src='/icons/profil.png' alt='' 
             height={20}
             width={20}/>
              </Link>
          
          </div>
      </nav>
    </header>
  )
}

export default NavBar