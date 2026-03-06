import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import {
  contactInfo,
  galleryItems,
  highlights,
  menuPreview,
  reviews,
} from '../data/site'
import SeoMeta from '../components/seo/SeoMeta'

type DailySpecial = {
  name: string
  description: string
  price: string
}

const menuPreviewBackgrounds: Record<string, string> = {
  'Tagliolini al tartufo':
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=80',
  'Filetto alla griglia':
    'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80',
  'Tiramisu della casa':
    'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=80',
}

const highlightBackgrounds: Record<string, string> = {
  'Ingredienti selezionati':
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
  'Cucina espressa':
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80',
  'Carta vini curata':
    'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1000&q=80',
}

function HomePage() {
  const whatsappHref = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`
  const [dailySpecials, setDailySpecials] = useState<DailySpecial[]>([])

  useEffect(() => {
    const loadDailySpecials = async () => {
      try {
        const response = await fetch('/daily-specials.json')

        if (!response.ok) {
          return
        }

        const data = (await response.json()) as DailySpecial[]
        setDailySpecials(data)
      } catch {
        setDailySpecials([])
      }
    }

    void loadDailySpecials()
  }, [])

  return (
    <div className="home-page">
      <SeoMeta
        title="Ristorante | Cucina Italiana a Roma"
        description="Ristorante italiano a Roma: menu stagionale, recensioni, mappa e prenotazioni rapide via telefono o WhatsApp."
      />

      <section className="hero">
        <div className="hero__image" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__eyebrow">Cucina italiana contemporanea</p>
          <h1>Un ristorante dove gusto, tecnica e accoglienza si incontrano</h1>
          <p>
            Prenotazioni rapide via telefono o WhatsApp. Aperto pranzo e cena nel
            cuore di Roma.
          </p>
          <div className="action-row" aria-label="Azioni rapide hero">
            <a
              className="btn btn--primary"
              href={`tel:${contactInfo.phone}`}
              aria-label="Chiama ora il ristorante"
            >
              Chiama ora
            </a>
            <a
              className="btn btn--whatsapp"
              href={whatsappHref}
              aria-label="Scrivi al ristorante su WhatsApp"
            >
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="home-content">
        <section className="home-section">
          <h2>Punti di forza</h2>
          <div className="grid-cards">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="card card--highlight"
                style={
                  {
                    '--highlight-bg': `url('${highlightBackgrounds[item.title]}')`,
                  } as CSSProperties
                }
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="section-head">
            <h2>Anteprima menu</h2>
            <a className="btn btn--secondary" href="/menu">
              Vedi menu completo
            </a>
          </div>
          <div className="grid-cards">
            {menuPreview.map((item) => (
              <article
                key={item.name}
                className="card card--menu"
                style={
                  {
                    '--menu-bg': `url('${menuPreviewBackgrounds[item.name]}')`,
                  } as CSSProperties
                }
              >
                <p className="menu-category">{item.category}</p>
                <h3>{item.name}</h3>
                <p className="menu-price">{item.price}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="section-head">
            <h2>Piatti del giorno</h2>
            <span className="daily-badge">Aggiornati oggi</span>
          </div>
          <div className="grid-cards">
            {dailySpecials.map((item) => (
              <article key={item.name} className="card">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="event-package__price">{item.price}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section">
          <h2>Galleria</h2>
          <div className="gallery-grid">
            {galleryItems.map((image) => (
              <figure key={image.src} className="gallery-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="home-section">
          <h2>Recensioni</h2>
          <div className="grid-cards">
            {reviews.map((review) => (
              <article key={review.author} className="card review-card">
                <div className="review-head">
                  <img
                    className="review-avatar"
                    src={review.avatar}
                    alt={`Profilo di ${review.author}`}
                    loading="lazy"
                    decoding="async"
                    width={52}
                    height={52}
                  />
                  <div className="review-meta">
                    <p className="review-author">{review.author}</p>
                    <p className="review-source">Recensione Google</p>
                  </div>
                </div>
                <p className="review-rating" aria-label={`Valutazione ${review.rating} su 5`}>
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </p>
                <p>{review.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section contact-panel">
          <div>
            <h2>Contatti e mappa</h2>
            <p>{contactInfo.address}</p>
            <div className="action-row" aria-label="Azioni contatti">
              <a
                className="btn btn--primary"
                href={`tel:${contactInfo.phone}`}
                aria-label="Chiama il ristorante"
              >
                Chiama
              </a>
              <a
                className="btn btn--secondary"
                href={whatsappHref}
                aria-label="Contatta il ristorante su WhatsApp"
              >
                WhatsApp
              </a>
              <a
                className="btn btn--secondary"
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Apri Google Maps
              </a>
            </div>
          </div>
          <iframe
            title="Mappa ristorante"
            src={contactInfo.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </div>
  )
}

export default HomePage
