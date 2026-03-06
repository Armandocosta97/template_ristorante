import { businessHours, businessName, contactInfo, socialLinks } from '../../data/site'

const SocialIcon = ({ label }: { label: string }) => {
  if (label === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm8.2 2H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm-4 3.8A5.2 5.2 0 1 1 6.8 13 5.2 5.2 0 0 1 12 7.8Zm0 2A3.2 3.2 0 1 0 15.2 13 3.2 3.2 0 0 0 12 9.8Zm5.6-3.1a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M13.5 22v-7h2.3l.5-3h-2.8V9.7c0-.9.3-1.5 1.6-1.5h1.3V5.6a16.2 16.2 0 0 0-2.3-.2c-2.3 0-3.9 1.4-3.9 4V12H8v3h2.2v7h3.3Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <section>
          <h2>Contatti</h2>
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
        </section>

        <section>
          <h2>Orari</h2>
          <ul>
            {businessHours.map((slot) => (
              <li key={slot.day}>
                <strong>{slot.day}:</strong> {slot.hours}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Social</h2>
          <ul className="social-list">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  className="social-icon-link"
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <SocialIcon label={social.label} />
                  <span className="sr-only">{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Legale</h2>
          <ul>
            <li>
              <a href="/privacy">Privacy policy</a>
            </li>
            <li>
              <a href="/cookie">Cookie policy</a>
            </li>
            <li>Disclaimer allergeni disponibile nella pagina menu.</li>
            <li>P.IVA: 00000000000</li>
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer
