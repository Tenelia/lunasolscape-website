'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

// Mock product data - in production this would come from your CMS/API
const mockProducts = {
  '1': {
    id: '1',
    name: 'Luna Crescent Necklace',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop',
    ],
    description:
      'Delicate silver crescent moon pendant with celestial charm. Crafted from premium sterling silver with a lustrous finish that catches the light beautifully.',
    longDescription:
      'The Luna Crescent Necklace embodies the mystical beauty of the moon phases. This exquisite piece features a carefully sculpted crescent moon pendant that symbolizes new beginnings and infinite possibilities. The pendant is suspended from a delicate chain that complements any neckline, making it perfect for both everyday wear and special occasions.',
    category: 'Necklaces',
    designer: 'Celestial Crafts',
    collection: 'Luna Collection',
    colors: ['silver', 'white'],
    materials: ['Sterling Silver', 'Rhodium Plating'],
    dimensions: 'Pendant: 15mm x 12mm, Chain: 18 inches',
    weight: '3.2g',
    inStock: true,
    stockCount: 24,
    rating: 4.8,
    reviewCount: 124,
    features: [
      'Hypoallergenic sterling silver',
      'Adjustable chain length',
      'Gift box included',
      '30-day return policy',
      'Lifetime warranty on craftsmanship',
    ],
    careInstructions:
      'Clean with soft cloth. Store in provided jewelry box. Avoid exposure to chemicals and moisture.',
    reviews: [
      {
        id: 1,
        author: 'Sarah M.',
        rating: 5,
        date: '2024-01-10',
        title: 'Absolutely gorgeous!',
        content:
          'This necklace exceeded my expectations. The quality is amazing and it looks even better in person.',
      },
      {
        id: 2,
        author: 'Emily R.',
        rating: 4,
        date: '2024-01-05',
        title: 'Perfect gift',
        content:
          'Bought this for my sister and she loves it. The packaging was beautiful too.',
      },
    ],
  },
  '2': {
    id: '2',
    name: 'Sol Radiance Earrings',
    price: 156.5,
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    description:
      'Brilliant gold sun-ray earrings with warm amber accents that capture the essence of dawn.',
    longDescription:
      'The Sol Radiance Earrings are inspired by the first rays of sunlight breaking through the horizon. Each earring features intricate sun-ray detailing with genuine amber stones that seem to glow from within.',
    category: 'Earrings',
    designer: 'Solar Artisans',
    collection: 'Sol Collection',
    colors: ['gold', 'amber'],
    materials: ['14K Gold', 'Natural Amber'],
    dimensions: '25mm diameter',
    weight: '4.8g per pair',
    inStock: true,
    stockCount: 12,
    rating: 4.9,
    reviewCount: 87,
    features: [
      '14K gold construction',
      'Natural amber stones',
      'Secure backing',
      'Gift box included',
      'Lifetime warranty',
    ],
    careInstructions:
      'Clean with gold polishing cloth. Store separately to prevent scratching.',
    reviews: [
      {
        id: 1,
        author: 'Maria L.',
        rating: 5,
        date: '2024-01-15',
        title: 'Stunning craftsmanship',
        content:
          'These earrings are works of art. The amber stones are beautiful and the gold work is impeccable.',
      },
    ],
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = mockProducts[productId as keyof typeof mockProducts]

  const { addToCart } = useCart()
  const { themeMode } = useTheme()

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedTab, setSelectedTab] = useState('description')

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: quantity,
      })
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
      </svg>
    ))
  }

  if (!product) {
    return (
      <main className='min-h-screen'>
        <Navbar />
        <div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Product Not Found
            </h2>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              The product you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href='/products'
              className={`mt-4 inline-block rounded-md bg-gradient-to-r ${getThemeGradient()} px-6 py-3 text-white hover:opacity-90`}
            >
              Back to Products
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

      <div className='bg-white dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          {/* Breadcrumb */}
          <nav className='mb-8'>
            <ol className='flex items-center space-x-2 text-sm'>
              <li>
                <Link
                  href='/'
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                >
                  Home
                </Link>
              </li>
              <li className='text-gray-500 dark:text-gray-400'>/</li>
              <li>
                <Link
                  href='/products'
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                >
                  Products
                </Link>
              </li>
              <li className='text-gray-500 dark:text-gray-400'>/</li>
              <li>
                <Link
                  href={`/products?category=${product.category}`}
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                >
                  {product.category}
                </Link>
              </li>
              <li className='text-gray-500 dark:text-gray-400'>/</li>
              <li className='text-gray-900 dark:text-white'>{product.name}</li>
            </ol>
          </nav>

          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            {/* Product Images */}
            <div className='mb-8 lg:mb-0'>
              <div className='aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800'>
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className='h-full w-full object-cover'
                />
              </div>

              {product.images.length > 1 && (
                <div className='mt-4 grid grid-cols-4 gap-4'>
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      title={`View ${product.name} image ${index + 1}`}
                      className={`aspect-square overflow-hidden rounded-lg ${selectedImageIndex === index ? 'ring-2 ring-blue-500' : ''}`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        width={150}
                        height={150}
                        className='h-full w-full object-cover'
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className='border-b border-gray-200 pb-6 dark:border-gray-700'>
                <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
                  {product.name}
                </h1>
                <p className='mt-2 text-lg text-gray-600 dark:text-gray-400'>
                  {product.description}
                </p>

                <div className='mt-4 flex items-center space-x-4'>
                  <div className='flex items-center'>
                    {renderStars(product.rating)}
                    <span className='ml-2 text-sm text-gray-600 dark:text-gray-400'>
                      ({product.reviewCount} reviews)
                    </span>
                  </div>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    {product.designer} • {product.collection}
                  </span>
                </div>

                <div className='mt-6'>
                  <p className='text-3xl font-bold text-gray-900 dark:text-white'>
                    {formatPrice(product.price)}
                  </p>
                  {product.inStock ? (
                    <p className='mt-1 text-sm text-green-600 dark:text-green-400'>
                      In stock ({product.stockCount} available)
                    </p>
                  ) : (
                    <p className='mt-1 text-sm text-red-600 dark:text-red-400'>
                      Out of stock
                    </p>
                  )}
                </div>
              </div>

              {/* Add to Cart */}
              <div className='py-6'>
                <div className='mb-4'>
                  <label
                    htmlFor='quantity'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  >
                    Quantity
                  </label>
                  <select
                    id='quantity'
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                    className='mt-1 block rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  >
                    {Array.from(
                      { length: Math.min(10, product.stockCount) },
                      (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full rounded-md bg-gradient-to-r ${getThemeGradient()} px-6 py-3 text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>

                <div className='mt-4 grid grid-cols-2 gap-4'>
                  <button className='rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'>
                    Add to Wishlist
                  </button>
                  <button className='rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'>
                    Share
                  </button>
                </div>
              </div>

              {/* Product Features */}
              <div className='border-t border-gray-200 pt-6 dark:border-gray-700'>
                <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                  Features
                </h3>
                <ul className='mt-4 space-y-2'>
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className='flex items-center text-sm text-gray-600 dark:text-gray-400'
                    >
                      <svg
                        className='mr-2 h-4 w-4 text-green-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className='mt-16'>
            <div className='border-b border-gray-200 dark:border-gray-700'>
              <nav className='flex space-x-8'>
                {['description', 'specifications', 'reviews'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`border-b-2 py-4 text-sm font-medium capitalize ${
                      selectedTab === tab
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className='py-8'>
              {selectedTab === 'description' && (
                <div className='prose dark:prose-invert max-w-none'>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {product.longDescription}
                  </p>
                  <h4 className='mt-6 text-lg font-medium text-gray-900 dark:text-white'>
                    Care Instructions
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {product.careInstructions}
                  </p>
                </div>
              )}

              {selectedTab === 'specifications' && (
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                  <div>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                      Product Details
                    </h4>
                    <dl className='mt-4 space-y-2'>
                      <div className='flex justify-between'>
                        <dt className='text-sm text-gray-600 dark:text-gray-400'>
                          Materials
                        </dt>
                        <dd className='text-sm text-gray-900 dark:text-white'>
                          {product.materials.join(', ')}
                        </dd>
                      </div>
                      <div className='flex justify-between'>
                        <dt className='text-sm text-gray-600 dark:text-gray-400'>
                          Dimensions
                        </dt>
                        <dd className='text-sm text-gray-900 dark:text-white'>
                          {product.dimensions}
                        </dd>
                      </div>
                      <div className='flex justify-between'>
                        <dt className='text-sm text-gray-600 dark:text-gray-400'>
                          Weight
                        </dt>
                        <dd className='text-sm text-gray-900 dark:text-white'>
                          {product.weight}
                        </dd>
                      </div>
                      <div className='flex justify-between'>
                        <dt className='text-sm text-gray-600 dark:text-gray-400'>
                          Category
                        </dt>
                        <dd className='text-sm text-gray-900 dark:text-white'>
                          {product.category}
                        </dd>
                      </div>
                      <div className='flex justify-between'>
                        <dt className='text-sm text-gray-600 dark:text-gray-400'>
                          Collection
                        </dt>
                        <dd className='text-sm text-gray-900 dark:text-white'>
                          {product.collection}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              )}

              {selectedTab === 'reviews' && (
                <div>
                  <div className='mb-8 flex items-center space-x-4'>
                    <div className='flex items-center'>
                      {renderStars(product.rating)}
                      <span className='ml-2 text-lg font-medium text-gray-900 dark:text-white'>
                        {product.rating}
                      </span>
                    </div>
                    <span className='text-gray-600 dark:text-gray-400'>
                      Based on {product.reviewCount} reviews
                    </span>
                  </div>

                  <div className='space-y-6'>
                    {product.reviews.map(review => (
                      <div
                        key={review.id}
                        className='border-b border-gray-200 pb-6 dark:border-gray-700'
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <span className='font-medium text-gray-900 dark:text-white'>
                              {review.author}
                            </span>
                            <div className='flex'>
                              {renderStars(review.rating)}
                            </div>
                          </div>
                          <span className='text-sm text-gray-500 dark:text-gray-400'>
                            {review.date}
                          </span>
                        </div>
                        <h4 className='mt-2 font-medium text-gray-900 dark:text-white'>
                          {review.title}
                        </h4>
                        <p className='mt-1 text-gray-600 dark:text-gray-400'>
                          {review.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
