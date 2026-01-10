import { Bug } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'bact1',
    question: 'Which organism is the most common cause of neonatal meningitis in the first week of life?',
    options: [
      'Streptococcus pneumoniae',
      'Group B Streptococcus (GBS)',
      'Neisseria meningitidis',
      'Haemophilus influenzae'
    ],
    correctAnswer: 1,
    explanation: 'Group B Streptococcus (Streptococcus agalactiae) is the most common cause of early-onset neonatal meningitis, typically acquired during passage through the birth canal.'
  },
  {
    id: 'bact2',
    question: 'What is the characteristic histopathologic pattern of acute bacterial meningitis?',
    options: [
      'Lymphocytic infiltrate with microglial nodules',
      'Granulomatous inflammation with giant cells',
      'Purulent exudate with neutrophils in the subarachnoid space',
      'Hemorrhagic necrosis with viral inclusions'
    ],
    correctAnswer: 2,
    explanation: 'Acute bacterial meningitis shows purulent (suppurative) inflammation with abundant neutrophils filling the subarachnoid space and coating the leptomeninges.'
  },
  {
    id: 'bact3',
    question: 'E. coli K1 is particularly neurotropic in neonates because:',
    options: [
      'It produces a neurotoxin that crosses the BBB',
      'The K1 capsule resists complement-mediated killing and facilitates BBB crossing',
      'It only infects neurons directly',
      'It is resistant to all antibiotics'
    ],
    correctAnswer: 1,
    explanation: 'The K1 polysaccharide capsule of E. coli is antigenically similar to neural cell adhesion molecule (NCAM), helping it evade immune responses and facilitating invasion of the CNS.'
  },
  {
    id: 'bact4',
    question: 'Listeria monocytogenes in CNS infection characteristically shows:',
    options: [
      'Only extracellular cocci in chains',
      'Intracellular gram-positive rods with abscess formation',
      'Gram-negative diplococci',
      'Acid-fast bacilli with granulomas'
    ],
    correctAnswer: 1,
    explanation: 'Listeria is a gram-positive rod that is facultatively intracellular. CNS infection shows microabscesses, and the organism can be seen within macrophages and other cells.'
  }
]

export default function BacterialInfections() {
  return (
    <ModuleLayout
      title="Bacterial CNS Infections"
      description="Neonatal & pediatric meningitis, ventriculitis, and organism-specific patterns"
      icon={Bug}
      color="green"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="neonatal">Neonatal</TabsTrigger>
          <TabsTrigger value="pediatric">Pediatric</TabsTrigger>
          <TabsTrigger value="patterns">Pathology</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Bacterial CNS Infections Overview">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Bacterial meningitis remains a significant cause of morbidity and mortality in pediatric patients.
                  The causative organisms and pathologic patterns vary significantly by age group.
                </p>

                <DataTable
                  headers={['Age Group', 'Common Organisms', 'Key Features']}
                  rows={[
                    ['Neonate (0-28d)', 'GBS, E. coli K1, Listeria', 'Ventriculitis common, diffuse involvement'],
                    ['Infant (1-3mo)', 'GBS, E. coli, S. pneumoniae', 'Transition period, mixed flora'],
                    ['Child (3mo-5yr)', 'S. pneumoniae, N. meningitidis, H. influenzae', 'Classic meningitis patterns'],
                    ['Older child', 'N. meningitidis, S. pneumoniae', 'Adult-like presentations'],
                  ]}
                />
              </Section>
            </ContentCard>

            <Callout variant="warning" title="Vaccination Impact">
              H. influenzae type b (Hib) vaccine has dramatically reduced Hib meningitis.
              Pneumococcal conjugate vaccines have similarly reduced S. pneumoniae cases in vaccinated populations.
            </Callout>

            <ContentCard>
              <Section title="Routes of Infection">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Hematogenous</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Most common route. Bacteremia leads to seeding of meninges.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Contiguous</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Spread from sinusitis, otitis media, mastoiditis.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Direct</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Trauma, neurosurgical procedures, congenital defects.
                    </p>
                  </div>
                </div>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="neonatal">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Neonatal Bacterial Meningitis">
                <Accordion type="multiple" defaultValue={['gbs']}>
                  <AccordionItem value="gbs">
                    <AccordionTrigger value="gbs">
                      <div className="flex items-center gap-2">
                        <Badge variant="green">GBS</Badge>
                        Group B Streptococcus
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="gbs">
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Cartoon Features</h5>
                            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>• Gram-positive cocci in chains</li>
                              <li>• Beta-hemolytic on blood agar</li>
                              <li>• Lancefield Group B antigen</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Pathology</h5>
                            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>• Diffuse purulent leptomeningitis</li>
                              <li>• Ventriculitis common</li>
                              <li>• May extend to parenchyma</li>
                            </ul>
                          </div>
                        </div>
                        <DiagramBox title="GBS Cartoon" caption="Gram-positive cocci in chains">
                          <div className="flex items-center justify-center gap-1">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="w-4 h-4 rounded-full bg-purple-400 dark:bg-purple-600 border-2 border-purple-600 dark:border-purple-400" />
                            ))}
                          </div>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ecoli">
                    <AccordionTrigger value="ecoli">
                      <div className="flex items-center gap-2">
                        <Badge variant="red">E. coli K1</Badge>
                        Escherichia coli K1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="ecoli">
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Cartoon Features</h5>
                            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>• Gram-negative rods</li>
                              <li>• K1 polysaccharide capsule</li>
                              <li>• Similar to NCAM (neural cell adhesion molecule)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Pathology</h5>
                            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>• Severe purulent meningitis</li>
                              <li>• High rate of ventriculitis</li>
                              <li>• Vasculitis and infarction</li>
                              <li>• Brain abscess possible</li>
                            </ul>
                          </div>
                        </div>
                        <DiagramBox title="E. coli Cartoon" caption="Gram-negative rods with capsule">
                          <div className="flex items-center justify-center gap-2">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="w-8 h-3 rounded-full bg-red-400 dark:bg-red-600 border border-red-600 dark:border-red-400" />
                            ))}
                          </div>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="listeria">
                    <AccordionTrigger value="listeria">
                      <div className="flex items-center gap-2">
                        <Badge variant="blue">Listeria</Badge>
                        Listeria monocytogenes
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="listeria">
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Cartoon Features</h5>
                            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>• Gram-positive rods (short)</li>
                              <li>• Facultatively intracellular</li>
                              <li>• Tumbling motility at room temp</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Pathology</h5>
                            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>• Meningitis + meningoencephalitis</li>
                              <li>• Microabscesses characteristic</li>
                              <li>• Rhombencephalitis (brainstem)</li>
                              <li>• Organisms seen intracellularly</li>
                            </ul>
                          </div>
                        </div>
                        <Callout variant="tip" title="Key Pattern">
                          Listeria has tropism for the brainstem. Rhombencephalitis with microabscesses
                          is a characteristic pattern in Listeria CNS infection.
                        </Callout>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Neonatal Ventriculitis">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Ventriculitis (infection of the ventricular ependyma and CSF) is more common in neonates
                  than older children due to the immature ependymal barrier.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Pathologic Features</h4>
                    <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                      <li>• Ependymal disruption and necrosis</li>
                      <li>• Subependymal inflammation</li>
                      <li>• Intraventricular pus/debris</li>
                      <li>• Loculations may develop</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-medium text-red-900 dark:text-red-100 mb-2">Complications</h4>
                    <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                      <li>• Hydrocephalus</li>
                      <li>• Periventricular leukomalacia</li>
                      <li>• Multiloculated ventriculitis</li>
                      <li>• Chronic ependymitis</li>
                    </ul>
                  </div>
                </div>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="pediatric">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Pediatric Bacterial Meningitis">
                <Accordion type="multiple" defaultValue={['pneumo']}>
                  <AccordionItem value="pneumo">
                    <AccordionTrigger value="pneumo">
                      <div className="flex items-center gap-2">
                        <Badge variant="blue">S. pneumoniae</Badge>
                        Streptococcus pneumoniae
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="pneumo">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Most common cause of bacterial meningitis in children &gt;3 months in many regions.
                          Polysaccharide capsule is a major virulence factor.
                        </p>
                        <DataTable
                          headers={['Feature', 'Description']}
                          rows={[
                            ['Morphology', 'Gram-positive diplococci (lancet-shaped)'],
                            ['Key virulence', 'Polysaccharide capsule, pneumolysin'],
                            ['Pathology', 'Severe purulent meningitis, often thick exudate'],
                            ['Complications', 'Subdural empyema, hearing loss, infarcts'],
                          ]}
                        />
                        <DiagramBox title="Pneumococcus Cartoon" caption="Gram-positive lancet-shaped diplococci">
                          <div className="flex items-center justify-center gap-0.5">
                            <div className="w-4 h-6 rounded-full bg-blue-400 dark:bg-blue-600 border-2 border-blue-600 dark:border-blue-400" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }} />
                            <div className="w-4 h-6 rounded-full bg-blue-400 dark:bg-blue-600 border-2 border-blue-600 dark:border-blue-400" style={{ borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%' }} />
                          </div>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="meningo">
                    <AccordionTrigger value="meningo">
                      <div className="flex items-center gap-2">
                        <Badge variant="purple">N. meningitidis</Badge>
                        Neisseria meningitidis
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="meningo">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Important cause of epidemic meningitis. Can cause fulminant meningococcemia with
                          purpura fulminans (Waterhouse-Friderichsen syndrome with adrenal hemorrhage).
                        </p>
                        <DataTable
                          headers={['Feature', 'Description']}
                          rows={[
                            ['Morphology', 'Gram-negative diplococci (kidney bean-shaped)'],
                            ['Key virulence', 'Polysaccharide capsule, LOS endotoxin'],
                            ['Pathology', 'Purulent meningitis, petechial hemorrhages'],
                            ['Unique', 'May see intracellular organisms in PMNs'],
                          ]}
                        />
                        <DiagramBox title="Meningococcus Cartoon" caption="Gram-negative kidney-bean diplococci">
                          <div className="flex items-center justify-center">
                            <div className="flex gap-0.5 transform rotate-45">
                              <div className="w-4 h-6 bg-pink-400 dark:bg-pink-600 border-2 border-pink-600 dark:border-pink-400" style={{ borderRadius: '50% 20% 50% 20%' }} />
                              <div className="w-4 h-6 bg-pink-400 dark:bg-pink-600 border-2 border-pink-600 dark:border-pink-400" style={{ borderRadius: '20% 50% 20% 50%' }} />
                            </div>
                          </div>
                        </DiagramBox>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="hib">
                    <AccordionTrigger value="hib">
                      <div className="flex items-center gap-2">
                        <Badge variant="yellow">H. influenzae</Badge>
                        Haemophilus influenzae type b
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value="hib">
                      <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Dramatically reduced by Hib vaccination but still occurs in unvaccinated populations.
                          Type b capsule is required for invasive disease.
                        </p>
                        <DataTable
                          headers={['Feature', 'Description']}
                          rows={[
                            ['Morphology', 'Gram-negative coccobacilli (pleomorphic)'],
                            ['Key virulence', 'Type b polysaccharide capsule'],
                            ['Pathology', 'Purulent meningitis, may form subdural effusions'],
                            ['Note', 'Now rare due to vaccination'],
                          ]}
                        />
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
                <SubSection title="Purulent Leptomeningitis">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    The hallmark of acute bacterial meningitis is purulent (suppurative) inflammation
                    of the leptomeninges with neutrophil-rich exudate.
                  </p>
                  <DiagramBox title="Purulent Meningitis Cartoon" caption="Synthetic representation of subarachnoid exudate">
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-1 flex-wrap max-w-[200px] mx-auto">
                        {[...Array(20)].map((_, i) => (
                          <div key={i} className="w-3 h-3 rounded-full bg-yellow-300 dark:bg-yellow-600 border border-yellow-500" />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Neutrophils (PMNs) in subarachnoid space</p>
                    </div>
                  </DiagramBox>
                </SubSection>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Gram Stain Patterns">
                <DataTable
                  headers={['Organism', 'Gram Stain', 'Morphology Cartoon']}
                  rows={[
                    ['GBS', 'Gram-positive', 'Cocci in chains'],
                    ['S. pneumoniae', 'Gram-positive', 'Lancet-shaped diplococci'],
                    ['N. meningitidis', 'Gram-negative', 'Kidney-bean diplococci'],
                    ['E. coli', 'Gram-negative', 'Rods'],
                    ['Listeria', 'Gram-positive', 'Short rods'],
                    ['H. influenzae', 'Gram-negative', 'Pleomorphic coccobacilli'],
                  ]}
                />
              </Section>
            </ContentCard>

            <Callout variant="danger" title="Pitfall: Sterile Meningitis Mimics">
              Partially treated bacterial meningitis may show few or no organisms on Gram stain.
              Chemical meningitis, drug reactions, and some viral infections can produce neutrophil-rich CSF.
            </Callout>

            <ContentCard>
              <Section title="Complications & Sequelae">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Vascular</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Vasculitis</li>
                      <li>• Venous thrombosis</li>
                      <li>• Infarction</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Fluid Collections</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Subdural effusion</li>
                      <li>• Subdural empyema</li>
                      <li>• Hydrocephalus</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Parenchymal</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Brain abscess</li>
                      <li>• Cerebritis</li>
                      <li>• Encephalomalacia</li>
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
            title="Bacterial Infections Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
