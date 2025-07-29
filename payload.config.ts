import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp'
import path from 'path'

export default buildConfig({
  // Database adapter - PostgreSQL for production
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  
  collections: [
    // We'll define collections here
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      slug: 'products',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor(),
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'category',
          type: 'select',
          options: [
            { label: 'Necklaces', value: 'necklaces' },
            { label: 'Earrings', value: 'earrings' },
            { label: 'Rings', value: 'rings' },
            { label: 'Bracelets', value: 'bracelets' },
            { label: 'Sets', value: 'sets' },
          ],
          required: true,
        },
        {
          name: 'designer',
          type: 'text',
        },
        {
          name: 'collection',
          type: 'text',
        },
        {
          name: 'colors',
          type: 'array',
          fields: [
            {
              name: 'color',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'inStock',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'rating',
          type: 'number',
          min: 0,
          max: 5,
          defaultValue: 0,
        },
        {
          name: 'reviewCount',
          type: 'number',
          defaultValue: 0,
        },
        {
          name: 'sku',
          type: 'text',
          unique: true,
        },
        {
          name: 'variants',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              required: true,
            },
            {
              name: 'price',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      slug: 'media',
      upload: {
        staticDir: path.resolve(__dirname, './media'),
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 400,
            position: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'centre',
          },
          {
            name: 'tablet',
            width: 1024,
            height: undefined,
            position: 'centre',
          },
          {
            name: 'desktop',
            width: 1920,
            height: undefined,
            position: 'centre',
          },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      slug: 'orders',
      admin: {
        useAsTitle: 'id',
      },
      fields: [
        {
          name: 'customer',
          type: 'relationship',
          relationTo: 'users',
          required: true,
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'product',
              type: 'relationship',
              relationTo: 'products',
              required: true,
            },
            {
              name: 'quantity',
              type: 'number',
              required: true,
              min: 1,
            },
            {
              name: 'price',
              type: 'number',
              required: true,
            },
          ],
        },
        {
          name: 'total',
          type: 'number',
          required: true,
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'Processing', value: 'processing' },
            { label: 'Shipped', value: 'shipped' },
            { label: 'Delivered', value: 'delivered' },
            { label: 'Cancelled', value: 'cancelled' },
          ],
          defaultValue: 'pending',
        },
        {
          name: 'shippingAddress',
          type: 'group',
          fields: [
            { name: 'street', type: 'text', required: true },
            { name: 'city', type: 'text', required: true },
            { name: 'state', type: 'text', required: true },
            { name: 'zipCode', type: 'text', required: true },
            { name: 'country', type: 'text', required: true },
          ],
        },
        {
          name: 'trackingId',
          type: 'text',
        },
      ],
    },
  ],
  
  globals: [
    {
      slug: 'site',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'LunaSolscape',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Celestial-inspired jewelry and accessories',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'favicon',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],

  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- LunaSolscape Admin',
    },
  },

  editor: lexicalEditor(),
  
  sharp,
  
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  
  plugins: [
    // Additional plugins can be added here
  ],
})
