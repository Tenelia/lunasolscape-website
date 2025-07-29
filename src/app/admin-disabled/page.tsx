import Link from 'next/link'

export default function AdminDisabledPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <svg 
            className="mx-auto h-24 w-24 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Admin Panel Unavailable
        </h1>
        
        <p className="text-gray-600 mb-6">
          The admin panel is currently disabled for this deployment. 
          To enable CMS functionality, please configure the database connection.
        </p>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            This is a static deployment of LunaSolscape showcasing the frontend experience.
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}