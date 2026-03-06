import SeoMeta from '../components/seo/SeoMeta'
import { contactInfo } from '../data/site'

const eventTypes = [
  {
    title: 'Eventi aziendali',
    text: 'Business lunch, cene team e serate cliente con menu dedicati e gestione tempi servizio.',
  },
  {
    title: 'Occasioni private',
    text: 'Compleanni, anniversari e cene di famiglia con proposta personalizzata per gruppi.',
  },
  {
    title: 'Piccole cerimonie',
    text: 'Mise en place curata, opzioni vegetariane e supporto sull\'organizzazione della serata.',
  },
]

const packages = [
  {
    name: 'Formula Classica',
    details: 'Antipasto, primo, secondo, dolce e acqua inclusa.',
    price: 'da 45 EUR / persona',
  },
  {
    name: 'Formula Degustazione',
    details: 'Percorso 5 portate stagionali con abbinamento vini opzionale.',
    price: 'da 65 EUR / persona',
  },
  {
    name: 'Formula Personalizzata',
    details: 'Menu costruito su budget, tipologia evento e preferenze ospiti.',
    price: 'preventivo su richiesta',
  },
]

const processSteps = [
  'Contatto iniziale: data, numero ospiti e tipologia evento',
  'Proposta menu e definizione allestimento sala',
  'Conferma prenotazione e dettagli finali (allergie, orari, richieste speciali)',
]

function EventsPage() {
  const whatsappHref = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`

  return (
    <section className="content-page events-page">
      <SeoMeta
        title="Eventi Privati | Ristorante a Roma"
        description="Organizza eventi privati o aziendali nel nostro ristorante a Roma con menu dedicati e supporto personalizzato."
      />

      <header className="events-hero">
        <div className="events-hero__image" aria-hidden="true" />
        <div className="events-hero__content">
          <p className="hero__eyebrow">Eventi e privati</p>
          <h1>Spazi, menu e servizio per eventi su misura</h1>
          <p>
            Organizziamo cene aziendali, compleanni e piccoli eventi privati con
            formule flessibili e supporto dedicato.
          </p>
          <div className="action-row" aria-label="Azioni eventi">
            <a
              className="btn btn--primary"
              href={`tel:${contactInfo.phone}`}
              aria-label="Chiama per prenotare un evento privato"
            >
              Chiama per eventi
            </a>
            <a
              className="btn btn--whatsapp"
              href={whatsappHref}
              aria-label="Contatta il ristorante su WhatsApp per eventi"
            >
              WhatsApp eventi
            </a>
          </div>
        </div>
      </header>

      <section className="home-section">
        <h2>Tipologie di evento</h2>
        <div className="grid-cards">
          {eventTypes.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>Formule disponibili</h2>
        <div className="grid-cards">
          {packages.map((item) => (
            <article key={item.name} className="card card--event-package">
              <h3>{item.name}</h3>
              <p>{item.details}</p>
              <p className="event-package__price">{item.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Come funziona</h2>
        <ol className="events-process">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="card">
        <h2>Domande frequenti</h2>
        <div className="events-faq">
          <p>
            <strong>Quanti ospiti possiamo accogliere?</strong> Fino a 40 ospiti
            in configurazione tavolo unico o gruppi.
          </p>
          <p>
            <strong>Gestite esigenze alimentari?</strong> Si, con preavviso
            prepariamo alternative vegetariane e senza glutine.
          </p>
          <p>
            <strong>Serve una caparra?</strong> Per eventi privati chiediamo una
            conferma anticipata al momento della prenotazione.
          </p>
        </div>
      </section>
    </section>
  )
}

export default EventsPage
