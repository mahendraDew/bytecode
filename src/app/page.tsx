"use client"

import Hero from '@/components/landing/Hero'
import LaunchingSoon from '@/components/landing/LaunchingSoon'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Preloader from '@/components/landing/preloader'


export default function Home () {
  const [loading, setLoading] = useState(true)

  return (
    <div className='w-full h-screen '>
     {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <>
            <Hero />

            <LaunchingSoon />

            <Footer /> 
          </>
        )}
    </div>
  )
}
