'use client'

import { Hero } from '@/components/sections/hero'
import { ImpactAreas } from '@/components/sections/impact-areas'
import { Statistics } from '@/components/sections/statistics'
import { CaseStudies } from '@/components/sections/case-studies'
import { FutureVision } from '@/components/sections/future-vision'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactAreas />
      <Statistics />
      <CaseStudies />
      <FutureVision />
      <CTASection />
    </>
  )
}