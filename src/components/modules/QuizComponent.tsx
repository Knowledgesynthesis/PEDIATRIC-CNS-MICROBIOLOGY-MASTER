import { useState } from 'react'
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizComponentProps {
  questions: QuizQuestion[]
  title?: string
}

export function QuizComponent({ questions, title = 'Quick Quiz' }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const question = questions[currentQuestion]

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (index === question.correctAnswer) {
      setCorrectCount((c) => c + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((c) => c + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setCorrectCount(0)
    setIsComplete(false)
  }

  if (isComplete) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Quiz Complete!
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            You answered <span className="font-bold text-primary-600 dark:text-primary-400">{correctCount}</span> out of{' '}
            <span className="font-bold">{questions.length}</span> correctly this session.
          </p>
          <Button onClick={handleRestart} className="mt-4">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        {/* Progress bar */}
        <div className="mt-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 transition-all duration-300"
            style={{ width: `${((currentQuestion + (selectedAnswer !== null ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-6 space-y-6">
        <p className="text-lg text-slate-900 dark:text-white font-medium">
          {question.question}
        </p>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === question.correctAnswer
            const showResult = selectedAnswer !== null

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={cn(
                  'w-full text-left p-4 rounded-lg border-2 transition-all duration-200',
                  !showResult && 'border-slate-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500',
                  showResult && isCorrect && 'border-green-500 bg-green-50 dark:bg-green-900/20',
                  showResult && isSelected && !isCorrect && 'border-red-500 bg-red-50 dark:bg-red-900/20',
                  showResult && !isSelected && !isCorrect && 'border-slate-200 dark:border-slate-700 opacity-60',
                  isSelected && !showResult && 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                )}
              >
                <div className="flex items-start gap-3">
                  <span className={cn(
                    'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium',
                    !showResult && 'border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400',
                    showResult && isCorrect && 'border-green-500 bg-green-500 text-white',
                    showResult && isSelected && !isCorrect && 'border-red-500 bg-red-500 text-white'
                  )}>
                    {showResult && isCorrect ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : showResult && isSelected && !isCorrect ? (
                      <XCircle className="w-4 h-4" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span className={cn(
                    'text-slate-700 dark:text-slate-300',
                    showResult && isCorrect && 'text-green-700 dark:text-green-300 font-medium',
                    showResult && isSelected && !isCorrect && 'text-red-700 dark:text-red-300'
                  )}>
                    {option}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className={cn(
            'p-4 rounded-lg animate-fadeIn',
            selectedAnswer === question.correctAnswer
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          )}>
            <div className="flex items-start gap-2">
              {selectedAnswer === question.correctAnswer ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className={cn(
                  'font-medium mb-1',
                  selectedAnswer === question.correctAnswer
                    ? 'text-green-800 dark:text-green-200'
                    : 'text-red-800 dark:text-red-200'
                )}>
                  {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedAnswer !== null && (
          <div className="flex justify-end">
            <Button onClick={handleNext}>
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
