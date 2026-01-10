import { Microscope } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'para1',
    question: 'Neurocysticercosis is caused by the larval stage of:',
    options: [
      'Taenia saginata (beef tapeworm)',
      'Taenia solium (pork tapeworm)',
      'Echinococcus granulosus',
      'Toxoplasma gondii'
    ],
    correctAnswer: 1,
    explanation: 'Neurocysticercosis is caused by Taenia solium (pork tapeworm) cysticerci. Humans become intermediate hosts by ingesting eggs, which develop into larvae (cysticerci) in tissues including the brain.'
  },
  {
    id: 'para2',
    question: 'Primary amebic meningoencephalitis (PAM) caused by Naegleria fowleri typically presents in:',
    options: [
      'Immunocompromised patients after organ transplant',
      'Previously healthy children after freshwater exposure',
      'Patients with chronic sinusitis',
      'Neonates via vertical transmission'
    ],
    correctAnswer: 1,
    explanation: 'Naegleria fowleri causes rapidly fatal PAM in previously healthy individuals (often children) after freshwater swimming. The ameba enters through the cribriform plate.'
  },
  {
    id: 'para3',
    question: 'The pathognomonic finding in neurocysticercosis is:',
    options: [
      'Ring-enhancing lesion with tachyzoites',
      'Cyst with scolex (invaginated head with hooklets)',
      'Granulomatous inflammation with acid-fast organisms',
      'Perivascular lymphocytic cuffing'
    ],
    correctAnswer: 1,
    explanation: 'The identification of the scolex (head of the tapeworm larva with suckers and hooklets) within a cyst is pathognomonic for cysticercosis.'
  },
  {
    id: 'para4',
    question: 'Toxoplasma gondii in the brain typically shows:',
    options: [
      'Cysts containing bradyzoites at the edge of necrotic lesions',
      'Large cysts with scolex',
      'Trophozoites with flagella',
      'Broad ribbon-like hyphae'
    ],
    correctAnswer: 0,
    explanation: 'Toxoplasma forms tissue cysts containing slowly-dividing bradyzoites. In active disease, tachyzoites (free forms) are seen at the periphery of necrotizing lesions.'
  }
]

export default function ParasiticInfections() {
  return (
    <ModuleLayout
      title="Parasitic CNS Infections"
      description="Toxoplasmosis, neurocysticercosis, and amebic CNS infections"
      icon={Microscope}
      color="teal"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="toxo">Toxoplasma</TabsTrigger>
          <TabsTrigger value="cysticercosis">Cysticercosis</TabsTrigger>
          <TabsTrigger value="ameba">Amebae</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Parasitic CNS Infections Overview">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Parasitic infections of the CNS are important causes of neurologic disease worldwide,
                  with geographic variation based on endemic areas and exposure patterns.
                </p>

                <DataTable
                  headers={['Parasite', 'Type', 'Epidemiology', 'Key Pattern']}
                  rows={[
                    ['Toxoplasma gondii', 'Protozoan', 'Worldwide, cats', 'Necrotizing, cysts'],
                    ['Taenia solium', 'Cestode (tapeworm)', 'Endemic areas, pork', 'Cysts with scolex'],
                    ['Naegleria fowleri', 'Free-living ameba', 'Freshwater', 'Fulminant PAM'],
                    ['Acanthamoeba', 'Free-living ameba', 'Immunocompromised', 'GAE, granulomas'],
                  ]}
                />
              </Section>
            </ContentCard>

            <Callout variant="info" title="Geographic Considerations">
              Neurocysticercosis is the most common parasitic CNS infection worldwide and a major cause
              of seizures in endemic areas (Latin America, Asia, Africa). Toxoplasmosis is ubiquitous.
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="toxo">
          <div className="space-y-6">
            <ContentCard>
              <Section title="CNS Toxoplasmosis">
                <SubSection title="Organism Biology">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Toxoplasma gondii is an obligate intracellular protozoan. Cats are the definitive host;
                    humans are intermediate hosts infected via oocysts or tissue cysts.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <DiagramBox title="Tachyzoite Cartoon" caption="Rapidly dividing form (active infection)">
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-14 bg-teal-300 dark:bg-teal-600 rounded-full transform rotate-12" style={{ borderRadius: '40% 40% 60% 60%' }}>
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-600 dark:bg-teal-300 rounded-full" />
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Crescent-shaped, pointed ends, central nucleus</p>
                    </DiagramBox>

                    <DiagramBox title="Tissue Cyst Cartoon" caption="Encysted bradyzoites (latent infection)">
                      <div className="flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-4 border-teal-400 dark:border-teal-600 bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center flex-wrap gap-0.5 p-2">
                          {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-2 h-3 bg-teal-400 dark:bg-teal-600 rounded-full" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Thick-walled cyst containing bradyzoites</p>
                    </DiagramBox>
                  </div>
                </SubSection>

                <SubSection title="Acquired CNS Toxoplasmosis">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                      <h5 className="font-medium text-teal-900 dark:text-teal-100 mb-2">In Immunocompetent</h5>
                      <ul className="text-sm text-teal-800 dark:text-teal-200 space-y-1">
                        <li>• Usually asymptomatic</li>
                        <li>• Cysts persist in brain</li>
                        <li>• May reactivate if immunosuppressed</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                      <h5 className="font-medium text-teal-900 dark:text-teal-100 mb-2">In Immunocompromised</h5>
                      <ul className="text-sm text-teal-800 dark:text-teal-200 space-y-1">
                        <li>• Reactivation disease</li>
                        <li>• Multiple ring-enhancing lesions</li>
                        <li>• Necrotizing encephalitis</li>
                        <li>• AIDS-defining illness</li>
                      </ul>
                    </div>
                  </div>
                </SubSection>

                <SubSection title="Histopathology">
                  <DataTable
                    headers={['Finding', 'Description']}
                    rows={[
                      ['Necrotizing lesions', 'Areas of coagulative necrosis'],
                      ['Tachyzoites', 'Crescent-shaped organisms at lesion edge'],
                      ['Tissue cysts', 'Round cysts with bradyzoites in viable brain'],
                      ['Inflammation', 'Mixed inflammation, may form granulomas'],
                      ['IHC', 'Toxoplasma IHC confirms organism'],
                    ]}
                  />
                </SubSection>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="cysticercosis">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Neurocysticercosis">
                <SubSection title="Life Cycle">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Humans are accidental intermediate hosts when they ingest T. solium eggs
                    (from fecal contamination). The eggs develop into cysticerci (larvae) in tissues.
                  </p>

                  <DiagramBox title="Cysticercus Cartoon" caption="Larval cyst with scolex">
                    <div className="flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-4 border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-2 border-blue-400 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400" />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-blue-400" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Fluid-filled cyst with invaginated scolex (head)</p>
                  </DiagramBox>
                </SubSection>

                <SubSection title="Stages of Disease">
                  <DataTable
                    headers={['Stage', 'Imaging', 'Pathology', 'Symptoms']}
                    rows={[
                      ['Vesicular', 'Cyst with scolex dot', 'Viable cyst, minimal inflammation', 'Often asymptomatic'],
                      ['Colloidal', 'Ring enhancement', 'Dying larva, inflammation', 'Seizures, edema'],
                      ['Granular-nodular', 'Enhancing nodule', 'Granulomatous reaction', 'May have seizures'],
                      ['Calcified', 'Calcified nodule', 'Calcified granuloma', 'May trigger seizures'],
                    ]}
                  />
                </SubSection>

                <Callout variant="tip" title="Key Diagnostic Finding">
                  Identification of the scolex with its four suckers and rostellum with hooklets
                  is pathognomonic for cysticercosis.
                </Callout>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Histopathologic Features">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Viable Cyst</h5>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Thin cyst wall (tegument)</li>
                      <li>• Minimal surrounding inflammation</li>
                      <li>• Scolex may be visible</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Degenerating Cyst</h5>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Thickened, disrupted wall</li>
                      <li>• Intense inflammation</li>
                      <li>• Granulomatous response</li>
                      <li>• Eventually calcifies</li>
                    </ul>
                  </div>
                </div>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="ameba">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Free-Living Amebae">
                <Accordion type="multiple" defaultValue={['naegleria']}>
                  <AccordionItem value="naegleria">
                    <AccordionTrigger value="naegleria">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Naegleria</Badge>
                        Primary Amebic Meningoencephalitis (PAM)
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="naegleria">
                      <div className="space-y-4">
                        <Callout variant="danger" title="Rapidly Fatal">
                          PAM is almost uniformly fatal within 1-2 weeks. Early diagnosis is critical
                          but challenging due to rarity and rapid progression.
                        </Callout>

                        <DataTable
                          headers={['Feature', 'Description']}
                          rows={[
                            ['Exposure', 'Freshwater swimming, diving, nasal irrigation'],
                            ['Entry', 'Through cribriform plate via olfactory nerves'],
                            ['Patients', 'Healthy children and young adults'],
                            ['CSF', 'Purulent, may see motile trophozoites'],
                            ['Pathology', 'Hemorrhagic necrotizing meningoencephalitis'],
                          ]}
                        />

                        <DiagramBox title="Naegleria Trophozoite Cartoon" caption="Ameboid form with pseudopods">
                          <div className="flex items-center justify-center">
                            <div className="relative">
                              <div className="w-16 h-12 bg-red-200 dark:bg-red-700 rounded-full" style={{ borderRadius: '60% 40% 50% 50%' }} />
                              <div className="absolute -left-2 top-3 w-4 h-3 bg-red-200 dark:bg-red-700 rounded-full" />
                              <div className="absolute -right-3 top-4 w-5 h-3 bg-red-200 dark:bg-red-700 rounded-full" />
                              <div className="absolute top-2 left-4 w-4 h-4 rounded-full bg-red-400 dark:bg-red-500" />
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 mt-2">Irregular ameboid shape with pseudopods</p>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="acanthamoeba">
                    <AccordionTrigger value="acanthamoeba">
                      <div className="flex items-center gap-2">
                        <Badge variant="purple">Acanthamoeba</Badge>
                        Granulomatous Amebic Encephalitis (GAE)
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="acanthamoeba">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          GAE is a subacute/chronic infection in immunocompromised patients.
                          Unlike PAM, it progresses over weeks to months.
                        </p>

                        <DataTable
                          headers={['Feature', 'Naegleria (PAM)', 'Acanthamoeba (GAE)']}
                          rows={[
                            ['Host', 'Immunocompetent', 'Immunocompromised'],
                            ['Course', 'Fulminant (days)', 'Subacute (weeks-months)'],
                            ['Entry', 'Nasal/olfactory', 'Hematogenous, skin, lungs'],
                            ['Pathology', 'Necrotizing, hemorrhagic', 'Granulomatous'],
                            ['Cysts', 'Rare in tissue', 'Cysts common in tissue'],
                          ]}
                        />

                        <DiagramBox title="Acanthamoeba Cyst Cartoon" caption="Double-walled cyst form">
                          <div className="flex items-center justify-center gap-4">
                            <div className="text-center">
                              <div className="w-12 h-10 bg-purple-200 dark:bg-purple-700 rounded-full relative" style={{ borderRadius: '50% 50% 40% 60%' }}>
                                <div className="absolute top-1 left-2 w-3 h-3 rounded-full bg-purple-400 dark:bg-purple-500" />
                              </div>
                              <p className="text-xs mt-1">Trophozoite</p>
                            </div>
                            <div className="text-center">
                              <div className="w-10 h-10 rounded-full border-4 border-double border-purple-400 dark:border-purple-600 flex items-center justify-center">
                                <div className="w-5 h-5 rounded-full bg-purple-300 dark:bg-purple-600" />
                              </div>
                              <p className="text-xs mt-1">Cyst (double wall)</p>
                            </div>
                          </div>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Section>
            </ContentCard>

            <Callout variant="warning" title="Pitfall: Amebae vs Macrophages">
              Free-living amebae can be mistaken for macrophages on H&E. Look for the characteristic
              nuclear morphology and use IHC or special techniques for confirmation.
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="quiz">
          <QuizComponent
            questions={quizQuestions}
            title="Parasitic Infections Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
