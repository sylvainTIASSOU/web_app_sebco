import { Menu } from '@headlessui/react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Dropdownmenu = () => {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items className='flex flew-col space-x-8'>

        <Menu.Item>
        <Link className='text-blue-700  font-bold' href='/'>Home</Link>
        </Menu.Item>

        <Menu.Item>
        <Link className='text-blue-700  font-bold' href='/'>About</Link>
        </Menu.Item>

        
        <Menu.Item >
        <div className='mt-1'>
             <Image src='/icons/search.png' alt='' 
             height={20}
             width={20}/>
            </div>
            <input className='input border border-3 rounded' type="text" placeholder='search' name='search'/>
          
        </Menu.Item>


        <Menu.Item >
           <Image src='/icons/rond.png' alt='' 
             height={9}
             width={9}
             className='ml-4'/>

              <Link href={'/'}>
                <Image src='/icons/comment.png' alt='' 
                            height={20}
                            width={20}/>
            </Link>
          </Menu.Item>


          <Menu.Item >
           <Link href={'/'}>
              <Image src='/icons/history.png' alt='' 
             height={20}
             width={20}/>
              </Link>
          </Menu.Item>


          <Menu.Item >
           <Link href={'/'}>
              <Image src='/icons/panier.png' alt='' 
             height={20}
             width={20}/>
              </Link>
          </Menu.Item>


          <Menu.Item >
          <Image src='/icons/rond.png' alt='' 
             height={9}
             width={9}
             className=''/>
             <Link href={'/'}>
              <Image src='/icons/notif.png' alt='' 
             height={20}
             width={20}/>
              </Link>
          </Menu.Item>

          <Menu.Item >
          <Link href={'/'}>
              <Image src='/icons/profil.png' alt='' 
             height={20}
             width={20}/>
              </Link>
          </Menu.Item>

          <Menu.Item >
          
          </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default Dropdownmenu