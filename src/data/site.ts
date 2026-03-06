export type NavItem = {
  label: string
  href: string
}

export type ContactInfo = {
  phone: string
  whatsapp: string
  email: string
  address: string
  mapsUrl: string
  mapsEmbedUrl: string
}

export type BusinessHours = {
  day: string
  hours: string
}

export type SocialLink = {
  label: string
  url: string
}

export type MenuPreviewItem = {
  name: string
  category: string
  price: string
}

export type HighlightItem = {
  title: string
  description: string
}

export type GalleryItem = {
  src: string
  alt: string
}

export type ReviewItem = {
  author: string
  text: string
  rating: number
  avatar: string
}

export type DietaryTag = 'veg' | 'vegan' | 'gluten-free'

export type MenuItem = {
  name: string
  description: string
  price: string
  allergens: string[]
  tags: DietaryTag[]
}

export type MenuSection = {
  title: string
  items: MenuItem[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Chi siamo', href: '/chi-siamo' },
  { label: 'Contatti', href: '/contatti' },
  { label: 'Eventi', href: '/eventi' },
]

export const businessName = 'Ristorante'

export const contactInfo: ContactInfo = {
  phone: '+39 000 000 0000',
  whatsapp: '+39 000 000 0000',
  email: 'info@ristorante.it',
  address: 'Via Roma 123, 00100 Roma (RM)',
  mapsUrl: 'https://maps.google.com/?q=Via+Roma+123+Roma',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Via+Roma+123+Roma&output=embed',
}

export const businessHours: BusinessHours[] = [
  { day: 'Lunedi', hours: '12:00 - 15:00 / 19:00 - 23:00' },
  { day: 'Martedi', hours: '12:00 - 15:00 / 19:00 - 23:00' },
  { day: 'Mercoledi', hours: '12:00 - 15:00 / 19:00 - 23:00' },
  { day: 'Giovedi', hours: '12:00 - 15:00 / 19:00 - 23:00' },
  { day: 'Venerdi', hours: '12:00 - 15:00 / 19:00 - 23:30' },
  { day: 'Sabato', hours: '12:00 - 15:30 / 19:00 - 23:30' },
  { day: 'Domenica', hours: '12:00 - 15:30' },
]

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', url: 'https://instagram.com' },
  { label: 'Facebook', url: 'https://facebook.com' },
]

export const highlights: HighlightItem[] = [
  {
    title: 'Ingredienti selezionati',
    description: 'Lavoriamo con fornitori locali e materie prime stagionali.',
  },
  {
    title: 'Cucina espressa',
    description: 'Ogni piatto viene preparato al momento dal nostro team di cucina.',
  },
  {
    title: 'Carta vini curata',
    description: 'Etichette regionali e nazionali abbinate ai piatti del menu.',
  },
]

export const menuPreview: MenuPreviewItem[] = [
  { name: 'Tagliolini al tartufo', category: 'Primi', price: '18 EUR' },
  { name: 'Filetto alla griglia', category: 'Secondi', price: '26 EUR' },
  { name: 'Tiramisu della casa', category: 'Dolci', price: '8 EUR' },
]

export const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Tavolo apparecchiato con piatti in ristorante',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Piatti serviti su tavolo in locale moderno',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Interno ristorante con atmosfera calda',
  },
  {
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Piatto gourmet con ingredienti freschi',
  },
  {
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pasta fresca impiattata in primo piano',
  },
  {
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cena tra amici in ristorante',
  },
]

export const reviews: ReviewItem[] = [
  {
    author: 'Giulia R.',
    text: 'Cena eccellente, servizio attento e atmosfera elegante ma rilassata.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    author: 'Marco T.',
    text: 'Menu bilanciato e materie prime ottime. Tornero con amici.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    author: 'Elena P.',
    text: 'Ottima esperienza, specialmente i primi e la carta dei vini.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
]

export const menuSections: MenuSection[] = [
  {
    title: 'Antipasti',
    items: [
      {
        name: 'Carpaccio di manzo',
        description: 'Rucola, scaglie di grana e citronette',
        price: '14 EUR',
        allergens: ['latte'],
        tags: ['gluten-free'],
      },
      {
        name: 'Parmigiana di melanzane',
        description: 'Melanzane al forno, pomodoro e basilico',
        price: '12 EUR',
        allergens: ['latte'],
        tags: ['veg'],
      },
    ],
  },
  {
    title: 'Primi',
    items: [
      {
        name: 'Tagliolini al tartufo',
        description: 'Pasta fresca, burro montato e tartufo nero',
        price: '18 EUR',
        allergens: ['glutine', 'uova', 'latte'],
        tags: ['veg'],
      },
      {
        name: 'Risotto ai funghi porcini',
        description: 'Riso carnaroli, porcini e prezzemolo',
        price: '17 EUR',
        allergens: ['latte'],
        tags: ['veg', 'gluten-free'],
      },
    ],
  },
  {
    title: 'Secondi',
    items: [
      {
        name: 'Filetto alla griglia',
        description: 'Riduzione al vino rosso e verdure saltate',
        price: '26 EUR',
        allergens: [],
        tags: ['gluten-free'],
      },
      {
        name: 'Trancio di salmone',
        description: 'Salmone scottato con crema di zucchine',
        price: '23 EUR',
        allergens: ['pesce'],
        tags: ['gluten-free'],
      },
    ],
  },
  {
    title: 'Dolci',
    items: [
      {
        name: 'Tiramisu della casa',
        description: 'Savoiardi, mascarpone e caffee',
        price: '8 EUR',
        allergens: ['glutine', 'uova', 'latte'],
        tags: ['veg'],
      },
      {
        name: 'Sorbetto al limone',
        description: 'Sorbetto artigianale al limone',
        price: '6 EUR',
        allergens: [],
        tags: ['vegan', 'gluten-free'],
      },
    ],
  },
]
