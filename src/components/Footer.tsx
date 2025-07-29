'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'

export function Footer() {
  const { themeMode } = useTheme()

  const getAccentGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return 'from-yellow-500 to-pink-500'
      case 'sunset':
        return 'from-red-600 to-orange-600'
      case 'moonrise':
        return 'from-blue-600 to-purple-600'
      case 'moonset':
        return 'from-gray-600 to-gray-700'
      default:
        return 'from-yellow-500 to-pink-500'
    }
  }

  const quickLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const categories = [
    { name: 'Rings', href: '/products/rings' },
    { name: 'Necklaces', href: '/products/necklaces' },
    { name: 'Earrings', href: '/products/earrings' },
    { name: 'Bracelets', href: '/products/bracelets' },
    { name: 'Sets', href: '/products/sets' },
  ]

  const support = [
    { name: 'Customer Service', href: '/support' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.73 14.296c-.49-.49-.734-1.135-.734-1.784s.244-1.295.734-1.784l1.396-1.395c.808-.808 1.959-1.297 3.323-1.297s2.515.49 3.323 1.297l1.396 1.395c.49.49.734 1.135.734 1.784s-.244 1.294-.734 1.784l-1.396 1.395c-.808.807-1.959 1.297-3.323 1.297zm7.098 0c-1.297 0-2.448-.49-3.323-1.297l-1.396-1.395c-.49-.49-.734-1.135-.734-1.784s.244-1.295.734-1.784l1.396-1.395c.808-.808 1.959-1.297 3.323-1.297s2.515.49 3.323 1.297l1.396 1.395c.49.49.734 1.135.734 1.784s-.244 1.294-.734 1.784l-1.396 1.395c-.808.807-1.959 1.297-3.323 1.297z' />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: '#',
      icon: (
        <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624.001 11.99-5.365 11.99-11.988C24.007 5.369 18.641.001 12.017.001z' />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: '#',
      icon: (
        <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' />
        </svg>
      ),
    },
  ]

  return (
    <footer className='bg-gray-900 text-white dark:bg-black'>
      {/* Newsletter Section */}
      <div className='border-b border-gray-800'>
        <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h3 className='mb-4 text-2xl font-bold md:text-3xl'>
              Join the{' '}
              <span
                className={`bg-gradient-to-r ${getAccentGradient()} bg-clip-text text-transparent`}
              >
                LunaSolscape
              </span>{' '}
              Community
            </h3>
            <p className='mb-8 text-gray-300'>
              Be the first to discover new collections, exclusive offers, and
              celestial styling tips.
            </p>

            <div className='mx-auto flex max-w-md flex-col gap-4 sm:flex-row'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none'
              />
              <button
                className={`bg-gradient-to-r px-6 py-3 ${getAccentGradient()} rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <Link href='/' className='mb-6 flex items-center space-x-2'>
              <div
                className={`h-8 w-8 bg-gradient-to-r ${getAccentGradient()} rounded-full`}
              ></div>
              <span className='text-xl font-bold'>LunaSolscape</span>
            </Link>
            <p className='mb-6 leading-relaxed text-gray-300'>
              Celestial-inspired jewelry and accessories that celebrate the
              eternal dance between the sun, moon, and your unique style.
            </p>

            {/* Social Links */}
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
                <Link
                  key={social.name}
                  href={social.href}
                  className='rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white'
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='mb-6 text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-3'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 transition-colors hover:text-white'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className='mb-6 text-lg font-semibold'>Categories</h4>
            <ul className='space-y-3'>
              {categories.map(category => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className='text-gray-300 transition-colors hover:text-white'
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className='mb-6 text-lg font-semibold'>Support</h4>
            <ul className='space-y-3'>
              {support.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='text-gray-300 transition-colors hover:text-white'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
            <div className='text-sm text-gray-400'>
              © 2025 LunaSolscape. All rights reserved.
            </div>

            <div className='flex flex-wrap justify-center space-x-6 text-sm md:justify-end'>
              <Link
                href='/privacy'
                className='text-gray-400 transition-colors hover:text-white'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-gray-400 transition-colors hover:text-white'
              >
                Terms of Service
              </Link>
              <Link
                href='/cookies'
                className='text-gray-400 transition-colors hover:text-white'
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
