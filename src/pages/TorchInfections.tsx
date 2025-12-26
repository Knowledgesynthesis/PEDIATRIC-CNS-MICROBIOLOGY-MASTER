import { Baby } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'torch1',
    question: 'Periventricular calcifications are most characteristic of congenital infection with:',
    options: [
      'Toxoplasma gondii',
      'Rubella virus',
      'Cytomegalovirus',
      'Herpes simplex virus'
    ],
    correctAnswer: 2,
    explanation: 'Periventricular calcifications are a hallmark of congenital CMV infection. Toxoplasma tends to cause scattered calcifications throughout the brain, including basal ganglia.'
  },
  {
    id: 'torch2',
    question: 'Which congenital infection is most commonly associated with intracranial calcifications in a scattered distribution including basal ganglia?',
    options: [
      'CMV',
      'Toxoplasma',
      'Rubella',
      'HSV'
    ],
    correctAnswer: 1,
    explanation: 'Congenital toxoplasmosis classically shows scattered parenchymal calcifications often involving the basal ganglia, in contrast to the periventricular pattern of CMV.'
  },
  {
    id: 'torch3',
    question: 'Congenital Zika virus infection is most characteristically associated with:',
    options: [
      'Periventricular calcifications',
      'Microcephaly with cortical malformations',
      'Ventriculomegaly only',
      'Cerebellar hypoplasia only'
    ],
    correctAnswer: 1,
    explanation: 'Congenital Zika syndrome is characterized by severe microcephaly with cortical malformations (lissencephaly, polymicrogyria), subcortical calcifications, and ventriculomegaly.'
  },
  {
    id: 'torch4',
    question: '"Blueberry muffin" rash in a neonate with CNS abnormalities suggests:',
    options: [
      'Congenital HSV',
      'Congenital Rubella',
      'Congenital Toxoplasmosis',
      'Congenital Syphilis'
    ],
    correctAnswer: 1,
    explanation: 'The "blueberry muffin" rash (dermal erythropoiesis) is classically associated with congenital rubella syndrome, along with cataracts, cardiac defects, and CNS abnormalities.'
  }
]

export default function TorchInfections() {
  return (
    <ModuleLayout
      title="Congenital TORCH Infections"
      description="Toxoplasma, Other, Rubella, CMV, HSV, and Zika congenital infection patterns"
      icon={Baby}
      color="pink"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="toxo">Toxoplasma</TabsTrigger>
          <TabsTrigger value="cmv">CMV</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <ContentCard>
              <Section title="TORCH Infections Overview">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  TORCH is an acronym for a group of congenital infections that can cause significant
                  CNS pathology. The timing of infection during gestation affects the severity and pattern of injury.
                </p>

                <DataTable
                  headers={['Letter', 'Pathogen', 'Key CNS Features']}
                  rows={[
                    ['T', 'Toxoplasma gondii', 'Scattered calcifications, hydrocephalus, chorioretinitis'],
                    ['O', 'Others (Syphilis, VZV, Parvovirus, Zika)', 'Variable patterns'],
                    ['R', 'Rubella virus', 'Microcephaly, white matter injury, cataracts'],
                    ['C', 'Cytomegalovirus', 'Periventricular calcifications, microcephaly'],
                    ['H', 'Herpes Simplex Virus', 'Necrotizing encephalitis, often diffuse in neonates'],
                  ]}
                />
              </Section>
            </ContentCard>

            <Callout variant="warning" title="Timing Matters">
              First trimester infections generally cause more severe malformations (organogenesis disruption),
              while later infections cause destructive lesions in already-formed structures.
            </Callout>

            <ContentCard>
              <Section title="Common Patterns">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
                    <div className="text-3xl mb-2">📐</div>
                    <h4 className="font-medium text-pink-900 dark:text-pink-100">Microcephaly</h4>
                    <p className="text-xs text-pink-700 dark:text-pink-300 mt-1">
                      CMV, Zika, Rubella
                    </p>
                  </div>
                  <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
                    <div className="text-3xl mb-2">💎</div>
                    <h4 className="font-medium text-pink-900 dark:text-pink-100">Calcifications</h4>
                    <p className="text-xs text-pink-700 dark:text-pink-300 mt-1">
                      CMV, Toxo, Zika
                    </p>
                  </div>
                  <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
                    <div className="text-3xl mb-2">💧</div>
                    <h4 className="font-medium text-pink-900 dark:text-pink-100">Ventriculomegaly</h4>
                    <p className="text-xs text-pink-700 dark:text-pink-300 mt-1">
                      Toxo, CMV, Zika
                    </p>
                  </div>
                  <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
                    <div className="text-3xl mb-2">👁️</div>
                    <h4 className="font-medium text-pink-900 dark:text-pink-100">Chorioretinitis</h4>
                    <p className="text-xs text-pink-700 dark:text-pink-300 mt-1">
                      Toxo, CMV, Rubella
                    </p>
                  </div>
                </div>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Calcification Patterns">
                <DiagramBox title="Calcification Distribution Cartoon" caption="Synthetic representation of calcification patterns">
                  <div className="flex items-center justify-around w-full">
                    <div className="text-center">
                      <div className="w-20 h-24 rounded-t-full bg-slate-200 dark:bg-slate-700 relative">
                        {/* Periventricular - CMV pattern */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-6 border-2 border-dashed border-blue-400 rounded">
                          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full" />
                          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white rounded-full" />
                          <div className="absolute bottom-0 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                          <div className="absolute bottom-0 right-1 w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      </div>
                      <p className="text-xs mt-2 font-medium">CMV</p>
                      <p className="text-xs text-slate-500">Periventricular</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-24 rounded-t-full bg-slate-200 dark:bg-slate-700 relative">
                        {/* Scattered - Toxo pattern */}
                        <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-white rounded-full" />
                        <div className="absolute top-5 right-4 w-1.5 h-1.5 bg-white rounded-full" />
                        <div className="absolute top-10 left-5 w-1.5 h-1.5 bg-white rounded-full" />
                        <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-white rounded-full" />
                        <div className="absolute top-12 left-8 w-2 h-2 bg-yellow-300 rounded-full" />
                        <div className="absolute top-14 right-7 w-2 h-2 bg-yellow-300 rounded-full" />
                      </div>
                      <p className="text-xs mt-2 font-medium">Toxoplasma</p>
                      <p className="text-xs text-slate-500">Scattered + basal ganglia</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-24 rounded-t-full bg-slate-200 dark:bg-slate-700 relative" style={{ width: '60px', height: '72px' }}>
                        {/* Subcortical - Zika pattern */}
                        <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full" />
                        <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full" />
                        <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full" />
                        <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full" />
                      </div>
                      <p className="text-xs mt-2 font-medium">Zika</p>
                      <p className="text-xs text-slate-500">Subcortical (+ microcephaly)</p>
                    </div>
                  </div>
                </DiagramBox>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="toxo">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Congenital Toxoplasmosis">
                <SubSection title="Organism">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Toxoplasma gondii is an obligate intracellular protozoan parasite. Congenital infection
                    occurs via transplacental transmission during maternal parasitemia.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <DiagramBox title="Tachyzoite Cartoon" caption="Rapidly dividing form">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-10 bg-purple-300 dark:bg-purple-600 rounded-full transform rotate-12" style={{ borderRadius: '40% 40% 60% 60%' }} />
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Crescent-shaped, pointed ends</p>
                    </DiagramBox>
                    <DiagramBox title="Bradyzoite Cyst Cartoon" caption="Encysted form in tissue">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-purple-400 dark:border-purple-600 bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                          <div className="flex flex-wrap gap-0.5 justify-center">
                            {[...Array(12)].map((_, i) => (
                              <div key={i} className="w-2 h-3 bg-purple-400 dark:bg-purple-600 rounded-full" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Thick-walled cyst with bradyzoites</p>
                    </DiagramBox>
                  </div>
                </SubSection>

                <SubSection title="CNS Pathology">
                  <DataTable
                    headers={['Feature', 'Description']}
                    rows={[
                      ['Calcifications', 'Scattered, often basal ganglia, may be diffuse'],
                      ['Necrotizing lesions', 'Areas of necrosis with organisms at periphery'],
                      ['Hydrocephalus', 'Common, may be severe'],
                      ['Chorioretinitis', 'Classic finding, may be bilateral'],
                      ['Microcephaly', 'Variable, depends on timing'],
                    ]}
                  />
                </SubSection>

                <Callout variant="info" title="Classic Triad">
                  The classic triad of congenital toxoplasmosis: Chorioretinitis, Hydrocephalus,
                  and Intracranial Calcifications.
                </Callout>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="cmv">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Congenital CMV Infection">
                <SubSection title="Overview">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    CMV is the most common congenital infection worldwide. Primary maternal infection
                    carries higher risk of fetal transmission and severe disease than reactivation.
                  </p>
                </SubSection>

                <SubSection title="Pathologic Features">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Gross Findings</h5>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• Microcephaly</li>
                        <li>• Periventricular calcifications</li>
                        <li>• Ventriculomegaly</li>
                        <li>• Polymicrogyria (early infection)</li>
                        <li>• Cerebellar hypoplasia</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Microscopic</h5>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• Cytomegalic cells (enlarged)</li>
                        <li>• "Owl-eye" intranuclear inclusions</li>
                        <li>• Cytoplasmic inclusions</li>
                        <li>• Periventricular necrosis</li>
                        <li>• Microglial nodules</li>
                      </ul>
                    </div>
                  </div>

                  <DiagramBox title="CMV-Infected Cell Cartoon" caption="Cytomegalic cell with owl-eye inclusion">
                    <div className="flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full border-4 border-slate-300 dark:border-slate-600 bg-pink-50 dark:bg-pink-900/20 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-3 border-blue-400 dark:border-blue-500 bg-white dark:bg-slate-800 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-400" />
                        </div>
                        <div className="flex gap-1 mt-1">
                          <div className="w-2 h-2 rounded-full bg-purple-400" />
                          <div className="w-2 h-2 rounded-full bg-purple-400" />
                          <div className="w-2 h-2 rounded-full bg-purple-400" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Large cell with nuclear "owl-eye" and cytoplasmic inclusions</p>
                  </DiagramBox>
                </SubSection>

                <SubSection title="IHC Confirmation">
                  <p className="text-slate-600 dark:text-slate-300">
                    CMV infection can be confirmed by immunohistochemistry using antibodies against
                    CMV immediate-early antigens. This is more sensitive than identifying classic inclusions.
                  </p>
                </SubSection>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="others">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Other TORCH Pathogens">
                <Accordion type="multiple" defaultValue={['rubella']}>
                  <AccordionItem value="rubella">
                    <AccordionTrigger value="rubella">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">Rubella</Badge>
                        Congenital Rubella Syndrome
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="rubella">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Rubella is now rare due to vaccination but remains important. First trimester
                          infection has highest risk of severe defects.
                        </p>
                        <DataTable
                          headers={['System', 'Findings']}
                          rows={[
                            ['CNS', 'Microcephaly, meningoencephalitis, white matter disease'],
                            ['Eye', 'Cataracts, glaucoma, chorioretinitis'],
                            ['Heart', 'PDA, pulmonary stenosis'],
                            ['Other', '"Blueberry muffin" rash, hepatosplenomegaly'],
                          ]}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="hsv">
                    <AccordionTrigger value="hsv">
                      <div className="flex items-center gap-2">
                        <Badge variant="purple">HSV</Badge>
                        Neonatal/Congenital HSV
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="hsv">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Neonatal HSV is usually acquired during delivery (HSV-2) rather than true
                          congenital infection. CNS involvement is severe.
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• <strong>Pattern:</strong> Diffuse hemorrhagic necrotizing encephalitis</li>
                          <li>• <strong>Inclusions:</strong> Cowdry type A intranuclear</li>
                          <li>• <strong>Outcome:</strong> High mortality, severe sequelae in survivors</li>
                          <li>• <strong>Confirmation:</strong> PCR, IHC for HSV antigens</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="zika">
                    <AccordionTrigger value="zika">
                      <div className="flex items-center gap-2">
                        <Badge variant="green">Zika</Badge>
                        Congenital Zika Syndrome
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="zika">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Zika virus emerged as a significant teratogen causing severe microcephaly
                          and brain malformations.
                        </p>
                        <DataTable
                          headers={['Feature', 'Description']}
                          rows={[
                            ['Microcephaly', 'Severe, often with fetal brain disruption sequence'],
                            ['Cortical malformations', 'Lissencephaly, polymicrogyria, pachygyria'],
                            ['Calcifications', 'Subcortical, cortical junction'],
                            ['Ventriculomegaly', 'Ex vacuo, from parenchymal loss'],
                            ['Other', 'Brainstem/cerebellar hypoplasia, arthrogryposis'],
                          ]}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="syphilis">
                    <AccordionTrigger value="syphilis">
                      <div className="flex items-center gap-2">
                        <Badge variant="yellow">Syphilis</Badge>
                        Congenital Syphilis
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="syphilis">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Treponema pallidum crosses the placenta after ~16 weeks gestation.
                          CNS involvement includes meningitis and meningovascular disease.
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• <strong>Early:</strong> Meningitis, hydrocephalus</li>
                          <li>• <strong>Late:</strong> Interstitial keratitis, VIII nerve deafness, Hutchinson teeth</li>
                          <li>• <strong>Stains:</strong> Warthin-Starry silver stain for spirochetes</li>
                        </ul>
                      </div>
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
            title="TORCH Infections Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
