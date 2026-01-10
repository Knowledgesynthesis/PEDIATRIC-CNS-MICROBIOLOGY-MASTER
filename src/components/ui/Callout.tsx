import { ReactNode } from 'react'
import { AlertCircle, Info, AlertTriangle, Lightbulb } from 'lucide-react'
import { cn } from '../../lib/utils'

interface CalloutProps {
  children: ReactNode
  variant?: 'info' | 'warning' | 'danger' | 'tip'
  title?: string
  className?: string
}

export function Callout({ children, variant = 'info', title, className }: CalloutProps) {
  const config = {
    info: {
      icon: Info,
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      iconColor: 'text-blue-500 dark:text-blue-400',
      titleColor: 'text-blue-900 dark:text-blue-100',
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      iconColor: 'text-yellow-500 dark:text-yellow-400',
      titleColor: 'text-yellow-900 dark:text-yellow-100',
    },
    danger: {
      icon: AlertCircle,
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      iconColor: 'text-red-500 dark:text-red-400',
      titleColor: 'text-red-900 dark:text-red-100',
    },
    tip: {
      icon: Lightbulb,
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      iconColor: 'text-green-500 dark:text-green-400',
      titleColor: 'text-green-900 dark:text-green-100',
    },
  }

  const { icon: Icon, bg, border, iconColor, titleColor } = config[variant]

  return (
    <div className={cn('rounded-lg border p-4', bg, border, className)}>
      <div className="flex gap-3">
        <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', iconColor)} />
        <div className="space-y-1">
          {title && (
            <h4 className={cn('font-medium', titleColor)}>{title}</h4>
          )}
          <div className="text-sm text-slate-600 dark:text-slate-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
