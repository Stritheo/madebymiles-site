'use client'

/**
 * RevealOnScroll Component
 * Client Component - Intersection Observer wrapper
 * Adds reveal animations to sections as they enter viewport
 */

import { useEffect, useRef } from 'react'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
}

export default function RevealOnScroll({
  children,
  className = '',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      // Skip animations if reduced motion is preferred
      const sections = element.querySelectorAll('.reveal-section')
      const staggerItems = element.querySelectorAll('.reveal-stagger')
      sections.forEach(el => el.classList.add('is-visible'))
      staggerItems.forEach(el => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Optional: unobserve after revealing
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Observe all reveal sections
    const sections = element.querySelectorAll('.reveal-section')
    sections.forEach(section => observer.observe(section))

    // Observe all stagger items
    const staggerItems = element.querySelectorAll('.reveal-stagger')
    staggerItems.forEach(item => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
