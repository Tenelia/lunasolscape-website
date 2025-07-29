'use client'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className='mt-4 text-xl text-white/90'>
              Please read these terms carefully before using our services.
            </p>
            <p className='mt-2 text-white/80'>Last updated: January 15, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 max-w-none'>
            <h2>1. Acceptance of Terms</h2>

            <p>
              By accessing and using LunaSolscape&apos;s website, mobile
              applications, and services (collectively, the
              &quot;Services&quot;), you accept and agree to be bound by the
              terms and provision of this agreement. If you do not agree to
              abide by the above, please do not use this service.
            </p>

            <h2>2. Description of Service</h2>

            <p>
              LunaSolscape provides an online marketplace for jewelry and
              accessories inspired by celestial themes. Our Services include:
            </p>
            <ul>
              <li>
                E-commerce platform for purchasing jewelry and accessories
              </li>
              <li>Product customization and personalization services</li>
              <li>Customer account management and order tracking</li>
              <li>
                Educational content about jewelry, gemstones, and celestial
                themes
              </li>
              <li>Customer support and after-sales services</li>
            </ul>

            <h2>3. User Accounts</h2>

            <h3>Account Creation</h3>
            <p>
              To access certain features of our Services, you may be required to
              create an account. You agree to provide accurate, current, and
              complete information during the registration process and to update
              such information to keep it accurate, current, and complete.
            </p>

            <h3>Account Security</h3>
            <p>
              You are responsible for safeguarding the password and for all
              activities that occur under your account. You agree to:
            </p>
            <ul>
              <li>Choose a strong, unique password</li>
              <li>Keep your login credentials confidential</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
              <li>Log out of your account at the end of each session</li>
            </ul>

            <h2>4. Orders and Payments</h2>

            <h3>Order Process</h3>
            <p>
              When you place an order through our Services, you are making an
              offer to purchase the products at the listed price. We reserve the
              right to accept or decline your order for any reason, including:
            </p>
            <ul>
              <li>Product availability</li>
              <li>Errors in product or pricing information</li>
              <li>Suspected fraudulent activity</li>
              <li>Inability to verify customer information</li>
            </ul>

            <h3>Pricing and Payment</h3>
            <p>
              All prices are displayed in USD and are subject to change without
              notice. Payment is due at the time of order placement. We accept
              major credit cards, PayPal, and other payment methods as indicated
              on our website.
            </p>

            <h3>Taxes and Fees</h3>
            <p>
              You are responsible for any applicable taxes, duties, or fees
              related to your purchase. These may be added to your order total
              at checkout based on your shipping address.
            </p>

            <h2>5. Shipping and Delivery</h2>

            <p>
              We ship to addresses within the United States and internationally
              to select countries. Shipping costs and estimated delivery times
              are provided at checkout. Risk of loss and title for products pass
              to you upon delivery to the shipping address you provide.
            </p>

            <h3>Shipping Delays</h3>
            <p>
              While we strive to meet our estimated delivery times, we are not
              responsible for delays caused by shipping carriers, customs
              processing, weather conditions, or other factors beyond our
              control.
            </p>

            <h2>6. Returns and Exchanges</h2>

            <h3>Return Policy</h3>
            <p>
              We accept returns of eligible items within 30 days of delivery. To
              be eligible for a return, items must be:
            </p>
            <ul>
              <li>In original condition with all tags and packaging</li>
              <li>Unworn and undamaged</li>
              <li>Not customized or personalized</li>
              <li>Returned with proof of purchase</li>
            </ul>

            <h3>Non-Returnable Items</h3>
            <p>Certain items cannot be returned, including:</p>
            <ul>
              <li>Custom or personalized jewelry</li>
              <li>Earrings (for hygiene reasons)</li>
              <li>Items damaged by misuse or normal wear</li>
              <li>Items returned after 30 days</li>
            </ul>

            <h3>Return Process</h3>
            <p>
              To initiate a return, contact our customer service team to receive
              a return authorization and shipping instructions. Return shipping
              costs are the responsibility of the customer unless the return is
              due to our error.
            </p>

            <h2>7. Product Information and Warranties</h2>

            <h3>Product Descriptions</h3>
            <p>
              We strive to provide accurate product descriptions, images, and
              specifications. However, we do not warrant that product
              descriptions or other content is accurate, complete, reliable,
              current, or error-free.
            </p>

            <h3>Limited Warranty</h3>
            <p>
              We provide a limited warranty against manufacturing defects for a
              period of one year from the date of purchase. This warranty does
              not cover:
            </p>
            <ul>
              <li>Normal wear and tear</li>
              <li>Damage caused by misuse, accidents, or improper care</li>
              <li>Damage from chemicals, perfumes, or lotions</li>
              <li>Loss of plating on fashion jewelry</li>
            </ul>

            <h2>8. Intellectual Property</h2>

            <p>
              All content on our Services, including but not limited to text,
              graphics, logos, images, audio clips, digital downloads, and
              software, is the property of LunaSolscape or its content suppliers
              and is protected by copyright, trademark, and other intellectual
              property laws.
            </p>

            <h3>Permitted Use</h3>
            <p>
              You may access and use our Services for personal, non-commercial
              purposes only. You may not:
            </p>
            <ul>
              <li>
                Reproduce, modify, or distribute our content without permission
              </li>
              <li>Use our trademarks or logos without authorization</li>
              <li>Reverse engineer or decompile our software</li>
              <li>Create derivative works based on our content</li>
            </ul>

            <h2>9. User Conduct</h2>

            <p>You agree not to use our Services to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our Services</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Spam or harass other users</li>
            </ul>

            <h2>10. Privacy</h2>

            <p>
              Your privacy is important to us. Our Privacy Policy explains how
              we collect, use, and protect your information when you use our
              Services. By using our Services, you consent to the collection and
              use of information in accordance with our Privacy Policy.
            </p>

            <h2>11. Limitation of Liability</h2>

            <p>
              To the fullest extent permitted by law, LunaSolscape shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, use, goodwill, or other intangible losses, resulting from
              your use of our Services.
            </p>

            <p>
              Our total liability for any claims arising from or related to our
              Services shall not exceed the amount you paid to us for the
              products or services in question during the 12 months preceding
              the claim.
            </p>

            <h2>12. Indemnification</h2>

            <p>
              You agree to defend, indemnify, and hold harmless LunaSolscape and
              its officers, directors, employees, and agents from and against
              any claims, damages, obligations, losses, liabilities, costs, or
              debt, and expenses (including attorney&apos;s fees) arising from:
            </p>
            <ul>
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit through our Services</li>
            </ul>

            <h2>13. Termination</h2>

            <p>
              We may terminate or suspend your account and access to our
              Services immediately, without prior notice or liability, for any
              reason, including if you breach these Terms. Upon termination,
              your right to use our Services will cease immediately.
            </p>

            <h2>14. Governing Law and Dispute Resolution</h2>

            <h3>Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Colorado, United States, without regard
              to its conflict of law provisions.
            </p>

            <h3>Dispute Resolution</h3>
            <p>
              Any disputes arising from or relating to these Terms or our
              Services shall be resolved through binding arbitration in
              accordance with the Commercial Arbitration Rules of the American
              Arbitration Association. The arbitration shall take place in
              Denver, Colorado.
            </p>

            <h2>15. Severability</h2>

            <p>
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest extent
              possible under applicable law, and the remaining provisions will
              continue in full force and effect.
            </p>

            <h2>16. Changes to Terms</h2>

            <p>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days&apos;
              notice prior to any new terms taking effect. What constitutes a
              material change will be determined at our sole discretion.
            </p>

            <p>
              By continuing to access or use our Services after any revisions
              become effective, you agree to be bound by the revised terms.
            </p>

            <h2>17. Contact Information</h2>

            <p>
              If you have any questions about these Terms, please contact us:
            </p>

            <div className='not-prose mt-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800'>
              <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                Contact Information
              </h3>
              <div className='mt-4 space-y-2 text-gray-700 dark:text-gray-300'>
                <p>
                  <strong>Email:</strong> legal@lunasolscape.com
                </p>
                <p>
                  <strong>Phone:</strong> 1-800-LUNA-SOL (1-800-586-2765)
                </p>
                <p>
                  <strong>Mailing Address:</strong>
                </p>
                <address className='ml-4 not-italic'>
                  LunaSolscape Legal Department
                  <br />
                  123 Celestial Avenue
                  <br />
                  Aurora, CO 80012
                  <br />
                  United States
                </address>
              </div>
            </div>

            <p className='mt-8 text-center text-sm text-gray-600 dark:text-gray-400'>
              © 2025 LunaSolscape. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
