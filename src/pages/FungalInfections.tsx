import { Leaf } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'fungal1',
    question: 'Acute angle branching (approximately 45 degrees) hyphae are characteristic of:',
    options: [
      'Mucorales (Rhizopus, Mucor)',
      'Aspergillus species',
      'Candida species',
      'Cryptococcus neoformans'
    ],
    correctAnswer: 1,
    explanation: 'Aspergillus shows septate hyphae with acute angle (45°) branching. Mucorales show broad, ribbon-like, pauci-septate hyphae with 90° branching.'
  },
  {
    id: 'fungal2',
    question: 'Which stain is best for demonstrating the capsule of Cryptococcus neoformans?',
    options: [
      'GMS (Gomori methenamine silver)',
      'PAS (Periodic acid-Schiff)',
      'Mucicarmine',
      'Gram stain'
    ],
    correctAnswer: 2,
    explanation: 'Mucicarmine stains the mucopolysaccharide capsule of Cryptococcus magenta/red. GMS and PAS stain the organism itself but not the capsule specifically.'
  },
  {
    id: 'fungal3',
    question: 'Angioinvasion with thrombosis and hemorrhagic infarction is most characteristic of CNS infection with:',
    options: [
      'Cryptococcus',
      'Candida',
      'Aspergillus and Mucorales',
      'Histoplasma'
    ],
    correctAnswer: 2,
    explanation: 'Both Aspergillus and Mucorales are highly angioinvasive, leading to vascular invasion, thrombosis, and hemorrhagic infarcts. This is a hallmark of these infections.'
  },
  {
    id: 'fungal4',
    question: 'Candida CNS infection in neonates most commonly presents as:',
    options: [
      'Large parenchymal abscess',
      'Meningitis with microabscesses',
      'Granulomatous inflammation',
      'Pure meningeal involvement without parenchymal disease'
    ],
    correctAnswer: 1,
    explanation: 'Neonatal candidiasis typically causes meningitis with scattered microabscesses in the brain parenchyma. Yeast and pseudohyphae can be seen in these lesions.'
  }
]

export default function FungalInfections() {
  return (
    <ModuleLayout
      title="Fungal CNS Infections"
      description="Candida, Aspergillus, Mucorales, Cryptococcus, and special stain patterns"
      icon={Leaf}
      color="emerald"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="organisms">Organisms</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="stains">Stains</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Fungal CNS Infections Overview">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Fungal CNS infections are relatively uncommon in immunocompetent children but can occur
                  in neonates, immunocompromised patients, and in endemic areas.
                </p>

                <DataTable
                  headers={['Organism', 'Risk Factors', 'Pattern']}
                  rows={[
                    ['Candida', 'Neonates, ICU, TPN, immunosuppression', 'Meningitis, microabscesses'],
                    ['Aspergillus', 'Neutropenia, HSCT, chronic granulomatous disease', 'Angioinvasive, hemorrhagic infarcts'],
                    ['Mucorales', 'DKA, neutropenia, iron overload', 'Rhinocerebral, angioinvasive'],
                    ['Cryptococcus', 'HIV/AIDS, immunosuppression', 'Meningitis, "soap bubble" lesions'],
                  ]}
                />
              </Section>
            </ContentCard>

            <Callout variant="info" title="Morphologic Classification">
              Fungi can be categorized by morphology: yeast forms (Cryptococcus, Candida yeast phase),
              molds with septate hyphae (Aspergillus), and molds with pauci-septate hyphae (Mucorales).
            </Callout>

            <ContentCard>
              <Section title="Key Morphologic Features">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center">
                    <div className="text-2xl mb-2">🔵</div>
                    <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Yeast</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                      Round/oval budding cells
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center">
                    <div className="text-2xl mb-2">〰️</div>
                    <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Pseudohyphae</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                      Elongated yeast chains
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center">
                    <div className="text-2xl mb-2">📐</div>
                    <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Septate Hyphae</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                      Regular, acute branching
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center">
                    <div className="text-2xl mb-2">🎀</div>
                    <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Ribbon Hyphae</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                      Broad, pauci-septate
                    </p>
                  </div>
                </div>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="organisms">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Fungal Organisms">
                <Accordion type="multiple" defaultValue={['candida']}>
                  <AccordionItem value="candida">
                    <AccordionTrigger value="candida">
                      <div className="flex items-center gap-2">
                        <Badge variant="yellow">Candida</Badge>
                        Candida Species
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="candida">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Candida is an important cause of neonatal meningitis and CNS infection in
                          immunocompromised children. C. albicans is most common.
                        </p>

                        <DiagramBox title="Candida Cartoon" caption="Yeast with pseudohyphae">
                          <div className="flex items-center justify-center gap-2">
                            <div className="flex items-center">
                              <div className="w-4 h-4 rounded-full bg-yellow-300 dark:bg-yellow-600 border-2 border-yellow-500" />
                              <div className="w-6 h-3 rounded-full bg-yellow-200 dark:bg-yellow-700 border border-yellow-400 -ml-1" />
                              <div className="w-6 h-3 rounded-full bg-yellow-200 dark:bg-yellow-700 border border-yellow-400 -ml-1" />
                            </div>
                            <div className="w-4 h-4 rounded-full bg-yellow-300 dark:bg-yellow-600 border-2 border-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-300 dark:bg-yellow-600 border-2 border-yellow-500" />
                          </div>
                          <p className="text-xs text-slate-500 mt-2">Budding yeast and pseudohyphae</p>
                        </DiagramBox>

                        <DataTable
                          headers={['Feature', 'Description']}
                          rows={[
                            ['Morphology', 'Oval yeast (3-5 µm) with budding, pseudohyphae'],
                            ['Pattern', 'Meningitis with microabscesses'],
                            ['Stains', 'GMS+, PAS+, Gram-positive'],
                            ['Risk factors', 'Prematurity, TPN, central lines, antibiotics'],
                          ]}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="aspergillus">
                    <AccordionTrigger value="aspergillus">
                      <div className="flex items-center gap-2">
                        <Badge variant="green">Aspergillus</Badge>
                        Aspergillus Species
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="aspergillus">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Aspergillus causes invasive CNS infection primarily in neutropenic patients.
                          It is highly angioinvasive with characteristic branching pattern.
                        </p>

                        <DiagramBox title="Aspergillus Cartoon" caption="Septate hyphae with acute angle branching">
                          <div className="flex items-center justify-center">
                            <svg width="120" height="80" viewBox="0 0 120 80">
                              <line x1="10" y1="60" x2="50" y2="40" stroke="currentColor" strokeWidth="4" className="text-green-500" />
                              <line x1="50" y1="40" x2="90" y2="20" stroke="currentColor" strokeWidth="4" className="text-green-500" />
                              <line x1="50" y1="40" x2="80" y2="60" stroke="currentColor" strokeWidth="4" className="text-green-500" />
                              <line x1="30" y1="50" x2="20" y2="70" stroke="currentColor" strokeWidth="4" className="text-green-500" />
                              {/* Septa */}
                              <line x1="30" y1="48" x2="32" y2="52" stroke="currentColor" strokeWidth="2" className="text-green-700" />
                              <line x1="70" y1="28" x2="72" y2="32" stroke="currentColor" strokeWidth="2" className="text-green-700" />
                              <line x1="65" y1="48" x2="67" y2="52" stroke="currentColor" strokeWidth="2" className="text-green-700" />
                            </svg>
                          </div>
                          <p className="text-xs text-slate-500 mt-2">45° acute angle branching with septations</p>
                        </DiagramBox>

                        <Callout variant="danger" title="Angioinvasion">
                          Aspergillus invades blood vessels, causing thrombosis and hemorrhagic infarction.
                          Look for hyphae within vessel walls.
                        </Callout>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mucor">
                    <AccordionTrigger value="mucor">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Mucorales</Badge>
                        Mucormycosis (Rhizopus, Mucor)
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="mucor">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Mucormycosis causes rhinocerebral infection, often in diabetic ketoacidosis.
                          The hyphae are distinctive: broad, ribbon-like, and pauci-septate.
                        </p>

                        <DiagramBox title="Mucorales Cartoon" caption="Broad ribbon-like hyphae with 90° branching">
                          <div className="flex items-center justify-center">
                            <svg width="120" height="80" viewBox="0 0 120 80">
                              <line x1="10" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="8" className="text-red-400" />
                              <line x1="60" y1="50" x2="110" y2="50" stroke="currentColor" strokeWidth="8" className="text-red-400" />
                              <line x1="60" y1="50" x2="60" y2="10" stroke="currentColor" strokeWidth="8" className="text-red-400" />
                              <line x1="35" y1="50" x2="35" y2="75" stroke="currentColor" strokeWidth="6" className="text-red-400" />
                            </svg>
                          </div>
                          <p className="text-xs text-slate-500 mt-2">Wide, ribbon-like hyphae with right-angle (90°) branching</p>
                        </DiagramBox>

                        <DataTable
                          headers={['Feature', 'Aspergillus', 'Mucorales']}
                          rows={[
                            ['Width', 'Narrow (3-6 µm)', 'Wide (10-20 µm)'],
                            ['Septa', 'Regular septations', 'Pauci-septate or aseptate'],
                            ['Branching', '45° acute angle', '90° right angle'],
                            ['Appearance', 'Uniform', 'Ribbon-like, irregular'],
                          ]}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="crypto">
                    <AccordionTrigger value="crypto">
                      <div className="flex items-center gap-2">
                        <Badge variant="blue">Cryptococcus</Badge>
                        Cryptococcus neoformans/gattii
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="crypto">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Cryptococcus causes meningitis and parenchymal disease. The thick
                          polysaccharide capsule is key to pathogenesis and diagnosis.
                        </p>

                        <DiagramBox title="Cryptococcus Cartoon" caption="Encapsulated yeast with narrow-based budding">
                          <div className="flex items-center justify-center gap-4">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 border-2 border-dashed border-blue-300 dark:border-blue-600 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-400" />
                              </div>
                              <p className="text-xs mt-1 text-center">Capsule halo</p>
                            </div>
                            <div className="relative">
                              <div className="w-12 h-12 rounded-full bg-pink-200 dark:bg-pink-800 flex items-center justify-center">
                                <div className="w-6 h-6 rounded-full bg-pink-500 dark:bg-pink-400" />
                              </div>
                              <div className="absolute -right-2 top-3 w-4 h-4 rounded-full bg-pink-500 dark:bg-pink-400" />
                              <p className="text-xs mt-1 text-center">Narrow bud</p>
                            </div>
                          </div>
                        </DiagramBox>

                        <Callout variant="tip" title="Soap Bubble Lesions">
                          Cryptococcal infection can form "soap bubble" lesions in the basal ganglia,
                          representing dilated Virchow-Robin spaces filled with organisms and mucin.
                        </Callout>
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
              <Section title="Pathologic Patterns">
                <SubSection title="Angioinvasion">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Aspergillus and Mucorales are highly angioinvasive, invading vessel walls
                    and causing thrombosis with downstream infarction.
                  </p>
                  <DiagramBox title="Angioinvasion Cartoon" caption="Fungal hyphae invading vessel wall">
                    <div className="flex items-center justify-center">
                      <div className="relative w-32 h-20">
                        <div className="absolute inset-y-2 left-0 right-0 bg-red-200 dark:bg-red-800 rounded-full" />
                        <div className="absolute top-4 left-4 w-24 h-2 bg-green-400 dark:bg-green-600" />
                        <div className="absolute top-6 left-8 w-16 h-2 bg-green-400 dark:bg-green-600 transform rotate-12" />
                        <div className="absolute top-8 left-12 w-12 h-2 bg-green-400 dark:bg-green-600 transform -rotate-6" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Hyphae penetrating vessel wall</p>
                  </DiagramBox>
                </SubSection>

                <SubSection title="Abscess vs Granuloma">
                  <DataTable
                    headers={['Pattern', 'Organisms', 'Histology']}
                    rows={[
                      ['Microabscesses', 'Candida, Aspergillus', 'Neutrophils, necrosis, organisms'],
                      ['Granulomas', 'Cryptococcus, Histoplasma', 'Macrophages, giant cells, organisms'],
                      ['Mixed', 'Any (depends on host)', 'Variable inflammation'],
                    ]}
                  />
                </SubSection>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="stains">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Special Stains for Fungi">
                <DataTable
                  headers={['Stain', 'Stains What', 'Appearance', 'Best For']}
                  rows={[
                    ['GMS', 'Fungal cell wall', 'Black on green', 'All fungi'],
                    ['PAS', 'Carbohydrates in wall', 'Magenta', 'All fungi, also bacteria'],
                    ['Mucicarmine', 'Mucopolysaccharide capsule', 'Magenta capsule', 'Cryptococcus'],
                    ['Fontana-Masson', 'Melanin', 'Black', 'Dematiaceous fungi'],
                  ]}
                />

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <DiagramBox title="GMS Stain Cartoon" caption="Fungi appear black on green background">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-black border-2 border-black" />
                      <div className="w-8 h-2 bg-black rounded" />
                      <div className="w-5 h-5 rounded-full bg-black" />
                    </div>
                    <div className="mt-2 w-full h-4 bg-green-200 dark:bg-green-800 rounded" />
                  </DiagramBox>
                  <DiagramBox title="Mucicarmine Cartoon" caption="Cryptococcus capsule stains magenta">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-pink-300 dark:bg-pink-600 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-blue-400 dark:bg-blue-600" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Magenta capsule around yeast</p>
                  </DiagramBox>
                </div>
              </Section>
            </ContentCard>

            <Callout variant="warning" title="GMS Interpretation">
              GMS stains all fungi, but also stains some bacteria and Pneumocystis. Morphology
              and clinical context are essential for correct identification.
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="quiz">
          <QuizComponent
            questions={quizQuestions}
            title="Fungal Infections Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
