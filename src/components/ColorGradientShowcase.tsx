'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'

// Mock product data with color values for gradient sorting
const mockProducts = [
  { id: 1, name: 'Dawn Ring', color: '#FF69B4', price: 89, hue: 330 },
  { id: 2, name: 'Sunrise Necklace', color: '#FF4500', price: 129, hue: 16 },
  { id: 3, name: 'Solar Bracelet', color: '#FFD700', price: 159, hue: 51 },
  { id: 4, name: 'Midday Earrings', color: '#ADFF2F', price: 79, hue: 84 },
  { id: 5, name: 'Ocean Ring', color: '#00CED1', price: 109, hue: 181 },
  { id: 6, name: 'Twilight Pendant', color: '#4169E1', price: 139, hue: 225 },
  { id: 7, name: 'Moonstone Ring', color: '#8A2BE2', price: 149, hue: 271 },
  { id: 8, name: 'Midnight Bracelet', color: '#2F2F2F', price: 99, hue: 0 },
]

type SortDirection = 'asc' | 'desc'

export function ColorGradientShowcase() {
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const { themeMode } = useTheme()

  const sortedProducts = [...mockProducts].sort((a, b) => {
    return sortDirection === 'asc' ? a.hue - b.hue : b.hue - a.hue
  })

  const getSectionGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return 'from-pink-50 to-orange-50'
      case 'sunset':
        return 'from-red-50 to-orange-50'
      case 'moonrise':
        return 'from-blue-50 to-purple-50'
      case 'moonset':
        return 'from-gray-50 to-gray-100'
      default:
        return 'from-pink-50 to-orange-50'
    }
  }

  const getButtonGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return 'from-pink-500 to-orange-500'
      case 'sunset':
        return 'from-red-600 to-orange-600'
      case 'moonrise':
        return 'from-blue-600 to-purple-600'
      case 'moonset':
        return 'from-gray-600 to-gray-700'
      default:
        return 'from-pink-500 to-orange-500'
    }
  }

  return (
    <section
      className={`bg-gradient-to-br py-20 ${getSectionGradient()} dark:from-gray-900 dark:to-gray-800`}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white'>
            Experience Color Gradient Sorting
          </h2>
          <p className='mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300'>
            Our revolutionary feature allows you to browse products organized by
            color, creating a visual journey from sunrise to sunset, moonrise to
            moonset.
          </p>

          {/* Sorting Controls */}
          <div className='mb-12 flex items-center justify-center space-x-4'>
            <span className='font-medium text-gray-700 dark:text-gray-300'>
              Sort by Color:
            </span>
            <button
              onClick={() => setSortDirection('asc')}
              className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
                sortDirection === 'asc'
                  ? `bg-gradient-to-r ${getButtonGradient()} text-white shadow-lg`
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              🌅 Sunrise to Sunset
            </button>
            <button
              onClick={() => setSortDirection('desc')}
              className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
                sortDirection === 'desc'
                  ? `bg-gradient-to-r ${getButtonGradient()} text-white shadow-lg`
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              🌙 Moonset to Moonrise
            </button>
          </div>
        </div>

        {/* Color Gradient Bar */}
        <div className='mb-12'>
          <div className='h-4 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 via-cyan-500 via-green-500 via-orange-500 via-purple-500 via-red-500 via-yellow-500 to-pink-500 shadow-lg'></div>
          <div className='mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400'>
            <span>Pink</span>
            <span>Red</span>
            <span>Orange</span>
            <span>Yellow</span>
            <span>Green</span>
            <span>Cyan</span>
            <span>Blue</span>
            <span>Purple</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8'>
          {sortedProducts.map((product, index) => (
            <div
              key={product.id}
              className='animate-slide-up rounded-lg bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Color Preview */}
              <div
                className='h-32 rounded-t-lg border-b-2 border-gray-100 dark:border-gray-700'
                style={{
                  backgroundColor: product.color,
                  backgroundImage: `linear-gradient(135deg, ${product.color}cc, ${product.color}ff)`,
                }}
              ></div>

              {/* Product Info */}
              <div className='p-4'>
                <h3 className='mb-1 text-sm font-semibold text-gray-900 dark:text-white'>
                  {product.name}
                </h3>
                <p className='text-lg font-bold text-gray-700 dark:text-gray-300'>
                  ${product.price}
                </p>
                <div className='mt-2 flex items-center justify-between'>
                  <div
                    className='h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600'
                    style={{ backgroundColor: product.color }}
                    title={`Hue: ${product.hue}°`}
                  ></div>
                  <span className='text-xs text-gray-500 dark:text-gray-400'>
                    {product.hue}°
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <p className='mb-6 text-lg text-gray-600 dark:text-gray-300'>
            This is just a preview. Our full collection features hundreds of
            pieces organized by this innovative color gradient system.
          </p>
          <button
            className={`bg-gradient-to-r px-8 py-4 ${getButtonGradient()} rounded-lg text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            Explore Full Collection
          </button>
        </div>
      </div>
    </section>
  )
}
