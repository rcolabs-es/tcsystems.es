'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Settings, Check, Shield, BarChart3, Zap } from 'lucide-react'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  functional: boolean
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [showReopenButton, setShowReopenButton] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Siempre activas
    analytics: false,
    functional: false
  })

  // Verificar si ya se han establecido las preferencias de cookies
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setIsVisible(true)
      setShowReopenButton(false)
    } else {
      setIsVisible(false)
      setShowReopenButton(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true
    }
    setPreferences(allAccepted)
    saveCookiePreferences(allAccepted)
    setIsVisible(false)
  }

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      functional: false
    }
    setPreferences(necessaryOnly)
    saveCookiePreferences(necessaryOnly)
    setIsVisible(false)
  }

  const saveCustomPreferences = () => {
    saveCookiePreferences(preferences)
    setIsVisible(false)
    setShowCustomize(false)
  }

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', 'true')
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs))
    setShowReopenButton(true)
    
    // Aquí puedes integrar con Google Analytics u otros servicios
    if (prefs.analytics) {
      // Habilitar Google Analytics
      console.log('Analytics cookies enabled')
    }
    if (prefs.functional) {
      // Habilitar cookies funcionales
      console.log('Functional cookies enabled')
    }
  }

  const reopenBanner = () => {
    setIsVisible(true)
    setShowReopenButton(false)
    setShowCustomize(false)
  }

  const togglePreference = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return // No se puede desactivar

    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  return (
    <>
      {/* Botón para reabrir el banner */}
      {showReopenButton && !isVisible && (
        <button
          onClick={reopenBanner}
          className="fixed bottom-4 left-4 z-40 bg-white/80 dark:bg-gray-600/80 text-black dark:text-white p-2 rounded-lg shadow-md hover:bg-gray-100/80 dark:hover:bg-gray-500/80 transition-all duration-300 backdrop-blur-sm text-xs flex items-center space-x-2"
          title="Configurar cookies"
        >
          <Settings className="w-3 h-3" />
          <span className="hidden sm:inline">Cookies</span>
        </button>
      )}

      {/* Banner principal */}
      {isVisible && (
        <div className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto pointer-events-auto">
          <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-700/50 rounded-2xl shadow-2xl">
        
        {!showCustomize ? (
          /* Vista principal */
          <div className="p-6">
            {/* Header con icono */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#0e9acd]/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#0e9acd]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Política de Cookies
                </h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-zinc-300 mb-4 leading-relaxed">
                Utilizamos cookies para mejorar tu experiencia de navegación, mostrar contenido personalizado y analizar el tráfico del sitio. Puedes elegir qué cookies aceptar o rechazar.
              </p>
              <p className="text-xs text-gray-500 dark:text-zinc-400">
                Para más información consulta nuestra{' '}
                <Link 
                  href="/legal/cookies" 
                  className="text-[#0e9acd] hover:underline font-medium"
                >
                  política de cookies
                </Link>
              </p>
            </div>

            {/* Botones */}
            <div className="space-y-3">
              <button
                onClick={acceptAll}
                className="w-full bg-[#0e9acd] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#0c87b8] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <Check className="w-4 h-4" />
                <span>Aceptar todas</span>
              </button>

              <div className="flex space-x-3">
                <button
                  onClick={acceptNecessaryOnly}
                  className="flex-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300"
                >
                  Solo necesarias
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="flex-1 border border-[#0e9acd] text-[#0e9acd] py-3 px-4 rounded-xl font-medium hover:bg-[#0e9acd]/5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>Personalizar</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Vista de personalización */
          <div className="p-6">
            {/* Header personalizar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowCustomize(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Personalizar Cookies
                </h3>
              </div>
            </div>

            {/* Opciones de cookies */}
            <div className="space-y-4 mb-6">
              {/* Cookies necesarias */}
              <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Cookies necesarias
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-zinc-400 mt-1">
                        Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.
                      </p>
                    </div>
                  </div>
                  <div className="ml-3">
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full font-medium">
                      Siempre activas
                    </span>
                  </div>
                </div>
              </div>

              {/* Cookies analíticas */}
              <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <BarChart3 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Cookies analíticas
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-zinc-400 mt-1">
                        Nos ayudan a entender cómo utilizas nuestro sitio web y a mejorar la experiencia de usuario.
                      </p>
                    </div>
                  </div>
                  <div className="ml-3">
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0e9acd] focus:ring-offset-2 ${
                        preferences.analytics ? 'bg-[#0e9acd]' : 'bg-gray-300 dark:bg-zinc-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? 'translate-x-5' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>



              {/* Cookies funcionales */}
              <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <Zap className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Cookies funcionales
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-zinc-400 mt-1">
                        Permiten funcionalidades avanzadas como recordar tus preferencias, compartir contenido en redes sociales, etc.
                      </p>
                    </div>
                  </div>
                  <div className="ml-3">
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0e9acd] focus:ring-offset-2 ${
                        preferences.functional ? 'bg-[#0e9acd]' : 'bg-gray-300 dark:bg-zinc-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                          preferences.functional ? 'translate-x-5' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex space-x-3">
              <button
                onClick={acceptNecessaryOnly}
                className="flex-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300"
              >
                Solo necesarias
              </button>
              <button
                onClick={saveCustomPreferences}
                className="flex-1 bg-[#0e9acd] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#0c87b8] transition-all duration-300 hover:scale-[1.02]"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
           </div>
         </div>
       )}
     </>
   )
 } 