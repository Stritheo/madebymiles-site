/**
 * Advisory Component
 * Server Component - Call to action section
 */

import styles from './Advisory.module.css'

export default function Advisory() {
  return (
    <section className={`${styles.advisory} section reveal-section`}>
      <div className="container">
        <h2 className={`${styles.title} display-lg`}>Advisory</h2>
        <p className={`${styles.intro} body-lg`}>
          Strategic advisory focused on outcomes across strategy, risk,
          operations, technology and AI for insurance businesses and boards.
          <br />
          <br />
          Open to executive roles, equity opportunities, advisory work and board
          positions that align with improving customer outcomes and building
          sustainable insurance businesses.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href="mailto:miles.sowden@outlook.com"
            className={`${styles.cta} ${styles.ctaPrimary}`}
            aria-label="Start a conversation with Miles Sowden"
          >
            Start a conversation
          </a>
          <a
            href="https://linkedin.com/in/milessowden"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.cta} ${styles.ctaSecondary}`}
            aria-label="View Miles Sowden's LinkedIn profile"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
