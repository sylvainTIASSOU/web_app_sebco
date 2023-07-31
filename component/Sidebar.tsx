'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Input } from '@/component'

const Sidebar = () => {
  return (
    <div className='fixed inset-y-0 left-0 mw-auto bg-white'>
    <div className='  flex flex-col space-y-2 p-5'>

        <div className='relative bottom-16'>
          <Image
          src={'/images/logo0.png'} alt='' width={200} height={200}
          />
        </div>

        <div className='flex flex-col space-y-2 relative bottom-24'>
        <div className='items-center'>
          <Button
          title = "Sables"
          containerStyle=" text-black text-lg font-bold bg-gray-200 w-full p-2"
          handleClick={()=>{
  
          }}
          />
        </div>

        <div className='items-center'>
          <Button
          title = "Graviers"
          containerStyle=" text-black text-lg font-bold bg-gray-200 w-full p-2"
          handleClick={()=>{
  
          }}
          />
        </div>

        <div className='items-center'>
          <Button
          title = "Remblais"
          containerStyle=" text-black text-lg font-bold bg-gray-200 w-full p-2"
          handleClick={()=>{
  
          }}
          />
        </div>

        <div className='items-center'>
          <Button
          title = "Boutique"
          containerStyle=" text-black text-lg font-bold bg-gray-200 w-full p-2"
          handleClick={()=>{
  
          }}
          />
        </div>
      
        </div>


        <div className='p-4 mt-4 rounded-8 flex flex-col space-y-2  bg-gray-200 mh-auto mw-auto relative bottom-24' >

          <h2 className='text-lg font-bold self-center'>Contacter Nous</h2>

          <div>
            <Input hint='Name' name='name' type='text' style='bg-white border-2'  />
          </div>
          <div>
            <Input hint='Email' name='email' type='text' style='bg-white border-2'  />
          </div>

          
          <div>
            <textarea name="message" id="" cols='20' rows="" placeholder='message'> message</textarea>
          </div>

          <div className='items-center'>
          <Button
          title = "ENVOYER"
          containerStyle=" text-white text-lg font-bold bg-blue-700 w-full p-1 rounded"
          handleClick={()=>{
  
          }}
          />
        </div>

        </div>

    </div>
  </div>

  )
}

export default Sidebar