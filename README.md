# Sito Ristorante - Linee Guida e Piano Task

## Obiettivo
Realizzare un sito moderno, veloce e mobile-first per un ristorante, ottimizzato per conversioni locali (chiamate, WhatsApp, prenotazioni) e SEO locale.

## Struttura Pagine

### 1) Home (priorità alta)
- Hero con foto forte, claim e CTA principali (`Chiama ora`, `WhatsApp`)
- Punti di forza
- Preview menu
- Galleria
- Recensioni
- Mappa + contatti
- Footer completo

### 2) Pagine base
- `Menu` (HTML + PDF opzionale)
- `Chi siamo`
- `Eventi/Privati` (opzionale)
- `Contatti`

## Requisiti Funzionali

### Menu (qualità contenuto)
- Categorie chiare
- Prezzi evidenti
- Allergeni ben leggibili
- Etichette: `veg`, `vegan`, `gluten free`
- Impaginazione leggibile su mobile

### UX Mobile-First
- Header sticky
- Bottoni rapidi `Chiama` e `WhatsApp`
- Navigazione semplice
- CTA ripetute nei punti chiave

### Design
- Layout pulito
- Tipografia curata: 1 font titoli + 1 font testo
- Palette 2-3 colori + 1 colore accent
- Foto reali, coerenti e ottimizzate

## Requisiti Tecnici

### Performance
- Immagini in WebP (quando possibile)
- Lazy-load immagini non above-the-fold
- Font leggeri
- Asset minificati e caching efficace

### SEO Locale
- Meta title/description per pagina
- H1/H2 corretti e gerarchia semantica
- NAP coerente (Name, Address, Phone)
- Link Google Maps
- Schema `Restaurant` in JSON-LD
- Alt text sensati per immagini

### Fiducia / Legale
- Privacy policy
- Cookie policy + cookie banner semplice
- Disclaimer allergeni
- Dati aziendali in footer (P.IVA se necessaria)

### Accessibilità
- Contrasto colore adeguato
- Font minimo 16px
- Focus visibile
- Navigazione tastiera
- Alt immagini

### Deploy
- Hosting statico: GitHub Pages / Netlify / Vercel
- Dominio custom
- SSL attivo

## Contenuti Richiesti al Cliente
- Logo
- 15-30 foto
- Testi menu + prezzi + allergeni
- Orari e giorni di chiusura
- Indirizzo + info parcheggio
- Link social
- Recensioni

## Extra "Wow" (Opzionali)
- Piatti del giorno da JSON
- Multilingua IT/EN
- Sezione press/riconoscimenti
- QR code menu che punta alla pagina HTML

---

## Backlog Task (Roadmap Operativa Dettagliata)

Questa sezione e pensata per esecuzione step-by-step senza perderci.  
Regola: si parte sempre dal task piu piccolo non bloccato.

### Stato task
- `TODO`: da iniziare
- `WIP`: in lavorazione
- `DONE`: completato
- `BLOCKED`: bloccato da materiale cliente

### Fase 0 - Fondamenta progetto

#### 0.1 Setup tecnico iniziale
- [x] `T0.1` (DONE) Definire struttura cartelle pagine/componenti/layout
- [x] `T0.2` (DONE) Definire file dati condivisi (`contatti`, `orari`, `social`, `menu`)
- [x] `T0.3` (DONE) Impostare routing base (`/`, `/menu`, `/chi-siamo`, `/contatti`, `/eventi`)
- [x] `T0.4` (DONE) Creare layout principale con header + footer placeholder

#### 0.2 Design system minimo
- [x] `T0.5` (DONE) Definire palette colori (2-3 + accent) in variabili CSS
- [x] `T0.6` (DONE) Definire font titoli/testo e fallback
- [x] `T0.7` (DONE) Definire scala tipografica (H1-H6, body, caption)
- [x] `T0.8` (DONE) Definire spaziature standard (`8/12/16/24/32`)
- [x] `T0.9` (DONE) Definire stili bottoni primari/secondari/ghost

#### 0.3 SEO tecnico base
- [x] `T0.10` (DONE) Impostare `<title>` e `<meta description>` globali
- [x] `T0.11` (DONE) Impostare Open Graph base
- [x] `T0.12` (DONE) Impostare favicon e icone base

**Done Fase 0**
- Tutte le route principali rispondono
- UI base consistente
- Meta base presenti

### Fase 1 - Home (conversion first)

#### 1.1 Hero e CTA
- [x] `T1.1` (DONE) Costruire hero con immagine forte e overlay leggibile
- [x] `T1.2` (DONE) Inserire claim principale
- [x] `T1.3` (DONE) Inserire CTA `Chiama ora`
- [x] `T1.4` (DONE) Inserire CTA `WhatsApp`
- [x] `T1.5` (DONE) Validare leggibilita e contrasto hero su mobile

#### 1.2 Sezioni contenuto home
- [x] `T1.6` (DONE) Sezione punti di forza (3-6 card)
- [x] `T1.7` (DONE) Preview menu (3-6 piatti rappresentativi)
- [x] `T1.8` (DONE) Galleria fotografica (grid responsive)
- [x] `T1.9` (DONE) Recensioni (blocchi o carosello semplice)
- [x] `T1.10` (DONE) Mappa + dati contatto
- [x] `T1.11` (DONE) Footer completo con info aziendali/social/legal

#### 1.3 Mobile UX
- [x] `T1.12` (DONE) Header sticky funzionante
- [x] `T1.13` (DONE) Pulsanti rapidi fissi `Chiama` + `WhatsApp`
- [x] `T1.14` (DONE) Ripetizione CTA nei blocchi chiave
- [x] `T1.15` (DONE) Verifica navigazione semplice (max 1 livello)

**Done Fase 1**
- Home completa e responsive
- CTA principali sempre visibili su mobile

### Fase 2 - Pagine interne core

#### 2.1 Pagina menu
- [x] `T2.1` (DONE) Struttura menu per categorie
- [x] `T2.2` (DONE) Inserire prodotti + descrizioni brevi
- [x] `T2.3` (DONE) Inserire prezzi allineati e leggibili
- [x] `T2.4` (DONE) Inserire allergeni per voce
- [x] `T2.5` (DONE) Inserire etichette `veg`, `vegan`, `gluten free`
- [x] `T2.6` (DONE) Aggiungere disclaimer allergeni globale
- [x] `T2.7` (DONE) Aggiungere pulsante PDF menu (se presente)

#### 2.2 Altre pagine
- [x] `T2.8` (DONE) Pagina `Chi siamo`
- [x] `T2.9` (DONE) Pagina `Contatti` con form/map/link rapidi
- [x] `T2.10` (DONE) Pagina `Eventi/Privati` (solo se confermata)

**Done Fase 2**
- Pagine base complete senza link rotti
- Menu leggibile e usabile da mobile

### Fase 3 - SEO locale dettagliata

#### 3.1 Ottimizzazione on-page
- [x] `T3.1` (DONE) Meta title univoco per ogni pagina
- [x] `T3.2` (DONE) Meta description univoca per ogni pagina
- [x] `T3.3` (DONE) Gerarchia H1/H2 corretta in ogni pagina
- [x] `T3.4` (DONE) Alt text descrittivi per tutte le immagini principali

#### 3.2 SEO locale
- [x] `T3.5` (DONE) NAP coerente in footer + pagina contatti
- [x] `T3.6` (DONE) Link Google Maps ben visibile
- [x] `T3.7` (DONE) JSON-LD schema `Restaurant`
- [x] `T3.8` (DONE) Validazione dati strutturati

**Done Fase 3**
- SEO locale implementata e verificata

### Fase 4 - Performance e accessibilita

#### 4.1 Performance
- [x] `T4.1` (DONE) Conversione immagini in WebP dove possibile (uso immagini Unsplash ottimizzate via CDN)
- [x] `T4.2` (DONE) Definizione dimensioni immagini per evitare layout shift
- [x] `T4.3` (DONE) Lazy-load su immagini non critical
- [x] `T4.4` (DONE) Riduzione peso font e caricamento efficiente
- [x] `T4.5` (DONE) Verifica bundle e asset minificati

#### 4.2 Accessibilita
- [x] `T4.6` (DONE) Verifica contrasto testi/sfondi
- [x] `T4.7` (DONE) Font minimo 16px su mobile
- [x] `T4.8` (DONE) Focus visibile su elementi interattivi
- [x] `T4.9` (DONE) Navigazione completa via tastiera
- [x] `T4.10` (DONE) Verifica label/accessibilita CTA e link

**Done Fase 4**
- Nessun problema critico di accessibilita
- Performance mobile ottimizzata

### Fase 5 - Legale e fiducia
- [x] `T5.1` (DONE) Creare pagina privacy
- [x] `T5.2` (DONE) Creare pagina cookie policy
- [x] `T5.3` (DONE) Implementare cookie banner semplice
- [x] `T5.4` (DONE) Inserire disclaimer allergeni (menu/footer se serve)
- [x] `T5.5` (DONE) Inserire dati aziendali completi nel footer (P.IVA se necessaria)

**Done Fase 5**
- Informative legali raggiungibili e coerenti

### Fase 6 - Deploy e QA finale
- [x] `T6.1` (DONE) Build produzione locale
- [ ] `T6.2` (TODO) Deploy su piattaforma scelta
- [ ] `T6.3` (TODO) Configurazione dominio custom
- [ ] `T6.4` (TODO) SSL attivo e redirect HTTPS
- [x] `T6.5` (DONE) QA finale: link, CTA call/WhatsApp, mappa, form
- [x] `T6.6` (DONE) QA responsive: mobile/tablet/desktop

**Done Fase 6**
- Sito online in HTTPS con QA completata

### Fase 7 - Extra wow (opzionale)
- [x] `T7.1` (DONE) Piatti del giorno da JSON
- [ ] `T7.2` (TODO) Multilingua IT/EN
- [ ] `T7.3` (TODO) Sezione press/riconoscimenti
- [x] `T7.4` (DONE) QR code menu verso pagina HTML

---

## Ordine operativo consigliato (micro-sequenza)
1. `T0.1 -> T0.12`
2. `T1.1 -> T1.15`
3. `T2.1 -> T2.10`
4. `T3.1 -> T3.8`
5. `T4.1 -> T4.10`
6. `T5.1 -> T5.5`
7. `T6.1 -> T6.6`
8. `T7.1 -> T7.4` (solo se richiesto)

## Regole di avanzamento task
- Ogni task chiuso deve avere evidenza: commit + nota test.
- Se manca contenuto cliente: task in `BLOCKED` con nota esplicita.
- Non aprire piu di 1 task `WIP` alla volta.
