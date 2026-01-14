# Xo Service - Site Web

Site web complet pentru Xo Service - service auto profesional în București.

## 🚀 Tehnologii

- **Next.js 14** - Framework React cu App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Stilizare
- **Framer Motion** - Animații și interacțiuni
- **Lucide React** - Iconuri

## 📦 Instalare

### 1. Instalează dependențele

```bash
npm install
```

### 2. Rulează serverul de dezvoltare

```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

### 3. Build pentru producție

```bash
npm run build
```

### 4. Start server de producție

```bash
npm start
```

## 📁 Structura Proiectului

```
xo-service/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal cu SEO
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Stiluri globale
│   ├── despre-noi/        # Pagina Despre noi
│   ├── servicii/          # Pagina Servicii + subpagini
│   ├── galerie/           # Pagina Galerie
│   ├── contact/           # Pagina Contact
│   ├── politica-confidentialitate/  # Pagina Legal
│   ├── termeni-si-conditii/         # Pagina Legal
│   ├── sitemap.ts         # Sitemap generat automat
│   └── robots.ts          # Robots.txt generat automat
├── components/
│   ├── Header.tsx         # Header cu navigare
│   ├── Footer.tsx         # Footer
│   ├── StickyMobileBar.tsx # Bară mobil sticky
│   ├── BookingModal.tsx   # Modal pentru programări
│   ├── CursorCustom.tsx   # Cursor custom (desktop)
│   ├── sections/          # Secțiuni homepage
│   └── pages/             # Componente pentru pagini
├── public/                # Asset-uri statice (imagini, etc.)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Personalizare

### Schimbarea Culorilor

Culorile principale sunt definite în `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#a21e32',    // Roșu principal
    dark: '#7a2427',       // Roșu închis
    light: '#c92a3f',      // Roșu deschis
  },
  // ...
}
```

Pentru a schimba culorile:

1. Deschide `tailwind.config.js`
2. Modifică valorile din `theme.extend.colors`
3. Reîncarcă aplicația

### Schimbarea Conținutului

#### Informații de Contact

Editează în următoarele fișiere:
- `components/Footer.tsx` - Footer
- `components/pages/ContactInfo.tsx` - Informații contact
- `app/layout.tsx` - JSON-LD structured data

#### Texturi și Descrieri

- **Homepage**: `components/sections/*.tsx`
- **Despre noi**: `components/pages/About*.tsx`
- **Servicii**: `components/pages/Services*.tsx` și `app/servicii/*/page.tsx`
- **Galerie**: `components/pages/Gallery*.tsx`

### Adăugarea de Imagini

1. Plasează imaginile în `public/images/`
2. Folosește componenta `Image` din Next.js:

```tsx
import Image from 'next/image'

<Image
  src="/images/nume-imagine.jpg"
  alt="Descriere"
  width={800}
  height={600}
/>
```

**Notă**: În galerie, înlocuiește placeholder-urile cu imagini reale.

## ✨ Funcționalități Implementate

### Elemente Unice & Interacțiuni

1. ✅ **Hover animations** - Tranziții fluide pe elemente
2. ✅ **Scroll reveal** - Elemente apar la scroll
3. ✅ **Carousel testimoniale** - Autoplay + control manual
4. ✅ **Sticky contact bar mobil** - Butoane: Sună / Programează / Direcții
5. ✅ **Modal booking** - Calendar UI pentru programări
6. ✅ **Page transitions** - Tranziții subtile între pagini
7. ✅ **Scroll indicator** - Indicator discret pe hero
8. ✅ **Tipografie mare, aerisită** - Design premium
9. ✅ **Paletă cromatică restrânsă** - Roșu + neutre
10. ✅ **Contrast tipografic extrem** - Headline bold + subtext light
11. ✅ **Secțiuni cu fundal inversat** - Alternanță vizuală
12. ✅ **Galerie non-clasică** - Layout asimetric cu lightbox
13. ✅ **Cursor custom** - Doar desktop
14. ✅ **Animații bazate pe scroll progress** - Parallax subtil
15. ✅ **Feedback vizual la click** - Scale effects

## 🔍 SEO

### Meta Tags

Fiecare pagină are meta tags complete definite în `metadata` export.

### Structured Data (JSON-LD)

Schema LocalBusiness este inclusă în `app/layout.tsx` pentru homepage.

### Sitemap & Robots

- `app/sitemap.ts` - Generat automat de Next.js
- `app/robots.ts` - Configurare robots.txt

## ♿ Accesibilitate

- ✅ Semantic HTML
- ✅ ARIA labels unde este necesar
- ✅ Keyboard navigation
- ✅ Contrast cromatic conform WCAG
- ✅ `prefers-reduced-motion` support pentru animații

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Sticky bar pe mobil cu acțiuni rapide
- Navigare adaptivă

## 🛠️ Comenzi Disponibile

```bash
# Dezvoltare
npm run dev

# Build producție
npm run build

# Start producție
npm start

# Lint
npm run lint
```

## 📝 Checklist Post-Lansare

Vezi `CHECKLIST.md` pentru lista completă de verificări.

## 📞 Suport

Pentru întrebări sau probleme, contactează:
- **Email**: contact@xoservice.ro
- **Telefon**: 0768 802 902

## 📄 Licență

© 2024 Xo Service. Toate drepturile rezervate.

---

**Notă**: Acest site a fost creat cu design premium, anti-template, cu focus pe experiența utilizatorului și conversie.
