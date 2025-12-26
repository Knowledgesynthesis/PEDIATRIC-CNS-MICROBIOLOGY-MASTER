import { Dna } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'viral1',
    question: 'Cowdry type A inclusions are classically associated with which viral infection?',
    options: [
      'Cytomegalovirus',
      'Herpes simplex virus',
      'Enterovirus',
      'Measles virus'
    ],
    correctAnswer: 1,
    explanation: 'Cowdry type A inclusions are eosinophilic intranuclear inclusions with a clear halo, classically seen in HSV infection. CMV shows "owl-eye" inclusions which are also intranuclear but have a different appearance.'
  },
  {
    id: 'viral2',
    question: 'Which histopathologic triad is characteristic of viral encephalitis?',
    options: [
      'Neutrophils, necrosis, and abscess formation',
      'Granulomas, giant cells, and caseation',
      'Perivascular lymphocytes, microglial nodules, and neuronophagia',
      'Eosinophils, Charcot-Leyden crystals, and parasites'
    ],
    correctAnswer: 2,
    explanation: 'The classic triad of viral encephalitis includes perivascular lymphocytic cuffing, microglial nodules, and neuronophagia (phagocytosis of neurons by microglia).'
  },
  {
    id: 'viral3',
    question: 'HSV encephalitis in neonates typically affects which brain region?',
    options: [
      'Temporal lobes bilaterally (like adults)',
      'Diffuse/generalized involvement',
      'Cerebellum primarily',
      'Basal ganglia only'
    ],
    correctAnswer: 1,
    explanation: 'Unlike adult HSV encephalitis which classically involves the temporal lobes, neonatal HSV encephalitis often shows diffuse or multifocal involvement throughout the brain.'
  },
  {
    id: 'viral4',
    question: 'Warthin-Finkeldey giant cells are pathognomonic for:',
    options: [
      'HSV infection',
      'CMV infection',
      'Measles infection',
      'VZV infection'
    ],
    correctAnswer: 2,
    explanation: 'Warthin-Finkeldey giant cells are multinucleated giant cells with intranuclear and intracytoplasmic inclusions, pathognomonic for measles infection.'
  }
]

export default function ViralEncephalitis() {
  return (
    <ModuleLayout
      title="Viral Encephalitis"
      description="DNA & RNA viruses, inclusion patterns, and neuropathologic features"
      icon={Dna}
      color="purple"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="dna">DNA Viruses</TabsTrigger>
          <TabsTrigger value="rna">RNA Viruses</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Viral Encephalitis Overview">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Viral infections of the CNS can cause meningitis, encephalitis, or meningoencephalitis.
                  The histopathologic hallmarks and inclusion patterns help identify specific viral etiologies.
                </p>

                <SubSection title="Classic Histopathologic Triad">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                      <div className="text-2xl mb-2">🔵</div>
                      <h4 className="font-medium text-purple-900 dark:text-purple-100">Perivascular Cuffing</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                        Lymphocytes around vessels
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                      <div className="text-2xl mb-2">⭐</div>
                      <h4 className="font-medium text-purple-900 dark:text-purple-100">Microglial Nodules</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                        Clusters of activated microglia
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                      <div className="text-2xl mb-2">🧠</div>
                      <h4 className="font-medium text-purple-900 dark:text-purple-100">Neuronophagia</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                        Microglia engulfing neurons
                      </p>
                    </div>
                  </div>
                </SubSection>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Inclusion Body Classification">
                <DataTable
                  headers={['Inclusion Type', 'Location', 'Appearance', 'Classic Virus']}
                  rows={[
                    ['Cowdry A', 'Intranuclear', 'Eosinophilic with halo', 'HSV, VZV'],
                    ['Owl-eye', 'Intranuclear + cytoplasmic', 'Large basophilic nuclear', 'CMV'],
                    ['Negri body', 'Intracytoplasmic', 'Eosinophilic', 'Rabies'],
                    ['Warthin-Finkeldey', 'Both', 'Multinucleated giant cell', 'Measles'],
                  ]}
                />
              </Section>
            </ContentCard>

            <Callout variant="info" title="CSF Pattern">
              Viral meningitis/encephalitis typically shows lymphocytic pleocytosis, normal to mildly
              elevated protein, and normal glucose (in contrast to bacterial meningitis).
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="dna">
          <div className="space-y-6">
            <ContentCard>
              <Section title="DNA Virus Infections">
                <Accordion type="multiple" defaultValue={['hsv']}>
                  <AccordionItem value="hsv">
                    <AccordionTrigger value="hsv">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">HSV</Badge>
                        Herpes Simplex Virus
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="hsv">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          HSV is the most common cause of sporadic fatal encephalitis. HSV-1 causes most
                          encephalitis in children and adults; HSV-2 is more common in neonates.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Neonatal HSV</h5>
                            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>• Diffuse brain involvement</li>
                              <li>• Hemorrhagic necrosis</li>
                              <li>• May be part of disseminated infection</li>
                              <li>• Often HSV-2</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Childhood HSV</h5>
                            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>• Temporal lobe predilection</li>
                              <li>• Hemorrhagic necrotizing</li>
                              <li>• Often unilateral initially</li>
                              <li>• Usually HSV-1</li>
                            </ul>
                          </div>
                        </div>

                        <DiagramBox title="Cowdry Type A Inclusion Cartoon" caption="Intranuclear eosinophilic inclusion with halo">
                          <div className="flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full border-4 border-blue-300 dark:border-blue-600 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30">
                              <div className="w-10 h-10 rounded-full bg-red-400 dark:bg-red-600 border-2 border-transparent ring-4 ring-white dark:ring-slate-800" />
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 mt-2">Nucleus with eosinophilic inclusion and clear halo</p>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cmv">
                    <AccordionTrigger value="cmv">
                      <div className="flex items-center gap-2">
                        <Badge variant="blue">CMV</Badge>
                        Cytomegalovirus
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="cmv">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          CMV can cause congenital infection (see TORCH module) or acquired infection in
                          immunocompromised patients. The "owl-eye" inclusion is pathognomonic.
                        </p>

                        <DataTable
                          headers={['Feature', 'Description']}
                          rows={[
                            ['Cell enlargement', 'Cytomegaly (large infected cells)'],
                            ['Nuclear inclusion', 'Large basophilic "owl-eye" with halo'],
                            ['Cytoplasmic inclusions', 'Smaller granular basophilic bodies'],
                            ['Pattern', 'Necrotizing, periventricular predilection'],
                          ]}
                        />

                        <DiagramBox title="Owl-Eye Inclusion Cartoon" caption="CMV-infected cell with characteristic inclusions">
                          <div className="flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border-4 border-slate-300 dark:border-slate-600 flex items-center justify-center bg-pink-50 dark:bg-pink-900/20">
                              <div className="w-14 h-14 rounded-full border-2 border-blue-400 flex items-center justify-center bg-white dark:bg-slate-800">
                                <div className="w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400" />
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 mt-2">Enlarged cell with nuclear "owl-eye" inclusion</p>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="vzv">
                    <AccordionTrigger value="vzv">
                      <div className="flex items-center gap-2">
                        <Badge variant="purple">VZV</Badge>
                        Varicella-Zoster Virus
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="vzv">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          VZV can cause encephalitis during primary infection (varicella) or reactivation.
                          CNS vasculopathy is an important complication.
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• <strong>Cerebellar ataxia:</strong> Most common CNS complication of chickenpox</li>
                          <li>• <strong>Vasculopathy:</strong> Large and small vessel involvement</li>
                          <li>• <strong>Inclusions:</strong> Cowdry type A (similar to HSV)</li>
                          <li>• <strong>Zoster:</strong> Reactivation with dermatomal distribution</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="adeno">
                    <AccordionTrigger value="adeno">
                      <div className="flex items-center gap-2">
                        <Badge variant="gray">Adenovirus</Badge>
                        Adenovirus
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="adeno">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Adenovirus CNS infection is uncommon but can occur in immunocompromised patients.
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• <strong>Smudge cells:</strong> Characteristic nuclear inclusions that fill the nucleus</li>
                          <li>• <strong>Pattern:</strong> Necrotizing encephalitis</li>
                          <li>• <strong>Risk:</strong> Immunocompromised hosts, HSCT recipients</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="rna">
          <div className="space-y-6">
            <ContentCard>
              <Section title="RNA Virus Infections">
                <Accordion type="multiple" defaultValue={['entero']}>
                  <AccordionItem value="entero">
                    <AccordionTrigger value="entero">
                      <div className="flex items-center gap-2">
                        <Badge variant="green">Enteroviruses</Badge>
                        Enteroviruses (Coxsackie, Echo, etc.)
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="entero">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Enteroviruses are the most common cause of viral meningitis in children.
                          Most cases are self-limited but severe encephalitis can occur.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Clinical</h5>
                            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                              <li>• Summer/fall peak</li>
                              <li>• Fecal-oral transmission</li>
                              <li>• Often mild, self-limited</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Pathology</h5>
                            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                              <li>• Lymphocytic meningitis</li>
                              <li>• No specific inclusions</li>
                              <li>• Anterior horn cells (polio-like)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="measles">
                    <AccordionTrigger value="measles">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Measles</Badge>
                        Measles Virus
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="measles">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Measles can cause acute encephalitis, postinfectious encephalomyelitis (ADEM),
                          or subacute sclerosing panencephalitis (SSPE) years later.
                        </p>

                        <DataTable
                          headers={['Complication', 'Timing', 'Key Features']}
                          rows={[
                            ['Acute encephalitis', 'During infection', 'Direct viral invasion'],
                            ['ADEM', '1-2 weeks post', 'Perivenular demyelination'],
                            ['SSPE', 'Years later', 'Progressive, Cowdry B inclusions'],
                          ]}
                        />

                        <DiagramBox title="Warthin-Finkeldey Giant Cell Cartoon" caption="Pathognomonic for measles">
                          <div className="flex items-center justify-center">
                            <div className="relative w-24 h-24">
                              <div className="absolute inset-0 bg-pink-200 dark:bg-pink-800 rounded-full" />
                              {/* Multiple nuclei */}
                              <div className="absolute top-2 left-4 w-6 h-6 rounded-full bg-purple-400 dark:bg-purple-600" />
                              <div className="absolute top-3 right-4 w-5 h-5 rounded-full bg-purple-400 dark:bg-purple-600" />
                              <div className="absolute bottom-4 left-6 w-5 h-5 rounded-full bg-purple-400 dark:bg-purple-600" />
                              <div className="absolute bottom-3 right-5 w-6 h-6 rounded-full bg-purple-400 dark:bg-purple-600" />
                              <div className="absolute top-8 left-10 w-4 h-4 rounded-full bg-purple-400 dark:bg-purple-600" />
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 mt-2">Multinucleated giant cell with multiple nuclei</p>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="arbo">
                    <AccordionTrigger value="arbo">
                      <div className="flex items-center gap-2">
                        <Badge variant="yellow">Arboviruses</Badge>
                        Arboviral Encephalitis
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="arbo">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Arthropod-borne viruses (arboviruses) cause seasonal encephalitis. Geographic
                          distribution depends on vector range.
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• <strong>West Nile:</strong> Most common in North America, gray matter tropism</li>
                          <li>• <strong>Eastern Equine:</strong> Severe, high mortality, basal ganglia involvement</li>
                          <li>• <strong>Japanese Encephalitis:</strong> Asia, thalamus and basal ganglia</li>
                          <li>• <strong>Pathology:</strong> Typical viral pattern, no specific inclusions</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="patterns">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Key Pathologic Patterns">
                <DiagramBox title="Perivascular Cuffing Cartoon" caption="Lymphocytes surrounding blood vessels">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-4 bg-red-300 dark:bg-red-700 rounded-full" />
                      <div className="absolute -top-3 -bottom-3 -left-2 -right-2 border-4 border-dashed border-blue-400 dark:border-blue-600 rounded-full opacity-70" />
                      <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-blue-500" />
                      <div className="absolute -top-2 left-4 w-2 h-2 rounded-full bg-blue-500" />
                      <div className="absolute -top-1 right-2 w-2 h-2 rounded-full bg-blue-500" />
                      <div className="absolute -bottom-1 left-2 w-2 h-2 rounded-full bg-blue-500" />
                      <div className="absolute -bottom-2 left-6 w-2 h-2 rounded-full bg-blue-500" />
                      <div className="absolute -bottom-1 right-4 w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">Blood vessel (red) with surrounding lymphocytes (blue)</p>
                </DiagramBox>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Neuronophagia Pattern">
                <DiagramBox title="Neuronophagia Cartoon" caption="Microglia phagocytosing infected neurons">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-yellow-300 dark:bg-yellow-600 border-2 border-yellow-500 flex items-center justify-center">
                        <span className="text-xs">N</span>
                      </div>
                      <p className="text-xs mt-1">Normal neuron</p>
                    </div>
                    <span className="text-2xl">→</span>
                    <div className="text-center">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-2 w-10 h-10 rounded-full bg-yellow-200 dark:bg-yellow-700 opacity-50" />
                        <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-blue-400 dark:bg-blue-600" />
                        <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-blue-400 dark:bg-blue-600" />
                        <div className="absolute bottom-0 left-1 w-4 h-4 rounded-full bg-blue-400 dark:bg-blue-600" />
                        <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-blue-400 dark:bg-blue-600" />
                      </div>
                      <p className="text-xs mt-1">Neuronophagia</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Microglia (blue) surrounding and engulfing dying neuron</p>
                </DiagramBox>
              </Section>
            </ContentCard>

            <Callout variant="danger" title="Pitfall: Necrotizing Encephalitis vs Infarct">
              HSV encephalitis causes hemorrhagic necrosis that can mimic infarction on imaging.
              Clinical context, CSF findings, and IHC for HSV antigens help distinguish these entities.
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="quiz">
          <QuizComponent
            questions={quizQuestions}
            title="Viral Encephalitis Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
