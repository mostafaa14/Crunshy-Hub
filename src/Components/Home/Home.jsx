import React from 'react'
import HeroSection from './HeroSection'
import CTA from './CTA'
import MenuSection from './MenuSection'
import ReservationHero from './ReservationHero'
import SpecialDishes from './SpecialDishes'
import FullBgSection from './FullBgSection'
import FeaturesSection from './FeaturesSection'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CTA/>
      <MenuSection/>
      <ReservationHero/>
      <SpecialDishes/>
      <FullBgSection/>
      <FeaturesSection/>
    </div>
  )
}
