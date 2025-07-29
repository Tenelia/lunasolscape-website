'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface ShippingAddress {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

interface PaymentMethod {
  type: 'card' | 'paypal' | 'apple_pay' | 'google_pay'
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  nameOnCard?: string
}

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const { themeMode } = useTheme()
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  })

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    type: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  })

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

  const shippingCost = 15.99
  const tax = total * 0.08
  const finalTotal = total + shippingCost + tax

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setCurrentStep(3)
      clearCart()
    }, 3000)
  }

  const steps = [
    {
      id: 1,
      name: 'Shipping',
      status:
        currentStep > 1
          ? 'complete'
          : currentStep === 1
            ? 'current'
            : 'upcoming',
    },
    {
      id: 2,
      name: 'Payment',
      status:
        currentStep > 2
          ? 'complete'
          : currentStep === 2
            ? 'current'
            : 'upcoming',
    },
    {
      id: 3,
      name: 'Confirmation',
      status: currentStep === 3 ? 'current' : 'upcoming',
    },
  ]

  if (items.length === 0 && currentStep !== 3) {
    return (
      <main className='min-h-screen'>
        <Navbar />
        <div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Your cart is empty
            </h2>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              Add some items to your cart before checking out.
            </p>
            <Link
              href='/products'
              className={`mt-4 inline-block rounded-md bg-gradient-to-r ${getThemeGradient()} px-6 py-3 text-white hover:opacity-90`}
            >
              Shop Products
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

      <div className='bg-gray-50 dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24'>
          <div className='mx-auto max-w-lg lg:max-w-none'>
            <h1 className='sr-only'>Checkout</h1>

            {/* Progress Steps */}
            <nav aria-label='Progress' className='mb-8'>
              <ol className='flex items-center justify-center space-x-4'>
                {steps.map((step, stepIdx) => (
                  <li key={step.name} className='flex items-center'>
                    {step.status === 'complete' ? (
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${getThemeGradient()}`}
                      >
                        <svg
                          className='h-5 w-5 text-white'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    ) : step.status === 'current' ? (
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r ${getThemeGradient()}`}
                      >
                        <span className='text-sm font-medium text-white'>
                          {step.id}
                        </span>
                      </div>
                    ) : (
                      <div className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600'>
                        <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                          {step.id}
                        </span>
                      </div>
                    )}
                    <span
                      className={`ml-2 text-sm font-medium ${step.status === 'current' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
                    >
                      {step.name}
                    </span>
                    {stepIdx !== steps.length - 1 && (
                      <div className='ml-4 h-px w-16 bg-gray-300 dark:bg-gray-600' />
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              {/* Order Summary */}
              <div className='lg:order-2'>
                <div className='rounded-lg bg-white p-6 shadow dark:bg-gray-800'>
                  <h2 className='text-lg font-medium text-gray-900 dark:text-white'>
                    Order Summary
                  </h2>

                  <div className='mt-4 space-y-4'>
                    {items.map(item => (
                      <div
                        key={item.id}
                        className='flex items-center space-x-4'
                      >
                        <div className='relative h-16 w-16 overflow-hidden rounded'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className='object-cover'
                          />
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-sm font-medium text-gray-900 dark:text-white'>
                            {item.name}
                          </h3>
                          <p className='text-sm text-gray-500 dark:text-gray-400'>
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className='text-sm font-medium text-gray-900 dark:text-white'>
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className='mt-6 space-y-2 border-t border-gray-200 pt-4 dark:border-gray-700'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-600 dark:text-gray-400'>
                        Subtotal
                      </span>
                      <span className='text-gray-900 dark:text-white'>
                        {formatPrice(total)}
                      </span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-600 dark:text-gray-400'>
                        Shipping
                      </span>
                      <span className='text-gray-900 dark:text-white'>
                        {formatPrice(shippingCost)}
                      </span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-600 dark:text-gray-400'>
                        Tax
                      </span>
                      <span className='text-gray-900 dark:text-white'>
                        {formatPrice(tax)}
                      </span>
                    </div>
                    <div className='flex justify-between border-t border-gray-200 pt-2 dark:border-gray-700'>
                      <span className='text-base font-medium text-gray-900 dark:text-white'>
                        Total
                      </span>
                      <span className='text-base font-medium text-gray-900 dark:text-white'>
                        {formatPrice(finalTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Forms */}
              <div className='mt-8 lg:order-1 lg:mt-0'>
                {currentStep === 1 && (
                  <div className='rounded-lg bg-white p-6 shadow dark:bg-gray-800'>
                    <h2 className='text-lg font-medium text-gray-900 dark:text-white'>
                      Shipping Information
                    </h2>

                    <form
                      onSubmit={handleShippingSubmit}
                      className='mt-4 space-y-4'
                    >
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <label
                            htmlFor='firstName'
                            className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                          >
                            First Name
                          </label>
                          <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            required
                            value={shippingAddress.firstName}
                            onChange={e =>
                              setShippingAddress({
                                ...shippingAddress,
                                firstName: e.target.value,
                              })
                            }
                            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='lastName'
                            className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                          >
                            Last Name
                          </label>
                          <input
                            type='text'
                            id='lastName'
                            name='lastName'
                            required
                            value={shippingAddress.lastName}
                            onChange={e =>
                              setShippingAddress({
                                ...shippingAddress,
                                lastName: e.target.value,
                              })
                            }
                            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                        >
                          Email Address
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          required
                          value={shippingAddress.email}
                          onChange={e =>
                            setShippingAddress({
                              ...shippingAddress,
                              email: e.target.value,
                            })
                          }
                          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='phone'
                          className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                        >
                          Phone Number
                        </label>
                        <input
                          type='tel'
                          id='phone'
                          name='phone'
                          required
                          value={shippingAddress.phone}
                          onChange={e =>
                            setShippingAddress({
                              ...shippingAddress,
                              phone: e.target.value,
                            })
                          }
                          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='address'
                          className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                        >
                          Address
                        </label>
                        <input
                          type='text'
                          id='address'
                          name='address'
                          required
                          value={shippingAddress.address}
                          onChange={e =>
                            setShippingAddress({
                              ...shippingAddress,
                              address: e.target.value,
                            })
                          }
                          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                        />
                      </div>

                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <label
                            htmlFor='city'
                            className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                          >
                            City
                          </label>
                          <input
                            type='text'
                            id='city'
                            name='city'
                            required
                            value={shippingAddress.city}
                            onChange={e =>
                              setShippingAddress({
                                ...shippingAddress,
                                city: e.target.value,
                              })
                            }
                            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='zipCode'
                            className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                          >
                            ZIP Code
                          </label>
                          <input
                            type='text'
                            id='zipCode'
                            name='zipCode'
                            required
                            value={shippingAddress.zipCode}
                            onChange={e =>
                              setShippingAddress({
                                ...shippingAddress,
                                zipCode: e.target.value,
                              })
                            }
                            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                          />
                        </div>
                      </div>

                      <button
                        type='submit'
                        className={`w-full rounded-md bg-gradient-to-r ${getThemeGradient()} px-4 py-2 text-white hover:opacity-90`}
                      >
                        Continue to Payment
                      </button>
                    </form>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className='rounded-lg bg-white p-6 shadow dark:bg-gray-800'>
                    <h2 className='text-lg font-medium text-gray-900 dark:text-white'>
                      Payment Information
                    </h2>

                    <form
                      onSubmit={handlePaymentSubmit}
                      className='mt-4 space-y-4'
                    >
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                          Payment Method
                        </label>
                        <div className='mt-2 grid grid-cols-2 gap-4'>
                          <button
                            type='button'
                            onClick={() =>
                              setPaymentMethod({
                                ...paymentMethod,
                                type: 'card',
                              })
                            }
                            className={`rounded-lg border-2 p-4 text-center ${paymentMethod.type === 'card' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600'}`}
                          >
                            Credit Card
                          </button>
                          <button
                            type='button'
                            onClick={() =>
                              setPaymentMethod({
                                ...paymentMethod,
                                type: 'paypal',
                              })
                            }
                            className={`rounded-lg border-2 p-4 text-center ${paymentMethod.type === 'paypal' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600'}`}
                          >
                            PayPal
                          </button>
                        </div>
                      </div>

                      {paymentMethod.type === 'card' && (
                        <>
                          <div>
                            <label
                              htmlFor='nameOnCard'
                              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                            >
                              Name on Card
                            </label>
                            <input
                              type='text'
                              id='nameOnCard'
                              name='nameOnCard'
                              required
                              value={paymentMethod.nameOnCard}
                              onChange={e =>
                                setPaymentMethod({
                                  ...paymentMethod,
                                  nameOnCard: e.target.value,
                                })
                              }
                              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                            />
                          </div>

                          <div>
                            <label
                              htmlFor='cardNumber'
                              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                            >
                              Card Number
                            </label>
                            <input
                              type='text'
                              id='cardNumber'
                              name='cardNumber'
                              required
                              placeholder='1234 5678 9012 3456'
                              value={paymentMethod.cardNumber}
                              onChange={e =>
                                setPaymentMethod({
                                  ...paymentMethod,
                                  cardNumber: e.target.value,
                                })
                              }
                              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                            />
                          </div>

                          <div className='grid grid-cols-2 gap-4'>
                            <div>
                              <label
                                htmlFor='expiryDate'
                                className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                              >
                                Expiry Date
                              </label>
                              <input
                                type='text'
                                id='expiryDate'
                                name='expiryDate'
                                required
                                placeholder='MM/YY'
                                value={paymentMethod.expiryDate}
                                onChange={e =>
                                  setPaymentMethod({
                                    ...paymentMethod,
                                    expiryDate: e.target.value,
                                  })
                                }
                                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                              />
                            </div>
                            <div>
                              <label
                                htmlFor='cvv'
                                className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                              >
                                CVV
                              </label>
                              <input
                                type='text'
                                id='cvv'
                                name='cvv'
                                required
                                placeholder='123'
                                value={paymentMethod.cvv}
                                onChange={e =>
                                  setPaymentMethod({
                                    ...paymentMethod,
                                    cvv: e.target.value,
                                  })
                                }
                                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div className='flex space-x-4'>
                        <button
                          type='button'
                          onClick={() => setCurrentStep(1)}
                          className='flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300'
                        >
                          Back
                        </button>
                        <button
                          type='submit'
                          disabled={isProcessing}
                          className={`flex-1 rounded-md bg-gradient-to-r ${getThemeGradient()} px-4 py-2 text-white hover:opacity-90 disabled:opacity-50`}
                        >
                          {isProcessing ? 'Processing...' : 'Place Order'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className='rounded-lg bg-white p-6 text-center shadow dark:bg-gray-800'>
                    <div
                      className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${getThemeGradient()}`}
                    >
                      <svg
                        className='h-8 w-8 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    </div>
                    <h2 className='mt-4 text-2xl font-bold text-gray-900 dark:text-white'>
                      Order Confirmed!
                    </h2>
                    <p className='mt-2 text-gray-600 dark:text-gray-400'>
                      Thank you for your purchase. You will receive an email
                      confirmation shortly.
                    </p>
                    <div className='mt-6 space-y-4'>
                      <Link
                        href='/profile'
                        className={`inline-block rounded-md bg-gradient-to-r ${getThemeGradient()} px-6 py-3 text-white hover:opacity-90`}
                      >
                        View Order Status
                      </Link>
                      <div>
                        <Link
                          href='/products'
                          className='text-blue-600 hover:text-blue-500 dark:text-blue-400'
                        >
                          Continue Shopping
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
