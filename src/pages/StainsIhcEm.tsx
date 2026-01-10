import { TestTube } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'stain1',
    question: 'GMS (Gomori methenamine silver) stain is most useful for detecting:',
    options: [
      'Acid-fast bacilli',
      'Fungal organisms',
      'Gram-positive bacteria only',
      'Viral inclusions'
    ],
    correctAnswer: 1,
    explanation: 'GMS stains fungal cell walls black, making it the primary stain for detecting fungi in tissue. It also stains some bacteria and Pneumocystis.'
  },
  {
    id: 'stain2',
    question: 'Which IHC marker is most specific for Toxoplasma gondii in tissue sections?',
    options: [
      'CMV IHC',
      'HSV IHC',
      'Toxoplasma IHC',
      'CD68'
    ],
    correctAnswer: 2,
    explanation: 'Specific IHC antibodies against Toxoplasma antigens can identify the organism in tissue, particularly useful when morphology is ambiguous or organisms are sparse.'
  },
  {
    id: 'stain3',
    question: 'On Gram stain, gram-positive organisms appear:',
    options: [
      'Pink/red',
      'Blue/purple',
      'Black',
      'Colorless'
    ],
    correctAnswer: 1,
    explanation: 'Gram-positive organisms retain the crystal violet stain and appear blue/purple. Gram-negative organisms lose the crystal violet and take up safranin, appearing pink/red.'
  },
  {
    id: 'stain4',
    question: 'Electron microscopy of herpesvirus shows:',
    options: [
      'Brick-shaped particles',
      'Icosahedral nucleocapsid with envelope',
      'Helical nucleocapsid',
      'Bullet-shaped particles'
    ],
    correctAnswer: 1,
    explanation: 'Herpesviruses show characteristic 100nm icosahedral nucleocapsids that acquire an envelope from the nuclear membrane. They are found in the nucleus during replication.'
  }
]

export default function StainsIhcEm() {
  return (
    <ModuleLayout
      title="Stains, IHC & EM"
      description="Special stains, immunohistochemistry, and electron microscopy for CNS infections"
      icon={TestTube}
      color="indigo"
    >
      <Tabs defaultValue="stains">
        <TabsList>
          <TabsTrigger value="stains">Special Stains</TabsTrigger>
          <TabsTrigger value="ihc">IHC</TabsTrigger>
          <TabsTrigger value="em">EM Concepts</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="stains">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Special Stains for CNS Infections">
                <Accordion type="multiple" defaultValue={['gram']}>
                  <AccordionItem value="gram">
                    <AccordionTrigger value="gram">
                      <div className="flex items-center gap-2">
                        <Badge variant="purple">Gram Stain</Badge>
                        Bacterial Classification
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="gram">
                      <div className="space-y-4">
                        <DataTable
                          headers={['Category', 'Color', 'Examples']}
                          rows={[
                            ['Gram-positive', 'Blue/Purple', 'Streptococci, Staphylococci, Listeria'],
                            ['Gram-negative', 'Pink/Red', 'E. coli, N. meningitidis, H. influenzae'],
                          ]}
                        />
                        <DiagramBox title="Gram Stain Cartoon" caption="Gram-positive vs Gram-negative">
                          <div className="flex items-center justify-around w-full">
                            <div className="text-center">
                              <div className="flex gap-1 justify-center">
                                <div className="w-4 h-4 rounded-full bg-purple-600" />
                                <div className="w-4 h-4 rounded-full bg-purple-600" />
                              </div>
                              <p className="text-xs mt-2">Gram +</p>
                            </div>
                            <div className="text-center">
                              <div className="flex gap-0.5 justify-center">
                                <div className="w-5 h-3 rounded-full bg-pink-400" />
                                <div className="w-5 h-3 rounded-full bg-pink-400" />
                              </div>
                              <p className="text-xs mt-2">Gram -</p>
                            </div>
                          </div>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="gms">
                    <AccordionTrigger value="gms">
                      <div className="flex items-center gap-2">
                        <Badge variant="gray">GMS</Badge>
                        Gomori Methenamine Silver
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="gms">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          GMS stains fungal cell wall polysaccharides black against a green background.
                          Primary stain for fungal detection.
                        </p>
                        <DataTable
                          headers={['Stains', 'Appearance']}
                          rows={[
                            ['Fungal cell walls', 'Black'],
                            ['Some bacteria', 'Black (weak)'],
                            ['Pneumocystis', 'Black cysts'],
                            ['Background', 'Green'],
                          ]}
                        />
                        <DiagramBox title="GMS Cartoon" caption="Fungi appear black on green">
                          <div className="bg-green-200 dark:bg-green-800 p-4 rounded-lg">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-black" />
                              <div className="w-8 h-2 bg-black rounded" />
                              <div className="w-4 h-4 rounded-full bg-black" />
                            </div>
                          </div>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pas">
                    <AccordionTrigger value="pas">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">PAS</Badge>
                        Periodic Acid-Schiff
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="pas">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          PAS stains carbohydrates (glycogen, mucin, fungal walls) magenta.
                          Useful for fungi and some bacteria (Tropheryma whipplei).
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                          <li>• Fungi: Magenta cell walls</li>
                          <li>• Glycogen: Magenta (diastase-sensitive)</li>
                          <li>• Basement membranes: Magenta</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="afb">
                    <AccordionTrigger value="afb">
                      <div className="flex items-center gap-2">
                        <Badge variant="blue">AFB</Badge>
                        Acid-Fast Bacilli Stains
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="afb">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Ziehl-Neelsen and Fite stains detect mycobacteria based on their
                          acid-fast cell wall (mycolic acids).
                        </p>
                        <DataTable
                          headers={['Stain', 'Best For', 'Result']}
                          rows={[
                            ['Ziehl-Neelsen', 'M. tuberculosis', 'Red bacilli on blue'],
                            ['Fite', 'M. leprae, atypical', 'Red bacilli, gentler method'],
                            ['Auramine-rhodamine', 'Screening', 'Fluorescent bacilli'],
                          ]}
                        />
                        <DiagramBox title="AFB Stain Cartoon" caption="Red acid-fast bacilli">
                          <div className="bg-blue-200 dark:bg-blue-800 p-4 rounded-lg">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-6 h-1.5 bg-red-500 rounded transform rotate-12" />
                              <div className="w-5 h-1.5 bg-red-500 rounded transform -rotate-6" />
                              <div className="w-6 h-1.5 bg-red-500 rounded transform rotate-45" />
                            </div>
                          </div>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="muci">
                    <AccordionTrigger value="muci">
                      <div className="flex items-center gap-2">
                        <Badge variant="pink">Mucicarmine</Badge>
                        Cryptococcus Capsule
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="muci">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Mucicarmine specifically stains the mucopolysaccharide capsule of
                          Cryptococcus magenta/red.
                        </p>
                        <DiagramBox title="Mucicarmine Cartoon" caption="Magenta capsule around yeast">
                          <div className="flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-pink-300 dark:bg-pink-600 flex items-center justify-center">
                              <div className="w-8 h-8 rounded-full bg-blue-300 dark:bg-blue-600" />
                            </div>
                          </div>
                          <p className="text-xs mt-2">Magenta capsule, pale yeast center</p>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="ihc">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Immunohistochemistry for Infections">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  IHC uses antibodies to detect specific pathogen antigens in tissue sections,
                  providing definitive identification when morphology is ambiguous.
                </p>

                <DataTable
                  headers={['Target', 'Stains For', 'When to Use']}
                  rows={[
                    ['CMV IHC', 'CMV immediate-early antigen', 'Suspected CMV, atypical inclusions'],
                    ['HSV IHC', 'HSV-1/2 antigens', 'Necrotizing encephalitis, neonatal infection'],
                    ['VZV IHC', 'VZV antigens', 'Suspected VZV encephalitis'],
                    ['Toxoplasma IHC', 'Toxoplasma antigens', 'Ring-enhancing lesions, AIDS'],
                    ['Adenovirus IHC', 'Hexon antigen', 'Smudge cells, immunocompromised'],
                    ['JC virus IHC', 'SV40 large T antigen', 'PML (cross-reacts with SV40)'],
                  ]}
                />

                <Callout variant="tip" title="IHC Advantages" className="mt-6">
                  IHC can detect organisms when: (1) special stains are negative, (2) organisms are
                  sparse, (3) morphology is altered by treatment, or (4) definitive identification is needed.
                </Callout>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Common IHC Patterns">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <h5 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">CMV IHC</h5>
                    <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
                      <li>• Nuclear staining in infected cells</li>
                      <li>• Highlights cytomegalic cells</li>
                      <li>• More sensitive than H&E</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <h5 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">HSV IHC</h5>
                    <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
                      <li>• Nuclear and cytoplasmic staining</li>
                      <li>• Highlights infected neurons</li>
                      <li>• Distinguishes HSV-1 vs HSV-2</li>
                    </ul>
                  </div>
                </div>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="em">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Electron Microscopy Concepts">
                <Callout variant="info" title="Conceptual Overview">
                  EM is rarely used routinely but can be valuable for identifying viral particles
                  and unusual organisms. These are conceptual cartoon representations.
                </Callout>

                <SubSection title="Viral Ultrastructure">
                  <DataTable
                    headers={['Virus Family', 'Size', 'Shape', 'Key Features']}
                    rows={[
                      ['Herpesviruses', '~120-200nm', 'Icosahedral + envelope', 'Nuclear replication, triple-layered'],
                      ['Adenovirus', '~70-90nm', 'Icosahedral, naked', 'Fibers from vertices'],
                      ['Paramyxovirus', '~150-300nm', 'Pleomorphic, enveloped', 'Helical nucleocapsid'],
                      ['Enterovirus', '~25-30nm', 'Icosahedral, naked', 'Small, cytoplasmic'],
                    ]}
                  />
                </SubSection>

                <SubSection title="Herpesvirus EM Cartoon">
                  <DiagramBox title="Herpesvirus Particle" caption="Conceptual ultrastructure">
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        {/* Envelope */}
                        <div className="w-24 h-24 rounded-full border-4 border-dashed border-blue-400 dark:border-blue-600 flex items-center justify-center">
                          {/* Tegument */}
                          <div className="w-18 h-18 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                            {/* Capsid */}
                            <div className="w-12 h-12 bg-indigo-300 dark:bg-indigo-700" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 border-2 border-dashed border-blue-400 rounded" />
                        <span>Envelope</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-100 dark:bg-blue-900 rounded" />
                        <span>Tegument</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-indigo-300 dark:bg-indigo-700 rounded" />
                        <span>Capsid</span>
                      </div>
                    </div>
                  </DiagramBox>
                </SubSection>

                <SubSection title="Parasitic EM Features">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h5 className="font-medium text-slate-900 dark:text-white mb-2">Toxoplasma</h5>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• Conoid (apical complex)</li>
                        <li>• Rhoptries and dense granules</li>
                        <li>• Parasitophorous vacuole</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h5 className="font-medium text-slate-900 dark:text-white mb-2">Free-living Amebae</h5>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• Prominent nucleus</li>
                        <li>• Pseudopods</li>
                        <li>• Contractile vacuoles</li>
                      </ul>
                    </div>
                  </div>
                </SubSection>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="quiz">
          <QuizComponent
            questions={quizQuestions}
            title="Stains, IHC & EM Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
