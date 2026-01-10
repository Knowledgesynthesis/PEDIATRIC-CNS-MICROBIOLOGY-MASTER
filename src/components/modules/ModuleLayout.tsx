import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ModuleLayoutProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
  children: ReactNode
}

export function ModuleLayout({ title, description, icon: Icon, color, children }: ModuleLayoutProps) {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
    pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    slate: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400',
  }

  return (
    <div className="space-y-6">
      {/* Back button and header */}
      <div className="space-y-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-start gap-4">
          <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0', colorClasses[color] || colorClasses.blue)}>
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {title}
            </h1>
            <p className="mt-1 text-slate-500 dark:text-slate-400">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Module content */}
      <div className="animate-fadeIn">
        {children}
      </div>
    </div>
  )
}
