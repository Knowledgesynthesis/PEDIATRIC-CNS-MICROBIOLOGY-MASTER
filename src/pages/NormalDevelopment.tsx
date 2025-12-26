import { Brain } from 'lucide-react'
import { ModuleLayout, Section, SubSection, ContentCard, DataTable, DiagramBox } from '../components/modules'
import { Tabs, TabsList, TabsTrigger, TabsContent, Callout, Badge } from '../components/ui'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'
import { QuizComponent } from '../components/modules'

const quizQuestions = [
  {
    id: 'nd1',
    question: 'At what gestational age do microglia first colonize the developing CNS?',
    options: [
      'First trimester (weeks 4-8)',
      'Second trimester (weeks 12-16)',
      'Third trimester (weeks 28-32)',
      'Postnatal period'
    ],
    correctAnswer: 0,
    explanation: 'Microglia derive from yolk sac primitive macrophages and colonize the CNS early in the first trimester, making them the resident immune cells of the brain from very early development.'
  },
  {
    id: 'nd2',
    question: 'Why are neonates particularly susceptible to Group B Streptococcus (GBS) meningitis?',
    options: [
      'Fully mature blood-brain barrier',
      'Immature complement system and low maternal antibody transfer',
      'Hyperactive microglial response',
      'Excess immunoglobulin production'
    ],
    correctAnswer: 1,
    explanation: 'Neonates have an immature complement system and rely on passively transferred maternal antibodies. Low antibody levels against GBS capsular polysaccharides contribute to increased susceptibility.'
  },
  {
    id: 'nd3',
    question: 'Which cell type serves as the primary resident immune cell of the CNS parenchyma?',
    options: [
      'Astrocytes',
      'Oligodendrocytes',
      'Microglia',
      'Ependymal cells'
    ],
    correctAnswer: 2,
    explanation: 'Microglia are the resident macrophages of the CNS, derived from yolk sac progenitors. They perform immune surveillance and respond to pathogens and injury.'
  }
]

export default function NormalDevelopment() {
  return (
    <ModuleLayout
      title="Normal Pediatric CNS Development"
      description="Understanding developmental CNS immune physiology and age-specific vulnerabilities"
      icon={Brain}
      color="blue"
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="microglia">Microglia</TabsTrigger>
          <TabsTrigger value="bbb">Blood-Brain Barrier</TabsTrigger>
          <TabsTrigger value="susceptibility">Age Susceptibility</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Key Concepts">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  The developing pediatric CNS has unique immunological characteristics that differ from adults,
                  making it variably susceptible to infections at different developmental stages.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Immune Development</h4>
                    <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>• Microglia maturation timeline</li>
                      <li>• Complement system development</li>
                      <li>• Antibody transfer from mother</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Barrier Development</h4>
                    <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                      <li>• Blood-brain barrier maturation</li>
                      <li>• Choroid plexus development</li>
                      <li>• CSF dynamics changes</li>
                    </ul>
                  </div>
                </div>
              </Section>
            </ContentCard>

            <Callout variant="info" title="Clinical Relevance">
              Understanding normal CNS immune development is essential for recognizing why certain pathogens
              preferentially affect specific age groups and produce characteristic pathologic patterns.
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="microglia">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Microglia Maturation">
                <SubSection title="Origin and Colonization">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Microglia are the resident immune cells of the CNS, derived from yolk sac primitive macrophages
                    that colonize the brain during early embryonic development.
                  </p>

                  <DiagramBox title="Microglial Development Timeline (Synthetic Cartoon)">
                    <div className="space-y-4 text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-4">
                        <Badge variant="blue">Week 4-5</Badge>
                        <span>Yolk sac progenitors emerge</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="green">Week 8-12</Badge>
                        <span>CNS colonization begins</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="purple">Week 16-24</Badge>
                        <span>Ramified morphology develops</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="yellow">Postnatal</Badge>
                        <span>Continued maturation and pruning functions</span>
                      </div>
                    </div>
                  </DiagramBox>
                </SubSection>

                <SubSection title="Functional States">
                  <DataTable
                    headers={['State', 'Morphology', 'Function', 'Markers']}
                    rows={[
                      ['Resting/Surveying', 'Highly ramified', 'Immune surveillance', 'P2RY12+, TMEM119+'],
                      ['Activated (M1-like)', 'Amoeboid', 'Pro-inflammatory', 'CD68+, iNOS+'],
                      ['Activated (M2-like)', 'Amoeboid', 'Anti-inflammatory/repair', 'CD206+, Arg1+'],
                    ]}
                  />
                </SubSection>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Microglial Response to Infection">
                <Accordion defaultValue={['response']}>
                  <AccordionItem value="response">
                    <AccordionTrigger value="response">Pathogen Recognition</AccordionTrigger>
                    <AccordionContent value="response">
                      <p className="text-slate-600 dark:text-slate-300">
                        Microglia express pattern recognition receptors (PRRs) including Toll-like receptors (TLRs)
                        that recognize pathogen-associated molecular patterns (PAMPs). Key receptors include:
                      </p>
                      <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
                        <li>• <strong>TLR4:</strong> Bacterial LPS (gram-negative organisms)</li>
                        <li>• <strong>TLR2:</strong> Peptidoglycan, lipoteichoic acid (gram-positive)</li>
                        <li>• <strong>TLR3:</strong> dsRNA (viral infections)</li>
                        <li>• <strong>TLR9:</strong> CpG DNA motifs</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="nodules">
                    <AccordionTrigger value="nodules">Microglial Nodules</AccordionTrigger>
                    <AccordionContent value="nodules">
                      <p className="text-slate-600 dark:text-slate-300">
                        Microglial nodules are clusters of activated microglia that form around infected or dying neurons.
                        They are a classic histopathologic feature of viral encephalitis and represent the cellular
                        response to neuronal infection.
                      </p>
                      <Callout variant="tip" title="Key Pattern" className="mt-4">
                        Microglial nodules + neuronophagia = classic viral encephalitis pattern
                      </Callout>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Section>
            </ContentCard>
          </div>
        </TabsContent>

        <TabsContent value="bbb">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Blood-Brain Barrier Development">
                <SubSection title="Components">
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                      <div className="text-3xl mb-2">🧱</div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Endothelial Cells</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Tight junctions, limited transcytosis
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                      <div className="text-3xl mb-2">⭐</div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Astrocyte Endfeet</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Metabolic support, barrier induction
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                      <div className="text-3xl mb-2">🔵</div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Pericytes</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Vascular stability, barrier regulation
                      </p>
                    </div>
                  </div>
                </SubSection>

                <SubSection title="Developmental Timeline">
                  <DataTable
                    headers={['Stage', 'BBB Status', 'Clinical Implications']}
                    rows={[
                      ['Early fetal (< 12 wks)', 'Immature/leaky', 'High susceptibility to vertical infections'],
                      ['Mid-gestation', 'Developing tight junctions', 'Continued vulnerability, TORCH effects'],
                      ['Late fetal/term', 'Functionally mature', 'BBB present but immature immune responses'],
                      ['Neonatal', 'Mature structure', 'Intact but stress/infection can disrupt'],
                    ]}
                  />
                </SubSection>

                <DiagramBox
                  title="Blood-Brain Barrier Cartoon"
                  caption="Synthetic representation of neurovascular unit components"
                >
                  <div className="text-slate-600 dark:text-slate-300 space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 h-8 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center text-sm">Blood Vessel</div>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-16 h-6 bg-blue-200 dark:bg-blue-800 rounded text-xs flex items-center justify-center">Endothelium</div>
                      <div className="text-xs">←tight junctions→</div>
                      <div className="w-16 h-6 bg-blue-200 dark:bg-blue-800 rounded text-xs flex items-center justify-center">Endothelium</div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-12 h-6 bg-green-200 dark:bg-green-800 rounded text-xs flex items-center justify-center">Pericyte</div>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-20 h-6 bg-purple-200 dark:bg-purple-800 rounded text-xs flex items-center justify-center">Astrocyte foot</div>
                      <div className="w-20 h-6 bg-purple-200 dark:bg-purple-800 rounded text-xs flex items-center justify-center">Astrocyte foot</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center text-sm">Brain Parenchyma</div>
                    </div>
                  </div>
                </DiagramBox>
              </Section>
            </ContentCard>

            <Callout variant="warning" title="Pathogen Entry Routes">
              Pathogens can breach the BBB through: direct invasion of endothelial cells,
              "Trojan horse" transport within infected leukocytes, transcytosis, or
              paracellular passage during inflammation-induced barrier disruption.
            </Callout>
          </div>
        </TabsContent>

        <TabsContent value="susceptibility">
          <div className="space-y-6">
            <ContentCard>
              <Section title="Age-Specific Susceptibility Factors">
                <DataTable
                  headers={['Age Group', 'Key Vulnerabilities', 'Common Pathogens']}
                  rows={[
                    ['Neonate (0-28 days)', 'Low IgG, immature complement, reduced neutrophil function', 'GBS, E. coli K1, Listeria, HSV'],
                    ['Infant (1-12 mo)', 'Waning maternal antibodies, developing immunity', 'S. pneumoniae, H. influenzae, Enteroviruses'],
                    ['Toddler (1-3 yr)', 'Daycare exposure, developing adaptive immunity', 'S. pneumoniae, N. meningitidis'],
                    ['Child (3-12 yr)', 'School exposure, generally robust immunity', 'N. meningitidis, M. tuberculosis'],
                  ]}
                />
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Neonatal Immune Deficiencies">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <SubSection title="Humoral Immunity">
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        <li>• Low IgM and IgA (not transferred across placenta)</li>
                        <li>• IgG from mother provides passive immunity</li>
                        <li>• Poor response to polysaccharide antigens</li>
                        <li>• Limited memory B cell development</li>
                      </ul>
                    </SubSection>
                  </div>
                  <div className="space-y-4">
                    <SubSection title="Cellular Immunity">
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        <li>• Reduced neutrophil storage pools</li>
                        <li>• Impaired neutrophil chemotaxis</li>
                        <li>• Decreased complement activity</li>
                        <li>• Biased toward Th2 responses</li>
                      </ul>
                    </SubSection>
                  </div>
                </div>
              </Section>
            </ContentCard>

            <ContentCard>
              <Section title="Inflammation Patterns by Age">
                <Accordion type="multiple" defaultValue={['neonate']}>
                  <AccordionItem value="neonate">
                    <AccordionTrigger value="neonate">Neonatal Pattern</AccordionTrigger>
                    <AccordionContent value="neonate">
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        <li>• May have blunted inflammatory response</li>
                        <li>• CSF pleocytosis may be less pronounced</li>
                        <li>• Higher risk of disseminated infection</li>
                        <li>• Ventriculitis more common than in older children</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="infant">
                    <AccordionTrigger value="infant">Infant Pattern</AccordionTrigger>
                    <AccordionContent value="infant">
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        <li>• More robust inflammatory response develops</li>
                        <li>• Classic CSF findings become more reliable</li>
                        <li>• Subdural effusions/empyema risk</li>
                        <li>• Brain abscess formation possible</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="child">
                    <AccordionTrigger value="child">Childhood Pattern</AccordionTrigger>
                    <AccordionContent value="child">
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        <li>• Adult-like inflammatory patterns</li>
                        <li>• Classic meningitis presentation</li>
                        <li>• Granulomatous responses well-developed</li>
                        <li>• Organized abscess formation</li>
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
            title="Normal Development Quiz"
          />
        </TabsContent>
      </Tabs>
    </ModuleLayout>
  )
}
