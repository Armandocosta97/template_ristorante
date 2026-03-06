import { useState } from 'react'

const COOKIE_KEY = 'cookie-consent'

type Consent = 'accepted' | 'rejected' | null

function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(() => {
    const saved = window.localStorage.getItem(COOKIE_KEY)
    return saved === 'accepted' || saved === 'rejected' ? saved : null
  })

  if (consent) {
    return null
  }

  const handleConsent = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(COOKIE_KEY, value)
    setConsent(value)
  }

  return (
    <aside className="cookie-banner" aria-live="polite" aria-label="Gestione cookie">
      <p>
        Usiamo cookie tecnici per il funzionamento del sito. Maggiori dettagli in{' '}
        <a href="/cookie">Cookie policy</a>.
      </p>
      <div className="cookie-banner__actions">
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => handleConsent('rejected')}
        >
          Rifiuta
        </button>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => handleConsent('accepted')}
        >
          Accetta
        </button>
      </div>
    </aside>
  )
}

export default CookieBanner
