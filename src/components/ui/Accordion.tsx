import { useState, createContext, useContext, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (id: string) => void
  type: 'single' | 'multiple'
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

interface AccordionProps {
  children: ReactNode
  type?: 'single' | 'multiple'
  defaultValue?: string[]
  className?: string
}

export function Accordion({ children, type = 'single', defaultValue = [], className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue)

  const toggleItem = (id: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(id) ? [] : [id])
    } else {
      setOpenItems(
        openItems.includes(id)
          ? openItems.filter((item) => item !== id)
          : [...openItems, id]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  children: ReactNode
  value: string
  className?: string
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
  return (
    <div
      className={cn(
        'border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden',
        className
      )}
      data-value={value}
    >
      {children}
    </div>
  )
}

interface AccordionTriggerProps {
  children: ReactNode
  value: string
  className?: string
}

export function AccordionTrigger({ children, value, className }: AccordionTriggerProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionTrigger must be used within Accordion')

  const { openItems, toggleItem } = context
  const isOpen = openItems.includes(value)

  return (
    <button
      onClick={() => toggleItem(value)}
      className={cn(
        'flex items-center justify-between w-full p-4 text-left font-medium',
        'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800',
        'text-slate-900 dark:text-white transition-colors',
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          'w-5 h-5 text-slate-500 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  )
}

interface AccordionContentProps {
  children: ReactNode
  value: string
  className?: string
}

export function AccordionContent({ children, value, className }: AccordionContentProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionContent must be used within Accordion')

  const { openItems } = context
  const isOpen = openItems.includes(value)

  if (!isOpen) return null

  return (
    <div className={cn('p-4 bg-white dark:bg-slate-900 animate-fadeIn', className)}>
      {children}
    </div>
  )
}
