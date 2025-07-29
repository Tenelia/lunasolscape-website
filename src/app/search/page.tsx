'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import { useTheme } from '@/components/ThemeProvider'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

// Mock search results data
const mockProducts = [
  {
    id: '1',
    name: 'Luna Crescent Necklace',
    price: 89.99,
    originalPrice: 119.99,
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 124,
    category: 'Necklaces',
    tags: ['luna', 'crescent', 'moon', 'silver'],
  },
  {
    id: '2',
    name: 'Sol Radiance Earrings',
    price: 156.5,
    image:
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 89,
    category: 'Earrings',
    tags: ['sol', 'sun', 'radiance', 'gold'],
  },
  {
    id: '3',
    name: 'Celestial Ring Set',
    price: 245.0,
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 67,
    category: 'Rings',
    tags: ['celestial', 'ring', 'set', 'stars'],
  },
  {
    id: '4',
    name: 'Stardust Bracelet',
    price: 78.99,
    originalPrice: 98.99,
    image:
      'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 156,
    category: 'Bracelets',
    tags: ['stardust', 'bracelet', 'sparkle', 'chain'],
  },
  {
    id: '5',
    name: 'Eclipse Pendant',
    price: 134.99,
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 203,
    category: 'Necklaces',
    tags: ['eclipse', 'pendant', 'cosmic', 'statement'],
  },
  {
    id: '6',
    name: 'Galaxy Choker',
    price: 67.5,
    image:
      'https://images.unsplash.com/photo-1588444837503-6ca4656c05c4?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 92,
    category: 'Necklaces',
    tags: ['galaxy', 'choker', 'stars', 'cosmic'],
  },
]

const categories = ['All', 'Necklaces', 'Earrings', 'Rings', 'Bracelets']
const sortOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'newest', label: 'Newest First' },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const categoryParam = searchParams.get('category') || 'All'
  const tagParam = searchParams.get('tag') || ''

  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [sortBy, setSortBy] = useState('relevance')
  const [priceRange, setPriceRange] = useState([0, 500])
  const [minRating, setMinRating] = useState(0)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)

  const { themeMode } = useTheme()

  const getThemeGradient = () => {
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

  useEffect(() => {
    let filtered = [...mockProducts]

    // Filter by search query
    if (query) {
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.tags.some(tag =>
            tag.toLowerCase().includes(query.toLowerCase())
          )
      )
    }

    // Filter by tag
    if (tagParam) {
      filtered = filtered.filter(product =>
        product.tags.some(tag => tag.toLowerCase() === tagParam.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        product => product.category === selectedCategory
      )
    }

    // Filter by price range
    filtered = filtered.filter(
      product =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Filter by rating
    filtered = filtered.filter(product => product.rating >= minRating)

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        // In a real app, you'd sort by creation date
        filtered.reverse()
        break
      default:
        // Keep default order for relevance
        break
    }

    setFilteredProducts(filtered)
  }, [query, tagParam, selectedCategory, sortBy, priceRange, minRating])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  return (
    <div className='bg-white dark:bg-gray-900'>
      {/* Header */}
      <div className={`bg-gradient-to-r ${getThemeGradient()} py-12`}>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-white lg:text-4xl'>
              {query
                ? `Search Results for "${query}"`
                : tagParam
                  ? `Products tagged with "${tagParam}"`
                  : 'Search Results'}
            </h1>
            <p className='mt-2 text-white/80'>
              {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row lg:gap-8'>
          {/* Filters Sidebar */}
          <div className='mb-8 w-full lg:mb-0 lg:w-64'>
            <div className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'>
              <h2 className='text-lg font-medium text-gray-900 dark:text-white'>
                Filters
              </h2>

              {/* Category Filter */}
              <div className='mt-6'>
                <h3 className='text-sm font-medium text-gray-900 dark:text-white'>
                  Category
                </h3>
                <div className='mt-3 space-y-2'>
                  {categories.map(category => (
                    <label key={category} className='flex items-center'>
                      <input
                        type='radio'
                        name='category'
                        value={category}
                        checked={selectedCategory === category}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className='h-4 w-4 border-gray-300 text-pink-600 focus:ring-pink-500'
                      />
                      <span className='ml-3 text-sm text-gray-600 dark:text-gray-400'>
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className='mt-6'>
                <h3 className='text-sm font-medium text-gray-900 dark:text-white'>
                  Price Range
                </h3>
                <div className='mt-3'>
                  <label htmlFor='price-range' className='sr-only'>
                    Price range slider
                  </label>
                  <input
                    id='price-range'
                    type='range'
                    min='0'
                    max='500'
                    value={priceRange[1]}
                    onChange={e => setPriceRange([0, parseInt(e.target.value)])}
                    className='w-full'
                    aria-label='Maximum price filter'
                  />
                  <div className='mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400'>
                    <span>{formatPrice(0)}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className='mt-6'>
                <h3 className='text-sm font-medium text-gray-900 dark:text-white'>
                  Minimum Rating
                </h3>
                <div className='mt-3 space-y-2'>
                  {[4, 3, 2, 1, 0].map(rating => (
                    <label key={rating} className='flex items-center'>
                      <input
                        type='radio'
                        name='rating'
                        value={rating}
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className='h-4 w-4 border-gray-300 text-pink-600 focus:ring-pink-500'
                      />
                      <div className='ml-3 flex items-center'>
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg
                            key={star}
                            className={`h-4 w-4 ${
                              star <= (rating || 5)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        ))}
                        <span className='ml-1 text-sm text-gray-600 dark:text-gray-400'>
                          {rating === 0 ? 'All' : `${rating}+`}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setPriceRange([0, 500])
                  setMinRating(0)
                  setSortBy('relevance')
                }}
                className='mt-6 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className='flex-1'>
            {/* Sort and Results Count */}
            <div className='mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Showing {filteredProducts.length} of {mockProducts.length}{' '}
                products
              </p>

              <div className='flex items-center gap-4'>
                <label
                  htmlFor='sort'
                  className='text-sm font-medium text-gray-900 dark:text-white'
                >
                  Sort by:
                </label>
                <select
                  id='sort'
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className='rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      description: '',
                      category: product.category,
                      designer: 'LunaSolscape',
                      collection: 'Main',
                      colors: ['gold', 'silver'],
                      inStock: true,
                      rating: product.rating,
                      reviewCount: product.reviewCount,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className='py-12 text-center'>
                <div className='mx-auto max-w-md'>
                  <svg
                    className='mx-auto h-12 w-12 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                  <h3 className='mt-2 text-sm font-medium text-gray-900 dark:text-white'>
                    No products found
                  </h3>
                  <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
                    Try adjusting your search or filter criteria.
                  </p>
                  <div className='mt-6'>
                    <button
                      onClick={() => {
                        setSelectedCategory('All')
                        setPriceRange([0, 500])
                        setMinRating(0)
                        setSortBy('relevance')
                      }}
                      className={`inline-flex items-center rounded-md bg-gradient-to-r ${getThemeGradient()} px-4 py-2 text-sm font-medium text-white hover:opacity-90`}
                    >
                      Clear all filters
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className='mt-12 flex items-center justify-between border-t border-gray-200 pt-6 dark:border-gray-700'>
                <div className='flex flex-1 justify-between sm:hidden'>
                  <button className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300'>
                    Previous
                  </button>
                  <button className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300'>
                    Next
                  </button>
                </div>
                <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
                  <div>
                    <p className='text-sm text-gray-700 dark:text-gray-300'>
                      Showing <span className='font-medium'>1</span> to{' '}
                      <span className='font-medium'>
                        {filteredProducts.length}
                      </span>{' '}
                      of{' '}
                      <span className='font-medium'>
                        {filteredProducts.length}
                      </span>{' '}
                      results
                    </p>
                  </div>
                  <div>
                    <nav
                      className='isolate inline-flex -space-x-px rounded-md shadow-sm'
                      aria-label='Pagination'
                    >
                      <button className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-600 dark:hover:bg-gray-700'>
                        <span className='sr-only'>Previous</span>
                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                      <button
                        aria-current='page'
                        className={`relative z-10 inline-flex items-center bg-gradient-to-r ${getThemeGradient()} px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                      >
                        1
                      </button>
                      <button className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-600 dark:hover:bg-gray-700'>
                        <span className='sr-only'>Next</span>
                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Suspense
        fallback={
          <div className='flex min-h-screen items-center justify-center'>
            <div className='text-center'>
              <div className='h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-pink-600'></div>
              <p className='mt-2 text-gray-600 dark:text-gray-400'>
                Loading search results...
              </p>
            </div>
          </div>
        }
      >
        <SearchContent />
      </Suspense>
      <Footer />
    </main>
  )
}
