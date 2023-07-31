
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full">
    <nav className="flex flex-row items-center justify-center space-x-3 mt-3 headmd">
      <div>
        <Link className="text-blue-700  font-bold" href="/">
          Home
        </Link>
      </div>

      <div>
        <Link className="text-blue-700  font-bold" href="/">
          About
        </Link>
      </div>

      <div className="flex flex-row space-x-2">
        <div className="mt-1">
          <Image src="/icons/search.png" alt="" height={20} width={20} />
        </div>
        <input
          className="input border border-3 rounded"
          type="text"
          placeholder="search"
          name="search"
        />
      </div>

      <div className="relative bottom-1">
        <Image
          src="/icons/rond.png"
          alt=""
          height={9}
          width={9}
          className="ml-4"
        />

        <Link href={"/"}>
          <Image src="/icons/comment.png" alt="" height={20} width={20} />
        </Link>
      </div>

      <div>
        <Link href={"/"}>
          <Image src="/icons/history.png" alt="" height={20} width={20} />
        </Link>
      </div>

      <div>
        <Link href={"/"}>
          <Image src="/icons/panier.png" alt="" height={20} width={20} />
        </Link>
      </div>

      <div className="relative bottom-1">
        <Image
          src="/icons/rond.png"
          alt=""
          height={9}
          width={9}
          className=""
        />
        <Link href={"/"}>
          <Image src="/icons/notif.png" alt="" height={20} width={20} />
        </Link>
      </div>

      <div className="relative bottom-1">
        <Link href={"/"}>
          <Image src="/icons/profil.png" alt="" height={20} width={20} />
        </Link>
      </div>
    </nav>
  </header>
  )
}

export default Header