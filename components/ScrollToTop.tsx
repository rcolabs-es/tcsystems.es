'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  // Mostrar el botón cuando el usuario haga scroll hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    // Activar animación
    setIsClicked(true)
    
    // Hacer scroll
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    // Resetear animación después de un breve delay
    setTimeout(() => {
      setIsClicked(false)
    }, 600)
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-[#0e9acd] hover:bg-[#0c87b8] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Volver arriba"
    >
      <ArrowUp 
        className={`w-6 h-6 transition-all duration-200 ${
          isClicked 
            ? 'animate-bounce -translate-y-2' 
            : 'group-hover:-translate-y-1'
        }`}
      />
    </button>
  )
} 