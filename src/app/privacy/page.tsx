'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'

export default function PrivacyPage() {
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

  return (
    <main className='min-h-screen'>
      <Navbar />

      <div className='bg-white dark:bg-gray-900'>
        {/* Header */}
        <div className={`bg-gradient-to-r ${getThemeGradient()} py-16`}>
          <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold text-white lg:text-5xl'>
              Privacy Policy
            </h1>
            <p className='mt-4 text-xl text-white/90'>
              We respect your privacy and are committed to protecting your
              personal data.
            </p>
            <p className='mt-2 text-white/80'>Last updated: January 15, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 max-w-none'>
            <h2>1. Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, make a purchase, subscribe to our
              newsletter, or contact us. This may include:
            </p>
            <ul>
              <li>
                Name and contact information (email address, phone number,
                mailing address)
              </li>
              <li>Account credentials (username, password)</li>
              <li>
                Payment information (credit card details, billing address)
              </li>
              <li>
                Profile information (preferences, interests, jewelry size
                preferences)
              </li>
              <li>
                Communication data (messages you send us, customer service
                interactions)
              </li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website or use our mobile app, we automatically
              collect certain information:
            </p>
            <ul>
              <li>
                Device information (IP address, browser type, operating system)
              </li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>
                Location data (general geographic location based on IP address)
              </li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>2. How We Use Your Information</h2>

            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Provide customer service and support</li>
              <li>
                Send you product updates, marketing communications, and
                promotional offers
              </li>
              <li>
                Personalize your shopping experience and product recommendations
              </li>
              <li>Improve our website, products, and services</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>

            <p>
              We do not sell, rent, or share your personal information with
              third parties except:
            </p>

            <h3>Service Providers</h3>
            <p>
              We may share your information with trusted third-party service
              providers who help us operate our business, including:
            </p>
            <ul>
              <li>Payment processors</li>
              <li>Shipping and logistics partners</li>
              <li>Email marketing platforms</li>
              <li>Analytics and advertising services</li>
              <li>Customer service platforms</li>
            </ul>

            <h3>Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, court order,
              or government request, or to protect our rights, property, or
              safety.
            </p>

            <h3>Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of the transaction.
            </p>

            <h2>4. Data Security</h2>

            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. These include:
            </p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and employee training</li>
              <li>Payment Card Industry (PCI) compliance for payment data</li>
            </ul>

            <h2>5. Cookies and Tracking Technologies</h2>

            <p>
              We use cookies and similar technologies to enhance your browsing
              experience. You can control cookie settings through your browser
              preferences. Our cookies include:
            </p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> Required for website
                functionality
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand website
                usage
              </li>
              <li>
                <strong>Marketing cookies:</strong> Enable personalized
                advertising
              </li>
              <li>
                <strong>Preference cookies:</strong> Remember your settings and
                choices
              </li>
            </ul>

            <h2>6. Your Rights and Choices</h2>

            <p>
              You have the following rights regarding your personal information:
            </p>

            <h3>Access and Portability</h3>
            <p>Request a copy of the personal information we hold about you.</p>

            <h3>Correction</h3>
            <p>Update or correct inaccurate personal information.</p>

            <h3>Deletion</h3>
            <p>
              Request deletion of your personal information, subject to certain
              legal and business requirements.
            </p>

            <h3>Opt-out</h3>
            <p>
              Unsubscribe from marketing communications at any time by clicking
              the unsubscribe link in our emails or contacting us directly.
            </p>

            <h3>Data Processing Restrictions</h3>
            <p>
              Request limitations on how we process your personal information.
            </p>

            <h2>7. International Data Transfers</h2>

            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your information when transferred internationally,
              including:
            </p>
            <ul>
              <li>Adequacy decisions by relevant authorities</li>
              <li>Standard contractual clauses</li>
              <li>Binding corporate rules</li>
            </ul>

            <h2>8. Data Retention</h2>

            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this privacy policy, unless a
              longer retention period is required by law. Factors that influence
              retention periods include:
            </p>
            <ul>
              <li>The nature of the information</li>
              <li>Legal and regulatory requirements</li>
              <li>Business and operational needs</li>
              <li>Your relationship with us</li>
            </ul>

            <h2>9. Children&apos;s Privacy</h2>

            <p>
              Our services are not intended for children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13. If we become aware that we have collected personal
              information from a child under 13, we will take steps to delete
              such information.
            </p>

            <h2>10. Third-Party Links</h2>

            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies before providing
              any personal information.
            </p>

            <h2>11. Updates to This Policy</h2>

            <p>
              We may update this privacy policy from time to time to reflect
              changes in our practices or legal requirements. We will notify you
              of any material changes by:
            </p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending you an email notification</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>

            <h2>12. Contact Us</h2>

            <p>
              If you have any questions about this privacy policy or our data
              practices, please contact us:
            </p>

            <div className='not-prose mt-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800'>
              <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                Contact Information
              </h3>
              <div className='mt-4 space-y-2 text-gray-700 dark:text-gray-300'>
                <p>
                  <strong>Email:</strong> privacy@lunasolscape.com
                </p>
                <p>
                  <strong>Phone:</strong> 1-800-LUNA-SOL (1-800-586-2765)
                </p>
                <p>
                  <strong>Mailing Address:</strong>
                </p>
                <address className='ml-4 not-italic'>
                  LunaSolscape Privacy Office
                  <br />
                  123 Celestial Avenue
                  <br />
                  Aurora, CO 80012
                  <br />
                  United States
                </address>
              </div>
            </div>

            <p className='mt-8 text-sm text-gray-600 dark:text-gray-400'>
              <strong>Data Protection Officer:</strong> For EU residents, you
              may also contact our Data Protection Officer at
              dpo@lunasolscape.com for privacy-related inquiries.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
