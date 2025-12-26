import { Skull } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'prion1',
    question: 'The pathognomonic histologic finding in prion diseases is:',
    options: [
      'Purulent meningitis',
      'Spongiform change with neuronal loss',
      'Granulomatous inflammation',
      'Demyelination with remyelination'
    ],
    correctAnswer: 1,
    explanation: 'Prion diseases show spongiform change (fine vacuolation of the neuropil), neuronal loss, and gliosis. There is notably absent inflammation despite neurodegeneration.'
  },
  {
    id: 'prion2',
    question: 'Prion diseases are caused by:',
    options: [
      'Viral infection',
      'Bacterial infection',
      'Misfolded protein (PrPSc)',
      'Autoimmune antibodies'
    ],
    correctAnswer: 2,
    explanation: 'Prion diseases are caused by misfolded prion protein (PrPSc) that induces normal PrPC to misfold. They are unique in being transmissible protein-folding disorders.'
  },
  {
    id: 'prion3',
    question: 'Which prion disease can occur in children?',
    options: [
      'Sporadic CJD (sCJD)',
      'Variant CJD (vCJD)',
      'Fatal familial insomnia',
      'Gertsmann-Sträussler-Scheinker'
    ],
    correctAnswer: 1,
    explanation: 'Variant CJD (vCJD) can affect younger individuals including teenagers, linked to BSE exposure. Sporadic CJD typically affects older adults (median age ~65).'
  }
]

export default function PrionDisease() {
  return (
    <ModuleLayout
      title="Prion Disease"
      description="Conceptual overview of pediatric prion disease patterns (rare)"
      icon={Skull}
      color="slate"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <Callout variant="info" title="Conceptual Module">
              Prion diseases are extremely rare in children. This module provides conceptual
              understanding of patterns for educational completeness. Not for diagnostic use.
            </Callout>

            <ContentCard>
              <Section title="Prion Diseases Overview">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Prion diseases (transmissible spongiform encephalopathies) are fatal neurodegenerative
                  disorders caused by misfolding of the normal prion protein (PrPC) into a pathogenic
                  form (PrPSc).
                </p>

                <SubSection title="Key Concepts">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <h5 className="font-medium text-slate-900 dark:text-white mb-2">Unique Features</h5>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• Protein-only infectious agent</li>
                        <li>• No nucleic acid</li>
                        <li>• Resistant to standard sterilization</li>
                        <li>• No inflammatory response</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <h5 className="font-medium text-slate-900 dark:text-white mb-2">Acquisition</h5>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• Sporadic (most common, adults)</li>
                        <li>• Genetic (PRNP mutations)</li>
                        <li>• Acquired (iatrogenic, dietary)</li>
                      </ul>
                    </div>
                  </div>
                </SubSection>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="patterns">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Histopathologic Patterns">
                <SubSection title="Spongiform Change">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    The hallmark of prion diseases is spongiform change - fine vacuolation
                    of the neuropil giving a "Swiss cheese" appearance.
                  </p>

                  <DiagramBox title="Spongiform Change Cartoon" caption="Fine vacuolation of neuropil">
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-24 bg-pink-100 dark:bg-pink-900/30 rounded-lg relative">
                        {/* Vacuoles */}
                        {[...Array(15)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full bg-white dark:bg-slate-800"
                            style={{
                              width: `${8 + Math.random() * 8}px`,
                              height: `${8 + Math.random() * 8}px`,
                              left: `${10 + Math.random() * 80}%`,
                              top: `${10 + Math.random() * 80}%`,
                            }}
                          />
                        ))}
                        {/* Neurons */}
                        <div className="absolute top-4 left-6 w-4 h-4 rounded-full bg-yellow-300 dark:bg-yellow-600" />
                        <div className="absolute bottom-6 right-8 w-4 h-4 rounded-full bg-yellow-300 dark:bg-yellow-600" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Fine vacuoles in gray matter neuropil</p>
                  </DiagramBox>
                </SubSection>

                <SubSection title="Classic Triad">
                  <DataTable
                    headers={['Finding', 'Description']}
                    rows={[
                      ['Spongiform change', 'Fine vacuolation of neuropil (1-50 µm vacuoles)'],
                      ['Neuronal loss', 'Dropout of neurons, may be severe'],
                      ['Gliosis', 'Reactive astrocytosis'],
                    ]}
                  />
                  <Callout variant="warning" title="No Inflammation" className="mt-4">
                    Unlike infectious diseases, prion diseases show NO inflammatory infiltrate.
                    This absence of inflammation with neurodegeneration is characteristic.
                  </Callout>
                </SubSection>

                <SubSection title="PrP Immunohistochemistry">
                  <p className="text-slate-600 dark:text-slate-300">
                    Immunohistochemistry for prion protein shows abnormal PrP deposits in various patterns:
                  </p>
                  <ul className="mt-2 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• <strong>Synaptic:</strong> Fine granular staining (sCJD)</li>
                    <li>• <strong>Perivacuolar:</strong> Around spongiform vacuoles</li>
                    <li>• <strong>Plaque-like:</strong> Kuru plaques, florid plaques (vCJD)</li>
                  </ul>
                </SubSection>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="types">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Prion Disease Types">
                <DataTable
                  headers={['Type', 'Age', 'Acquisition', 'Key Features']}
                  rows={[
                    ['Sporadic CJD', 'Adults (60s)', 'Unknown (spontaneous?)', 'Most common, cortical ribboning on MRI'],
                    ['Variant CJD', 'Young adults, teens', 'Dietary (BSE)', 'Florid plaques, pulvinar sign on MRI'],
                    ['Genetic CJD', 'Variable', 'PRNP mutation', 'Family history, various mutations'],
                    ['Iatrogenic CJD', 'Variable', 'Medical procedures', 'hGH, dura mater grafts, corneal transplants'],
                  ]}
                />

                <Callout variant="info" title="Variant CJD (vCJD)" className="mt-6">
                  vCJD is the only form that can occur in children/young adults. It is linked to
                  bovine spongiform encephalopathy (BSE/"mad cow disease") and shows distinctive
                  "florid plaques" with amyloid surrounded by spongiform vacuoles.
                </Callout>

                <SubSection title="Florid Plaques (vCJD)">
                  <DiagramBox title="Florid Plaque Cartoon" caption="Characteristic of vCJD">
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        {/* Central amyloid core */}
                        <div className="w-12 h-12 rounded-full bg-purple-400 dark:bg-purple-600" />
                        {/* Surrounding vacuoles */}
                        <div className="absolute -top-2 left-2 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border border-purple-300" />
                        <div className="absolute top-1 -right-2 w-3 h-3 rounded-full bg-white dark:bg-slate-800 border border-purple-300" />
                        <div className="absolute -bottom-1 left-0 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border border-purple-300" />
                        <div className="absolute bottom-2 -right-2 w-3 h-3 rounded-full bg-white dark:bg-slate-800 border border-purple-300" />
                        <div className="absolute top-0 -left-2 w-3 h-3 rounded-full bg-white dark:bg-slate-800 border border-purple-300" />
                        <div className="absolute -bottom-2 right-2 w-3 h-3 rounded-full bg-white dark:bg-slate-800 border border-purple-300" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">Amyloid core surrounded by spongiform vacuoles</p>
                  </DiagramBox>
                </SubSection>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Safety Considerations">
                <Callout variant="danger" title="Biosafety">
                  Prion-contaminated tissues require special handling. PrPSc is resistant to formalin,
                  alcohol, autoclaving at standard parameters. Consult institutional guidelines for
                  handling suspected prion disease specimens.
                </Callout>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="quiz">
          <QuizComponent
            questions={quizQuestions}
            title="Prion Disease Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
