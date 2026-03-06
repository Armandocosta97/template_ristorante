import { contactInfo } from '../../data/site'

function QuickActions() {
  const whatsappHref = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`

  return (
    <div className="quick-actions" aria-label="Azioni rapide mobile">
      <a
        className="btn btn--primary quick-actions__btn"
        href={`tel:${contactInfo.phone}`}
        aria-label="Chiama il ristorante"
      >
        Chiama
      </a>
      <a
        className="btn btn--secondary quick-actions__btn"
        href={whatsappHref}
        aria-label="Contatta il ristorante su WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default QuickActions
