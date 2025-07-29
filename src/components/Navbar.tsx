'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { useCart } from '@/contexts/CartContext'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { themeMode, setTheme, setThemeMode, isDark } = useTheme()
  const { itemCount } = useCart()

  const themeModes = [
    {
      key: 'sunrise',
      label: 'Sunrise',
      gradient: 'from-pink-500 via-orange-500 to-yellow-500',
    },
    {
      key: 'sunset',
      label: 'Sunset',
      gradient: 'from-red-600 via-orange-600 to-orange-700',
    },
    {
      key: 'moonrise',
      label: 'Moonrise',
      gradient: 'from-blue-700 via-purple-700 to-purple-800',
    },
    {
      key: 'moonset',
      label: 'Moonset',
      gradient: 'from-gray-800 via-gray-600 to-gray-500',
    },
  ] as const

  return (
    <nav className='fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='from-sol-400 to-luna-600 h-8 w-8 rounded-full bg-gradient-to-r'></div>
            <span className='gradient-text text-xl font-bold'>
              LunaSolscape
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center space-x-8 md:flex'>
            <Link
              href='/products'
              className='hover:text-sol-600 dark:hover:text-sol-400 text-gray-700 transition-colors dark:text-gray-300'
            >
              Products
            </Link>
            <Link
              href='/collections'
              className='hover:text-sol-600 dark:hover:text-sol-400 text-gray-700 transition-colors dark:text-gray-300'
            >
              Collections
            </Link>
            <Link
              href='/blog'
              className='hover:text-sol-600 dark:hover:text-sol-400 text-gray-700 transition-colors dark:text-gray-300'
            >
              Blog
            </Link>
            <Link
              href='/about'
              className='hover:text-sol-600 dark:hover:text-sol-400 text-gray-700 transition-colors dark:text-gray-300'
            >
              About
            </Link>

            {/* Theme Mode Selector */}
            <div className='flex items-center space-x-2'>
              {themeModes.map(mode => (
                <button
                  key={mode.key}
                  onClick={() => setThemeMode(mode.key)}
                  className={`h-6 w-6 rounded-full bg-gradient-to-r ${mode.gradient} border-2 transition-all ${
                    themeMode === mode.key
                      ? 'scale-110 border-gray-800 dark:border-white'
                      : 'border-gray-300 hover:scale-105 dark:border-gray-600'
                  }`}
                  title={mode.label}
                />
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className='rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg
                  className='h-5 w-5 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg
                  className='h-5 w-5 text-gray-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              )}
            </button>

            {/* Cart & Account */}
            <div className='flex items-center space-x-4'>
              <Link
                href='/cart'
                className='hover:text-sol-600 dark:hover:text-sol-400 relative text-gray-700 transition-colors dark:text-gray-300'
                title='Shopping Cart'
                aria-label='Shopping Cart'
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6M7 13h10M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6'
                  />
                </svg>
                {itemCount > 0 && (
                  <span className='bg-sol-500 absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white'>
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </Link>
              <Link
                href='/account'
                className='hover:text-sol-600 dark:hover:text-sol-400 text-gray-700 transition-colors dark:text-gray-300'
                title='Account'
                aria-label='User Account'
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='hover:text-sol-600 dark:hover:text-sol-400 text-gray-700 transition-colors dark:text-gray-300'
              title='Toggle menu'
              aria-label='Toggle navigation menu'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='space-y-1 border-t border-gray-200 bg-white px-2 pt-2 pb-3 sm:px-3 dark:border-gray-700 dark:bg-gray-900'>
              <Link
                href='/products'
                className='hover:text-sol-600 dark:hover:text-sol-400 block px-3 py-2 text-gray-700 transition-colors dark:text-gray-300'
              >
                Products
              </Link>
              <Link
                href='/collections'
                className='hover:text-sol-600 dark:hover:text-sol-400 block px-3 py-2 text-gray-700 transition-colors dark:text-gray-300'
              >
                Collections
              </Link>
              <Link
                href='/blog'
                className='hover:text-sol-600 dark:hover:text-sol-400 block px-3 py-2 text-gray-700 transition-colors dark:text-gray-300'
              >
                Blog
              </Link>
              <Link
                href='/about'
                className='hover:text-sol-600 dark:hover:text-sol-400 block px-3 py-2 text-gray-700 transition-colors dark:text-gray-300'
              >
                About
              </Link>

              {/* Mobile cart and account */}
              <div className='flex items-center space-x-4 px-3 py-2'>
                <Link
                  href='/cart'
                  className='flex items-center space-x-2 text-gray-700 dark:text-gray-300'
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
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6M7 13h10M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6'
                    />
                  </svg>
                  <span>Cart ({itemCount})</span>
                </Link>
                <Link
                  href='/account'
                  className='flex items-center space-x-2 text-gray-700 dark:text-gray-300'
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
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                  <span>Account</span>
                </Link>
              </div>

              {/* Mobile theme controls */}
              <div className='px-3 py-2'>
                <div className='mb-2 flex items-center space-x-2'>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    Theme:
                  </span>
                  {themeModes.map(mode => (
                    <button
                      key={mode.key}
                      onClick={() => setThemeMode(mode.key)}
                      className={`h-6 w-6 rounded-full bg-gradient-to-r ${mode.gradient} border-2 transition-all ${
                        themeMode === mode.key
                          ? 'scale-110 border-gray-800 dark:border-white'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                      title={mode.label}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  className='flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300'
                >
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
