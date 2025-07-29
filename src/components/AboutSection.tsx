'use client'

import { useTheme } from './ThemeProvider'

export function AboutSection() {
  const { themeMode } = useTheme()

  const getSectionGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return 'from-yellow-50 to-pink-50'
      case 'sunset':
        return 'from-red-50 to-orange-50'
      case 'moonrise':
        return 'from-blue-50 to-purple-50'
      case 'moonset':
        return 'from-gray-50 to-gray-100'
      default:
        return 'from-yellow-50 to-pink-50'
    }
  }

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

  const stats = [
    { number: '500+', label: 'Unique Pieces' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '15+', label: 'Countries Served' },
    { number: '4.9★', label: 'Customer Rating' },
  ]

  const values = [
    {
      icon: (
        <svg
          className='h-8 w-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
          />
        </svg>
      ),
      title: 'Celestial Inspiration',
      description:
        'Every piece draws inspiration from the eternal dance between the sun, moon, and stars.',
    },
    {
      icon: (
        <svg
          className='h-8 w-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
          />
        </svg>
      ),
      title: 'Quality Craftsmanship',
      description:
        'Meticulously crafted pieces that blend traditional techniques with modern aesthetics.',
    },
    {
      icon: (
        <svg
          className='h-8 w-8'
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
      ),
      title: 'Sustainable Practices',
      description:
        'Committed to ethical sourcing and environmentally responsible manufacturing processes.',
    },
  ]

  return (
    <section
      className={`bg-gradient-to-br py-20 ${getSectionGradient()} dark:from-gray-900 dark:to-gray-800`}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Main Content Grid */}
        <div className='mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
          {/* Left Column - Text Content */}
          <div className='space-y-8'>
            <div>
              <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white'>
                About{' '}
                <span
                  className={`bg-gradient-to-r ${getAccentGradient()} bg-clip-text text-transparent`}
                >
                  LunaSolscape
                </span>
              </h2>
              <p className='text-xl leading-relaxed text-gray-600 dark:text-gray-300'>
                Born from the vision of creating a harmonious blend between
                celestial beauty and earthly elegance, LunaSolscape represents
                more than just jewelry—it&apos;s a celebration of the cosmic
                dance that influences our daily lives.
              </p>
            </div>

            <div className='space-y-6'>
              <p className='text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
                Our innovative color gradient sorting system revolutionizes how
                you discover jewelry, organizing pieces in the same way nature
                organizes light—from the warm embrace of sunrise to the
                mysterious depths of moonset.
              </p>

              <p className='text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
                Each collection tells a story of transformation, much like the
                celestial cycles that inspire them. Whether you&apos;re seeking
                the bold warmth of our Sol collection or the serene elegance of
                our Luna pieces, every item is designed to resonate with your
                personal journey.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-6 pt-8'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div
                    className={`bg-gradient-to-r text-3xl font-bold md:text-4xl ${getAccentGradient()} bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </div>
                  <div className='font-medium text-gray-600 dark:text-gray-400'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className='relative'>
            <div
              className={`h-96 w-full bg-gradient-to-br ${getAccentGradient()} rounded-2xl opacity-80 shadow-2xl`}
            >
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white'>
                  <svg
                    className='mx-auto mb-4 h-24 w-24 opacity-80'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1}
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                  <p className='text-xl font-light opacity-90'>
                    Celestial Beauty Meets
                  </p>
                  <p className='text-2xl font-bold'>Earthly Elegance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className='space-y-12'>
          <div className='text-center'>
            <h3 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white'>
              Our Core Values
            </h3>
            <p className='mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300'>
              The principles that guide every aspect of our design, creation,
              and customer experience.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {values.map((value, index) => (
              <div
                key={index}
                className='animate-slide-up rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800'
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center bg-gradient-to-r ${getAccentGradient()} mb-6 rounded-full text-white`}
                >
                  {value.icon}
                </div>
                <h4 className='mb-4 text-xl font-semibold text-gray-900 dark:text-white'>
                  {value.title}
                </h4>
                <p className='leading-relaxed text-gray-600 dark:text-gray-300'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-16 border-t border-gray-200 pt-12 text-center dark:border-gray-700'>
          <h3 className='mb-4 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white'>
            Ready to Begin Your Celestial Journey?
          </h3>
          <p className='mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
            Discover how our unique collections can complement your personal
            style and tell your story.
          </p>
          <button
            className={`bg-gradient-to-r px-8 py-4 ${getAccentGradient()} rounded-lg text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  )
}
