import { Settings as SettingsIcon, Moon, Sun, Info, AlertTriangle } from 'lucide-react'
import { ModuleLayout, Section, ContentCard } from '../components/modules'
import { useThemeStore } from '../stores/themeStore'
import { cn } from '../lib/utils'

export default function Settings() {
  const { isDark, toggleTheme } = useThemeStore()

  return (
    <ModuleLayout
      title="Settings"
      description="App preferences and information"
      icon={SettingsIcon}
      color="slate"
    >
      <div className="space-y-6">
        {/* Theme Toggle */}
        <ContentCard>
          <Section title="Appearance">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {isDark ? (
                  <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                ) : (
                  <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                )}
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {isDark ? 'Dark Mode' : 'Light Mode'}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {isDark ? 'Using dark theme for reduced eye strain' : 'Using light theme'}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleTheme}
                className={cn(
                  'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                  isDark ? 'bg-primary-600' : 'bg-slate-300'
                )}
              >
                <span
                  className={cn(
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                    isDark ? 'translate-x-6' : 'translate-x-1'
                  )}
                />
              </button>
            </div>
          </Section>
        </ContentCard>

        {/* About */}
        <ContentCard>
          <Section title="About the App">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Pediatric CNS Microbiology Master
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Version 1.0.0
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                A pattern-based educational platform designed to teach pediatric CNS infectious
                pathology with clarity, accuracy, and structured reasoning.
              </p>

              <p>
                This application covers developmental CNS immune physiology, neonatal and pediatric
                meningitis, viral encephalitis, congenital TORCH infections, fungal and parasitic
                CNS infections, prion disease concepts, and integrated case-based learning.
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">Designed For</h4>
                <ul className="space-y-1 text-sm">
                  <li>• PGY1-2 Pathology Residents</li>
                  <li>• PGY3-4 Senior Residents</li>
                  <li>• Neuropathology Fellows</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">Features</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Mobile-first, responsive design</li>
                  <li>• Dark mode optimized</li>
                  <li>• Offline-capable (PWA)</li>
                  <li>• 100% synthetic diagrams and illustrations</li>
                  <li>• Session-only assessments (no tracking)</li>
                </ul>
              </div>
            </div>
          </Section>
        </ContentCard>

        {/* Disclaimers */}
        <ContentCard>
          <Section title="Disclaimers">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100">
                    Educational Use Only
                  </h4>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-1">
                    This application is intended solely for educational purposes. It is designed
                    to supplement formal training in pathology and should not be used as the
                    sole resource for learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-900 dark:text-red-100">
                    Not for Diagnostic Use
                  </h4>
                  <p className="text-sm text-red-800 dark:text-red-200 mt-1">
                    This application must NOT be used for diagnostic purposes or to guide patient
                    care decisions. All clinical decisions must be made by qualified healthcare
                    professionals based on complete clinical information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">
                    Synthetic Content
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                    All diagrams, illustrations, and cases in this application are synthetic
                    representations created for educational purposes. No real patient data,
                    images, or protected health information (PHI) is used.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <Info className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-900 dark:text-green-100">
                    No Data Collection
                  </h4>
                  <p className="text-sm text-green-800 dark:text-green-200 mt-1">
                    This application does not collect, store, or transmit any user data.
                    Assessment scores are session-only and are not saved. There is no user
                    tracking or analytics.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </ContentCard>

        {/* Technical Info */}
        <ContentCard>
          <Section title="Technical Information">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-500 dark:text-slate-400">Platform</p>
                <p className="font-medium text-slate-900 dark:text-white">Web (PWA)</p>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400">Offline Support</p>
                <p className="font-medium text-slate-900 dark:text-white">Yes</p>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400">Framework</p>
                <p className="font-medium text-slate-900 dark:text-white">React + TypeScript</p>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400">Styling</p>
                <p className="font-medium text-slate-900 dark:text-white">Tailwind CSS</p>
              </div>
            </div>
          </Section>
        </ContentCard>
      </div>
    </ModuleLayout>
  )
}
