# QA Report

Date: 2026-03-06

## Scope
- Final checks for `T6.5` (link/CTA/mappa/form)
- Responsive checks for `T6.6` (mobile/tablet/desktop)

## Automated Checks
- `npm run build`: PASS
- `npm run lint`: PASS

## Manual Functional Checklist
- Navigation links (`/`, `/menu`, `/chi-siamo`, `/contatti`, `/eventi`): PASS
- CTA phone links (`tel:` in Home, Contatti, Eventi, quick actions): PASS
- CTA WhatsApp links (`wa.me` in Home, Contatti, Eventi, quick actions): PASS
- Google Maps links and embed iframe: PASS
- Contact form fields and submit button present + keyboard focus: PASS
- Menu PDF download button (`/menu.pdf`): PASS

## Responsive Checklist
- Mobile layout (`<=640px`): sticky header + bottom quick actions visible, content readable: PASS
- Tablet layout (`~768px`): sections stack correctly, cards wrap as expected: PASS
- Desktop layout (`>=1024px`): grid and spacing stable, no overlap observed: PASS

## Notes
- `T4.1` remains blocked until real JPG/PNG photos are provided for WebP conversion.
- Current `public/menu.pdf` is a temporary placeholder and should be replaced with final branded PDF.
