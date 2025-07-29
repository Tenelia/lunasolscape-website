'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // TODO: Implement actual checkout process
    setTimeout(() => {
      alert('Checkout functionality coming soon!')
      setIsCheckingOut(false)
    }, 2000)
  }

  if (items.length === 0) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900'>
        <Navbar />
        <main className='pt-20 pb-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
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
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13L5.5 9M7 13h10'
                  />
                </svg>
              </div>
              <h1 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white'>
                Your cart is empty
              </h1>
              <p className='mx-auto mb-8 max-w-md text-gray-600 dark:text-gray-400'>
                Discover our celestial collection of jewelry and accessories to
                start your journey.
              </p>
              <Link
                href='/products'
                className='inline-flex transform items-center rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105 hover:from-orange-600 hover:to-purple-700'
              >
                Start Shopping
                <svg
                  className='ml-2 h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900'>
      <Navbar />
      <main className='pt-20 pb-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-8'>
            <h1 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
              Shopping Cart
            </h1>
            <p className='text-gray-600 dark:text-gray-400'>
              {items.length} item{items.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {/* Cart Items */}
            <div className='space-y-4 lg:col-span-2'>
              {items.map(item => (
                <div
                  key={item.id}
                  className='rounded-2xl bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-gray-800'
                >
                  <div className='flex items-center space-x-4'>
                    {/* Product Image */}
                    <div className='relative h-20 w-20 flex-shrink-0'>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className='rounded-lg object-cover'
                      />
                    </div>

                    {/* Product Details */}
                    <div className='min-w-0 flex-1'>
                      <h3 className='truncate text-lg font-semibold text-gray-900 dark:text-white'>
                        {item.name}
                      </h3>
                      <p className='text-lg font-bold text-gray-900 dark:text-white'>
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className='flex items-center space-x-2'>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
                        aria-label='Decrease quantity'
                      >
                        <svg
                          className='h-4 w-4 text-gray-600 dark:text-gray-300'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M20 12H4'
                          />
                        </svg>
                      </button>
                      <span className='w-8 text-center font-medium text-gray-900 dark:text-white'>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
                        aria-label='Increase quantity'
                      >
                        <svg
                          className='h-4 w-4 text-gray-600 dark:text-gray-300'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='p-2 text-red-500 transition-colors hover:text-red-700 dark:text-red-400 dark:hover:text-red-300'
                      aria-label='Remove item'
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
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className='mt-4 border-t border-gray-200 pt-4 dark:border-gray-700'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600 dark:text-gray-400'>
                        Subtotal
                      </span>
                      <span className='font-semibold text-gray-900 dark:text-white'>
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart Button */}
              <div className='pt-4'>
                <button
                  onClick={clearCart}
                  className='font-medium text-red-500 transition-colors hover:text-red-700 dark:text-red-400 dark:hover:text-red-300'
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className='lg:col-span-1'>
              <div className='sticky top-24 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800'>
                <h2 className='mb-6 text-xl font-bold text-gray-900 dark:text-white'>
                  Order Summary
                </h2>

                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-600 dark:text-gray-400'>
                      Subtotal
                    </span>
                    <span className='font-medium text-gray-900 dark:text-white'>
                      {formatPrice(total)}
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-600 dark:text-gray-400'>
                      Shipping
                    </span>
                    <span className='font-medium text-green-600 dark:text-green-400'>
                      Free
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-600 dark:text-gray-400'>
                      Tax
                    </span>
                    <span className='font-medium text-gray-900 dark:text-white'>
                      {formatPrice(total * 0.08)}
                    </span>
                  </div>
                  <div className='border-t border-gray-200 pt-4 dark:border-gray-700'>
                    <div className='flex items-center justify-between'>
                      <span className='text-lg font-bold text-gray-900 dark:text-white'>
                        Total
                      </span>
                      <span className='text-lg font-bold text-gray-900 dark:text-white'>
                        {formatPrice(total * 1.08)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className='mt-6 w-full transform rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105 hover:from-orange-600 hover:to-purple-700 disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-500 disabled:hover:scale-100'
                >
                  {isCheckingOut ? (
                    <div className='flex items-center justify-center'>
                      <svg
                        className='mr-3 -ml-1 h-5 w-5 animate-spin text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Proceed to Checkout'
                  )}
                </button>

                <p className='mt-4 text-center text-xs text-gray-500 dark:text-gray-400'>
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
