/**
 * WorkAndImpact Component
 * Server Component - Project showcase with career roles
 */

import type { Project } from '../lib/types'
import styles from './WorkAndImpact.module.css'

const projects: Project[] = [
  {
    id: 'strata-community-insurance',
    company: 'Strata Community Insurance',
    title: 'GM Data and Technology Solutions',
    description:
      'Deployed digital channels, sophisticated pricing, AI and automation. Cleared backlog of 30,000 tasks, reduced underwriting cycle time by 19%, achieved 76% staff engagement score.',
    tags: ['AI', 'Automation', 'Digital'],
    order: 1,
  },
  {
    id: 'commonwealth-bank',
    company: 'Commonwealth Bank',
    title: 'GM General Insurance',
    description:
      'Led $1bn insurer with 700 staff serving one million customers. Developed rating factor reducing premiums by 10% and improving the loss ratio by 1%. Increased digital sales to 70%.',
    tags: ['Leadership', 'Pricing', 'Digital'],
    order: 2,
  },
  {
    id: 'hollard-insurance',
    company: 'Hollard Insurance',
    title: 'Chief Revenue Officer',
    description:
      'Established 15-year strategic alliance with CBA for one million customers. Led transition and portfolio transformation to meet target returns and risk appetite.',
    tags: ['Alliances', 'Strategy', 'Portfolio'],
    order: 3,
  },
  {
    id: 'westpac-banking-corporation',
    company: 'Westpac Banking Corporation',
    title: 'Senior Manager roles',
    description:
      'Established distribution plan and operating model for Westpac-Allianz alliance. Doubled written premiums and increased NPS to +44 from +25.',
    tags: ['Partnerships', 'Distribution', 'NPS'],
    order: 4,
  },
]

export default function WorkAndImpact() {
  return (
    <section className="section reveal-section" id="projects">
      <div className="container">
        <h2 className="display-lg">Work and impact</h2>
        <p className={`${styles.intro} body-lg`}>
          Two decades delivering performance uplift, AI transformation, strategic
          alliances and cultural change across major Australian financial
          institutions.
        </p>

        <div className={styles.projectsContainer}>
          <div className={styles.projectsGrid}>
            {projects.map(project => (
              <article
                key={project.id}
                id={project.id}
                className={`${styles.projectCard} reveal-stagger interactive-card`}
              >
                <h3 className={`${styles.projectTitle} display-md`}>
                  {project.company}
                </h3>
                <p className={`${styles.projectDescription} body-md`}>
                  {project.description}
                </p>
                <div className={styles.projectTags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
