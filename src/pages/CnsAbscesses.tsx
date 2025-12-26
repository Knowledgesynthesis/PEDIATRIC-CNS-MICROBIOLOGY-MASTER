import { CircleDot } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'abs1',
    question: 'The earliest stage of brain abscess formation is:',
    options: [
      'Late capsule stage',
      'Early cerebritis',
      'Ring-enhancing lesion',
      'Calcified granuloma'
    ],
    correctAnswer: 1,
    explanation: 'Brain abscess formation begins with early cerebritis (days 1-3), progresses to late cerebritis, then early capsule, and finally late capsule formation over about 2 weeks.'
  },
  {
    id: 'abs2',
    question: 'The capsule of a mature brain abscess is composed primarily of:',
    options: [
      'Neutrophils',
      'Collagen (fibroblasts)',
      'Fungal hyphae',
      'Neoplastic cells'
    ],
    correctAnswer: 1,
    explanation: 'The mature abscess capsule is composed of collagen produced by fibroblasts, creating a fibrous wall that contains the infection but also makes surgical drainage necessary.'
  },
  {
    id: 'abs3',
    question: 'Brain abscesses typically show thinner capsule formation on which side?',
    options: [
      'Cortical (gray matter) side',
      'Ventricular (white matter/medial) side',
      'Capsule is uniform throughout',
      'Anterior aspect'
    ],
    correctAnswer: 1,
    explanation: 'The capsule is typically thinner on the ventricular (medial) side due to poorer blood supply in white matter. This can lead to ventricular rupture, a serious complication.'
  },
  {
    id: 'abs4',
    question: 'Subdural empyema differs from brain abscess in that it:',
    options: [
      'Has a well-formed collagen capsule',
      'Is a collection in the potential space between dura and arachnoid',
      'Never requires surgical drainage',
      'Is usually caused by viral infection'
    ],
    correctAnswer: 1,
    explanation: 'Subdural empyema is pus collection in the subdural space (between dura and arachnoid). Unlike parenchymal abscess, it can spread rapidly over the convexity.'
  }
]

export default function CnsAbscesses() {
  return (
    <ModuleLayout
      title="Pediatric CNS Abscesses"
      description="Cerebritis, abscess formation, and epidural/subdural empyema"
      icon={CircleDot}
      color="orange"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stages">Stages</TabsTrigger>
          <TabsTrigger value="extra">Extra-axial</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <ContentCard>
              <Section title="CNS Abscesses Overview">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Brain abscesses in children can result from hematogenous spread, contiguous infection
                  (sinusitis, otitis, mastoiditis), or direct inoculation (trauma, surgery).
                </p>

                <DataTable
                  headers={['Source', 'Common Organisms', 'Typical Location']}
                  rows={[
                    ['Otitis/Mastoiditis', 'Streptococci, anaerobes, Proteus', 'Temporal lobe, cerebellum'],
                    ['Sinusitis', 'Streptococci, Staph, anaerobes', 'Frontal lobe'],
                    ['Hematogenous', 'Streptococci, Staph aureus', 'MCA territory, multiple'],
                    ['Congenital heart disease', 'Streptococci', 'Multiple, any location'],
                    ['Trauma/Surgery', 'Staph, gram-negatives', 'Related to wound'],
                  ]}
                />
              </Section>
            </ContentCard>

            <Callout variant="info" title="Pediatric Considerations">
              Children with cyanotic congenital heart disease have increased risk of brain abscess
              due to right-to-left shunting bypassing pulmonary filtration of bacteria.
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="stages">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Stages of Abscess Formation">
                <SubSection title="Evolution Timeline">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                      <Badge variant="yellow">Days 1-3</Badge>
                      <h4 className="font-medium text-orange-900 dark:text-orange-100 mt-2">Early Cerebritis</h4>
                      <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
                        Inflammatory infiltrate, edema, no necrosis
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                      <Badge variant="yellow">Days 4-9</Badge>
                      <h4 className="font-medium text-orange-900 dark:text-orange-100 mt-2">Late Cerebritis</h4>
                      <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
                        Central necrosis, pus formation begins
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                      <Badge variant="green">Days 10-13</Badge>
                      <h4 className="font-medium text-orange-900 dark:text-orange-100 mt-2">Early Capsule</h4>
                      <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
                        Fibroblast proliferation, early collagen
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                      <Badge variant="green">Day 14+</Badge>
                      <h4 className="font-medium text-orange-900 dark:text-orange-100 mt-2">Late Capsule</h4>
                      <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
                        Mature collagen capsule, gliosis
                      </p>
                    </div>
                  </div>
                </SubSection>

                <SubSection title="Abscess Architecture">
                  <DiagramBox title="Mature Abscess Cartoon" caption="Layers of a brain abscess">
                    <div className="flex items-center justify-center">
                      <div className="relative w-40 h-40">
                        {/* Surrounding edema/gliosis */}
                        <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/30" />
                        {/* Outer reactive zone */}
                        <div className="absolute inset-4 rounded-full bg-pink-100 dark:bg-pink-900/30" />
                        {/* Capsule */}
                        <div className="absolute inset-8 rounded-full bg-orange-300 dark:bg-orange-700" />
                        {/* Necrotic center */}
                        <div className="absolute inset-12 rounded-full bg-yellow-200 dark:bg-yellow-800 flex items-center justify-center">
                          <span className="text-xs font-medium">Pus</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-yellow-200 dark:bg-yellow-800 rounded" />
                        <span>Necrotic center</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-orange-300 dark:bg-orange-700 rounded" />
                        <span>Capsule</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-pink-100 dark:bg-pink-900/50 rounded" />
                        <span>Reactive zone</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-100 dark:bg-blue-900/50 rounded" />
                        <span>Edema</span>
                      </div>
                    </div>
                  </DiagramBox>
                </SubSection>

                <SubSection title="Histologic Layers">
                  <DataTable
                    headers={['Layer', 'Components', 'Features']}
                    rows={[
                      ['Necrotic center', 'Pus, debris, organisms', 'Liquefactive necrosis, PMNs, bacteria'],
                      ['Inner capsule', 'Inflammatory cells', 'Macrophages, fibroblasts, new vessels'],
                      ['Collagen capsule', 'Dense collagen', 'Fibroblasts, mature collagen'],
                      ['Outer zone', 'Reactive gliosis', 'Astrocytes, edema, neovascularity'],
                    ]}
                  />
                </SubSection>

                <Callout variant="danger" title="Medial Capsule Thinning">
                  The capsule is thinner on the ventricular (medial) side due to poorer vascular supply
                  in white matter. This predisposes to ventricular rupture and ventriculitis.
                </Callout>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Identifying Organisms">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Organisms are most likely found at the interface of the necrotic center
                  and the inner capsule where there is active inflammation.
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• <strong>Gram stain:</strong> Bacterial morphology</li>
                  <li>• <strong>GMS/PAS:</strong> Fungal organisms</li>
                  <li>• <strong>AFB:</strong> Mycobacteria</li>
                  <li>• <strong>Culture:</strong> Definitive identification</li>
                </ul>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="extra">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Extra-Axial Infections">
                <SubSection title="Subdural Empyema">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Collection of pus in the potential space between dura and arachnoid.
                    Can spread rapidly over brain convexity.
                  </p>

                  <DiagramBox title="Subdural Empyema Cartoon" caption="Pus between dura and arachnoid">
                    <div className="flex items-center justify-center">
                      <div className="w-48 h-32 relative">
                        {/* Skull */}
                        <div className="absolute top-0 left-0 right-0 h-4 bg-gray-300 dark:bg-gray-600 rounded-t-full" />
                        {/* Dura */}
                        <div className="absolute top-4 left-2 right-2 h-2 bg-blue-300 dark:bg-blue-700" />
                        {/* Pus collection */}
                        <div className="absolute top-6 left-4 right-4 h-6 bg-yellow-300 dark:bg-yellow-700 flex items-center justify-center">
                          <span className="text-xs font-medium">Empyema</span>
                        </div>
                        {/* Arachnoid/brain */}
                        <div className="absolute top-12 left-2 right-2 h-2 bg-pink-200 dark:bg-pink-800" />
                        {/* Brain */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-pink-100 dark:bg-pink-900/50 rounded-b-lg" />
                      </div>
                    </div>
                  </DiagramBox>

                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">Sources</h5>
                      <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                        <li>• Sinusitis (most common)</li>
                        <li>• Otitis/mastoiditis</li>
                        <li>• Post-surgical</li>
                        <li>• Meningitis spread</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">Complications</h5>
                      <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                        <li>• Cortical vein thrombosis</li>
                        <li>• Venous infarcts</li>
                        <li>• Cerebral edema</li>
                        <li>• Seizures</li>
                      </ul>
                    </div>
                  </div>
                </SubSection>

                <SubSection title="Epidural Abscess">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Collection between skull and dura. More localized than subdural empyema
                    due to dural attachments to skull.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Usually from adjacent osteomyelitis</li>
                    <li>• Limited spread due to dural attachments</li>
                    <li>• May be associated with skull erosion</li>
                  </ul>
                </SubSection>
              </Section>
            </ContentCard>

            <Callout variant="warning" title="Pitfall: Tumor-Like Abscess">
              Brain abscesses can mimic tumors on imaging. Clinical context (fever, elevated WBC,
              source of infection) and characteristic ring enhancement help distinguish these entities.
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="quiz">
          <QuizComponent
            questions={quizQuestions}
            title="CNS Abscesses Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
