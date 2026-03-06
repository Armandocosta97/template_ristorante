import SeoMeta from '../components/seo/SeoMeta'
import { businessName, contactInfo } from '../data/site'

function ContactPage() {
  const whatsappHref = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`

  return (
    <section className="content-page contact-page">
      <SeoMeta
        title="Contatti Ristorante | Indirizzo, Orari e Mappa"
        description="Contatta il ristorante: indirizzo completo, telefono, WhatsApp e link diretto a Google Maps per raggiungerci facilmente."
      />

      <h1>Contatti</h1>
      <div className="card">
        <h2>NAP (Name, Address, Phone)</h2>
        <p>
          <strong>{businessName}</strong>
        </p>
        <p>{contactInfo.address}</p>
        <p>
          <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
        </p>
        <p>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>
      </div>

      <div className="action-row" aria-label="Azioni contatto rapide">
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
          Google Maps
        </a>
      </div>

      <div className="contact-panel">
        <form className="card" aria-label="Form contatti">
          <h2>Scrivici</h2>
          <label htmlFor="contact-name">
            Nome
            <input id="contact-name" type="text" name="name" required />
          </label>
          <label htmlFor="contact-email">
            Email
            <input id="contact-email" type="email" name="email" required />
          </label>
          <label htmlFor="contact-message">
            Messaggio
            <textarea id="contact-message" name="message" rows={5} required />
          </label>
          <button className="btn btn--primary" type="submit">
            Invia richiesta
          </button>
        </form>

        <iframe
          title="Mappa contatti ristorante"
          src={contactInfo.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default ContactPage
