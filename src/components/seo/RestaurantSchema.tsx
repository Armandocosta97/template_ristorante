import { businessName, contactInfo, socialLinks } from '../../data/site'

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: businessName,
  servesCuisine: ['Italian'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Roma 123',
    addressLocality: 'Roma',
    postalCode: '00100',
    addressRegion: 'RM',
    addressCountry: 'IT',
  },
  telephone: contactInfo.phone,
  email: contactInfo.email,
  url: 'https://example.com',
  sameAs: socialLinks.map((social) => social.url),
  priceRange: 'EUR',
}

function RestaurantSchema() {
  return (
    <script type="application/ld+json">{JSON.stringify(restaurantSchema)}</script>
  )
}

export default RestaurantSchema
