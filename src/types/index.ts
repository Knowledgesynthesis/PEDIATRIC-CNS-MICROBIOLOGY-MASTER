export interface Module {
  id: string
  title: string
  shortTitle: string
  description: string
  icon: string
  color: string
  route: string
  topics: Topic[]
}

export interface Topic {
  id: string
  title: string
  content: ContentSection[]
  quiz?: QuizQuestion[]
}

export interface ContentSection {
  type: 'text' | 'heading' | 'list' | 'table' | 'callout' | 'diagram' | 'comparison'
  content: string | string[] | TableData | ComparisonData
  variant?: 'info' | 'warning' | 'tip' | 'danger'
}

export interface TableData {
  headers: string[]
  rows: string[][]
}

export interface ComparisonData {
  title: string
  items: {
    name: string
    features: string[]
  }[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface CaseStudy {
  id: string
  title: string
  ageGroup: 'neonate' | 'infant' | 'child'
  presentation: string
  lmFindings: string[]
  specialStains: string[]
  ihcFindings?: string[]
  emFindings?: string[]
  diagnosis: string
  discussion: string
  keyPoints: string[]
  differentials: string[]
}

export interface Organism {
  id: string
  name: string
  category: 'bacterial' | 'viral' | 'fungal' | 'parasitic' | 'prion'
  gramStain?: string
  morphology: string
  keyFeatures: string[]
  associatedInfections: string[]
  cartoonDescription: string
}

export interface PathologicPattern {
  id: string
  name: string
  description: string
  associations: string[]
  differentials: string[]
  cartoonFeatures: string[]
}
