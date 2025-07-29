'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'
import { useState } from 'react'

interface UserProfile {
  name: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  preferences: {
    emailNotifications: boolean
    smsNotifications: boolean
    marketingEmails: boolean
  }
}

export default function ProfilePage() {
  const { themeMode } = useTheme()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Luna Starlight',
    email: 'luna@example.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Celestial Way',
      city: 'Moonbeam',
      state: 'CA',
      zipCode: '90210',
      country: 'United States',
    },
    preferences: {
      emailNotifications: true,
      smsNotifications: false,
      marketingEmails: true,
    },
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

  const handleInputChange = (field: string, value: string | boolean) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setProfile(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof UserProfile] as Record<
            string,
            string | boolean
          >),
          [child]: value,
        },
      }))
    } else {
      setProfile(prev => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  const handleSave = () => {
    // TODO: Save profile changes to backend
    setIsEditing(false)
  }

  const mockOrders = [
    {
      id: '1',
      date: '2024-01-15',
      status: 'Delivered',
      total: 189.99,
      items: 2,
    },
    {
      id: '2',
      date: '2024-01-20',
      status: 'Shipped',
      total: 299.5,
      items: 1,
    },
    {
      id: '3',
      date: '2024-01-25',
      status: 'Processing',
      total: 125.0,
      items: 3,
    },
  ]

  return (
    <main className='min-h-screen'>
      <Navbar />

      <div className='bg-gray-50 py-12 dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800'>
            {/* Profile Header */}
            <div
              className={`bg-gradient-to-r ${getThemeGradient()} px-4 py-5 sm:px-6`}
            >
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white'>
                    <span className='text-2xl font-bold text-gray-600'>
                      {profile.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </span>
                  </div>
                </div>
                <div className='ml-4'>
                  <h1 className='text-2xl font-bold text-white'>
                    {profile.name}
                  </h1>
                  <p className='text-white/80'>{profile.email}</p>
                </div>
                <div className='ml-auto'>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className='rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className='px-4 py-5 sm:p-6'>
              <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                {/* Profile Information */}
                <div className='lg:col-span-2'>
                  <div className='space-y-6'>
                    <div>
                      <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white'>
                        Personal Information
                      </h3>
                      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                            Full Name
                          </label>
                          {isEditing ? (
                            <input
                              type='text'
                              value={profile.name}
                              onChange={e =>
                                handleInputChange('name', e.target.value)
                              }
                              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                            />
                          ) : (
                            <p className='mt-1 text-sm text-gray-900 dark:text-gray-100'>
                              {profile.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                            Phone Number
                          </label>
                          {isEditing ? (
                            <input
                              type='tel'
                              value={profile.phone}
                              onChange={e =>
                                handleInputChange('phone', e.target.value)
                              }
                              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                            />
                          ) : (
                            <p className='mt-1 text-sm text-gray-900 dark:text-gray-100'>
                              {profile.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white'>
                        Address
                      </h3>
                      <div className='mt-4 grid grid-cols-1 gap-4'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                            Street Address
                          </label>
                          {isEditing ? (
                            <input
                              type='text'
                              value={profile.address.street}
                              onChange={e =>
                                handleInputChange(
                                  'address.street',
                                  e.target.value
                                )
                              }
                              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                            />
                          ) : (
                            <p className='mt-1 text-sm text-gray-900 dark:text-gray-100'>
                              {profile.address.street}
                            </p>
                          )}
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                          <div>
                            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                              City
                            </label>
                            {isEditing ? (
                              <input
                                type='text'
                                value={profile.address.city}
                                onChange={e =>
                                  handleInputChange(
                                    'address.city',
                                    e.target.value
                                  )
                                }
                                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                              />
                            ) : (
                              <p className='mt-1 text-sm text-gray-900 dark:text-gray-100'>
                                {profile.address.city}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                              State / Province
                            </label>
                            {isEditing ? (
                              <input
                                type='text'
                                value={profile.address.state}
                                onChange={e =>
                                  handleInputChange(
                                    'address.state',
                                    e.target.value
                                  )
                                }
                                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                              />
                            ) : (
                              <p className='mt-1 text-sm text-gray-900 dark:text-gray-100'>
                                {profile.address.state}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                          <div>
                            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                              ZIP / Postal Code
                            </label>
                            {isEditing ? (
                              <input
                                type='text'
                                value={profile.address.zipCode}
                                onChange={e =>
                                  handleInputChange(
                                    'address.zipCode',
                                    e.target.value
                                  )
                                }
                                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                              />
                            ) : (
                              <p className='mt-1 text-sm text-gray-900 dark:text-gray-100'>
                                {profile.address.zipCode}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                              Country
                            </label>
                            {isEditing ? (
                              <input
                                type='text'
                                value={profile.address.country}
                                onChange={e =>
                                  handleInputChange(
                                    'address.country',
                                    e.target.value
                                  )
                                }
                                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                              />
                            ) : (
                              <p className='mt-1 text-sm text-gray-900 dark:text-gray-100'>
                                {profile.address.country}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white'>
                        Preferences
                      </h3>
                      <div className='mt-4 space-y-4'>
                        <div className='flex items-center'>
                          <input
                            id='email-notifications'
                            type='checkbox'
                            checked={profile.preferences.emailNotifications}
                            onChange={e =>
                              handleInputChange(
                                'preferences.emailNotifications',
                                e.target.checked
                              )
                            }
                            disabled={!isEditing}
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='email-notifications'
                            className='ml-2 block text-sm text-gray-900 dark:text-gray-100'
                          >
                            Email notifications for order updates
                          </label>
                        </div>

                        <div className='flex items-center'>
                          <input
                            id='sms-notifications'
                            type='checkbox'
                            checked={profile.preferences.smsNotifications}
                            onChange={e =>
                              handleInputChange(
                                'preferences.smsNotifications',
                                e.target.checked
                              )
                            }
                            disabled={!isEditing}
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='sms-notifications'
                            className='ml-2 block text-sm text-gray-900 dark:text-gray-100'
                          >
                            SMS notifications
                          </label>
                        </div>

                        <div className='flex items-center'>
                          <input
                            id='marketing-emails'
                            type='checkbox'
                            checked={profile.preferences.marketingEmails}
                            onChange={e =>
                              handleInputChange(
                                'preferences.marketingEmails',
                                e.target.checked
                              )
                            }
                            disabled={!isEditing}
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='marketing-emails'
                            className='ml-2 block text-sm text-gray-900 dark:text-gray-100'
                          >
                            Marketing emails and promotions
                          </label>
                        </div>
                      </div>
                    </div>

                    {isEditing && (
                      <div className='flex justify-end space-x-3'>
                        <button
                          onClick={() => setIsEditing(false)}
                          className='rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300'
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className={`rounded-md bg-gradient-to-r ${getThemeGradient()} px-4 py-2 text-sm font-medium text-white hover:opacity-90`}
                        >
                          Save Changes
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Order History Sidebar */}
                <div>
                  <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white'>
                    Recent Orders
                  </h3>
                  <div className='mt-4 space-y-4'>
                    {mockOrders.map(order => (
                      <div
                        key={order.id}
                        className='rounded-lg border border-gray-200 p-4 dark:border-gray-700'
                      >
                        <div className='flex items-center justify-between'>
                          <div>
                            <p className='text-sm font-medium text-gray-900 dark:text-white'>
                              Order #{order.id}
                            </p>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                              {order.date}
                            </p>
                          </div>
                          <div className='text-right'>
                            <p className='text-sm font-medium text-gray-900 dark:text-white'>
                              ${order.total}
                            </p>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                              {order.items} items
                            </p>
                          </div>
                        </div>
                        <div className='mt-2'>
                          <span
                            className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                              order.status === 'Delivered'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'Shipped'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}

                    <button className='w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300'>
                      View All Orders
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
