'use client'

/**
 * CareerTimeline Component
 * Client Component - Interactive SVG timeline
 * Horizontal on desktop, vertical on mobile
 * Full keyboard navigation and accessibility
 */

import { useState, useCallback, useEffect } from 'react'
import type { CareerRole } from '../lib/types'
import styles from './CareerTimeline.module.css'

const careerRoles: CareerRole[] = [
  {
    id: 'westpac-banking-corporation',
    company: 'Westpac Banking Corporation',
    title: 'Senior Manager roles',
    startDate: '2004',
    endDate: '2009',
    metrics: [
      'Doubled written premiums',
      'NPS +25 to +44',
      'New operating model for distribution alliance',
    ],
    description:
      'Established distribution plan and operating model for Westpac-Allianz alliance.',
    tags: ['Partnerships', 'Distribution', 'NPS'],
    order: 1,
  },
  {
    id: 'hollard-insurance',
    company: 'Hollard Insurance',
    title: 'Chief Revenue Officer',
    startDate: '2009',
    endDate: '2014',
    metrics: [
      '15-year strategic alliance',
      'Portfolio transformation',
      'Hit target returns & risk appetite',
    ],
    description:
      'Established 15-year strategic alliance with CBA for one million customers.',
    tags: ['Alliances', 'Strategy', 'Portfolio'],
    order: 2,
  },
  {
    id: 'commonwealth-bank',
    company: 'Commonwealth Bank',
    title: 'GM General Insurance',
    startDate: '2014',
    endDate: '2020',
    metrics: [
      '700 staff',
      '1M customers',
      '10% premium reduction from new rating factor',
      'Digital sales increased to 70%',
    ],
    description:
      'Led $1bn insurer with 700 staff serving one million customers.',
    tags: ['Leadership', 'Pricing', 'Digital'],
    order: 3,
  },
  {
    id: 'strata-community-insurance',
    company: 'Strata Community Insurance',
    title: 'GM Data & Technology Solutions',
    startDate: '2020',
    endDate: 'Present',
    metrics: [
      'Cleared 30k task backlog',
      '19% reduction in underwriting cycle time',
      '76% engagement score',
    ],
    description:
      'Deployed digital channels, sophisticated pricing, AI and automation.',
    tags: ['AI', 'Automation', 'Digital'],
    order: 4,
  },
]

export default function CareerTimeline() {
  const [activeRole, setActiveRole] = useState<string | null>(null)
  const [focusedRole, setFocusedRole] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleRoleClick = useCallback((roleId: string) => {
    const element = document.getElementById(roleId)
    if (element) {
      const offset = 100
      const targetPosition = element.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, roleId: string, index: number) => {
      const roles = careerRoles
      let nextIndex = index

      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault()
          handleRoleClick(roleId)
          break
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault()
          nextIndex = Math.min(index + 1, roles.length - 1)
          setFocusedRole(roles[nextIndex].id)
          ;(
            document.querySelector(
              `[data-role-id="${roles[nextIndex].id}"]`
            ) as HTMLElement
          )?.focus()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          nextIndex = Math.max(index - 1, 0)
          setFocusedRole(roles[nextIndex].id)
          ;(
            document.querySelector(
              `[data-role-id="${roles[nextIndex].id}"]`
            ) as HTMLElement
          )?.focus()
          break
      }
    },
    [handleRoleClick]
  )

  return (
    <section className={`${styles.timeline} section reveal-section`}>
      <div className="container">
        <h2 className="display-lg">Career journey</h2>
        <p className={`${styles.intro} body-lg`}>
          Twenty years of leadership across Australia's leading financial
          institutions
        </p>

        <div className={styles.timelineContainer}>
          <svg
            className={styles.timelineSvg}
            viewBox={isMobile ? '0 0 200 800' : '0 0 1000 300'}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Career timeline showing four major roles from 2004 to present"
          >
            {/* Timeline line */}
            <line
              x1={isMobile ? 100 : 50}
              y1={isMobile ? 50 : 150}
              x2={isMobile ? 100 : 950}
              y2={isMobile ? 750 : 150}
              stroke="var(--color-border-medium)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Timeline nodes */}
            {careerRoles.map((role, index) => {
              const isActive = activeRole === role.id || focusedRole === role.id
              const x = isMobile ? 100 : 50 + index * 300
              const y = isMobile ? 50 + index * 233 : 150

              return (
                <g key={role.id}>
                  {/* Node circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 14 : 10}
                    fill={
                      isActive
                        ? 'var(--color-text-accent)'
                        : 'var(--color-bg-dark)'
                    }
                    className={styles.timelineNode}
                    style={{
                      transition: 'all var(--motion-duration-short) ease',
                      cursor: 'pointer',
                    }}
                  />

                  {/* Interactive overlay for better hit area */}
                  <circle
                    cx={x}
                    cy={y}
                    r={24}
                    fill="transparent"
                    className={styles.timelineNodeHitArea}
                    onClick={() => handleRoleClick(role.id)}
                    onMouseEnter={() => setActiveRole(role.id)}
                    onMouseLeave={() => setActiveRole(null)}
                    onFocus={() => setFocusedRole(role.id)}
                    onBlur={() => setFocusedRole(null)}
                    onKeyDown={e => handleKeyDown(e, role.id, index)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${role.company}, ${role.title}, ${role.startDate} to ${role.endDate}. Click to view details.`}
                    data-role-id={role.id}
                  />

                  {/* Label */}
                  <text
                    x={x}
                    y={isMobile ? y + 40 : y - 30}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="500"
                    fill="var(--color-text-primary)"
                    pointerEvents="none"
                    style={{ userSelect: 'none' }}
                  >
                    {role.startDate}
                  </text>

                  {/* Tooltip on hover/focus */}
                  {isActive && (
                    <g className={styles.tooltip}>
                      <rect
                        x={isMobile ? x + 50 : x - 120}
                        y={isMobile ? y - 80 : y + 20}
                        width={isMobile ? 140 : 240}
                        height="auto"
                        rx="8"
                        fill="var(--color-bg-dark)"
                        filter="url(#shadow)"
                      />
                      <text
                        x={isMobile ? x + 120 : x}
                        y={isMobile ? y - 55 : y + 45}
                        textAnchor="middle"
                        fontSize="13"
                        fontWeight="600"
                        fill="white"
                        pointerEvents="none"
                      >
                        {role.company}
                      </text>
                      <text
                        x={isMobile ? x + 120 : x}
                        y={isMobile ? y - 38 : y + 62}
                        textAnchor="middle"
                        fontSize="11"
                        fill="rgba(255,255,255,0.8)"
                        pointerEvents="none"
                      >
                        {role.title}
                      </text>
                    </g>
                  )}
                </g>
              )
            })}

            {/* Shadow filter definition */}
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="8"
                  floodOpacity="0.15"
                />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Legend with metrics */}
        <div className={styles.legend}>
          {careerRoles.map(role => (
            <button
              key={role.id}
              className={`${styles.legendItem} ${
                activeRole === role.id || focusedRole === role.id
                  ? styles.legendItemActive
                  : ''
              }`}
              onClick={() => handleRoleClick(role.id)}
              onMouseEnter={() => setActiveRole(role.id)}
              onMouseLeave={() => setActiveRole(null)}
              onFocus={() => setFocusedRole(role.id)}
              onBlur={() => setFocusedRole(null)}
              aria-label={`Jump to ${role.company} details`}
            >
              <span className={styles.legendCompany}>{role.company}</span>
              <span className={styles.legendDates}>
                {role.startDate} - {role.endDate}
              </span>
              <ul className={styles.legendMetrics}>
                {role.metrics.slice(0, 2).map((metric, idx) => (
                  <li key={idx}>{metric}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
