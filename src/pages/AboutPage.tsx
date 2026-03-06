import SeoMeta from '../components/seo/SeoMeta'
import { contactInfo } from '../data/site'

const values = [
  {
    title: 'Territorio',
    text: 'Selezioniamo ingredienti di stagione da piccoli produttori locali, con una filiera il piu possibile tracciabile.',
  },
  {
    title: 'Tecnica',
    text: 'Cucina italiana contemporanea: basi tradizionali, cotture precise e impiattamenti puliti.',
  },
  {
    title: 'Accoglienza',
    text: 'Sala curata, servizio attento e ritmo rilassato per valorizzare la tua esperienza.',
  },
]

const story = [
  {
    year: '2018',
    text: 'Apertura del locale nel centro di Roma con una proposta dedicata alla cucina stagionale.',
  },
  {
    year: '2021',
    text: 'Ampliamento della carta vini e introduzione di menu degustazione su prenotazione.',
  },
  {
    year: '2025',
    text: 'Restyling della sala e potenziamento dei servizi per eventi privati e aziendali.',
  },
]

function AboutPage() {
  return (
    <section className="content-page about-page">
      <SeoMeta
        title="Chi Siamo | Ristorante a Roma"
        description="Scopri la storia, la filosofia e il team del nostro ristorante italiano contemporaneo nel centro di Roma."
      />

      <header className="about-hero">
        <div className="about-hero__image" aria-hidden="true" />
        <div className="about-hero__content">
          <p className="hero__eyebrow">Chi siamo</p>
          <h1>Una cucina italiana contemporanea costruita su materia prima e ospitalita</h1>
          <p>
            Ogni giorno lavoriamo per offrire piatti equilibrati, stagionali e
            riconoscibili, in un ambiente elegante ma informale.
          </p>
        </div>
      </header>

      <section className="home-section">
        <h2>La nostra filosofia</h2>
        <div className="grid-cards">
          {values.map((value) => (
            <article key={value.title} className="card about-value-card">
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>Il nostro percorso</h2>
        <div className="about-timeline">
          {story.map((step) => (
            <article key={step.year} className="about-timeline__item">
              <p className="about-timeline__year">{step.year}</p>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card about-cta">
        <h2>Vuoi organizzare una cena speciale?</h2>
        <p>
          Contattaci per prenotazioni, tavoli numerosi o richieste dedicate per
          eventi privati.
        </p>
        <div className="action-row">
          <a className="btn btn--primary" href={`tel:${contactInfo.phone}`}>
            Chiama il ristorante
          </a>
          <a className="btn btn--secondary" href="/contatti">
            Vai alla pagina contatti
          </a>
        </div>
      </section>
    </section>
  )
}

export default AboutPage
