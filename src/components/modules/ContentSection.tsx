import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SectionProps {
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {title && (
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}

interface SubSectionProps {
  title?: string
  children: ReactNode
  className?: string
}

export function SubSection({ title, children, className }: SubSectionProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {title && (
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

interface ContentCardProps {
  children: ReactNode
  className?: string
}

export function ContentCard({ children, className }: ContentCardProps) {
  return (
    <div className={cn('bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6', className)}>
      {children}
    </div>
  )
}

interface ListItemProps {
  children: ReactNode
  bullet?: 'disc' | 'circle' | 'arrow' | 'check'
}

export function ListItem({ children, bullet = 'disc' }: ListItemProps) {
  const bullets = {
    disc: '•',
    circle: '○',
    arrow: '→',
    check: '✓',
  }

  return (
    <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
      <span className="text-primary-500 flex-shrink-0 mt-0.5">{bullets[bullet]}</span>
      <span>{children}</span>
    </li>
  )
}

interface KeyPointProps {
  children: ReactNode
  label?: string
}

export function KeyPoint({ children, label }: KeyPointProps) {
  return (
    <div className="flex items-start gap-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-100 dark:border-primary-800">
      {label && (
        <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/50 px-2 py-0.5 rounded">
          {label}
        </span>
      )}
      <p className="text-sm text-slate-700 dark:text-slate-300">{children}</p>
    </div>
  )
}

interface DataTableProps {
  headers: string[]
  rows: (string | ReactNode)[][]
  className?: string
}

export function DataTable({ headers, rows, className }: DataTableProps) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-medium text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 text-slate-600 dark:text-slate-400"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface DiagramBoxProps {
  title: string
  children: ReactNode
  caption?: string
}

export function DiagramBox({ title, children, caption }: DiagramBoxProps) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wide">
        {title}
      </h4>
      <div className="flex items-center justify-center min-h-[150px] text-center">
        {children}
      </div>
      {caption && (
        <p className="mt-4 text-xs text-center text-slate-500 dark:text-slate-400 italic">
          {caption}
        </p>
      )}
    </div>
  )
}
