import Hero from '@/components/landing/Hero'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
// import FlickeringGrid from '@/components/magicui/flickering-grid'
import FlickeringGrid from '@/components/ui/flickering-grid'
import LaunchingSoon from '@/components/landing/LaunchingSoon'
import Footer from '@/components/Footer'


export default function Home () {
  return (
    <div className='w-full h-screen '>
     
      <Hero />

      <LaunchingSoon />

      <Footer />
    </div>
  )
}
