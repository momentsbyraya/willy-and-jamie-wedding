import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { X } from 'lucide-react'
import { themeConfig } from '../config/themeConfig'

/** Short link (share / fallback) */
const RSVP_FORM_URL = 'https://forms.gle/rxpoHRzgFckpuPwbA'
/** Google Forms embed URL — same form as `RSVP_FORM_URL`, `embedded=true` allows iframe */
const RSVP_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfVnujn_Co0PZGjHIXILmyUkqWAvLW0JhuITOmdQeVrs--9NA/viewform?embedded=true'

const RSVPModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      
      // Modal entrance animation
      gsap.set([overlayRef.current, contentRef.current], { opacity: 0 })
      gsap.set(contentRef.current, { scale: 0.8, y: 50 })
      
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" })
      gsap.to(contentRef.current, { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.4, 
        ease: "back.out(1.7)" 
      })
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    // Modal exit animation
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, ease: "power2.out" })
    gsap.to(contentRef.current, { 
      opacity: 0, 
      scale: 0.8, 
      y: 50, 
      duration: 0.3, 
      ease: "power2.out" 
    }).then(() => {
      onClose()
    })
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleOverlayClick}
      />
      
      {/* Modal Content */}
      <div
        ref={contentRef}
        className={`relative ${themeConfig.paragraph.background} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-300/50">
          <h2 className="text-xl sm:text-2xl font-leckerli font-light text-gray-900/70">RSVP</h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
            aria-label="Close RSVP"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Embedded Google Form */}
        <div className="flex flex-1 flex-col min-h-0 bg-white">
          <iframe
            title="RSVP — Willy and Jamie"
            src={RSVP_FORM_EMBED_URL}
            className="w-full min-h-[400px] h-[min(75vh,720px)] border-0 bg-white"
          />
          <p className="shrink-0 text-center px-3 py-2 text-xs sm:text-sm font-albert text-gray-600 border-t border-gray-200/80 bg-gray-50/90">
            <a
              href={RSVP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#800020] underline hover:opacity-80"
            >
              Open form in a new tab
            </a>
            <span className="text-gray-400"> · </span>
            <span className="break-all text-gray-500">{RSVP_FORM_URL}</span>
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default RSVPModal 