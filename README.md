# LunaSolscape E-commerce Website

A modern, dynamic e-commerce platform for tastefully designed accessories and jewelry, featuring a unique celestial-inspired aesthetic and innovative color gradient sorting system.

## Project Overview

LunaSolscape.com is designed to be the premier online destination for curated accessories and jewelry across all price segments. The platform offers an immersive shopping experience inspired by the celestial and natural world, featuring dynamic light/dark mode transitions that mirror the progression from sunrise to sunset, and moonrise to moonset. The original intent was to make this an ecommerce template that is easy to edit.

## Key Features

### Core E-commerce Functionality
- **Product Catalog Management**: product browsing, search, and filtering
- **Shopping Cart & Checkout**: Secure purchasing flow with multiple payment options
- **Customer Account Management**: SSO integration with Google, Apple, Facebook, and Microsoft (pending)
- **Order Management**: Real-time shipping tracking and automated order updates (pending)
- **Mobile-Responsive Design**: Optimized for all devices and screen sizes(pending)

### Unique Brand Features
- **Color Gradient Sorting**: product sorting by color in beautiful gradients from sunrise to moonset
- **Dynamic Theme System**: Smooth transitions between light and dark modes with celestial-inspired color palettes
- **Curated Collections**: Thoughtfully organized product categories and designer collections
- **Brand Blog**: Markdown-supported content management for brand storytelling

### Technical Features
- **Payment Integration**: Stripe, PayPal, and GrabPay support (pending)
- **Shipping Integration**: FedEx, DHL, USPS API integration for automated tracking (pending)
- **Admin Dashboard**: Powered by Payload CMS for content and product management (pending)
- **SEO Optimized**: Built with Next.js for optimal performance and search visibility

## Technology Stack

### Frontend
- **Next.js 15.4.4**: React-based framework with server-side rendering
- **TailwindCSS 4.1**: Utility-first CSS framework for responsive design
- **React 19.1**: Modern React with latest features
- **TypeScript 5.7**: Type-safe development environment

### Backend & CMS
- **Payload CMS 3.49**: Headless CMS for content and product management
- **PostgreSQL**: Relational database for core e-commerce data
- **GraphQL**: API layer for efficient data querying

### Development Tools
- **ESLint & Prettier**: Code quality and formatting
- **PostCSS**: CSS processing and optimization
- **Sharp**: Image optimization and processing

## Getting Started

### Prerequisites
- Node.js 22+ 
- npm or yarn package manager
- PostgreSQL database (for Payload CMS features)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lunasolscape-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local

# Configure your environment variables:
# - DATABASE_URI (for Payload CMS)
# - Payment gateway API keys
# - Shipping carrier API keys
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run build:vercel`: Build for Vercel deployment (skips Payload build)
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix ESLint issues
- `npm run format`: Format code with Prettier
- `npm run format:check`: Check code formatting
- `npm run type-check`: Run TypeScript type checking
- `npm run generate:types`: Generate Payload CMS types (requires DATABASE_URI)

## Project Structure

```
lunasolscape-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (payload)/         # Payload CMS routes
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog pages
│   │   ├── cart/              # Shopping cart
│   │   ├── checkout/          # Checkout flow
│   │   ├── products/          # Product pages
│   │   └── ...                # Other pages
│   ├── components/            # Reusable React components
│   │   ├── AnimatedBackground.tsx
│   │   ├── ColorGradientShowcase.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── contexts/              # React contexts
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── payload.config.ts         # Payload CMS configuration
├── tailwind.config.js        # TailwindCSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Key Components

### AnimatedBackground
Dynamic background component that creates the celestial atmosphere with smooth color transitions.

### ColorGradientShowcase
Demonstrates the unique color sorting feature that organizes products in beautiful gradients.

### Hero
Main landing section with brand messaging and call-to-action.

### ThemeProvider
Manages the dynamic light/dark mode system with celestial-inspired color palettes.

## Deployment

### Vercel (Recommended)
The project is optimized for Vercel deployment with automatic builds and deployments:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

## Features Roadmap

### Current MVP (v0.1)
- Core e-commerce functionality
- Customer account management with SSO
- Payment gateway integration
- Basic shipping tracking
- Product catalog management
- Blog with Markdown support
- Dynamic color gradient sorting
- Mobile-responsive design

### Future Enhancements
- Augmented Reality (AR) try-on features
- Multi-language support (Chinese prioritized)
- Loyalty and referral programs
- Advanced personalization with ML recommendations
- User-generated content and reviews
- Marketplace integrations (Alibaba, TikTok Shop, Instagram)

## Performance

- **Page Load Times**: Under 2 seconds for critical paths
- **Mobile Optimization**: Fully responsive across all devices
- **SEO**: Optimized for search engines with Next.js SSR
- **Accessibility**: WCAG 2.1 AA compliant

## Security

- Industry-standard encryption for data at rest and in transit
- Secure payment processing with PCI compliance
- GDPR and CCPA compliant data handling
- Regular security audits and updates

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## Code Quality

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features
- Document complex functionality

## License

This project is licensed under the terms specified in the LICENSE file.

## Acknowledgments

- Built with Next.js and the React ecosystem
- UI components powered by TailwindCSS
- Content management by Payload CMS
- Inspired by Mosquito Killer