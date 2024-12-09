import React from 'react'
import TextSVG from './ui/text-gradient-onhover'
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic']
})

export default function Footer () {
  return (
    <div className=' w-full text-zinc-300  bg-zinc-950 h-1/2 flex justify-center items-center overflow-y-hidden'>
     
      <div className='relative w-full h-full font-extrabold pt-14 '>
        <TextSVG text='BYTECODE' />
      </div>
      <p
        className={`cursor-default bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center font-thin tracking-tight text-transparent  text-zinc-500   absolute ${inter.className}`}
      >
        <span className='cursor-default'>dev by </span>
        <a
          href='https://x.com/mahendra_dew'
          className='italic hover:text-white transition-colors uppercase'
          target='_blank'
        >
          mahendra
        </a>
      </p>
    </div>
  )
}
