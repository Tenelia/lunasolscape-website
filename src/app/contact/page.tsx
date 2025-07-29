'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'
import { useState } from 'react'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const { themeMode } = useTheme()
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: (
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
            d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      label: 'Email',
      value: 'hello@lunasolscape.com',
      href: 'mailto:hello@lunasolscape.com',
    },
    {
      icon: (
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
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          />
        </svg>
      ),
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: (
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
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
      label: 'Address',
      value: '123 Celestial Way, Moonbeam, CA 90210',
      href: 'https://maps.google.com/?q=123+Celestial+Way+Moonbeam+CA+90210',
    },
    {
      icon: (
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
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM PST',
      href: null,
    },
  ]

  const faqs = [
    {
      question: 'What materials do you use?',
      answer:
        'We use only premium materials including sterling silver, 14K and 18K gold, natural gemstones, and ethically sourced pearls. All our pieces are hypoallergenic and nickel-free.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we ship worldwide! Shipping costs and delivery times vary by location. Free shipping is available for orders over $150 within the United States.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return policy for all unworn items in their original packaging. Custom pieces and engraved items are final sale unless there is a manufacturing defect.',
    },
    {
      question: 'Do you offer jewelry care services?',
      answer:
        'Yes! We provide professional cleaning and maintenance services for all LunaSolscape pieces. Contact us to schedule an appointment or learn about our mail-in service.',
    },
    {
      question: 'Can I customize a piece?',
      answer:
        'Absolutely! We offer custom design services and can modify existing pieces. Contact us with your ideas and our design team will work with you to create something unique.',
    },
  ]

  return (
    <main className='min-h-screen'>
      <Navbar />

      <div className='bg-white dark:bg-gray-900'>
        {/* Hero Section */}
        <div
          className={`relative bg-gradient-to-r ${getThemeGradient()} py-24`}
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold text-white sm:text-5xl lg:text-6xl'>
                Get in Touch
              </h1>
              <p className='mx-auto mt-6 max-w-2xl text-xl text-white/90'>
                We&apos;d love to hear from you. Send us a message and
                we&apos;ll respond as soon as possible.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10' />
            <div className='absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10' />
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className='relative -mt-12 pb-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='relative rounded-2xl bg-white shadow-xl lg:grid lg:grid-cols-3 dark:bg-gray-800'>
              {/* Contact Info */}
              <div
                className={`bg-gradient-to-r ${getThemeGradient()} rounded-2xl px-6 py-10 sm:px-10 lg:rounded-r-none xl:p-12`}
              >
                <h3 className='text-lg font-medium text-white'>
                  Contact Information
                </h3>
                <p className='mt-6 max-w-3xl text-base text-white/90'>
                  Ready to discover your perfect celestial piece? Our team is
                  here to help you find jewelry that speaks to your soul.
                </p>

                <ul className='mt-8 space-y-6'>
                  {contactInfo.map((item, index) => (
                    <li key={index} className='flex'>
                      <div className='flex-shrink-0'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-md bg-white/20 text-white'>
                          {item.icon}
                        </div>
                      </div>
                      <div className='ml-3 text-base text-white/90'>
                        <span className='sr-only'>{item.label}</span>
                        <div>
                          {item.href ? (
                            <a href={item.href} className='hover:text-white'>
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className='mt-8'>
                  <h4 className='text-base font-medium text-white'>
                    Follow Us
                  </h4>
                  <div className='mt-4 flex space-x-4'>
                    <a
                      href='#'
                      className='text-white/80 hover:text-white'
                      title='Facebook'
                    >
                      <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fillRule='evenodd'
                          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='text-white/80 hover:text-white'
                      title='Instagram'
                    >
                      <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.151 14.897 3.661 13.746 3.661 12.449s.49-2.448 1.297-3.323C5.852 8.252 7.003 7.762 8.301 7.762s2.448.49 3.323 1.297c.894.894 1.384 2.045 1.384 3.342s-.49 2.448-1.297 3.323c-.875.894-2.026 1.384-3.323 1.384zm7.718-10.704c-.587 0-1.058-.471-1.058-1.058s.471-1.058 1.058-1.058 1.058.471 1.058 1.058-.471 1.058-1.058 1.058zm3.718 4.165c0 1.645-.471 3.165-1.384 4.314-.894 1.149-2.121 1.823-3.52 1.823-1.399 0-2.626-.674-3.52-1.823-.894-1.149-1.384-2.669-1.384-4.314 0-1.645.471-3.165 1.384-4.314.894-1.149 2.121-1.823 3.52-1.823 1.399 0 2.626.674 3.52 1.823.894 1.149 1.384 2.669 1.384 4.314z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='text-white/80 hover:text-white'
                      title='Twitter'
                    >
                      <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className='px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12'>
                {isSubmitted ? (
                  <div className='text-center'>
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
                    <h3 className='mt-4 text-lg font-medium text-gray-900 dark:text-white'>
                      Message sent successfully!
                    </h3>
                    <p className='mt-2 text-gray-600 dark:text-gray-400'>
                      Thank you for contacting us. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className={`mt-4 rounded-md bg-gradient-to-r ${getThemeGradient()} px-4 py-2 text-white hover:opacity-90`}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                      Send us a message
                    </h3>
                    <form
                      onSubmit={handleSubmit}
                      className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                    >
                      <div>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-gray-900 dark:text-gray-300'
                        >
                          Full Name
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className='mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                          placeholder='Your full name'
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-gray-900 dark:text-gray-300'
                        >
                          Email Address
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className='mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                          placeholder='your.email@example.com'
                        />
                      </div>

                      <div className='sm:col-span-2'>
                        <label
                          htmlFor='subject'
                          className='block text-sm font-medium text-gray-900 dark:text-gray-300'
                        >
                          Subject
                        </label>
                        <select
                          id='subject'
                          name='subject'
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className='mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                        >
                          <option value=''>Select a subject</option>
                          <option value='general'>General Inquiry</option>
                          <option value='product'>Product Question</option>
                          <option value='order'>Order Support</option>
                          <option value='custom'>Custom Design</option>
                          <option value='wholesale'>Wholesale Inquiry</option>
                          <option value='press'>Press & Media</option>
                        </select>
                      </div>

                      <div className='sm:col-span-2'>
                        <label
                          htmlFor='message'
                          className='block text-sm font-medium text-gray-900 dark:text-gray-300'
                        >
                          Message
                        </label>
                        <textarea
                          id='message'
                          name='message'
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className='mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                          placeholder='Tell us how we can help you...'
                        />
                      </div>

                      <div className='sm:col-span-2'>
                        <button
                          type='submit'
                          disabled={isSubmitting}
                          className={`w-full rounded-md bg-gradient-to-r ${getThemeGradient()} px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-90 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50`}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='bg-gray-50 py-16 dark:bg-gray-800'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-3xl'>
              <h2 className='text-center text-3xl font-bold text-gray-900 dark:text-white'>
                Frequently Asked Questions
              </h2>
              <p className='mt-4 text-center text-lg text-gray-600 dark:text-gray-400'>
                Find answers to common questions about our jewelry and services.
              </p>

              <div className='mt-12 space-y-8'>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className='rounded-lg bg-white p-6 shadow dark:bg-gray-700'
                  >
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                      {faq.question}
                    </h3>
                    <p className='mt-2 text-gray-600 dark:text-gray-300'>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className='mt-12 text-center'>
                <p className='text-gray-600 dark:text-gray-400'>
                  Still have questions?{' '}
                  <a
                    href='#contact-form'
                    className={`bg-gradient-to-r bg-clip-text font-medium text-transparent ${getThemeGradient()} hover:opacity-80`}
                  >
                    Get in touch
                  </a>{' '}
                  and we&apos;ll be happy to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
