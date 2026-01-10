import { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {children}
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Pediatric CNS Microbiology Master
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Educational purposes only. All diagrams are synthetic representations.
              <br />
              Not for diagnostic or clinical use. No patient data is collected or stored.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
