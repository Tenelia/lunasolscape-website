'use client'

import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
  designer: string
  collection: string
  colors: string[]
  inStock: boolean
  rating: number
  reviewCount: number
}

interface ProductCardProps {
  product: Product
}

// Color mapping for common color names to CSS classes
const colorMapping: Record<string, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  orange: 'bg-orange-500',
  gray: 'bg-gray-500',
  black: 'bg-black',
  white: 'bg-white border-2',
  gold: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
  silver: 'bg-gradient-to-r from-gray-300 to-gray-500',
  rose: 'bg-gradient-to-r from-pink-400 to-rose-500',
}

const ColorDot = ({ color }: { color: string }) => {
  const colorClass = colorMapping[color.toLowerCase()] || 'bg-gray-400'

  return (
    <div
      className={`h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600 ${colorClass}`}
      title={color}
    />
  )
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addToCart, getCartItemQuantity } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted)
    // TODO: Implement wishlist API call
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ))
  }

  const itemQuantity = getCartItemQuantity(product.id)

  return (
    <div className='group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800'>
      {/* Product Image */}
      <div className='relative aspect-square overflow-hidden'>
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </Link>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className='absolute top-3 right-3 rounded-full bg-white/90 p-2 backdrop-blur-sm transition-colors duration-200 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-700'
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg
            className={`h-5 w-5 ${
              isWishlisted
                ? 'fill-current text-red-500'
                : 'text-gray-600 dark:text-gray-300'
            }`}
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

        {/* Stock Status */}
        {!product.inStock && (
          <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
            <span className='rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white'>
              Out of Stock
            </span>
          </div>
        )}

        {/* Quick Add to Cart */}
        {product.inStock && (
          <div className='absolute right-3 bottom-3 left-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className='w-full transform rounded-lg bg-gradient-to-r from-orange-400 to-yellow-400 px-4 py-2 font-medium text-white transition-all duration-200 hover:scale-105 hover:from-orange-500 hover:to-yellow-500 disabled:cursor-not-allowed disabled:opacity-50'
            >
              {itemQuantity > 0 ? `In Cart (${itemQuantity})` : 'Quick Add'}
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className='p-4'>
        {/* Category & Designer */}
        <div className='mb-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400'>
          <span className='rounded-full bg-gray-100 px-2 py-1 dark:bg-gray-700'>
            {product.category}
          </span>
          <span>{product.designer}</span>
        </div>

        {/* Product Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className='mb-2 line-clamp-2 font-semibold text-gray-900 transition-colors hover:text-orange-500 dark:text-white dark:hover:text-orange-400'>
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className='mb-3 flex items-center gap-2'>
          <div className='flex items-center'>{renderStars(product.rating)}</div>
          <span className='text-xs text-gray-500 dark:text-gray-400'>
            ({product.reviewCount})
          </span>
        </div>

        {/* Colors */}
        {product.colors.length > 0 && (
          <div className='mb-3 flex items-center gap-1'>
            <span className='mr-2 text-xs text-gray-500 dark:text-gray-400'>
              Colors:
            </span>
            {product.colors.slice(0, 4).map((color, index) => (
              <ColorDot key={index} color={color} />
            ))}
            {product.colors.length > 4 && (
              <span className='text-xs text-gray-500 dark:text-gray-400'>
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price & Collection */}
        <div className='flex items-center justify-between'>
          <div>
            <span className='text-lg font-bold text-gray-900 dark:text-white'>
              {formatPrice(product.price)}
            </span>
            <div className='text-xs text-gray-500 dark:text-gray-400'>
              {product.collection}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
