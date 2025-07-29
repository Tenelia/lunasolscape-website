'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import { useMemo, useState } from 'react'

// Mock product data - this would come from your CMS/API in production
const mockProducts = [
  {
    id: '1',
    name: 'Luna Crescent Necklace',
    price: 89.99,
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    description: 'Delicate silver crescent moon pendant with celestial charm',
    category: 'Necklaces',
    designer: 'Celestial Crafts',
    collection: 'Luna Collection',
    colors: ['silver', 'white'],
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: '2',
    name: 'Sol Radiance Earrings',
    price: 156.5,
    image:
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
    description: 'Brilliant gold sun-ray earrings with warm amber accents',
    category: 'Earrings',
    designer: 'Solar Studio',
    collection: 'Sol Collection',
    colors: ['gold', 'yellow', 'orange'],
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: '3',
    name: 'Stardust Rings Set',
    price: 120.0,
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    description: 'Set of three celestial rings with diamond-like sparkles',
    category: 'Rings',
    designer: 'Cosmic Creations',
    collection: 'Stellar Collection',
    colors: ['silver', 'blue', 'purple'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: '4',
    name: 'Moonbeam Bracelet',
    price: 78.99,
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    description: 'Elegant chain bracelet with moon phase charms',
    category: 'Bracelets',
    designer: 'Luna Luxe',
    collection: 'Luna Collection',
    colors: ['silver', 'gray'],
    inStock: false,
    rating: 4.6,
    reviewCount: 203,
  },
  {
    id: '5',
    name: 'Solar Flare Pendant',
    price: 199.99,
    image:
      'https://images.unsplash.com/photo-1603561596112-6a132309c2d2?w=400&h=400&fit=crop',
    description: 'Bold statement pendant with radiant sun design',
    category: 'Necklaces',
    designer: 'Solar Studio',
    collection: 'Sol Collection',
    colors: ['gold', 'red', 'orange'],
    inStock: true,
    rating: 4.9,
    reviewCount: 67,
  },
  {
    id: '6',
    name: 'Celestial Harmony Set',
    price: 245.0,
    image:
      'https://images.unsplash.com/photo-1588444837495-c6b8ac2a9de5?w=400&h=400&fit=crop',
    description: 'Complete jewelry set with sun and moon motifs',
    category: 'Sets',
    designer: 'Harmony House',
    collection: 'Unity Collection',
    colors: ['gold', 'silver'],
    inStock: true,
    rating: 5.0,
    reviewCount: 42,
  },
  {
    id: '7',
    name: 'Dawn Ring',
    price: 89.0,
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    description: 'Delicate rose gold ring inspired by sunrise colors',
    category: 'Rings',
    designer: 'Dawn Designs',
    collection: 'Sunrise Collection',
    colors: ['pink', 'rose', 'gold'],
    inStock: true,
    rating: 4.5,
    reviewCount: 78,
  },
  {
    id: '8',
    name: 'Midnight Bracelet',
    price: 99.0,
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    description: 'Elegant dark metal bracelet with starlight accents',
    category: 'Bracelets',
    designer: 'Night Sky',
    collection: 'Midnight Collection',
    colors: ['black', 'gray'],
    inStock: true,
    rating: 4.4,
    reviewCount: 92,
  },
  {
    id: '9',
    name: 'Ocean Waves Earrings',
    price: 119.0,
    image:
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
    description: 'Flowing blue and green earrings like ocean waves',
    category: 'Earrings',
    designer: 'Aqua Arts',
    collection: 'Ocean Collection',
    colors: ['blue', 'green', 'teal'],
    inStock: true,
    rating: 4.6,
    reviewCount: 134,
  },
  {
    id: '10',
    name: 'Forest Glow Necklace',
    price: 139.0,
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    description: 'Nature-inspired necklace with emerald green stones',
    category: 'Necklaces',
    designer: 'Earth Elements',
    collection: 'Nature Collection',
    colors: ['green', 'brown'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
  },
]

const colorGradientOrder = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'silver',
  'gold',
  'white',
  'gray',
  'black',
]

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('featured')
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterPriceRange, setFilterPriceRange] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['all', ...new Set(mockProducts.map(p => p.category))]
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $100', value: '0-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200+' },
  ]

  const getColorScore = (colors: string[]) => {
    return Math.min(
      ...colors.map(color => {
        const index = colorGradientOrder.indexOf(color.toLowerCase())
        return index === -1 ? 999 : index
      })
    )
  }

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = mockProducts.filter(product => {
      // Search filter
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Category filter
      if (filterCategory !== 'all' && product.category !== filterCategory) {
        return false
      }

      // Price range filter
      if (filterPriceRange !== 'all') {
        const [min, max] = filterPriceRange.split('-').map(Number)
        if (max) {
          if (product.price < min || product.price > max) return false
        } else {
          if (product.price < min) return false
        }
      }

      return true
    })

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
      case 'color-gradient':
        filtered.sort(
          (a, b) => getColorScore(a.colors) - getColorScore(b.colors)
        )
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Featured - keep original order
        break
    }

    return filtered
  }, [searchQuery, filterCategory, filterPriceRange, sortBy])

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900'>
      <Navbar />
      <main className='pt-20 pb-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='mb-12 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-gray-900 dark:text-white'>
              Our Collections
            </h1>
            <p className='mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
              Discover our curated selection of celestial-inspired jewelry and
              accessories, sorted by our unique color gradient system.
            </p>
          </div>

          {/* Search and Filters */}
          <div className='mb-8 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {/* Search */}
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search products...'
                  aria-label='Search products'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className='w-full rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                />
                <svg
                  className='absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>

              {/* Category Filter */}
              <select
                value={filterCategory}
                onChange={e => setFilterCategory(e.target.value)}
                aria-label='Filter by category'
                className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={filterPriceRange}
                onChange={e => setFilterPriceRange(e.target.value)}
                aria-label='Filter by price range'
                className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                aria-label='Sort products by'
                className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
              >
                <option value='featured'>Featured</option>
                <option value='color-gradient'>🌅 Color Gradient</option>
                <option value='name'>Name A-Z</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Top Rated</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className='mb-6'>
            <p className='text-gray-600 dark:text-gray-400'>
              Showing {filteredAndSortedProducts.length} of{' '}
              {mockProducts.length} products
              {sortBy === 'color-gradient' && (
                <span className='ml-2 font-medium text-orange-500'>
                  ✨ Sorted by celestial color gradient
                </span>
              )}
            </p>
          </div>

          {/* Product Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className='py-16 text-center'>
              <div className='mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-orange-200 to-purple-200 dark:from-orange-800 dark:to-purple-800'>
                <svg
                  className='h-16 w-16 text-gray-400 dark:text-gray-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
                No products found
              </h3>
              <p className='mb-4 text-gray-600 dark:text-gray-400'>
                Try adjusting your search criteria or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setFilterCategory('all')
                  setFilterPriceRange('all')
                  setSortBy('featured')
                }}
                className='inline-flex items-center rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition-colors hover:bg-orange-600'
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
