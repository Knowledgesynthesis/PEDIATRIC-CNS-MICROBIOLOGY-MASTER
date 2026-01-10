import {
  Brain,
  Bug,
  Dna,
  Baby,
  Leaf,
  Microscope,
  FlaskConical,
  CircleDot,
  Skull,
  TestTube,
  AlertTriangle,
  FileText,
  GraduationCap,
} from 'lucide-react'
import { ModuleCard } from '../components/modules'
import { Callout } from '../components/ui'

const modules = [
  {
    title: 'Normal Development',
    description: 'Pediatric CNS & immune development, microglia maturation, blood-brain barrier',
    icon: Brain,
    route: '/normal-development',
    color: 'blue',
  },
  {
    title: 'Bacterial Infections',
    description: 'Neonatal & pediatric meningitis, ventriculitis, GBS, E. coli, Listeria, and more',
    icon: Bug,
    route: '/bacterial',
    color: 'green',
  },
  {
    title: 'Viral Encephalitis',
    description: 'DNA & RNA viruses, HSV, CMV, enteroviruses, inclusion patterns',
    icon: Dna,
    route: '/viral',
    color: 'purple',
  },
  {
    title: 'TORCH Infections',
    description: 'Congenital infections: Toxoplasma, Rubella, CMV, HSV, Zika',
    icon: Baby,
    route: '/torch',
    color: 'pink',
  },
  {
    title: 'Fungal Infections',
    description: 'Candida, Aspergillus, Mucorales, Cryptococcus, special stains',
    icon: Leaf,
    route: '/fungal',
    color: 'emerald',
  },
  {
    title: 'Parasitic Infections',
    description: 'Toxoplasmosis, neurocysticercosis, Naegleria, Acanthamoeba',
    icon: Microscope,
    route: '/parasitic',
    color: 'teal',
  },
  {
    title: 'Mycobacterial',
    description: 'TB meningitis, granulomatous infections, caseating necrosis patterns',
    icon: FlaskConical,
    route: '/mycobacterial',
    color: 'amber',
  },
  {
    title: 'CNS Abscesses',
    description: 'Cerebritis, abscess wall maturation, organism distribution',
    icon: CircleDot,
    route: '/abscess',
    color: 'orange',
  },
  {
    title: 'Prion Disease',
    description: 'Pediatric prion patterns, spongiform change, vacuolation (conceptual)',
    icon: Skull,
    route: '/prion',
    color: 'slate',
  },
  {
    title: 'Stains, IHC & EM',
    description: 'Gram, GMS, PAS, AFB, IHC patterns, EM concepts for CNS pathogens',
    icon: TestTube,
    route: '/stains-ihc-em',
    color: 'indigo',
  },
  {
    title: 'Pitfalls & Mimics',
    description: 'Common diagnostic traps: CMV vs reactive cells, Toxo vs gliosis, and more',
    icon: AlertTriangle,
    route: '/pitfalls',
    color: 'red',
  },
  {
    title: 'Case Bank',
    description: 'Synthetic integrated cases for pediatric CNS infections',
    icon: FileText,
    route: '/cases',
    color: 'cyan',
  },
  {
    title: 'Assessment',
    description: 'Pattern-based questions to test your knowledge (session only)',
    icon: GraduationCap,
    route: '/assessment',
    color: 'rose',
  },
]

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="text-center space-y-4 py-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Pediatric CNS Microbiology Master
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A pattern-based educational platform for pediatric CNS infectious pathology.
          Designed for pathology residents and neuropathology fellows.
        </p>
      </div>

      {/* Disclaimer */}
      <Callout variant="warning" title="Educational Use Only">
        This application is for educational purposes only. All diagrams are synthetic representations.
        Not intended for diagnostic or clinical use. No patient data is collected.
      </Callout>

      {/* Module grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Learning Modules
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => (
            <ModuleCard key={module.route} {...module} />
          ))}
        </div>
      </div>

      {/* Learning objectives summary */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Learning Objectives
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-primary-500">•</span>
              Distinguish acute bacterial meningitis vs chronic granulomatous infections
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-500">•</span>
              Recognize viral infection-specific cartoon hallmarks
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-500">•</span>
              Identify congenital TORCH infection patterns
            </li>
          </ul>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-primary-500">•</span>
              Understand fungal and parasitic morphologic forms conceptually
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-500">•</span>
              Interpret synthetic LM + special stains + IHC + EM for CNS pathogens
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-500">•</span>
              Recognize pitfalls & mimics in pediatric CNS infections
            </li>
          </ul>
        </div>
      </div>

      {/* Target audience */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Designed For
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">PGY1-2</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Pathology Residents
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              Infection basics, organism recognition
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">PGY3-4</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Senior Residents
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              Advanced patterns, complications
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">Fellow</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Neuropathology Fellows
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              Rare patterns, EM correlation, traps
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
