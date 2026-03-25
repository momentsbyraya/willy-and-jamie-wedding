import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft } from 'lucide-react'
import { entourage } from '../../data'

gsap.registerPlugin(ScrollTrigger)

const removeMiddleInitial = (name) => {
  if (!name) return ''
  return name.replace(/\s+[A-Z]\.\s+/g, ' ').replace(/\s+/g, ' ').trim()
}

const ACCENT = '#800020'
const ACCENT_HOVER = '#600018'

const Entourage = () => {
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const backButtonRef = useRef(null)
  const headerRef = useRef(null)
  const groomRef = useRef(null)
  const brideRef = useRef(null)
  const parentsRef = useRef(null)
  const principalSponsorsRef = useRef(null)
  const secondarySponsorsRef = useRef(null)
  const bestmanRef = useRef(null)
  const maidOfHonorRef = useRef(null)
  const bibleBearerRef = useRef(null)
  const ringBearerRef = useRef(null)
  const coinBearerRef = useRef(null)
  const flowerGirlsRef = useRef(null)
  const hereComesTheBrideRef = useRef(null)
  const ceremonialRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.set(sectionRef.current, { x: '100%', opacity: 0 })
    }
    if (backButtonRef.current) {
      gsap.set(backButtonRef.current, { opacity: 0, scale: 0 })
    }

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
    }

    if (backButtonRef.current) {
      gsap.fromTo(
        backButtonRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)', delay: 0.6 }
      )
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    if (headerRef.current) {
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
    }

    if (groomRef.current) {
      const groomName = groomRef.current.querySelector('p.font-poppins')
      const brideName = groomRef.current.parentElement?.querySelector('[class*="flex-1"]:last-child')?.querySelector('p.font-poppins')
      if (groomName && brideName) {
        const row = [groomName, brideName]
        gsap.set(row, { opacity: 0, y: 20 })
        ScrollTrigger.create({
          trigger: groomRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(row, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
          },
          toggleActions: 'play none none reverse'
        })
      }
    }

    if (parentsRef.current) {
      const groomParentsDiv = parentsRef.current.querySelector('[class*="flex-1"]:first-child')
      const brideParentsDiv = parentsRef.current.querySelector('[class*="flex-1"]:last-child')
      if (groomParentsDiv && brideParentsDiv) {
        const groomParentsNames = groomParentsDiv.querySelectorAll('p.font-poppins')
        const brideParentsNames = brideParentsDiv.querySelectorAll('p.font-poppins')
        if (groomParentsNames?.length && brideParentsNames?.length) {
          const groomArray = Array.from(groomParentsNames)
          const brideArray = Array.from(brideParentsNames)
          const maxLength = Math.max(groomArray.length, brideArray.length)
          const rows = []
          for (let i = 0; i < maxLength; i++) {
            const row = []
            if (groomArray[i]) row.push(groomArray[i])
            if (brideArray[i]) row.push(brideArray[i])
            if (row.length > 0) rows.push(row)
          }
          if (rows.length > 0) {
            rows.forEach((row) => gsap.set(row, { opacity: 0, y: 20 }))
            ScrollTrigger.create({
              trigger: parentsRef.current,
              start: 'top 80%',
              onEnter: () => {
                rows.forEach((row, index) => {
                  gsap.to(row, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: index * 0.15
                  })
                })
              },
              toggleActions: 'play none none reverse'
            })
          }
        }
      }
    }

    if (principalSponsorsRef.current) {
      const ninongElements = principalSponsorsRef.current.querySelectorAll('.ninong-item')
      const ninangElements = principalSponsorsRef.current.querySelectorAll('.ninang-item')
      const ninongArray = Array.from(ninongElements || [])
      const ninangArray = Array.from(ninangElements || [])
      if (ninongArray.length > 0) {
        const rows = []
        const maxLength = Math.max(ninongArray.length, ninangArray.length)
        for (let i = 0; i < maxLength; i++) {
          const row = []
          if (ninongArray[i]) row.push(ninongArray[i])
          if (ninangArray[i]) row.push(ninangArray[i])
          if (row.length > 0) rows.push(row)
        }
        if (rows.length > 0) {
          rows.forEach((row) => gsap.set(row, { opacity: 0, y: 20 }))
          ScrollTrigger.create({
            trigger: principalSponsorsRef.current,
            start: 'top 80%',
            onEnter: () => {
              rows.forEach((row, index) => {
                gsap.to(row, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: 'power2.out',
                  delay: index * 0.15
                })
              })
            },
            toggleActions: 'play none none reverse'
          })
        }
      }
    }

    if (secondarySponsorsRef.current) {
      const groomsmenElements = secondarySponsorsRef.current.querySelectorAll('.groomsmen-item')
      const bridesmaidsElements = secondarySponsorsRef.current.querySelectorAll('.bridesmaids-item')
      if (groomsmenElements?.length && bridesmaidsElements?.length) {
        const groomsmenArray = Array.from(groomsmenElements)
        const bridesmaidsArray = Array.from(bridesmaidsElements)
        const maxLength = Math.max(groomsmenArray.length, bridesmaidsArray.length)
        const rows = []
        for (let i = 0; i < maxLength; i++) {
          const row = []
          if (groomsmenArray[i]) row.push(groomsmenArray[i])
          if (bridesmaidsArray[i]) row.push(bridesmaidsArray[i])
          if (row.length > 0) rows.push(row)
        }
        if (rows.length > 0) {
          rows.forEach((row) => gsap.set(row, { opacity: 0, y: 20 }))
          ScrollTrigger.create({
            trigger: secondarySponsorsRef.current,
            start: 'top 80%',
            onEnter: () => {
              rows.forEach((row, index) => {
                gsap.to(row, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: 'power2.out',
                  delay: index * 0.15
                })
              })
            },
            toggleActions: 'play none none reverse'
          })
        }
      }
    }

    if (bestmanRef.current && maidOfHonorRef.current) {
      const bestmanNames = bestmanRef.current.querySelectorAll('p.font-poppins')
      const maidOfHonorNames = maidOfHonorRef.current.querySelectorAll('p.font-poppins')
      if (bestmanNames?.length && maidOfHonorNames?.length) {
        const bestmanArray = Array.from(bestmanNames)
        const maidOfHonorArray = Array.from(maidOfHonorNames)
        const maxLength = Math.max(bestmanArray.length, maidOfHonorArray.length)
        const rows = []
        for (let i = 0; i < maxLength; i++) {
          const row = []
          if (bestmanArray[i]) row.push(bestmanArray[i])
          if (maidOfHonorArray[i]) row.push(maidOfHonorArray[i])
          if (row.length > 0) rows.push(row)
        }
        if (rows.length > 0) {
          const pairContainer = bestmanRef.current.parentElement
          if (pairContainer) {
            rows.forEach((row) => gsap.set(row, { opacity: 0, y: 20 }))
            ScrollTrigger.create({
              trigger: pairContainer,
              start: 'top 80%',
              onEnter: () => {
                rows.forEach((row, index) => {
                  gsap.to(row, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: index * 0.15
                  })
                })
              },
              toggleActions: 'play none none reverse'
            })
          }
        }
      }
    }

    const bearerRefs = [bibleBearerRef, ringBearerRef, coinBearerRef, flowerGirlsRef].filter((ref) => ref.current)
    if (bearerRefs.length > 0) {
      const container = bearerRefs[0].current.parentElement
      if (container) {
        bearerRefs.forEach((ref) => {
          const names = ref.current.querySelectorAll('p.font-poppins')
          if (names?.length) gsap.set(Array.from(names), { opacity: 0, y: 20 })
        })
        ScrollTrigger.create({
          trigger: container,
          start: 'top 80%',
          onEnter: () => {
            bearerRefs.forEach((ref, sectionIndex) => {
              const names = ref.current.querySelectorAll('p.font-poppins')
              if (names?.length) {
                gsap.to(Array.from(names), {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: 'power2.out',
                  delay: sectionIndex * 0.3,
                  stagger: 0.1
                })
              }
            })
          },
          toggleActions: 'play none none reverse'
        })
      }
    }

    if (hereComesTheBrideRef.current) {
      const names = hereComesTheBrideRef.current.querySelectorAll('p.font-poppins')
      if (names?.length) {
        gsap.set(Array.from(names), { opacity: 0, y: 20 })
        ScrollTrigger.create({
          trigger: hereComesTheBrideRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(Array.from(names), {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.08
            })
          },
          toggleActions: 'play none none reverse'
        })
      }
    }

    if (ceremonialRef.current) {
      const lines = ceremonialRef.current.querySelectorAll('.ceremonial-line')
      if (lines?.length) {
        gsap.set(Array.from(lines), { opacity: 0, y: 16 })
        ScrollTrigger.create({
          trigger: ceremonialRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(Array.from(lines), {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: 'power2.out',
              stagger: 0.1
            })
          },
          toggleActions: 'play none none reverse'
        })
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const principalSponsors = entourage?.entourageList?.find((item) => item.category === 'Principal Sponsors')
  const secondarySponsors = entourage?.entourageList?.find((item) => item.category === 'Secondary Sponsors')
  const bestman = entourage?.entourageList?.find((item) => item.category === 'Bestman')
  const maidOfHonor = entourage?.entourageList?.find((item) => item.category === 'Maid of Honor')
  const bibleBearer = entourage?.entourageList?.find((item) => item.category === 'Bible Bearer')
  const ringBearer = entourage?.entourageList?.find((item) => item.category === 'Ring Bearer')
  const coinBearer = entourage?.entourageList?.find((item) => item.category === 'Coin Bearer')
  const flowerGirls = entourage?.entourageList?.find((item) => item.category === 'Flower Girls')
  const hereComesTheBride = entourage?.entourageList?.find((item) => item.category === 'Here comes the bride')

  return (
    <>
      <section
        ref={sectionRef}
        id="entourage"
        data-section="entourage"
        className="relative py-20 w-full overflow-hidden"
        style={{
          opacity: 0,
          transform: 'translateX(100%)',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '4rem',
          paddingBottom: '4rem'
        }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/images/graphics/bg-3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Line decoration - Top */}
        <img
          src="/assets/images/graphics/line-1.png"
          alt="Line decoration"
          className="absolute left-1/2 transform -translate-x-1/2 z-30"
          style={{
            width: '50%',
            height: 'auto',
            maxWidth: '50%',
            objectFit: 'cover',
            top: '1rem'
          }}
        />
        {/* Line decoration - Bottom */}
        <img
          src="/assets/images/graphics/line-1.png"
          alt="Line decoration"
          className="absolute left-1/2 transform -translate-x-1/2 z-30"
          style={{
            width: '50%',
            height: 'auto',
            maxWidth: '50%',
            objectFit: 'cover',
            bottom: '1rem'
          }}
        />
        {/* Content panel */}
        <div
          className="relative z-20 flex items-center justify-center py-12"
          style={{ backgroundColor: '#F5F5DC' }}
        >
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: 'url(/assets/images/graphics/beige-1.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.25
            }}
          />
          <div className="max-w-xs sm:max-w-md lg:max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 ref={headerRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8">
                <span
                  className="imperial-script-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block leading-none capitalize"
                  style={{ lineHeight: '0.8', color: ACCENT }}
                >
                  Entourage
                </span>
              </h2>
            </div>

            <div ref={groomRef} className="mb-6 flex flex-row gap-4 sm:gap-6 justify-center items-center">
              <div className="flex-1">
                <p
                  className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-right uppercase"
                  style={{ color: ACCENT }}
                >
                  Name Of Groom
                </p>
                <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase whitespace-nowrap overflow-hidden text-ellipsis text-right text-[#333333]">
                  {removeMiddleInitial(entourage?.couple?.groom?.name)}
                </p>
              </div>
              <div className="flex-1">
                <p
                  className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-left uppercase"
                  style={{ color: ACCENT }}
                >
                  Name Of Bride
                </p>
                <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase whitespace-nowrap overflow-hidden text-ellipsis text-left text-[#333333]">
                  {removeMiddleInitial(entourage?.couple?.bride?.name)}
                </p>
              </div>
            </div>

            <div ref={parentsRef} className="mb-6 flex flex-row gap-4 sm:gap-6 justify-center items-center">
              <div className="flex-1">
                <p
                  className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-right uppercase"
                  style={{ color: ACCENT }}
                >
                  Groom&apos;s Parents
                </p>
                <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase whitespace-nowrap overflow-hidden text-ellipsis text-right text-[#333333]">
                  {entourage?.parents?.groom?.father}
                </p>
                <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase whitespace-nowrap overflow-hidden text-ellipsis text-right text-[#333333]">
                  {entourage?.parents?.groom?.mother}
                </p>
              </div>
              <div className="flex-1">
                <p
                  className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-left uppercase"
                  style={{ color: ACCENT }}
                >
                  Bride&apos;s Parents
                </p>
                <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase whitespace-nowrap overflow-hidden text-ellipsis text-left text-[#333333]">
                  {entourage?.parents?.bride?.father}
                </p>
                <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase whitespace-nowrap overflow-hidden text-ellipsis text-left text-[#333333]">
                  {entourage?.parents?.bride?.mother}
                </p>
              </div>
            </div>

            {principalSponsors && (
              <div ref={principalSponsorsRef} className="mb-6">
                <h3
                  className="text-lg imperial-script-regular mb-6 text-center capitalize"
                  style={{ color: ACCENT }}
                >
                  Principal Sponsors
                </h3>
                <div
                  className={`flex flex-row gap-4 sm:gap-6 justify-center items-center ${
                    principalSponsors.ninang?.length ? '' : 'max-w-xl mx-auto'
                  }`}
                >
                  <div className={principalSponsors.ninang?.length ? 'flex-1' : 'flex-1 w-full'}>
                    {principalSponsors.ninang?.length > 0 && (
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-right uppercase"
                        style={{ color: ACCENT }}
                      >
                        NINONG
                      </p>
                    )}
                    <div className="space-y-2">
                      {principalSponsors.ninong?.map((name, index) => (
                        <p
                          key={index}
                          className={`ninong-item text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] whitespace-nowrap overflow-hidden text-ellipsis ${
                            principalSponsors.ninang?.length ? 'text-right' : 'text-center'
                          }`}
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  </div>
                  {principalSponsors.ninang?.length > 0 && (
                    <div className="flex-1">
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-left uppercase"
                        style={{ color: ACCENT }}
                      >
                        NINANG
                      </p>
                      <div className="space-y-2">
                        {principalSponsors.ninang?.map((name, index) => (
                          <p
                            key={index}
                            className="ninang-item text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] text-left whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            {name}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {secondarySponsors && (
              <div ref={secondarySponsorsRef} className="mb-6">
                <h3
                  className="text-lg imperial-script-regular mb-6 text-center capitalize"
                  style={{ color: ACCENT }}
                >
                  Secondary Sponsors
                </h3>
                <div className="flex flex-row gap-4 sm:gap-6 justify-center items-center mb-6">
                  {bestman && (
                    <div ref={bestmanRef} className="flex-1">
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-right uppercase"
                        style={{ color: ACCENT }}
                      >
                        Bestman
                      </p>
                      {bestman.names?.map((name, index) => (
                        <p
                          key={index}
                          className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] whitespace-nowrap overflow-hidden text-ellipsis text-right"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  )}
                  {maidOfHonor && (
                    <div ref={maidOfHonorRef} className="flex-1">
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-left uppercase"
                        style={{ color: ACCENT }}
                      >
                        Maid Of Honor
                      </p>
                      {maidOfHonor.names?.map((name, index) => (
                        <p
                          key={index}
                          className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] whitespace-nowrap overflow-hidden text-ellipsis text-left"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-row gap-4 sm:gap-6 justify-center items-start">
                  <div className="flex-1">
                    <p
                      className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-right uppercase"
                      style={{ color: ACCENT }}
                    >
                      Groomsmen
                    </p>
                    <div className="space-y-2">
                      {secondarySponsors.groomsmen?.map((name, index) => (
                        <p
                          key={index}
                          className="groomsmen-item text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] text-right whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-left uppercase"
                      style={{ color: ACCENT }}
                    >
                      Bridesmaids
                    </p>
                    <div className="space-y-2">
                      {secondarySponsors.bridesmaid?.map((name, index) => (
                        <p
                          key={index}
                          className="bridesmaids-item text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] text-left whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {entourage?.ceremonialSponsors && (
              <div ref={ceremonialRef} className="mb-6">
                <h3
                  className="text-lg imperial-script-regular mb-4 text-center capitalize"
                  style={{ color: ACCENT }}
                >
                  Ceremonial Sponsors
                </h3>
                <div className="flex flex-col gap-4 items-center text-center max-w-lg mx-auto">
                  {entourage.ceremonialSponsors.sand?.length > 0 && (
                    <div className="ceremonial-line w-full">
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-1 uppercase"
                        style={{ color: ACCENT }}
                      >
                        Candle Sponsor
                      </p>
                      {entourage.ceremonialSponsors.sand.map((name, index) => (
                        <p
                          key={index}
                          className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333]"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  )}
                  {entourage.ceremonialSponsors.cord?.length > 0 && (
                    <div className="ceremonial-line w-full">
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-1 uppercase"
                        style={{ color: ACCENT }}
                      >
                        Cord Sponsor
                      </p>
                      {entourage.ceremonialSponsors.cord.map((name, index) => (
                        <p
                          key={index}
                          className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333]"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  )}
                  {entourage.ceremonialSponsors.veil?.length > 0 && (
                    <div className="ceremonial-line w-full">
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-1 uppercase"
                        style={{ color: ACCENT }}
                      >
                        Veil Sponsor
                      </p>
                      <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333]">
                        {entourage.ceremonialSponsors.veil.join(' | ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {(bibleBearer || ringBearer || coinBearer || flowerGirls) && (
              <div className="mb-6">
                <div className="flex flex-col gap-6 justify-center items-center mt-6">
                  {bibleBearer && (
                    <div ref={bibleBearerRef}>
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-center uppercase"
                        style={{ color: ACCENT }}
                      >
                        Bible Bearer
                      </p>
                      {bibleBearer.names?.map((name, index) => (
                        <p
                          key={index}
                          className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] whitespace-nowrap overflow-hidden text-ellipsis text-center"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  )}
                  {ringBearer && (
                    <div ref={ringBearerRef}>
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-center uppercase"
                        style={{ color: ACCENT }}
                      >
                        Ring Bearer
                      </p>
                      {ringBearer.names?.map((name, index) => (
                        <p
                          key={index}
                          className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] whitespace-nowrap overflow-hidden text-ellipsis text-center"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  )}
                  {coinBearer && (
                    <div ref={coinBearerRef}>
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-center uppercase"
                        style={{ color: ACCENT }}
                      >
                        Coin Bearer
                      </p>
                      {coinBearer.names?.map((name, index) => (
                        <p
                          key={index}
                          className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] whitespace-nowrap overflow-hidden text-ellipsis text-center"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  )}
                  {flowerGirls && (
                    <div ref={flowerGirlsRef}>
                      <p
                        className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-center uppercase"
                        style={{ color: ACCENT }}
                      >
                        Flower Girls
                      </p>
                      {flowerGirls.names?.map((name, index) => (
                        <p
                          key={index}
                          className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] whitespace-nowrap overflow-hidden text-ellipsis text-center"
                        >
                          {name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {hereComesTheBride && (
              <div className="mb-6">
                <div
                  ref={hereComesTheBrideRef}
                  className="flex flex-col gap-2 justify-center items-center mt-6"
                >
                  <p
                    className="text-[10px] sm:text-sm md:text-base lg:text-lg alice-regular mb-2 text-center uppercase"
                    style={{ color: ACCENT }}
                  >
                    Here comes the bride
                  </p>
                  {hereComesTheBride.names?.map((name, index) => (
                    <p
                      key={index}
                      className="text-[10px] sm:text-sm md:text-base lg:text-lg font-poppins uppercase text-[#333333] text-center"
                    >
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <button
        ref={backButtonRef}
        onClick={() => {
          if (sectionRef.current) {
            gsap.to(sectionRef.current, {
              x: '-100%',
              opacity: 0,
              duration: 0.5,
              ease: 'power2.in',
              onComplete: () => navigate('/')
            })
          } else {
            navigate('/')
          }
        }}
        className="fixed bottom-12 right-6 z-[100] w-14 h-14 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        style={{ backgroundColor: ACCENT, pointerEvents: 'auto' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ACCENT_HOVER }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ACCENT }}
        aria-label="Back to home"
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>
    </>
  )
}

export default Entourage
