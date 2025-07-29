'use client'

import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'
import Link from 'next/link'
import { useState } from 'react'

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind Color Psychology in Jewelry',
    excerpt:
      'Discover how different colors in jewelry can influence mood, confidence, and personal style choices.',
    content:
      'Color psychology plays a crucial role in how we perceive and interact with jewelry...',
    author: 'Luna Martinez',
    date: '2025-01-15',
    category: 'Style Guide',
    readTime: '5 min read',
    image: '/api/placeholder/600/400',
    tags: ['color theory', 'psychology', 'styling'],
  },
  {
    id: 2,
    title: 'Celestial Styling: From Sunrise to Moonset',
    excerpt:
      'Learn how to transition your jewelry collection throughout the day with our celestial-inspired pieces.',
    content:
      'The art of celestial styling involves understanding the natural progression of light...',
    author: 'Sol Chen',
    date: '2025-01-10',
    category: 'Fashion',
    readTime: '7 min read',
    image: '/api/placeholder/600/400',
    tags: ['celestial', 'styling', 'day-to-night'],
  },
  {
    id: 3,
    title: 'Caring for Your LunaSolscape Collection',
    excerpt:
      'Essential tips for maintaining the beauty and longevity of your celestial jewelry pieces.',
    content:
      'Proper care ensures your jewelry maintains its celestial beauty for years to come...',
    author: 'Aurora Kim',
    date: '2025-01-05',
    category: 'Care Guide',
    readTime: '4 min read',
    image: '/api/placeholder/600/400',
    tags: ['care', 'maintenance', 'jewelry'],
  },
  {
    id: 4,
    title: 'The Art of Layering: Creating Celestial Harmony',
    excerpt:
      'Master the technique of layering different pieces to create stunning celestial-inspired looks.',
    content:
      'Layering jewelry is an art form that allows for personal expression and creativity...',
    author: 'Nova Thompson',
    date: '2024-12-28',
    category: 'Styling',
    readTime: '6 min read',
    image: '/api/placeholder/600/400',
    tags: ['layering', 'styling', 'harmony'],
  },
  {
    id: 5,
    title: 'Sustainable Jewelry: Our Commitment to the Planet',
    excerpt:
      'Learn about our sustainable practices and how we&apos;re working to protect our celestial home.',
    content:
      'Sustainability is at the heart of everything we do at LunaSolscape...',
    author: 'Terra Rodriguez',
    date: '2024-12-20',
    category: 'Sustainability',
    readTime: '8 min read',
    image: '/api/placeholder/600/400',
    tags: ['sustainability', 'environment', 'ethics'],
  },
]

const categories = [
  'All',
  'Style Guide',
  'Fashion',
  'Care Guide',
  'Styling',
  'Sustainability',
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
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

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch =
      selectedCategory === 'All' || post.category === selectedCategory
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    return categoryMatch && searchMatch
  })

  return (
    <main className='min-h-screen'>
      <Navbar />
      
      <div className='min-h-screen bg-gray-50 pt-16 dark:bg-gray-900'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {/* Page Header */}
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white'>
            The LunaSolscape Blog
          </h1>
          <p className='mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300'>
            Discover the stories behind our celestial collections, styling tips,
            and insights into the world of sustainable jewelry.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className='mb-12 flex flex-col gap-4 md:flex-row'>
          {/* Search */}
          <div className='flex-1'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search articles...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-12 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
              />
              <svg
                className='absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400'
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
          </div>

          {/* Category Filter */}
          <div className='md:w-auto'>
            <div className='flex flex-wrap gap-2'>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${getThemeGradient()} text-white shadow-md`
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className='group animate-slide-up overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Featured Image */}
              <div className='relative overflow-hidden'>
                <div className='flex h-48 w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600'>
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

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r px-3 py-1 ${getThemeGradient()} rounded-full text-sm font-medium text-white`}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                {/* Meta Information */}
                <div className='mb-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400'>
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className='mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400'>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className='mb-4 line-clamp-3 text-gray-600 dark:text-gray-300'>
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className='mb-4 flex flex-wrap gap-2'>
                  {post.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className='rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>

                  <Link
                    href={`/blog/${post.id}`}
                    className={`inline-flex items-center bg-gradient-to-r px-4 py-2 ${getThemeGradient()} rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    Read More
                    <svg
                      className='ml-2 h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className='py-12 text-center'>
            <svg
              className='mx-auto mb-4 h-16 w-16 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              />
            </svg>
            <h3 className='mb-2 text-lg font-medium text-gray-900 dark:text-white'>
              No articles found
            </h3>
            <p className='mb-4 text-gray-600 dark:text-gray-400'>
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className={`bg-gradient-to-r px-6 py-2 ${getThemeGradient()} rounded-lg font-medium text-white`}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div
          className={`mt-16 bg-gradient-to-r ${getThemeGradient()} rounded-2xl p-8 text-center text-white`}
        >
          <h3 className='mb-4 text-2xl font-bold md:text-3xl'>
            Stay in the Loop
          </h3>
          <p className='mb-6 text-lg opacity-90'>
            Subscribe to our newsletter for the latest articles, styling tips,
            and celestial inspiration.
          </p>
          <div className='mx-auto flex max-w-md flex-col gap-4 sm:flex-row'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none'
            />
            <button className='rounded-lg bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
