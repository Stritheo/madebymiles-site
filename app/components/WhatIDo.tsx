/**
 * WhatIDo Component
 * Server Component - Capabilities section with container queries
 */

import styles from './WhatIDo.module.css'

const capabilities = [
  {
    id: 'product-modernisation',
    title: 'Product Modernisation',
    description:
      'Redesign insurance products to improve access to cover, affordability and customer clarity while maintaining underwriting discipline.',
  },
  {
    id: 'pricing-claims',
    title: 'Pricing and Claims',
    description:
      'Build pricing engines and claims workflows that balance customer fairness with financial sustainability.',
  },
  {
    id: 'team-culture',
    title: 'Team and Culture',
    description:
      'Develop purpose-led, accountable teams through clear strategy, strong capability development and cultural alignment.',
  },
  {
    id: 'end-to-end-change',
    title: 'End-to-End Change',
    description:
      'Deliver transformation programs spanning products, operations, technology and people across complex organisations.',
  },
]

export default function WhatIDo() {
  return (
    <section className="section reveal-section" id="what-i-do">
      <div className="container">
        <h2 className="display-lg">What I do</h2>
        <p className={`${styles.intro} body-lg`}>
          I modernise products, improve pricing and claims, build teams and
          deliver end-to-end change across insurance businesses.
        </p>

        <div className={styles.capabilitiesContainer}>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map(capability => (
              <div
                key={capability.id}
                className={`${styles.capabilityCard} reveal-stagger`}
              >
                <h3 className="display-md">{capability.title}</h3>
                <p className="body-md">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
