/**
 * Home Page
 * Main page composing all sections
 */

import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import CareerTimeline from './components/CareerTimeline'
import WorkAndImpact from './components/WorkAndImpact'
import Advisory from './components/Advisory'
import RevealOnScroll from './components/RevealOnScroll'

export default function HomePage() {
  return (
    <RevealOnScroll>
      <Hero />
      <WhatIDo />
      <CareerTimeline />
      <WorkAndImpact />
      <Advisory />
    </RevealOnScroll>
  )
}
