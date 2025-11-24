/**
 * Root Layout
 * Metadata, fonts, JSON-LD structured data
 */

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Miles Sowden | Executive Leader',
  description:
    'Senior insurance executive improving customer outcomes and unit costs. 20 years leading transformation across Suncorp, Westpac, CBA, Hollard and SCI.',
  keywords: [
    'insurance executive',
    'digital transformation',
    'AI strategy',
    'data leadership',
    'executive search',
    'board director',
    'Miles Sowden',
  ],
  authors: [{ name: 'Miles Sowden' }],
  creator: 'Miles Sowden',
  metadataBase: new URL('https://madebymiles.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://madebymiles.ai',
    title: 'Miles Sowden | Executive Leader',
    description:
      'Senior insurance executive improving customer outcomes and unit costs through strategy, data, AI and culture.',
    siteName: 'MadeByMiles',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miles Sowden | Executive Leader',
    description:
      'Senior insurance executive improving customer outcomes and unit costs.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD structured data
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Miles Sowden',
    jobTitle: 'Executive Leader - Insurance & Technology',
    url: 'https://madebymiles.ai',
    sameAs: ['https://linkedin.com/in/milessowden'],
    description:
      'Senior insurance executive with 20 years of experience in digital transformation, AI strategy, and data leadership across major Australian financial institutions.',
    knowsAbout: [
      'Insurance',
      'Digital Transformation',
      'Artificial Intelligence',
      'Data Strategy',
      'Executive Leadership',
    ],
  }

  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MadeByMiles',
    url: 'https://madebymiles.ai',
    founder: {
      '@type': 'Person',
      name: 'Miles Sowden',
    },
    description:
      'Strategic advisory for insurance businesses focused on strategy, risk, operations, technology and AI.',
  }

  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-to-main">
          Skip to main content
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  )
}
