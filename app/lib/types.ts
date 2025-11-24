/**
 * TypeScript Type Definitions
 */

export interface CareerRole {
  id: string
  company: string
  title: string
  startDate: string
  endDate: string
  metrics: string[]
  description: string
  tags: string[]
  order: number
}

export interface Capability {
  id: string
  title: string
  description: string
  order: number
}

export interface Project {
  id: string
  company: string
  title: string
  description: string
  tags: string[]
  order: number
}

export interface Metadata {
  title: string
  description: string
  keywords: string[]
  author: string
  url: string
}

export interface JsonLdPerson {
  '@context': string
  '@type': string
  name: string
  jobTitle: string
  url: string
  sameAs: string[]
  description: string
}

export interface JsonLdOrganization {
  '@context': string
  '@type': string
  name: string
  url: string
  founder: JsonLdPerson
  description: string
}
