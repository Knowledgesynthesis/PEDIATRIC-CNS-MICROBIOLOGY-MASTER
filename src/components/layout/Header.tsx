import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, Settings, Home, BookOpen } from 'lucide-react'
import { useThemeStore } from '../../stores/themeStore'
import { cn } from '../../lib/utils'
import MobileNav from './MobileNav'

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/normal-development', label: 'Normal Dev', icon: BookOpen },
  { path: '/bacterial', label: 'Bacterial', icon: BookOpen },
  { path: '/viral', label: 'Viral', icon: BookOpen },
  { path: '/torch', label: 'TORCH', icon: BookOpen },
  { path: '/fungal', label: 'Fungal', icon: BookOpen },
  { path: '/parasitic', label: 'Parasitic', icon: BookOpen },
  { path: '/mycobacterial', label: 'Mycobacterial', icon: BookOpen },
  { path: '/abscess', label: 'Abscess', icon: BookOpen },
  { path: '/prion', label: 'Prion', icon: BookOpen },
  { path: '/stains-ihc-em', label: 'Stains/IHC/EM', icon: BookOpen },
  { path: '/pitfalls', label: 'Pitfalls', icon: BookOpen },
  { path: '/cases', label: 'Cases', icon: BookOpen },
  { path: '/assessment', label: 'Assessment', icon: BookOpen },
]

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { isDark, toggleTheme } = useThemeStore()
  const location = useLocation()

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  Pediatric CNS
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">
                  Microbiology Master
                </p>
              </div>
            </Link>

            {/* Desktop Nav - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-1 overflow-x-auto">
              {navItems.slice(0, 8).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap',
                    location.pathname === item.path
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Link
                to="/settings"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Settings"
              >
                <Settings className="w-5 h-5" />
              </Link>

              <button
                onClick={() => setMobileNavOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navItems={navItems}
      />
    </>
  )
}
