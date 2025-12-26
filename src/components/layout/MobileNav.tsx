import { Link, useLocation } from 'react-router-dom'
import { X, LucideIcon, Settings } from 'lucide-react'
import { cn } from '../../lib/utils'

interface NavItem {
  path: string
  label: string
  icon: LucideIcon
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export default function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  const location = useLocation()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 z-50 lg:hidden overflow-y-auto animate-slideIn">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Pediatric CNS
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">
                Microbiology Master
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors',
                  location.pathname === item.path
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}

          <div className="my-4 border-t border-slate-200 dark:border-slate-700" />

          <Link
            to="/settings"
            onClick={onClose}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors',
              location.pathname === '/settings'
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            )}
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </nav>

        {/* Disclaimer Footer */}
        <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            Educational purposes only. Not for diagnostic or clinical use.
          </p>
        </div>
      </div>
    </>
  )
}
