'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'

export function Hero() {
  const { themeMode, isDark } = useTheme()

  const getHeroGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return 'from-pink-500/20 via-orange-500/20 to-yellow-500/20'
      case 'sunset':
        return 'from-red-600/20 via-orange-600/20 to-orange-700/20'
      case 'moonrise':
        return 'from-blue-700/20 via-purple-700/20 to-purple-800/20'
      case 'moonset':
        return 'from-gray-800/20 via-gray-600/20 to-gray-500/20'
      default:
        return 'from-pink-500/20 via-orange-500/20 to-yellow-500/20'
    }
  }

  const getTextGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return 'from-pink-600 via-orange-600 to-yellow-600'
      case 'sunset':
        return 'from-red-700 via-orange-700 to-orange-800'
      case 'moonrise':
        return 'from-blue-800 via-purple-800 to-purple-900'
      case 'moonset':
        return 'from-gray-700 via-gray-500 to-gray-600'
      default:
        return 'from-pink-600 via-orange-600 to-yellow-600'
    }
  }

  const getSubtitleColor = () => {
    // Better contrast for light themes
    if (isDark) {
      return 'text-gray-300'
    }
    switch (themeMode) {
      case 'sunrise':
      case 'sunset':
        return 'text-gray-800' // Darker text for warm, light backgrounds
      case 'moonrise':
        return 'text-gray-700' 
      case 'moonset':
        return 'text-gray-700'
      default:
        return 'text-gray-800'
    }
  }

  const getDescriptionColor = () => {
    // Better contrast for description text
    if (isDark) {
      return 'text-gray-400'
    }
    switch (themeMode) {
      case 'sunrise':
      case 'sunset':
        return 'text-gray-700' // Darker text for warm, light backgrounds
      case 'moonrise':
        return 'text-gray-600'
      case 'moonset':
        return 'text-gray-600'
      default:
        return 'text-gray-700'
    }
  }

  const getFeatureTextColor = () => {
    // Better contrast for feature text
    if (isDark) {
      return 'text-gray-400'
    }
    switch (themeMode) {
      case 'sunrise':
      case 'sunset':
        return 'text-gray-600' // Darker text for warm, light backgrounds
      case 'moonrise':
        return 'text-gray-600'
      case 'moonset':
        return 'text-gray-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <section
      className={`relative flex min-h-screen items-center justify-center bg-gradient-to-br ${getHeroGradient()} ${isDark ? 'from-gray-900 to-gray-800' : 'from-white to-gray-50'}`}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]'></div>
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
        <div className='animate-fade-in'>
          {/* Main Heading */}
          <h1
            className={`mb-6 bg-gradient-to-r text-5xl font-bold md:text-7xl lg:text-8xl ${getTextGradient()} bg-clip-text text-transparent`}
          >
            LunaSolscape
          </h1>

          {/* Subheading */}
          <p className={`mb-4 text-xl font-light md:text-2xl lg:text-3xl ${getSubtitleColor()}`}>
            Celestial Jewelry & Accessories
          </p>

          {/* Description */}
          <p className={`mx-auto mb-12 max-w-3xl text-lg leading-relaxed md:text-xl ${getDescriptionColor()}`}>
            Discover our unique collection of tastefully designed accessories
            inspired by the eternal dance between the sun and moon. Experience
            our revolutionary color gradient sorting that mirrors the celestial
            cycles from sunrise to moonset.
          </p>

          {/* CTA Buttons */}
          <div className='mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link
              href='/products'
              className={`bg-gradient-to-r px-8 py-4 ${getTextGradient()} rounded-lg text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              Explore Collection
            </Link>
            <Link
              href='/about'
              className='rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
            >
              Our Story
            </Link>
          </div>

          {/* Features Grid */}
          <div className='mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3'>
            <div className='rounded-lg border border-gray-200 bg-white/50 p-6 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50'>
              <div
                className={`h-12 w-12 bg-gradient-to-r ${getTextGradient()} mx-auto mb-4 flex items-center justify-center rounded-lg`}
              >
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200'>
                Color Gradient Sorting
              </h3>
              <p className={`text-sm ${getFeatureTextColor()}`}>
                Revolutionary browsing experience with products sorted by
                celestial color gradients
              </p>
            </div>

            <div className='rounded-lg border border-gray-200 bg-white/50 p-6 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50'>
              <div
                className={`h-12 w-12 bg-gradient-to-r ${getTextGradient()} mx-auto mb-4 flex items-center justify-center rounded-lg`}
              >
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200'>
                Curated Collections
              </h3>
              <p className={`text-sm ${getFeatureTextColor()}`}>
                Thoughtfully selected pieces across all price segments with
                celestial inspiration
              </p>
            </div>

            <div className='rounded-lg border border-gray-200 bg-white/50 p-6 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50'>
              <div
                className={`h-12 w-12 bg-gradient-to-r ${getTextGradient()} mx-auto mb-4 flex items-center justify-center rounded-lg`}
              >
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200'>
                Coordinated Styling
              </h3>
              <p className={`text-sm ${getFeatureTextColor()}`}>
                Complete brand boxes for couples and individuals seeking
                harmonious accessories
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce'>
        <svg
          className='h-6 w-6 text-gray-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </div>
    </section>
  )
}
