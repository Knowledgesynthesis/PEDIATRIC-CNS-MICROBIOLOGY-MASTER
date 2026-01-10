import { useState } from 'react'
import { FileText, ChevronRight, Eye, EyeOff } from 'lucide-react'
import { ModuleLayout, Section, ContentCard } from '../components/modules'
import { Button, Badge, Callout } from '../components/ui'

interface Case {
  id: string
  title: string
  ageGroup: 'neonate' | 'infant' | 'child'
  category: string
  presentation: string
  lmFindings: string[]
  specialStains: string[]
  ihcFindings?: string[]
  diagnosis: string
  discussion: string
  keyPoints: string[]
  differentials: string[]
}

const cases: Case[] = [
  {
    id: 'case1',
    title: 'Neonatal Meningitis with Ventriculitis',
    ageGroup: 'neonate',
    category: 'Bacterial',
    presentation: '5-day-old term infant with fever, lethargy, and bulging fontanelle. CSF shows pleocytosis with neutrophil predominance, elevated protein, low glucose.',
    lmFindings: [
      'Diffuse purulent leptomeningitis',
      'Abundant neutrophils in subarachnoid space',
      'Ependymal disruption with subependymal inflammation',
      'Gram-positive cocci in chains visible'
    ],
    specialStains: [
      'Gram stain: Gram-positive cocci in chains',
      'GMS: Negative for fungi'
    ],
    diagnosis: 'Group B Streptococcus (GBS) meningitis with ventriculitis',
    discussion: 'GBS is the most common cause of neonatal meningitis in the first week of life. The presence of ventriculitis indicates more severe disease with potential for complications including hydrocephalus and parenchymal injury.',
    keyPoints: [
      'GBS shows gram-positive cocci in chains',
      'Ventriculitis is more common in neonates than older children',
      'Early-onset disease is acquired during delivery'
    ],
    differentials: ['E. coli K1 meningitis', 'Listeria meningitis', 'Other streptococcal species']
  },
  {
    id: 'case2',
    title: 'Temporal Lobe Necrotizing Encephalitis',
    ageGroup: 'child',
    category: 'Viral',
    presentation: '6-year-old with fever, seizures, and altered mental status. MRI shows hemorrhagic lesions in bilateral temporal lobes.',
    lmFindings: [
      'Hemorrhagic necrosis of temporal lobe',
      'Perivascular lymphocytic cuffing',
      'Microglial nodules',
      'Eosinophilic intranuclear inclusions with halos in neurons'
    ],
    specialStains: [
      'No organisms on Gram stain',
      'GMS negative'
    ],
    ihcFindings: [
      'HSV-1 IHC: Strongly positive in neurons and glial cells'
    ],
    diagnosis: 'Herpes Simplex Virus Type 1 (HSV-1) Encephalitis',
    discussion: 'HSV-1 encephalitis has predilection for the temporal lobes. The Cowdry type A inclusions (eosinophilic intranuclear with clear halo) are characteristic but IHC confirms the diagnosis. Without treatment, mortality is very high.',
    keyPoints: [
      'Temporal lobe predilection in older children and adults',
      'Cowdry type A inclusions are characteristic',
      'HSV IHC confirms diagnosis',
      'May mimic infarction on imaging'
    ],
    differentials: ['Infarction', 'Other viral encephalitis', 'Autoimmune encephalitis']
  },
  {
    id: 'case3',
    title: 'Congenital Infection with Calcifications',
    ageGroup: 'neonate',
    category: 'TORCH',
    presentation: 'Newborn with microcephaly, periventricular calcifications on CT, and hepatosplenomegaly. Mother had no prenatal screening.',
    lmFindings: [
      'Periventricular necrosis with calcifications',
      'Cytomegalic cells with large intranuclear inclusions',
      'Granular cytoplasmic inclusions in same cells',
      'Microglial nodules'
    ],
    specialStains: [
      'No bacteria on Gram stain'
    ],
    ihcFindings: [
      'CMV IHC: Positive in enlarged cells with inclusions'
    ],
    diagnosis: 'Congenital Cytomegalovirus (CMV) Infection',
    discussion: 'Congenital CMV is the most common congenital infection. The classic "owl-eye" intranuclear inclusions and cytoplasmic inclusions in cytomegalic cells, along with periventricular calcifications, are diagnostic. CMV IHC confirms the diagnosis.',
    keyPoints: [
      'Most common congenital infection',
      'Periventricular calcifications are characteristic',
      '"Owl-eye" nuclear inclusions with cytoplasmic inclusions',
      'CMV IHC is more sensitive than morphology alone'
    ],
    differentials: ['Congenital Toxoplasmosis', 'Congenital Rubella', 'Zika virus']
  },
  {
    id: 'case4',
    title: 'Ring-Enhancing Lesions in Immunocompromised Patient',
    ageGroup: 'child',
    category: 'Parasitic',
    presentation: '12-year-old with acute lymphoblastic leukemia on chemotherapy presenting with seizures. MRI shows multiple ring-enhancing lesions.',
    lmFindings: [
      'Necrotizing lesions with inflammatory rim',
      'Crescent-shaped organisms at periphery of necrosis',
      'Thick-walled cysts containing bradyzoites in adjacent viable tissue'
    ],
    specialStains: [
      'GMS: Negative',
      'No bacteria on Gram stain'
    ],
    ihcFindings: [
      'Toxoplasma IHC: Positive, highlighting tachyzoites and cysts'
    ],
    diagnosis: 'CNS Toxoplasmosis (Reactivation)',
    discussion: 'Toxoplasmosis reactivation occurs in immunocompromised patients. The combination of tachyzoites at necrosis margins and tissue cysts with bradyzoites is characteristic. IHC is essential when organisms are sparse.',
    keyPoints: [
      'Look for organisms at edge of necrosis',
      'Tachyzoites (active) vs cysts with bradyzoites (latent)',
      'Common in AIDS and other immunocompromised states',
      'Must distinguish from lymphoma in AIDS patients'
    ],
    differentials: ['Primary CNS lymphoma', 'Brain abscess', 'Metastatic tumor']
  },
  {
    id: 'case5',
    title: 'Fungal Infection with Angioinvasion',
    ageGroup: 'child',
    category: 'Fungal',
    presentation: '8-year-old post bone marrow transplant with prolonged neutropenia. Presents with fever and focal neurologic deficits. MRI shows hemorrhagic lesions.',
    lmFindings: [
      'Hemorrhagic infarcts',
      'Septate hyphae invading vessel walls',
      'Acute angle branching pattern (approximately 45 degrees)',
      'Thrombosed vessels with fungal elements'
    ],
    specialStains: [
      'GMS: Septate hyphae with acute angle branching',
      'PAS: Positive for hyphae'
    ],
    diagnosis: 'Invasive Aspergillosis',
    discussion: 'Aspergillus is highly angioinvasive, causing vessel wall invasion, thrombosis, and hemorrhagic infarcts. The septate hyphae with acute angle branching distinguish it from Mucorales (broad, pauci-septate, 90° branching).',
    keyPoints: [
      'Angioinvasion is hallmark feature',
      'Septate hyphae with acute (45°) branching',
      'Neutropenia is major risk factor',
      'Distinguished from Mucorales by hyphal morphology'
    ],
    differentials: ['Mucormycosis', 'Other mold infections', 'Bacterial abscess']
  },
  {
    id: 'case6',
    title: 'Basal Meningitis with Hydrocephalus',
    ageGroup: 'child',
    category: 'Mycobacterial',
    presentation: '10-year-old immigrant with 2-week history of headache, low-grade fever, and cranial nerve palsies. CT shows hydrocephalus with basal enhancement.',
    lmFindings: [
      'Thick gelatinous exudate at base of brain',
      'Caseating granulomas with Langhans giant cells',
      'Vasculitis of basal arteries',
      'Ependymitis with periventricular inflammation'
    ],
    specialStains: [
      'AFB (Ziehl-Neelsen): Rare acid-fast bacilli identified',
      'GMS: Negative for fungi'
    ],
    diagnosis: 'Tuberculous Meningitis',
    discussion: 'TB meningitis has predilection for basal meninges, causing thick exudate that can encase cranial nerves and blood vessels. The caseating granulomas with Langhans giant cells and AFB-positive bacilli confirm the diagnosis.',
    keyPoints: [
      'Basal meningitis is characteristic',
      'Caseating granulomas with Langhans giant cells',
      'AFB stain may show sparse organisms',
      'Vasculitis can cause infarcts'
    ],
    differentials: ['Fungal meningitis', 'Neurosarcoidosis', 'Carcinomatous meningitis']
  }
]

export default function CaseBank() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)
  const [showDiagnosis, setShowDiagnosis] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  const filteredCases = categoryFilter === 'all'
    ? cases
    : cases.filter(c => c.category === categoryFilter)

  const categories = ['all', ...new Set(cases.map(c => c.category))]

  const ageColors = {
    neonate: 'pink',
    infant: 'blue',
    child: 'green'
  } as const

  if (selectedCase) {
    return (
      <ModuleLayout
        title="Case Bank"
        description="Integrated synthetic cases for pediatric CNS infections"
        icon={FileText}
        color="cyan"
      >
        <div className="space-y-6">
          <Button variant="ghost" onClick={() => { setSelectedCase(null); setShowDiagnosis(false) }}>
            ← Back to Case List
          </Button>

          <ContentCard>
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {selectedCase.title}
                  </h2>
                  <div className="flex gap-2 mt-2">
                    <Badge variant={ageColors[selectedCase.ageGroup]}>{selectedCase.ageGroup}</Badge>
                    <Badge variant="gray">{selectedCase.category}</Badge>
                  </div>
                </div>
              </div>

              <Section title="Clinical Presentation">
                <p className="text-slate-600 dark:text-slate-300">
                  {selectedCase.presentation}
                </p>
              </Section>

              <Section title="Light Microscopy Findings">
                <ul className="space-y-2">
                  {selectedCase.lmFindings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <span className="text-cyan-500">•</span>
                      {finding}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Special Stains">
                <ul className="space-y-2">
                  {selectedCase.specialStains.map((stain, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <span className="text-cyan-500">•</span>
                      {stain}
                    </li>
                  ))}
                </ul>
              </Section>

              {selectedCase.ihcFindings && (
                <Section title="Immunohistochemistry">
                  <ul className="space-y-2">
                    {selectedCase.ihcFindings.map((finding, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <span className="text-cyan-500">•</span>
                        {finding}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                <Button onClick={() => setShowDiagnosis(!showDiagnosis)} variant="secondary">
                  {showDiagnosis ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                  {showDiagnosis ? 'Hide Diagnosis' : 'Reveal Diagnosis'}
                </Button>
              </div>

              {showDiagnosis && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                    <h3 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Diagnosis</h3>
                    <p className="text-cyan-800 dark:text-cyan-200">{selectedCase.diagnosis}</p>
                  </div>

                  <Section title="Discussion">
                    <p className="text-slate-600 dark:text-slate-300">{selectedCase.discussion}</p>
                  </Section>

                  <Section title="Key Points">
                    <ul className="space-y-2">
                      {selectedCase.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <span className="text-green-500">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section title="Differential Diagnosis">
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.differentials.map((diff, i) => (
                        <Badge key={i} variant="gray">{diff}</Badge>
                      ))}
                    </div>
                  </Section>
                </div>
              )}
            </div>
          </ContentCard>
        </div>
      </ModuleLayout>
    )
  }

  return (
    <ModuleLayout
      title="Case Bank"
      description="Integrated synthetic cases for pediatric CNS infections"
      icon={FileText}
      color="cyan"
    >
      <div className="space-y-6">
        <Callout variant="info" title="Synthetic Cases">
          All cases are synthetic educational examples designed to illustrate key concepts.
          They do not represent real patients and are not for diagnostic use.
        </Callout>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={categoryFilter === cat ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setCategoryFilter(cat)}
            >
              {cat === 'all' ? 'All Cases' : cat}
            </Button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              onClick={() => setSelectedCase(caseItem)}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 cursor-pointer hover:border-cyan-400 dark:hover:border-cyan-600 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {caseItem.title}
                  </h3>
                  <div className="flex gap-2 mt-2">
                    <Badge variant={ageColors[caseItem.ageGroup]}>{caseItem.ageGroup}</Badge>
                    <Badge variant="gray">{caseItem.category}</Badge>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                    {caseItem.presentation}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModuleLayout>
  )
}
