"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SearchBar = () => {
  const [value, setValue] = useState("")

  return (
    <form className="self-center justify-self-center max-w-80 w-full relative flex items-center">
      <input
        type="text"
        placeholder='Cherchez une recette...'
        className="w-full bg-transparent px-4 py-2 rounded-[19px] border border-black/20 outline-none placeholder:text-black/30"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
      <Link href={`/${value ? `?q=${value}` : ''}`} type="submit" className='bg-transparent w-6 h-6 flex items-center justify-center absolute right-2'>
        <Image src={'/restaurant.svg'} alt='search' width={17.42} height={17.42} />
      </Link>
    </form>
  )
}

export default SearchBar