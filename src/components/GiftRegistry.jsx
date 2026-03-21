import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './pages/Details.css'

gsap.registerPlugin(ScrollTrigger)

const GIFT_QR_SRC = '/assets/images/qr/image.png'

const GiftRegistry = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const titleEl = titleRef.current
    const descEl = descriptionRef.current
    const cardEl = cardRef.current

    if (titleEl) gsap.set(titleEl, { opacity: 0, y: 24 })
    if (descEl) gsap.set(descEl, { opacity: 0, y: 24 })
    if (cardEl) gsap.set(cardEl, { opacity: 0, y: 24 })

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        if (titleEl) {
          gsap.to(titleEl, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        }
        if (descEl) {
          gsap.to(descEl, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2,
            ease: 'power2.out'
          })
        }
        if (cardEl) {
          gsap.to(cardEl, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.45,
            ease: 'power2.out'
          })
        }
      }
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <div ref={sectionRef} className="mt-8 relative gift-registry-section">
      <div className="text-center relative z-10 gift-registry-inner">
        <div className="gift-registry-line" aria-hidden="true" />

        <div className="gift-registry-flower-wrap">
          <img
            src="/assets/images/graphics/flower-1.png"
            alt=""
            className="gift-registry-flower"
          />
        </div>

        <h3 ref={titleRef} className="gift-registry-title-wrap">
          <span className="gift-registry-title-line" aria-hidden="true" />
          <span className="gift-registry-title">A notes on gifts...</span>
          <span className="gift-registry-title-line" aria-hidden="true" />
        </h3>

        <p ref={descriptionRef} className="gift-registry-description">
          Your presence is the greatest gift. If you wish to honor us, we would be grateful for a monetary gift to help us start our new life together.
        </p>

        <div
          ref={cardRef}
          className="gift-registry-qr-box gift-registry-card gift-registry-qr-box--single mx-auto"
        >
          <img
            src={GIFT_QR_SRC}
            alt="InstaPay QR code for monetary gifts"
            className="gift-registry-qr-image"
          />
        </div>
      </div>
    </div>
  )
}

export default GiftRegistry
