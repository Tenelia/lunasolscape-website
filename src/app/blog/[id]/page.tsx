'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Mock blog posts data - in production this would come from your CMS
const mockPosts = {
  '1': {
    id: 1,
    title: 'The Science Behind Color Psychology in Jewelry',
    excerpt:
      'Discover how different colors in jewelry can influence mood, confidence, and personal style choices.',
    content: `
      <p>Color psychology plays a crucial role in how we perceive and interact with jewelry. The colors we choose to wear can significantly impact our mood, confidence levels, and how others perceive us.</p>
      
      <h2>Understanding Color Psychology</h2>
      <p>Color psychology is the study of how colors affect human behavior and emotions. When it comes to jewelry, the colors we select often reflect our personality, current emotional state, or desired energy for the day.</p>
      
      <h3>Warm Colors in Jewelry</h3>
      <p>Warm colors like gold, copper, and amber are associated with energy, passion, and confidence. These colors can:</p>
      <ul>
        <li>Boost self-confidence and charisma</li>
        <li>Create a sense of warmth and approachability</li>
        <li>Enhance feelings of luxury and sophistication</li>
      </ul>
      
      <h3>Cool Colors in Jewelry</h3>
      <p>Cool colors such as silver, blue sapphires, and emeralds evoke feelings of calm, trust, and sophistication. They can:</p>
      <ul>
        <li>Promote a sense of tranquility and peace</li>
        <li>Convey professionalism and reliability</li>
        <li>Create an elegant, timeless appearance</li>
      </ul>
      
      <h2>The LunaSolscape Approach</h2>
      <p>At LunaSolscape, we understand the power of color in jewelry design. Our pieces are crafted to harness specific color energies that align with celestial themes and natural cycles.</p>
      
      <p>Our Luna collection features cool silvers and deep blues that embody the mysterious, calming energy of the moon. Meanwhile, our Sol collection showcases warm golds and vibrant ambers that capture the energizing power of the sun.</p>
      
      <h3>Choosing Colors for Your Mood</h3>
      <p>When selecting jewelry, consider what energy you want to embody:</p>
      <ul>
        <li><strong>For confidence:</strong> Choose warm golds and rich oranges</li>
        <li><strong>For calm:</strong> Opt for cool silvers and soft blues</li>
        <li><strong>For creativity:</strong> Embrace vibrant purples and mystical stones</li>
        <li><strong>For grounding:</strong> Select earth tones and natural materials</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Understanding color psychology in jewelry allows you to make more intentional choices about what you wear. Whether you're preparing for an important meeting, a romantic dinner, or simply want to boost your mood, the right colors can help you feel more aligned with your intentions.</p>
    `,
    author: 'Luna Martinez',
    authorBio:
      'Luna is a certified gemologist and color therapy specialist with over 10 years of experience in jewelry design.',
    authorImage:
      'https://images.unsplash.com/photo-1494790108755-2616b612b167?w=400&h=400&fit=crop',
    date: '2025-01-15',
    category: 'Style Guide',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop',
    tags: ['color theory', 'psychology', 'styling', 'jewelry', 'mood'],
    relatedProducts: [
      {
        id: '1',
        name: 'Luna Crescent Necklace',
        price: 89.99,
        image:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      },
      {
        id: '2',
        name: 'Sol Radiance Earrings',
        price: 156.5,
        image:
          'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
      },
    ],
  },
  '2': {
    id: 2,
    title: 'Celestial Styling: From Sunrise to Moonset',
    excerpt:
      'Learn how to transition your jewelry collection throughout the day with our celestial-inspired pieces.',
    content: `
      <p>The art of celestial styling involves understanding the natural progression of light and energy throughout the day, and choosing jewelry that harmonizes with these cosmic rhythms.</p>
      
      <h2>The Four Phases of Celestial Styling</h2>
      
      <h3>1. Sunrise: Dawn Energy (6AM - 10AM)</h3>
      <p>As the sun rises, embrace the fresh energy of new beginnings with pieces that reflect hope and vitality:</p>
      <ul>
        <li>Delicate gold chains with small pendants</li>
        <li>Rose gold pieces that mirror the dawn sky</li>
        <li>Clear crystals and diamonds for clarity</li>
      </ul>
      
      <h3>2. Midday: Solar Power (10AM - 4PM)</h3>
      <p>During peak sun hours, let your jewelry reflect confidence and strength:</p>
      <ul>
        <li>Bold statement pieces in warm metals</li>
        <li>Amber and citrine stones for energy</li>
        <li>Layered necklaces for dimension</li>
      </ul>
      
      <h3>3. Sunset: Golden Hour (4PM - 8PM)</h3>
      <p>As the day winds down, transition to pieces that embody warmth and reflection:</p>
      <ul>
        <li>Warm gold tones with vintage appeal</li>
        <li>Earth-toned gemstones</li>
        <li>Textured metals that catch the golden light</li>
      </ul>
      
      <h3>4. Moonrise: Evening Mystery (8PM onwards)</h3>
      <p>Embrace the mystical energy of night with pieces that shimmer and intrigue:</p>
      <ul>
        <li>Silver and white gold for lunar connection</li>
        <li>Moonstone and pearls for ethereal beauty</li>
        <li>Dramatic statement earrings for evening elegance</li>
      </ul>
      
      <h2>Building Your Celestial Wardrobe</h2>
      <p>Creating a complete celestial jewelry collection doesn't require purchasing everything at once. Start with versatile pieces that can transition between phases:</p>
      
      <ul>
        <li><strong>Convertible pieces:</strong> Necklaces that can be worn long or doubled</li>
        <li><strong>Stackable rings:</strong> Mix and match based on your daily energy</li>
        <li><strong>Interchangeable elements:</strong> Charms and pendants you can swap</li>
      </ul>
      
      <h2>Seasonal Considerations</h2>
      <p>Your celestial styling should also reflect the season:</p>
      
      <h3>Spring & Summer</h3>
      <p>Lighter, brighter pieces that reflect longer days and increased energy.</p>
      
      <h3>Fall & Winter</h3>
      <p>Deeper, richer tones that provide warmth during shorter, darker days.</p>
      
      <h2>Conclusion</h2>
      <p>Celestial styling is about more than just following trends—it's about connecting with the natural rhythms of the universe and expressing your inner light at every moment of the day.</p>
    `,
    author: 'Sol Chen',
    authorBio:
      'Sol is a fashion stylist and astrology enthusiast who specializes in celestial-inspired fashion.',
    authorImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    date: '2025-01-10',
    category: 'Fashion',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    tags: ['styling', 'celestial', 'fashion', 'day-to-night', 'collection'],
    relatedProducts: [
      {
        id: '1',
        name: 'Luna Crescent Necklace',
        price: 89.99,
        image:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      },
    ],
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const postId = params.id as string
  const post = mockPosts[postId as keyof typeof mockPosts]

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  if (!post) {
    return (
      <main className='min-h-screen'>
        <Navbar />
        <div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Post Not Found
            </h2>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href='/blog'
              className={`mt-4 inline-block rounded-md bg-gradient-to-r ${getThemeGradient()} px-6 py-3 text-white hover:opacity-90`}
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className='min-h-screen'>
      <Navbar />

      <article className='bg-white dark:bg-gray-900'>
        {/* Hero Image */}
        <div className='relative h-96 overflow-hidden lg:h-[500px]'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/30' />
          <div className='absolute inset-0 flex items-end'>
            <div className='w-full bg-gradient-to-t from-black/60 to-transparent p-8'>
              <div className='mx-auto max-w-4xl'>
                <div className='flex items-center space-x-2 text-white/80'>
                  <span className='text-sm'>{post.category}</span>
                  <span>•</span>
                  <span className='text-sm'>{post.readTime}</span>
                  <span>•</span>
                  <span className='text-sm'>{formatDate(post.date)}</span>
                </div>
                <h1 className='mt-4 text-3xl font-bold text-white lg:text-5xl'>
                  {post.title}
                </h1>
                <p className='mt-4 max-w-2xl text-lg text-white/90'>
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-3'>
              {/* Author Info */}
              <div className='mb-8 flex items-center border-b border-gray-200 pb-8 dark:border-gray-700'>
                <div className='relative h-12 w-12 overflow-hidden rounded-full'>
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='ml-4'>
                  <p className='text-lg font-medium text-gray-900 dark:text-white'>
                    {post.author}
                  </p>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {post.authorBio}
                  </p>
                </div>
              </div>

              {/* Article Content */}
              <div
                className='prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white max-w-none'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className='mt-12 border-t border-gray-200 pt-8 dark:border-gray-700'>
                <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                  Tags
                </h3>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {post.tags.map(tag => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className='mt-8 border-t border-gray-200 pt-8 dark:border-gray-700'>
                <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                  Share this post
                </h3>
                <div className='mt-4 flex space-x-4'>
                  <button className='flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'>
                    <svg
                      className='mr-2 h-4 w-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                    </svg>
                    Twitter
                  </button>
                  <button className='flex items-center rounded-md bg-blue-800 px-4 py-2 text-white hover:bg-blue-900'>
                    <svg
                      className='mr-2 h-4 w-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                    </svg>
                    Facebook
                  </button>
                  <button className='flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'>
                    <svg
                      className='mr-2 h-4 w-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='mt-12 lg:mt-0'>
              {/* Related Products */}
              {post.relatedProducts && post.relatedProducts.length > 0 && (
                <div className='rounded-lg bg-gray-50 p-6 dark:bg-gray-800'>
                  <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                    Featured Products
                  </h3>
                  <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                    Products mentioned in this article
                  </p>

                  <div className='mt-6 space-y-4'>
                    {post.relatedProducts.map(product => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className='block rounded-lg border border-gray-200 p-4 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
                      >
                        <div className='flex items-center space-x-4'>
                          <div className='relative h-16 w-16 overflow-hidden rounded'>
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className='object-cover'
                            />
                          </div>
                          <div className='flex-1'>
                            <h4 className='text-sm font-medium text-gray-900 dark:text-white'>
                              {product.name}
                            </h4>
                            <p className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                              {formatPrice(product.price)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Signup */}
              <div className='mt-8 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white'>
                <h3 className='text-lg font-medium'>Stay Updated</h3>
                <p className='mt-2 text-sm text-gray-300'>
                  Get the latest style tips and product updates delivered to
                  your inbox.
                </p>
                <form className='mt-4'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:border-white focus:outline-none'
                  />
                  <button
                    type='submit'
                    className={`mt-3 w-full rounded-md bg-gradient-to-r ${getThemeGradient()} px-4 py-2 text-white hover:opacity-90`}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className='mt-16 flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-700'>
            <Link
              href='/blog'
              className='flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            >
              <svg
                className='mr-2 h-4 w-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
              Back to Blog
            </Link>

            <div className='flex space-x-4'>
              <button className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>
                Previous Post
              </button>
              <button className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>
                Next Post
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
