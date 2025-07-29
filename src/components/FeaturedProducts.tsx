'use client'

import { useTheme } from './ThemeProvider'
import Link from 'next/link'

const featuredProducts = [
  {
    id: 1,
    name: 'Luna Crescent Ring',
    price: 149,
    originalPrice: 189,
    image: '/api/placeholder/400/400',
    category: 'Rings',
    description: 'Sterling silver ring with moonstone accent',
    colors: ['#C0C0C0', '#F5F5DC', '#4169E1'],
  },
  {
    id: 2,
    name: 'Sol Radiance Necklace',
    price: 299,
    originalPrice: 349,
    image: '/api/placeholder/400/400',
    category: 'Necklaces',
    description: '18k gold plated with citrine centerpiece',
    colors: ['#FFD700', '#FFA500', '#FF4500'],
  },
  {
    id: 3,
    name: 'Celestial Harmony Earrings',
    price: 99,
    originalPrice: 129,
    image: '/api/placeholder/400/400',
    category: 'Earrings',
    description: 'Mixed metal design representing day and night',
    colors: ['#FFD700', '#C0C0C0', '#8A2BE2'],
  },
  {
    id: 4,
    name: 'Stardust Bracelet',
    price: 179,
    originalPrice: 219,
    image: '/api/placeholder/400/400',
    category: 'Bracelets',
    description: 'Delicate chain with constellation charms',
    colors: ['#C0C0C0', '#4169E1', '#663399'],
  },
]

export function FeaturedProducts() {
  const { themeMode } = useTheme()

  const getSectionGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return 'from-orange-50 to-yellow-50'
      case 'sunset':
        return 'from-orange-50 to-red-50'
      case 'moonrise':
        return 'from-purple-50 to-blue-50'
      case 'moonset':
        return 'from-gray-100 to-gray-50'
      default:
        return 'from-orange-50 to-yellow-50'
    }
  }

  const getAccentColor = () => {
    switch (themeMode) {
      case 'sunrise':
        return 'text-orange-600'
      case 'sunset':
        return 'text-red-600'
      case 'moonrise':
        return 'text-purple-600'
      case 'moonset':
        return 'text-gray-600'
      default:
        return 'text-orange-600'
    }
  }

  const getButtonGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return 'from-orange-500 to-yellow-500'
      case 'sunset':
        return 'from-red-600 to-orange-600'
      case 'moonrise':
        return 'from-purple-600 to-blue-600'
      case 'moonset':
        return 'from-gray-600 to-gray-700'
      default:
        return 'from-orange-500 to-yellow-500'
    }
  }

  return (
    <section
      className={`bg-gradient-to-br py-20 ${getSectionGradient()} dark:from-gray-800 dark:to-gray-900`}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white'>
            Featured Collection
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300'>
            Handpicked pieces that embody the essence of celestial beauty,
            perfect for those seeking unique accessories that tell a story.
          </p>
        </div>

        {/* Products Grid */}
        <div className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className='group animate-slide-up rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800'
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Product Image */}
              <div className='relative overflow-hidden rounded-t-xl'>
                <div className='flex h-64 w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600'>
                  <svg
                    className='h-16 w-16 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1}
                      d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </div>

                {/* Sale Badge */}
                {product.originalPrice && (
                  <div
                    className={`absolute top-3 left-3 ${getAccentColor()} rounded-full bg-white px-2 py-1 text-sm font-semibold shadow-md dark:bg-gray-800`}
                  >
                    Sale
                  </div>
                )}

                {/* Quick View Button */}
                <div className='bg-opacity-0 group-hover:bg-opacity-30 absolute inset-0 flex items-center justify-center bg-black transition-all duration-300'>
                  <button className='translate-y-4 transform rounded-lg bg-white px-4 py-2 font-medium text-gray-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className='p-6'>
                <div className='mb-2'>
                  <span className={`text-sm ${getAccentColor()} font-medium`}>
                    {product.category}
                  </span>
                </div>

                <h3 className='mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200'>
                  {product.name}
                </h3>

                <p className='mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>
                  {product.description}
                </p>

                {/* Color Options */}
                <div className='mb-4 flex items-center space-x-2'>
                  {product.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className='h-4 w-4 cursor-pointer rounded-full border border-gray-300 transition-transform hover:scale-110 dark:border-gray-600'
                      style={{ backgroundColor: color }}
                      title={`Color option ${colorIndex + 1}`}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    <span className='text-xl font-bold text-gray-900 dark:text-white'>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className='text-lg text-gray-500 line-through dark:text-gray-400'>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    className='p-2 text-gray-400 transition-colors hover:text-red-500'
                    title='Add to Wishlist'
                    aria-label='Add to Wishlist'
                  >
                    <svg
                      className='h-5 w-5'
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
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  className={`mt-4 w-full bg-gradient-to-r py-3 ${getButtonGradient()} rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <p className='mb-6 text-lg text-gray-600 dark:text-gray-300'>
            Discover our complete collection with over 500 unique pieces
          </p>
          <Link
            href='/products'
            className={`inline-block bg-gradient-to-r px-8 py-4 ${getButtonGradient()} rounded-lg text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
