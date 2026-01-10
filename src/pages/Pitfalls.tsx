import { AlertTriangle } from 'lucide-react'
import { ModuleLayout, Section, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'pit1',
    question: 'Reactive enlarged astrocytes can be mistaken for CMV-infected cells. What helps distinguish them?',
    options: [
      'Size alone',
      'CMV IHC staining and characteristic "owl-eye" nuclear inclusion with cytoplasmic inclusions',
      'Location in tissue',
      'They cannot be distinguished'
    ],
    correctAnswer: 1,
    explanation: 'CMV IHC is definitive. True CMV cells show owl-eye intranuclear inclusions with clear halo AND granular cytoplasmic inclusions. Reactive astrocytes lack these specific features and are IHC negative.'
  },
  {
    id: 'pit2',
    question: 'Necrotizing encephalitis from HSV can be confused with:',
    options: [
      'Bacterial meningitis',
      'Infarction',
      'Normal brain tissue',
      'Granulomatous disease'
    ],
    correctAnswer: 1,
    explanation: 'HSV encephalitis causes hemorrhagic necrosis that can mimic infarction. Clinical context (fever, CSF findings) and IHC for HSV help distinguish these. HSV shows viral inclusions and positive IHC.'
  },
  {
    id: 'pit3',
    question: 'Free-living amebae (Naegleria, Acanthamoeba) are most commonly mistaken for:',
    options: [
      'Red blood cells',
      'Macrophages',
      'Neurons',
      'Bacterial colonies'
    ],
    correctAnswer: 1,
    explanation: 'Amebae have similar size and morphology to macrophages. Look for the characteristic nuclear morphology (large central karyosome in Naegleria) and use IHC or culture for confirmation.'
  },
  {
    id: 'pit4',
    question: 'Tuberculosis granulomas can be confused with fungal granulomas. What helps distinguish them?',
    options: [
      'Gross appearance only',
      'AFB stain for TB, GMS/PAS for fungi',
      'They look identical and cannot be distinguished',
      'Location in the brain'
    ],
    correctAnswer: 1,
    explanation: 'Special stains are essential: AFB (Ziehl-Neelsen) for mycobacteria showing acid-fast bacilli, GMS/PAS for fungi showing fungal forms. Both may show caseating granulomas.'
  }
]

export default function Pitfalls() {
  return (
    <ModuleLayout
      title="Pitfalls & Dangerous Mimics"
      description="Common diagnostic traps in pediatric CNS infectious pathology"
      icon={AlertTriangle}
      color="red"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="viral">Viral Pitfalls</TabsTrigger>
          <TabsTrigger value="other">Other Mimics</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <Callout variant="danger" title="Critical Learning">
              Recognizing these pitfalls is essential to avoid misdiagnosis. When in doubt,
              use IHC, special stains, and clinical correlation.
            </Callout>

            <ContentCard>
              <Section title="Common Pitfall Categories">
                <DataTable
                  headers={['Pitfall', 'Mimics', 'Key Distinguishing Features']}
                  rows={[
                    ['CMV inclusions', 'Reactive astrocytes', 'IHC, owl-eye + cytoplasmic inclusions'],
                    ['HSV necrosis', 'Infarction', 'Cowdry A inclusions, HSV IHC, clinical context'],
                    ['Toxoplasma', 'Necrotizing gliosis', 'IHC, tachyzoites/cysts at edge'],
                    ['Amebae', 'Macrophages', 'Nuclear morphology, IHC'],
                    ['TB granulomas', 'Fungal granulomas', 'AFB vs GMS/PAS stains'],
                    ['Meningitis', 'Leukemic infiltration', 'Clinical history, flow cytometry'],
                  ]}
                />
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="viral">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Viral Infection Pitfalls">
                <Accordion type="multiple" defaultValue={['cmv']}>
                  <AccordionItem value="cmv">
                    <AccordionTrigger value="cmv">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Pitfall</Badge>
                        CMV vs Reactive Astrocytes
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="cmv">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Large reactive astrocytes (Alzheimer type II, gemistocytes) can be confused
                          with CMV-infected cytomegalic cells.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                            <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">True CMV</h5>
                            <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                              <li>• Large cell (cytomegaly)</li>
                              <li>• Owl-eye intranuclear inclusion</li>
                              <li>• Clear nuclear halo</li>
                              <li>• Cytoplasmic inclusions</li>
                              <li>• CMV IHC positive</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Reactive Astrocyte</h5>
                            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                              <li>• Enlarged cell</li>
                              <li>• Vesicular nucleus, no inclusion</li>
                              <li>• No halo</li>
                              <li>• No cytoplasmic inclusions</li>
                              <li>• CMV IHC negative</li>
                            </ul>
                          </div>
                        </div>

                        <DiagramBox title="Comparison Cartoon" caption="True CMV vs Reactive astrocyte">
                          <div className="flex items-center justify-around w-full">
                            <div className="text-center">
                              <div className="w-20 h-20 rounded-full bg-pink-100 dark:bg-pink-900/30 border-2 border-pink-300 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border-2 border-blue-400 bg-white dark:bg-slate-800 flex items-center justify-center">
                                  <div className="w-6 h-6 rounded-full bg-blue-600" />
                                </div>
                              </div>
                              <p className="text-xs mt-2 font-medium">CMV cell</p>
                              <p className="text-xs text-red-500">Owl-eye + cyto inclusions</p>
                            </div>
                            <div className="text-center">
                              <div className="w-20 h-20 rounded-full bg-pink-100 dark:bg-pink-900/30 border-2 border-pink-300 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-800" />
                              </div>
                              <p className="text-xs mt-2 font-medium">Reactive astrocyte</p>
                              <p className="text-xs text-green-500">No inclusions</p>
                            </div>
                          </div>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="hsv">
                    <AccordionTrigger value="hsv">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Pitfall</Badge>
                        HSV Encephalitis vs Infarction
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="hsv">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          HSV encephalitis causes hemorrhagic necrosis that can mimic hemorrhagic infarction
                          on imaging and gross examination.
                        </p>

                        <DataTable
                          headers={['Feature', 'HSV Encephalitis', 'Infarction']}
                          rows={[
                            ['Location', 'Temporal lobe predilection', 'Vascular territory'],
                            ['Viral inclusions', 'Cowdry type A present', 'Absent'],
                            ['HSV IHC', 'Positive', 'Negative'],
                            ['Clinical', 'Fever, altered mental status', 'Sudden onset, focal deficits'],
                            ['CSF', 'Lymphocytic pleocytosis', 'Often normal or mild changes'],
                          ]}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="inclusions">
                    <AccordionTrigger value="inclusions">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Pitfall</Badge>
                        Overcalling Viral Inclusions
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="inclusions">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Nuclear pseudoinclusions, apoptotic bodies, and artifacts can mimic viral inclusions.
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• <strong>Nuclear pseudoinclusions:</strong> Cytoplasmic invaginations into nucleus</li>
                          <li>• <strong>Apoptotic bodies:</strong> Condensed chromatin fragments</li>
                          <li>• <strong>Marinesco bodies:</strong> Normal intranuclear inclusions in neurons</li>
                          <li>• <strong>Solution:</strong> Use IHC for confirmation</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="other">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Non-Viral Pitfalls">
                <Accordion type="multiple" defaultValue={['toxo']}>
                  <AccordionItem value="toxo">
                    <AccordionTrigger value="toxo">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Pitfall</Badge>
                        Toxoplasma vs Necrotizing Gliosis
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="toxo">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Necrotizing lesions without visible organisms can be confused with
                          non-specific necrosis or gliosis.
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• <strong>Look for:</strong> Tachyzoites at periphery of necrosis</li>
                          <li>• <strong>Cysts:</strong> Thick-walled cysts in viable tissue</li>
                          <li>• <strong>IHC:</strong> Toxoplasma IHC highly sensitive</li>
                          <li>• <strong>Clinical:</strong> AIDS, ring-enhancing lesions</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ameba">
                    <AccordionTrigger value="ameba">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Pitfall</Badge>
                        Amebae vs Macrophages
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="ameba">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Free-living amebae (Naegleria, Acanthamoeba) have similar size and shape
                          to tissue macrophages.
                        </p>

                        <DiagramBox title="Ameba vs Macrophage" caption="Nuclear features differ">
                          <div className="flex items-center justify-around w-full">
                            <div className="text-center">
                              <div className="w-14 h-12 bg-red-200 dark:bg-red-800 rounded-full relative" style={{ borderRadius: '50% 40% 60% 50%' }}>
                                <div className="absolute top-3 left-3 w-5 h-5 rounded-full bg-red-500 dark:bg-red-400 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-red-800 dark:bg-red-200" />
                                </div>
                              </div>
                              <p className="text-xs mt-2 font-medium">Naegleria</p>
                              <p className="text-xs text-slate-500">Large central karyosome</p>
                            </div>
                            <div className="text-center">
                              <div className="w-14 h-12 bg-blue-200 dark:bg-blue-800 rounded-full relative" style={{ borderRadius: '45% 55% 50% 50%' }}>
                                <div className="absolute top-3 left-3 w-6 h-4 rounded-full bg-blue-400 dark:bg-blue-600" style={{ borderRadius: '40% 60% 50% 50%' }} />
                              </div>
                              <p className="text-xs mt-2 font-medium">Macrophage</p>
                              <p className="text-xs text-slate-500">Kidney-shaped nucleus</p>
                            </div>
                          </div>
                        </DiagramBox>

                        <Callout variant="warning" title="Use IHC">
                          Macrophage markers (CD68, CD163) are negative in amebae.
                          Specific ameba IHC or culture may be needed for confirmation.
                        </Callout>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="granuloma">
                    <AccordionTrigger value="granuloma">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Pitfall</Badge>
                        TB vs Fungal Granulomas
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="granuloma">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Both TB and fungal infections can produce caseating granulomas.
                          Special stains are essential.
                        </p>
                        <DataTable
                          headers={['Stain', 'TB', 'Fungi']}
                          rows={[
                            ['AFB (Ziehl-Neelsen)', 'Positive (red bacilli)', 'Negative'],
                            ['GMS', 'Negative', 'Positive (black organisms)'],
                            ['PAS', 'Negative', 'Positive (magenta)'],
                          ]}
                        />
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                          Always perform both AFB and fungal stains on granulomatous CNS lesions.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="meningitis">
                    <AccordionTrigger value="meningitis">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Pitfall</Badge>
                        Meningitis vs Leukemic Infiltration
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="meningitis">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Leukemic/lymphoma infiltration of meninges can mimic lymphocytic meningitis.
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• <strong>Clinical history:</strong> Known hematologic malignancy</li>
                          <li>• <strong>Morphology:</strong> Monotonous population, atypical cells</li>
                          <li>• <strong>Flow cytometry:</strong> Clonal population</li>
                          <li>• <strong>IHC:</strong> Markers for leukemia/lymphoma</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Key Principles to Avoid Pitfalls">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Always Do</h5>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Correlate with clinical history</li>
                      <li>• Use IHC when morphology is ambiguous</li>
                      <li>• Perform appropriate special stains</li>
                      <li>• Consider multiple diagnoses</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">Never Do</h5>
                    <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                      <li>• Diagnose CMV without IHC confirmation</li>
                      <li>• Miss organisms at necrosis edge</li>
                      <li>• Forget to stain for both bacteria and fungi</li>
                      <li>• Ignore clinical context</li>
                    </ul>
                  </div>
                </div>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="quiz">
          <QuizComponent
            questions={quizQuestions}
            title="Pitfalls & Mimics Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
