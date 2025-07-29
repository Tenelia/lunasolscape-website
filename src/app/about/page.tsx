'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'

export default function AboutPage() {
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

  const timeline = [
    {
      year: '2020',
      title: 'The Vision',
      description:
        'LunaSolscape was born from a dream to revolutionize how people discover and experience jewelry through celestial inspiration.',
    },
    {
      year: '2021',
      title: 'Innovation Begins',
      description:
        'Development of our unique color gradient sorting system, inspired by the natural progression of celestial light cycles.',
    },
    {
      year: '2023',
      title: 'Global Launch',
      description:
        'Official launch of our e-commerce platform, bringing celestial beauty to customers worldwide.',
    },
    {
      year: '2024',
      title: 'Sustainable Future',
      description:
        'Implementation of our comprehensive sustainability program, ensuring ethical sourcing and eco-friendly practices.',
    },
  ]

  const team = [
    {
      name: 'Luna Martinez',
      role: 'Founder & CEO',
      bio: 'Visionary behind the celestial concept, with 15 years in luxury jewelry design.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Sol Chen',
      role: 'Head of Design',
      bio: 'Master craftsperson specializing in celestial-inspired pieces and color theory.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Aurora Kim',
      role: 'Sustainability Director',
      bio: 'Leading our commitment to ethical sourcing and environmental responsibility.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Nova Thompson',
      role: 'Customer Experience',
      bio: 'Ensuring every customer journey is as magical as the pieces they discover.',
      image: '/api/placeholder/300/300',
    },
  ]

  return (
    <main className='min-h-screen'>
      <Navbar />

      <div className='min-h-screen bg-gray-50 pt-16 dark:bg-gray-900'>
        {/* Hero Section */}
        <section
          className={`bg-gradient-to-br py-20 ${getThemeGradient()}/10 dark:from-gray-800 dark:to-gray-900`}
        >
          <div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
            <h1 className='mb-6 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white'>
              About{' '}
              <span
                className={`bg-gradient-to-r ${getThemeGradient()} bg-clip-text text-transparent`}
              >
                LunaSolscape
              </span>
            </h1>
            <p className='mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl dark:text-gray-300'>
              We believe jewelry should tell a story—your story—through the
              eternal dance of celestial beauty and earthly elegance.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className='py-20'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
              <div>
                <h2 className='mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white'>
                  Our Mission
                </h2>
                <p className='mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
                  To revolutionize the jewelry shopping experience by creating a
                  harmonious blend of celestial inspiration, innovative
                  technology, and sustainable practices. We believe that every
                  piece of jewelry should resonate with your personal journey
                  while honoring our connection to the cosmos.
                </p>
                <p className='mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
                  Our unique color gradient sorting system mirrors the natural
                  progression of light throughout celestial cycles, making it
                  easier than ever to discover pieces that speak to your soul
                  and complement your individual style.
                </p>
                <button
                  className={`bg-gradient-to-r px-8 py-4 ${getThemeGradient()} rounded-lg text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  Explore Our Collection
                </button>
              </div>

              <div className='relative'>
                <div
                  className={`h-96 w-full bg-gradient-to-br ${getThemeGradient()} flex items-center justify-center rounded-2xl opacity-80 shadow-2xl`}
                >
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
                    <p className='text-2xl font-bold'>Celestial Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className='bg-white py-20 dark:bg-gray-800'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mb-16 text-center'>
              <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white'>
                Our Journey
              </h2>
              <p className='text-xl text-gray-600 dark:text-gray-300'>
                From vision to reality—the milestones that shaped LunaSolscape
              </p>
            </div>

            <div className='relative'>
              {/* Timeline line */}
              <div className='absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-300 dark:bg-gray-600'></div>

              <div className='space-y-12'>
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                    >
                      <div className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700'>
                        <h3
                          className={`mb-2 bg-gradient-to-r text-2xl font-bold ${getThemeGradient()} bg-clip-text text-transparent`}
                        >
                          {item.year}
                        </h3>
                        <h4 className='mb-3 text-xl font-semibold text-gray-900 dark:text-white'>
                          {item.title}
                        </h4>
                        <p className='text-gray-600 dark:text-gray-300'>
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div
                      className={`h-4 w-4 bg-gradient-to-r ${getThemeGradient()} relative z-10 rounded-full border-4 border-white dark:border-gray-900`}
                    ></div>

                    <div className='w-1/2'></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='py-20'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mb-16 text-center'>
              <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white'>
                Meet Our Team
              </h2>
              <p className='text-xl text-gray-600 dark:text-gray-300'>
                The passionate individuals bringing celestial beauty to life
              </p>
            </div>

            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
              {team.map((member, index) => (
                <div
                  key={index}
                  className='rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800'
                >
                  <div className='mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600'>
                    <svg
                      className='h-12 w-12 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1}
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </div>

                  <h3 className='mb-2 text-xl font-bold text-gray-900 dark:text-white'>
                    {member.name}
                  </h3>
                  <p
                    className={`mb-3 bg-gradient-to-r text-sm font-medium ${getThemeGradient()} bg-clip-text text-transparent`}
                  >
                    {member.role}
                  </p>
                  <p className='text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='bg-white py-20 dark:bg-gray-800'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mb-16 text-center'>
              <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white'>
                Our Values
              </h2>
              <p className='text-xl text-gray-600 dark:text-gray-300'>
                The principles that guide everything we do
              </p>
            </div>

            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              <div className='text-center'>
                <div
                  className={`h-16 w-16 bg-gradient-to-r ${getThemeGradient()} mx-auto mb-6 flex items-center justify-center rounded-full`}
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
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                </div>
                <h3 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
                  Celestial Inspiration
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Every piece draws inspiration from the eternal dance between
                  the sun, moon, and stars, creating jewelry that connects you
                  to the cosmos.
                </p>
              </div>

              <div className='text-center'>
                <div
                  className={`h-16 w-16 bg-gradient-to-r ${getThemeGradient()} mx-auto mb-6 flex items-center justify-center rounded-full`}
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
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                </div>
                <h3 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
                  Sustainable Practices
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  We&apos;re committed to ethical sourcing and environmentally
                  responsible manufacturing, protecting our celestial home for
                  future generations.
                </p>
              </div>

              <div className='text-center'>
                <div
                  className={`h-16 w-16 bg-gradient-to-r ${getThemeGradient()} mx-auto mb-6 flex items-center justify-center rounded-full`}
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
                      d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                    />
                  </svg>
                </div>
                <h3 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
                  Quality Craftsmanship
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Each piece is meticulously crafted with attention to detail,
                  blending traditional techniques with modern innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`bg-gradient-to-r py-20 ${getThemeGradient()}`}>
          <div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
            <h2 className='mb-6 text-3xl font-bold text-white md:text-4xl'>
              Ready to Begin Your Celestial Journey?
            </h2>
            <p className='mx-auto mb-8 max-w-3xl text-xl text-white/90'>
              Discover how our unique collections can complement your personal
              style and tell your story.
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <button className='rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                Shop Collection
              </button>
              <button className='rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-900'>
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
