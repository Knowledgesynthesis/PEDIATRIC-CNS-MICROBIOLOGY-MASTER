import { FlaskConical } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'myco1',
    question: 'The characteristic histopathologic pattern of CNS tuberculosis is:',
    options: [
      'Purulent meningitis with neutrophils',
      'Caseating granulomas with Langhans giant cells',
      'Microabscesses with gram-positive cocci',
      'Perivascular lymphocytic cuffing only'
    ],
    correctAnswer: 1,
    explanation: 'CNS tuberculosis classically shows caseating granulomas composed of epithelioid histiocytes, Langhans-type multinucleated giant cells, and central caseous necrosis.'
  },
  {
    id: 'myco2',
    question: 'Tuberculous meningitis characteristically involves which part of the CNS?',
    options: [
      'Convexity meninges only',
      'Basal meninges (base of brain)',
      'Spinal cord only',
      'Cerebellum exclusively'
    ],
    correctAnswer: 1,
    explanation: 'TB meningitis has a predilection for the basal meninges, producing a thick gelatinous exudate at the base of the brain that can encase cranial nerves and vessels.'
  },
  {
    id: 'myco3',
    question: 'Which stain is used to demonstrate acid-fast bacilli in tissue sections?',
    options: [
      'GMS (Gomori methenamine silver)',
      'Gram stain',
      'Ziehl-Neelsen or Fite',
      'Mucicarmine'
    ],
    correctAnswer: 2,
    explanation: 'Ziehl-Neelsen (or Fite for leprae and some atypical mycobacteria) stains the waxy mycolic acid-rich cell wall of mycobacteria, making them appear red (acid-fast) against a blue background.'
  },
  {
    id: 'myco4',
    question: 'CNS tuberculomas are:',
    options: [
      'Always solitary lesions',
      'Ring-enhancing mass lesions that can mimic tumors',
      'Never associated with meningitis',
      'Only found in immunocompromised patients'
    ],
    correctAnswer: 1,
    explanation: 'Tuberculomas are granulomatous mass lesions that can be single or multiple and show ring enhancement on imaging, potentially mimicking brain tumors or abscesses.'
  }
]

export default function MycobacterialInfections() {
  return (
    <ModuleLayout
      title="Mycobacterial & Granulomatous Infections"
      description="TB meningitis, tuberculomas, and granulomatous inflammation patterns"
      icon={FlaskConical}
      color="amber"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tb">Tuberculosis</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="ddx">Differentials</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Mycobacterial CNS Infections Overview">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Mycobacterial infections of the CNS are important causes of chronic meningitis
                  and mass lesions, particularly in endemic areas and immunocompromised patients.
                </p>

                <DataTable
                  headers={['Organism', 'Manifestation', 'Key Features']}
                  rows={[
                    ['M. tuberculosis', 'Meningitis, tuberculoma', 'Basal meningitis, caseating granulomas'],
                    ['M. avium complex', 'Rare CNS disease', 'Immunocompromised, poorly formed granulomas'],
                    ['M. leprae', 'Peripheral nerve only', 'Does not cause CNS disease'],
                  ]}
                />
              </Section>
            </ContentCard>

            <Callout variant="warning" title="Pediatric Considerations">
              Children, especially young infants and those who are immunocompromised or unvaccinated,
              are at higher risk for disseminated TB and CNS involvement.
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="tb">
          <div className="space-y-6">
            <ContentCard>
              <Section title="CNS Tuberculosis">
                <SubSection title="Tuberculous Meningitis">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    TB meningitis is the most common and serious form of CNS tuberculosis.
                    It has a predilection for the basal meninges.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <h5 className="font-medium text-amber-900 dark:text-amber-100 mb-2">Gross Findings</h5>
                      <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
                        <li>• Thick gelatinous exudate at base of brain</li>
                        <li>• Encasement of cranial nerves</li>
                        <li>• Involvement of Circle of Willis vessels</li>
                        <li>• Hydrocephalus common</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <h5 className="font-medium text-amber-900 dark:text-amber-100 mb-2">CSF Findings</h5>
                      <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
                        <li>• Lymphocytic pleocytosis</li>
                        <li>• Elevated protein</li>
                        <li>• Low glucose</li>
                        <li>• Web/pellicle on standing</li>
                      </ul>
                    </div>
                  </div>
                </SubSection>

                <SubSection title="Tuberculomas">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Tuberculomas are granulomatous mass lesions that can occur with or without meningitis.
                    They can be solitary or multiple.
                  </p>

                  <DiagramBox title="Tuberculoma Cartoon" caption="Ring-enhancing granulomatous mass">
                    <div className="flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-amber-100 dark:bg-amber-900/30 border-4 border-amber-400 dark:border-amber-600 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Granulomatous rim with central caseous necrosis</p>
                  </DiagramBox>
                </SubSection>

                <SubSection title="Complications">
                  <DataTable
                    headers={['Complication', 'Mechanism', 'Outcome']}
                    rows={[
                      ['Hydrocephalus', 'Basal exudate blocks CSF flow', 'Communicating > obstructive'],
                      ['Vasculitis/Infarcts', 'Vessel wall inflammation', 'Basal ganglia, internal capsule'],
                      ['Cranial nerve palsies', 'Nerve encasement by exudate', 'CN VI, III, IV most common'],
                      ['Spinal TB', 'Arachnoiditis, cord compression', 'Myelopathy'],
                    ]}
                  />
                </SubSection>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="patterns">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Histopathologic Patterns">
                <SubSection title="Caseating Granuloma">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    The hallmark of TB is the caseating granuloma, characterized by:
                  </p>

                  <DiagramBox title="Caseating Granuloma Cartoon" caption="Classic TB granuloma structure">
                    <div className="flex items-center justify-center">
                      <div className="relative w-32 h-32">
                        {/* Outer lymphocytes */}
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-300 dark:border-blue-600" />
                        {/* Epithelioid layer */}
                        <div className="absolute inset-4 rounded-full bg-pink-200 dark:bg-pink-800" />
                        {/* Caseous center */}
                        <div className="absolute inset-10 rounded-full bg-yellow-100 dark:bg-yellow-900" />
                        {/* Giant cells */}
                        <div className="absolute top-2 left-8 w-6 h-4 bg-pink-400 dark:bg-pink-600 rounded-full" />
                        <div className="absolute bottom-4 right-6 w-5 h-4 bg-pink-400 dark:bg-pink-600 rounded-full" />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-yellow-100 dark:bg-yellow-900 rounded" />
                        <span>Caseous necrosis</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-pink-200 dark:bg-pink-800 rounded" />
                        <span>Epithelioid cells</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 border-2 border-dashed border-blue-400 rounded" />
                        <span>Lymphocytes</span>
                      </div>
                    </div>
                  </DiagramBox>

                  <div className="mt-4 space-y-2">
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>Epithelioid histiocytes:</strong> Activated macrophages with pink cytoplasm
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>Langhans giant cells:</strong> Multinucleated cells with horseshoe-arranged nuclei
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>Caseous necrosis:</strong> Acellular, eosinophilic, cheese-like center
                    </p>
                  </div>
                </SubSection>

                <SubSection title="AFB Staining">
                  <DiagramBox title="Ziehl-Neelsen Stain Cartoon" caption="Acid-fast bacilli appear red">
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-24 h-16 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center relative">
                        <div className="absolute top-2 left-4 w-4 h-1 bg-red-500 transform rotate-12" />
                        <div className="absolute top-4 left-8 w-3 h-1 bg-red-500 transform -rotate-6" />
                        <div className="absolute bottom-3 left-6 w-4 h-1 bg-red-500 transform rotate-45" />
                        <div className="absolute top-6 right-6 w-3 h-1 bg-red-500 transform -rotate-12" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Red bacilli on blue background</p>
                  </DiagramBox>

                  <Callout variant="tip" title="Organism Numbers">
                    Organisms may be sparse in CNS TB. Multiple sections and special stains may be needed.
                    PCR and culture are more sensitive than histology for organism detection.
                  </Callout>
                </SubSection>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="ddx">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Differential Diagnosis of Granulomatous CNS Disease">
                <DataTable
                  headers={['Entity', 'Necrosis Type', 'Organisms', 'Key Features']}
                  rows={[
                    ['Tuberculosis', 'Caseating', 'AFB+', 'Basal meningitis, Langhans cells'],
                    ['Fungal (Histoplasma, Crypto)', 'Variable', 'GMS+, PAS+', 'Yeast forms on stains'],
                    ['Sarcoidosis', 'Non-caseating', 'None', 'No necrosis, exclude infection'],
                    ['Wegener/GPA', 'Geographic necrosis', 'None', 'Vasculitis, ANCA+'],
                  ]}
                />

                <Callout variant="warning" title="Sarcoidosis vs TB">
                  Sarcoidosis causes non-caseating granulomas without organisms. Always perform
                  special stains for organisms before diagnosing sarcoidosis in CNS granulomas.
                </Callout>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Non-Infectious Mimics">
                <Accordion type="multiple">
                  <AccordionItem value="sarcoid">
                    <AccordionTrigger value="sarcoid">
                      <div className="flex items-center gap-2">
                        <Badge variant="gray">Sarcoidosis</Badge>
                        Neurosarcoidosis
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="sarcoid">
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• Non-caseating ("naked") granulomas</li>
                        <li>• Predilection for leptomeninges, hypothalamus</li>
                        <li>• Must exclude infection with special stains</li>
                        <li>• May have systemic involvement</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="gpa">
                    <AccordionTrigger value="gpa">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Vasculitis</Badge>
                        GPA (Wegener's)
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="gpa">
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• Necrotizing granulomatous vasculitis</li>
                        <li>• Geographic necrosis pattern</li>
                        <li>• PR3-ANCA positive (c-ANCA)</li>
                        <li>• Often spreads from sinonasal disease</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="quiz">
          <QuizComponent
            questions={quizQuestions}
            title="Mycobacterial Infections Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
