import { useState } from 'react'
import { GraduationCap, RefreshCw, CheckCircle2 } from 'lucide-react'
import { ModuleLayout, Section, ContentCard } from '../components/modules'
import { Button, Badge, Callout } from '../components/ui'
import { cn } from '../lib/utils'

interface Question {
  id: string
  category: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questionBank: Question[] = [
  {
    id: 'a1',
    category: 'Bacterial',
    question: 'A 3-day-old neonate presents with fever and lethargy. CSF shows gram-positive cocci in chains. What is the most likely organism?',
    options: ['Streptococcus pneumoniae', 'Group B Streptococcus', 'Neisseria meningitidis', 'Listeria monocytogenes'],
    correctAnswer: 1,
    explanation: 'Group B Streptococcus (Streptococcus agalactiae) is the most common cause of early-onset neonatal meningitis. It appears as gram-positive cocci in chains.'
  },
  {
    id: 'a2',
    category: 'Viral',
    question: 'Cowdry type A inclusions are characterized by:',
    options: ['Cytoplasmic basophilic inclusions', 'Intranuclear eosinophilic inclusions with a clear halo', 'Multinucleated giant cells', 'Intracytoplasmic eosinophilic inclusions'],
    correctAnswer: 1,
    explanation: 'Cowdry type A inclusions are eosinophilic intranuclear inclusions surrounded by a clear halo, classically seen in HSV and VZV infections.'
  },
  {
    id: 'a3',
    category: 'TORCH',
    question: 'Periventricular calcifications in a neonate with microcephaly are most suggestive of congenital:',
    options: ['Toxoplasmosis', 'CMV', 'Rubella', 'HSV'],
    correctAnswer: 1,
    explanation: 'Periventricular calcifications are a hallmark of congenital CMV infection. Toxoplasmosis causes more scattered calcifications often involving basal ganglia.'
  },
  {
    id: 'a4',
    category: 'Fungal',
    question: 'Septate hyphae with acute angle (45°) branching are characteristic of:',
    options: ['Mucorales', 'Aspergillus', 'Candida', 'Cryptococcus'],
    correctAnswer: 1,
    explanation: 'Aspergillus shows septate hyphae with acute angle branching (~45°). Mucorales shows broad, ribbon-like, pauci-septate hyphae with 90° branching.'
  },
  {
    id: 'a5',
    category: 'Parasitic',
    question: 'A cyst with a scolex containing suckers and hooklets is diagnostic of:',
    options: ['Toxoplasmosis', 'Neurocysticercosis', 'Amebic infection', 'Echinococcosis'],
    correctAnswer: 1,
    explanation: 'The scolex (head of the tapeworm larva) with suckers and hooklets is pathognomonic for cysticercosis caused by Taenia solium larvae.'
  },
  {
    id: 'a6',
    category: 'Mycobacterial',
    question: 'TB meningitis characteristically shows:',
    options: ['Convexity meningitis', 'Basal meningitis with thick exudate', 'Purely neutrophilic inflammation', 'Non-caseating granulomas'],
    correctAnswer: 1,
    explanation: 'TB meningitis has predilection for the basal meninges, producing thick gelatinous exudate that can encase cranial nerves and vessels.'
  },
  {
    id: 'a7',
    category: 'Abscess',
    question: 'The mature brain abscess capsule is thinner on which side?',
    options: ['Cortical (gray matter) side', 'Ventricular (white matter) side', 'Uniform throughout', 'Anterior aspect'],
    correctAnswer: 1,
    explanation: 'The capsule is thinner on the ventricular (medial) side due to poorer blood supply in white matter, predisposing to ventricular rupture.'
  },
  {
    id: 'a8',
    category: 'Prion',
    question: 'The histopathologic hallmark of prion disease is:',
    options: ['Granulomatous inflammation', 'Spongiform change with neuronal loss', 'Purulent meningitis', 'Demyelination'],
    correctAnswer: 1,
    explanation: 'Prion diseases show spongiform change (fine vacuolation of neuropil), neuronal loss, and gliosis, notably without inflammation.'
  },
  {
    id: 'a9',
    category: 'Stains',
    question: 'GMS (Gomori methenamine silver) stain colors fungal cell walls:',
    options: ['Red', 'Blue', 'Black', 'Magenta'],
    correctAnswer: 2,
    explanation: 'GMS stains fungal cell walls black against a green background, making it the primary stain for detecting fungi in tissue.'
  },
  {
    id: 'a10',
    category: 'Pitfalls',
    question: 'Reactive astrocytes can be mistaken for CMV-infected cells. What distinguishes true CMV infection?',
    options: ['Cell size alone', 'Owl-eye inclusions with cytoplasmic granules and positive CMV IHC', 'Nuclear enlargement only', 'Location in tissue'],
    correctAnswer: 1,
    explanation: 'True CMV cells show owl-eye intranuclear inclusions with cytoplasmic granules and are positive on CMV IHC. Reactive astrocytes lack these features.'
  },
  {
    id: 'a11',
    category: 'Bacterial',
    question: 'E. coli K1 meningitis is particularly common in neonates because:',
    options: ['It produces a potent neurotoxin', 'The K1 capsule mimics neural cell adhesion molecule and evades immunity', 'It only infects premature infants', 'It is resistant to all antibiotics'],
    correctAnswer: 1,
    explanation: 'The K1 polysaccharide capsule is antigenically similar to neural cell adhesion molecule (NCAM), helping E. coli evade immune responses.'
  },
  {
    id: 'a12',
    category: 'Viral',
    question: 'The classic triad of viral encephalitis histopathology includes all EXCEPT:',
    options: ['Perivascular lymphocytic cuffing', 'Microglial nodules', 'Neutrophilic infiltrate', 'Neuronophagia'],
    correctAnswer: 2,
    explanation: 'Viral encephalitis shows perivascular lymphocytes, microglial nodules, and neuronophagia. Neutrophilic infiltrate is characteristic of bacterial infections.'
  },
  {
    id: 'a13',
    category: 'Fungal',
    question: 'Mucicarmine stain is most useful for demonstrating:',
    options: ['Aspergillus hyphae', 'Cryptococcus capsule', 'Candida pseudohyphae', 'Mucorales hyphae'],
    correctAnswer: 1,
    explanation: 'Mucicarmine specifically stains the mucopolysaccharide capsule of Cryptococcus magenta/red, making it diagnostic for this organism.'
  },
  {
    id: 'a14',
    category: 'Parasitic',
    question: 'Primary amebic meningoencephalitis (PAM) caused by Naegleria fowleri typically occurs in:',
    options: ['Immunocompromised patients after transplant', 'Healthy children after freshwater swimming', 'Elderly patients with dementia', 'Neonates via vertical transmission'],
    correctAnswer: 1,
    explanation: 'Naegleria fowleri causes rapidly fatal PAM in previously healthy individuals (often children) after freshwater swimming, entering through the cribriform plate.'
  },
  {
    id: 'a15',
    category: 'TORCH',
    question: 'Congenital Zika virus infection is most characteristically associated with:',
    options: ['Periventricular calcifications only', 'Severe microcephaly with cortical malformations', 'Isolated chorioretinitis', 'Hydrocephalus without brain abnormalities'],
    correctAnswer: 1,
    explanation: 'Congenital Zika syndrome causes severe microcephaly with cortical malformations (lissencephaly, polymicrogyria), subcortical calcifications, and ventriculomegaly.'
  }
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function Assessment() {
  const [isStarted, setIsStarted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [questionCount, setQuestionCount] = useState(10)

  const startAssessment = () => {
    const shuffled = shuffleArray(questionBank).slice(0, questionCount)
    setQuestions(shuffled)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setCorrectCount(0)
    setIsComplete(false)
    setIsStarted(true)
  }

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (index === questions[currentIndex].correctAnswer) {
      setCorrectCount(c => c + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setIsStarted(false)
    setIsComplete(false)
  }

  if (!isStarted) {
    return (
      <ModuleLayout
        title="Assessment"
        description="Pattern-based questions to test your knowledge (session only)"
        icon={GraduationCap}
        color="rose"
      >
        <div className="space-y-6">
          <Callout variant="info" title="Session-Only Assessment">
            This assessment tests your knowledge across all modules. Scores are shown at the end
            of each session but are not stored or tracked.
          </Callout>

          <ContentCard>
            <Section title="Start Assessment">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Select the number of questions and start when ready. Questions are randomly
                selected from across all topic areas.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Number of Questions
                  </label>
                  <div className="flex gap-2">
                    {[5, 10, 15, 20].map((num) => (
                      <Button
                        key={num}
                        variant={questionCount === num ? 'primary' : 'secondary'}
                        onClick={() => setQuestionCount(num)}
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button onClick={startAssessment} className="w-full sm:w-auto">
                  Start Assessment
                </Button>
              </div>
            </Section>
          </ContentCard>

          <ContentCard>
            <Section title="Topics Covered">
              <div className="flex flex-wrap gap-2">
                {['Bacterial', 'Viral', 'TORCH', 'Fungal', 'Parasitic', 'Mycobacterial', 'Abscess', 'Prion', 'Stains', 'Pitfalls'].map((topic) => (
                  <Badge key={topic} variant="gray">{topic}</Badge>
                ))}
              </div>
            </Section>
          </ContentCard>
        </div>
      </ModuleLayout>
    )
  }

  if (isComplete) {
    const percentage = Math.round((correctCount / questions.length) * 100)

    return (
      <ModuleLayout
        title="Assessment"
        description="Pattern-based questions to test your knowledge (session only)"
        icon={GraduationCap}
        color="rose"
      >
        <ContentCard>
          <div className="text-center space-y-6 py-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Assessment Complete!
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                You answered <span className="font-bold text-primary-600 dark:text-primary-400">{correctCount}</span> out of{' '}
                <span className="font-bold">{questions.length}</span> correctly this session.
              </p>
            </div>

            <div className="w-full max-w-xs mx-auto">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={cn(
                    'h-full transition-all duration-500',
                    percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  )}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">{percentage}%</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={startAssessment}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button variant="secondary" onClick={handleRestart}>
                Change Settings
              </Button>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Scores are not saved. Each session starts fresh.
            </p>
          </div>
        </ContentCard>
      </ModuleLayout>
    )
  }

  const currentQuestion = questions[currentIndex]

  return (
    <ModuleLayout
      title="Assessment"
      description="Pattern-based questions to test your knowledge (session only)"
      icon={GraduationCap}
      color="rose"
    >
      <ContentCard>
        <div className="space-y-6">
          {/* Progress */}
          <div className="flex items-center justify-between">
            <Badge variant="gray">{currentQuestion.category}</Badge>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>

          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-500 transition-all duration-300"
              style={{ width: `${((currentIndex + (selectedAnswer !== null ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question */}
          <p className="text-lg font-medium text-slate-900 dark:text-white">
            {currentQuestion.question}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQuestion.correctAnswer
              const showResult = selectedAnswer !== null

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={cn(
                    'w-full text-left p-4 rounded-lg border-2 transition-all',
                    !showResult && 'border-slate-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500',
                    showResult && isCorrect && 'border-green-500 bg-green-50 dark:bg-green-900/20',
                    showResult && isSelected && !isCorrect && 'border-red-500 bg-red-50 dark:bg-red-900/20',
                    showResult && !isSelected && !isCorrect && 'border-slate-200 dark:border-slate-700 opacity-50'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className={cn(
                      'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium',
                      !showResult && 'border-slate-300 dark:border-slate-600 text-slate-500',
                      showResult && isCorrect && 'border-green-500 bg-green-500 text-white',
                      showResult && isSelected && !isCorrect && 'border-red-500 bg-red-500 text-white'
                    )}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={cn(
              'p-4 rounded-lg animate-fadeIn',
              selectedAnswer === currentQuestion.correctAnswer
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            )}>
              <p className={cn(
                'font-medium mb-2',
                selectedAnswer === currentQuestion.correctAnswer
                  ? 'text-green-800 dark:text-green-200'
                  : 'text-red-800 dark:text-red-200'
              )}>
                {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Next button */}
          {selectedAnswer !== null && (
            <div className="flex justify-end">
              <Button onClick={handleNext}>
                {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
              </Button>
            </div>
          )}
        </div>
      </ContentCard>
    </ModuleLayout>
  )
}
