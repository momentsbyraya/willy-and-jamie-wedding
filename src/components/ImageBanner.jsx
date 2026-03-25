import React from 'react'
import GradientLayer from './GradientLayer'

const ImageBanner = ({
  src,
  alt = 'Banner image',
  objectPosition = '32% 25%',
  theme,
  imgClassName,
}) => {
  const isBlush = theme === 'blush'
  const titleLight = isBlush ? '#1a1a1a' : '#722F37'
  const titleMain = isBlush ? '#000000' : '#800020'
  const blush = '#FDF2F4'
  return (
    <div className="relative z-20 w-screen" style={{ width: '100vw' }}>
      <div className="relative w-full h-[300px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
          <img 
            src={src} 
            alt={alt} 
            className={`h-full w-full object-cover ${imgClassName ?? ''}`.trim()}
            style={imgClassName ? undefined : { objectPosition }}
          />
          {/* Natural blend: photo → soft blue-pink → Where to go background */}
          {isBlush ? (
            <div 
              className="absolute bottom-0 left-0 w-full h-44 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, transparent 0%, transparent 15%, rgba(200, 175, 190, 0.15) 35%, rgba(205, 155, 175, 0.35) 55%, rgba(248, 238, 242, 0.7) 75%, rgba(253, 242, 244, 0.95) 90%, ${blush} 100%)`
              }}
            />
          ) : (
            <>
              <GradientLayer height="h-32" opacity={0.7} gradientId="whiteGradient1" />
              <GradientLayer height="h-24" opacity={0.5} gradientId="whiteGradient2" />
              <GradientLayer height="h-12" opacity={0.4} gradientId="whiteGradient3" />
              <GradientLayer height="h-8" opacity={0.3} gradientId="whiteGradient4" />
              <GradientLayer height="h-6" opacity={0.25} gradientId="whiteGradient5" />
              <GradientLayer height="h-4" opacity={0.2} gradientId="whiteGradient6" />
              <svg 
                className="absolute bottom-0 left-0 w-full h-[12px] pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 1200 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="solidTransition" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
                    <stop offset="50%" stopColor="rgba(255, 255, 255, 0.95)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#solidTransition)" />
              </svg>
            </>
          )}
          
          {/* Details Title at bottom */}
          <div className="absolute bottom-0 left-0 w-full flex flex-col justify-center items-center pb-0.5 z-10">
            <div className="w-full text-center">
              {/* The in Ballet font */}
              <h1 className="font-ballet text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2" style={{ color: titleLight }}>
                The
              </h1>
              {/* Details in Tebranos font */}
              <h2 className="font-tebranos text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase mb-4 -mt-6" style={{ 
                color: titleMain
              }}>
                Details
              </h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImageBanner
