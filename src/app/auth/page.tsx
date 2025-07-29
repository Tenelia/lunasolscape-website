'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'
import Link from 'next/link'
import { useState } from 'react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement authentication logic
    // Handle form submission
  }

  const handleSSOLogin = () => {
    // TODO: Implement SSO login
    // Handle SSO login
  }

  return (
    <main className='min-h-screen'>
      <Navbar />

      <div className='flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-900'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <div
              className={`mx-auto h-12 w-12 rounded-full bg-gradient-to-r ${getThemeGradient()}`}
            />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {isLogin ? 'Sign in to your account' : 'Create your account'}
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>
              {isLogin
                ? "Don't have an account? "
                : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className={`bg-gradient-to-r bg-clip-text font-medium text-transparent ${getThemeGradient()} hover:opacity-80`}
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='space-y-4 rounded-md shadow-sm'>
              {!isLogin && (
                <div>
                  <label htmlFor='name' className='sr-only'>
                    Full Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    required={!isLogin}
                    className='relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                    placeholder='Full name'
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div>
                <label htmlFor='email' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                  placeholder='Email address'
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  className='relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor='confirmPassword' className='sr-only'>
                    Confirm Password
                  </label>
                  <input
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    autoComplete='new-password'
                    required={!isLogin}
                    className='relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                    placeholder='Confirm password'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>

            {isLogin && (
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900 dark:text-gray-300'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm'>
                  <Link
                    href='/auth/forgot-password'
                    className={`bg-gradient-to-r bg-clip-text font-medium text-transparent ${getThemeGradient()} hover:opacity-80`}
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            )}

            <div>
              <button
                type='submit'
                className={`group relative flex w-full justify-center rounded-md bg-gradient-to-r ${getThemeGradient()} px-3 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {isLogin ? 'Sign in' : 'Sign up'}
              </button>
            </div>

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300 dark:border-gray-600' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='bg-gray-50 px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400'>
                    Or continue with
                  </span>
                </div>
              </div>

              <div className='mt-6 grid grid-cols-2 gap-3'>
                <button
                  type='button'
                  onClick={handleSSOLogin}
                  className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z' />
                  </svg>
                  <span className='ml-2'>Google</span>
                </button>

                <button
                  type='button'
                  onClick={handleSSOLogin}
                  className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M7.03 3.462c.282-.333.709-.462.88-.462.171 0 .46.046.687.139a2.08 2.08 0 0 1 .667.417c.171.17.331.352.426.555.095.202.139.438.139.694 0 .192-.033.384-.088.555a1.79 1.79 0 0 1-.25.486 1.72 1.72 0 0 1-.388.388 1.515 1.515 0 0 1-.486.25 1.515 1.515 0 0 1-.555.088c-.256 0-.492-.044-.694-.139a1.72 1.72 0 0 1-.555-.426 2.08 2.08 0 0 1-.417-.667c-.093-.227-.139-.516-.139-.687 0-.171.129-.598.462-.88zm3.94 0c.333.282.462.709.462.88 0 .171-.046.46-.139.687a2.08 2.08 0 0 1-.417.667 1.72 1.72 0 0 1-.555.426c-.202.095-.438.139-.694.139a1.515 1.515 0 0 1-.555-.088 1.515 1.515 0 0 1-.486-.25 1.72 1.72 0 0 1-.388-.388 1.79 1.79 0 0 1-.25-.486 1.515 1.515 0 0 1-.088-.555c0-.256.044-.492.139-.694.095-.203.255-.385.426-.555a2.08 2.08 0 0 1 .667-.417c.227-.093.516-.139.687-.139.171 0 .598.129.88.462zm-5.477.004c1.077-.128 2.085.183 2.93.902.845.72 1.297 1.684 1.297 2.772 0 1.088-.452 2.052-1.297 2.772-.845.719-1.853 1.03-2.93.902-1.077.128-2.085-.183-2.93-.902C1.718 9.192 1.266 8.228 1.266 7.14c0-1.088.452-2.052 1.297-2.772.845-.719 1.853-1.03 2.93-.902z' />
                  </svg>
                  <span className='ml-2'>Apple</span>
                </button>
              </div>

              <div className='mt-3 grid grid-cols-1 gap-3'>
                <button
                  type='button'
                  onClick={handleSSOLogin}
                  className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='ml-2'>Facebook</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  )
}
