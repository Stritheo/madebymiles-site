/**
 * Hero Component
 * Server Component - Above the fold content
 */

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <h1 className={`${styles.title} display-xl`}>
          Senior insurance executive improving customer outcomes and unit costs
        </h1>
        <p className={`${styles.subtitle} body-lg`}>
          I help insurers improve customer experience at a lower unit cost by
          building purpose-led, accountable teams and using data, technology and
          AI in impactful ways.
          <br />
          <br />
          Twenty years delivering outcomes across Suncorp, Westpac, Commonwealth
          Bank, Hollard and Strata Community Insurance through strategic
          clarity, large-scale leadership and cultural uplift.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href="mailto:miles.sowden@outlook.com"
            className={`${styles.cta} ${styles.ctaPrimary}`}
            aria-label="Send email to Miles Sowden"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className={`${styles.cta} ${styles.ctaSecondary}`}
            aria-label="View Miles Sowden's work"
          >
            View my work
          </a>
        </div>
      </div>
    </section>
  )
}
