import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useThemeStore } from './stores/themeStore'
import { Layout } from './components/layout'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const NormalDevelopment = lazy(() => import('./pages/NormalDevelopment'))
const BacterialInfections = lazy(() => import('./pages/BacterialInfections'))
const ViralEncephalitis = lazy(() => import('./pages/ViralEncephalitis'))
const TorchInfections = lazy(() => import('./pages/TorchInfections'))
const FungalInfections = lazy(() => import('./pages/FungalInfections'))
const ParasiticInfections = lazy(() => import('./pages/ParasiticInfections'))
const MycobacterialInfections = lazy(() => import('./pages/MycobacterialInfections'))
const CnsAbscesses = lazy(() => import('./pages/CnsAbscesses'))
const PrionDisease = lazy(() => import('./pages/PrionDisease'))
const StainsIhcEm = lazy(() => import('./pages/StainsIhcEm'))
const Pitfalls = lazy(() => import('./pages/Pitfalls'))
const CaseBank = lazy(() => import('./pages/CaseBank'))
const Assessment = lazy(() => import('./pages/Assessment'))
const Settings = lazy(() => import('./pages/Settings'))

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
    </div>
  )
}

function App() {
  const { isDark } = useThemeStore()

  // Initialize theme on app load
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/normal-development" element={<NormalDevelopment />} />
            <Route path="/bacterial" element={<BacterialInfections />} />
            <Route path="/viral" element={<ViralEncephalitis />} />
            <Route path="/torch" element={<TorchInfections />} />
            <Route path="/fungal" element={<FungalInfections />} />
            <Route path="/parasitic" element={<ParasiticInfections />} />
            <Route path="/mycobacterial" element={<MycobacterialInfections />} />
            <Route path="/abscess" element={<CnsAbscesses />} />
            <Route path="/prion" element={<PrionDisease />} />
            <Route path="/stains-ihc-em" element={<StainsIhcEm />} />
            <Route path="/pitfalls" element={<Pitfalls />} />
            <Route path="/cases" element={<CaseBank />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
