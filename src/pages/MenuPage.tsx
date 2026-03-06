import SeoMeta from '../components/seo/SeoMeta'
import { menuSections } from '../data/site'
import type { DietaryTag } from '../data/site'

const tagLabel: Record<DietaryTag, string> = {
  veg: 'VEG',
  vegan: 'VEGAN',
  'gluten-free': 'GLUTEN FREE',
}

const allergenLabel: Record<string, string> = {
  glutine: 'Glutine',
  latte: 'Latte',
  uova: 'Uova',
  pesce: 'Pesce',
}

const toSectionId = (title: string) =>
  `menu-${title.toLowerCase().replace(/\s+/g, '-')}`

function MenuPage() {
  const menuPageUrl = encodeURIComponent('https://example.com/menu')

  return (
    <section className="menu-page">
      <SeoMeta
        title="Menu Ristorante | Piatti, Prezzi e Allergeni"
        description="Consulta il menu del ristorante con categorie, prezzi chiari, allergeni e opzioni veg, vegan e gluten free."
      />

      <header className="menu-hero">
        <h1>Menu</h1>
        <p>
          Piatti stagionali con ingredienti selezionati. Prezzi chiari, allergeni
          indicati e opzioni alimentari evidenziate.
        </p>
        <div className="menu-actions">
          <a
            className="btn btn--secondary menu-download"
            href="/menu.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Scarica menu PDF
          </a>
        </div>
      </header>

      <section className="menu-qr card">
        <div>
          <h2>Menu via QR code</h2>
          <p>
            Stampa questo QR su tavoli o vetrina per far aprire direttamente la
            versione HTML del menu su smartphone.
          </p>
        </div>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${menuPageUrl}`}
          alt="QR code del menu digitale"
          loading="lazy"
          width={220}
          height={220}
        />
      </section>

      <nav className="menu-anchor-nav" aria-label="Categorie menu">
        {menuSections.map((section) => (
          <a key={section.title} className="menu-anchor-link" href={`#${toSectionId(section.title)}`}>
            {section.title}
          </a>
        ))}
      </nav>

      <section className="menu-legend" aria-label="Legenda etichette e allergeni">
        <h2>Legenda</h2>
        <div className="menu-legend__row">
          {Object.values(tagLabel).map((label) => (
            <span key={label} className="tag-pill">
              {label}
            </span>
          ))}
        </div>
        <div className="menu-legend__row">
          {Object.entries(allergenLabel).map(([key, label]) => (
            <span key={key} className="allergen-pill">
              {label}
            </span>
          ))}
        </div>
      </section>

      <div className="menu-sections">
        {menuSections.map((section) => (
          <section key={section.title} id={toSectionId(section.title)} className="menu-section">
            <h2>{section.title}</h2>
            <div className="menu-items">
              {section.items.map((item) => (
                <article key={item.name} className="menu-item">
                  <div className="menu-item__head">
                    <h3>{item.name}</h3>
                    <p className="menu-item__price">{item.price}</p>
                  </div>

                  <p className="menu-item__description">{item.description}</p>

                  <div className="menu-item__meta">
                    <div className="tag-list" aria-label="Etichette alimentari">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tagLabel[tag]}
                        </span>
                      ))}
                    </div>

                    <div className="allergen-list" aria-label="Allergeni">
                      {item.allergens.length > 0 ? (
                        item.allergens.map((allergen) => (
                          <span key={allergen} className="allergen-pill">
                            {allergenLabel[allergen] ?? allergen}
                          </span>
                        ))
                      ) : (
                        <span className="allergen-pill allergen-pill--ok">
                          Nessun allergene dichiarato
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="menu-disclaimer">
        Disclaimer allergeni: alcune preparazioni possono contenere tracce di
        allergeni. Informa sempre il personale in caso di intolleranze.
      </p>
    </section>
  )
}

export default MenuPage
