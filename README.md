# ATELIER LUMEN — Virtual Haute Couture & Commercial Photo Studio

> **"A studio without a set. You decide what the world sees and wears."**

A modern, premium, single-page marketing website for **ATELIER LUMEN**, an AI fashion photo studio. The design is inspired by high-end fashion editorials (Vogue, Harper's Bazaar, Numéro) merged with modern SaaS conversion architecture.

---

## 🌟 Key Highlights & Features

1. **Editorial Fashion Aesthetic & Design System**:
   - **Color Palette**: Off-white canvas (`#F7F5F2`), near-black editorial typography (`#111111`), deep bordeaux accent (`#6B1425`), champagne gold (`#C5A880`), warm muted tones.
   - **Typography**: Elegant serif display typography (*Playfair Display*, Didot-style) paired with ultra-clean sans-serif (*Inter*).
   - **Subtle Film Grain**: Lightweight SVG noise filter overlay creating authentic 35mm film grain texture.
   - **Custom Camera Cursor**: Interactive cursor follower that shifts into a camera viewfinder pill when hovering over fashion images.
   - **60fps Fluid Motion**: Tuned with Framer Motion and respects `prefers-reduced-motion`.

2. **Interactive Virtual Shoot Studio Modal ("Take Your Picture")**:
   - **Camera API Integration**: Open real device webcam (`navigator.mediaDevices.getUserMedia`) to snap live garment photos.
   - **Photo Upload**: Drag & drop or select local garment packshots.
   - **Sample Collection Presets**: Choose from sample garments (Bordeaux Leather Trench, Silk Slip Gown, Cashmere Overcoat, Sculpted Hourglass Blazer).
   - **Model Selector**: 4 exclusive proprietary brand models.
   - **Scene & Rig Selector**: Haussmann balcony, brutalist concrete studio, Milan colonnade, Sahara sunset dune.
   - **Lighting Rigs**: Golden hour, high-key on-axis flash, Rembrandt chiaroscuro, diffused skylight.
   - **Live Synthesis Simulation**: Multi-stage progress indicator with simulated neural raytracing.
   - **Before / After Comparison Slider**: Interactive split comparison between raw packshot and finished on-model editorial with 4K download.

3. **Scroll-Driven Photoshoot Showcase (Signature Moment)**:
   - Sticky source packshot card of a burgundy leather trench coat on the left.
   - 6 on-model poses of the **SAME** model (walking stride, seated poise, crouching dynamic, front portrait, back silhouette, styled with tote bag) fly out and arrange into an editorial collage.
   - Interactive step scrubber for seamless mobile and desktop navigation.

4. **Interactive Detail Zoom Magnifier Lens**:
   - Garment close-up with a floating 2.5x circular optical magnifier lens following mouse/touch.
   - Production hotspot markers: Horn buttons, double French seams, waxed calfskin grain.

5. **Exclusive Models Carousel**:
   - 4 exclusive model profiles (Valérie Laurent, Kaelen Thorne, Mei Lin Zhou, Zayn Adebayo) with archetypes, measurements, and guaranteed digital sovereignty.

6. **System Integrations Matrix**:
   - Shopify, Shopware, Magento, Cloudinary, Bynder, and Akeneo connected to the central *ATELIER LUMEN CORE* hub.

7. **Photo to Video (Reels & TikTok)**:
   - 9:16 vertical smartphone frame previews with autoplay video motion simulations, likes, and audio badges.

8. **Do It Yourself vs. Let Us Do It**:
   - Split card experience comparing in-house SaaS Software vs. white-glove Concierge Service with hover arrows and image zoom.

9. **Animated Stats Band**:
   - Viewport scroll-triggered count-up animations: **80% below studio costs**, **100% on-brand continuity**, **3 min per finished image**.

10. **Bilingual Engine (EN / DE)**:
    - Real-time language switch between English and German for all headings, badges, and interface copy.

11. **Comprehensive Compliance & Modals**:
    - "Book a Demo" VIP reservation modal.
    - Interactive Cookie Preferences banner with local persistence.
    - Elegant monogram preloader animation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Images**: Curated high-resolution editorial fashion photography via Unsplash

---

## 📂 Project Structure

```
├── app/
│   ├── globals.css           # Tailwind directives, film grain, custom scrollbar
│   ├── layout.tsx            # Metadata, OpenGraph, viewport, font preconnects
│   └── page.tsx              # Main page composing all 14 sections and modals
├── components/
│   ├── CookieBanner.tsx      # Privacy & cookie preferences manager
│   ├── CustomCursor.tsx      # Viewfinder camera follower on images
│   ├── DemoModal.tsx         # VIP Demo booking modal with validation
│   ├── DetailZoom.tsx        # Section 5: Interactive 2.5x garment magnifier lens
│   ├── ExclusiveModels.tsx   # Section 6: Proprietary model profiles
│   ├── FaqAccordion.tsx      # Section 12: Accordion for all required questions
│   ├── FinalCta.tsx          # Section 13: High-contrast midnight CTA
│   ├── Footer.tsx            # Section 14: Navigation, imprint, newsletter
│   ├── Hero.tsx              # Section 2: Full-bleed hero, glowing pill CTA
│   ├── Integrations.tsx      # Section 7: E-com & DAM ecosystem connections
│   ├── LanguageContext.tsx   # EN / DE toggle state & translation helper
│   ├── Navbar.tsx            # Section 1: Sticky navbar with scroll transitions
│   ├── PhotoToVideo.tsx      # Section 8: 9:16 vertical smartphone motion previews
│   ├── Preloader.tsx         # Monogram theater curtain intro animation
│   ├── ScrollPhotoshootShowcase.tsx # Section 4: 6-pose collage signature moment
│   ├── SplitCards.tsx        # Section 9: Software vs. Service split cards
│   ├── StatsBand.tsx         # Section 10: Scroll-triggered animated stats
│   ├── StudioModal.tsx       # Live camera snapshot, garment upload & synthesis
│   ├── Testimonials.tsx      # Section 11: Marquee & swipeable quote carousel
│   └── ThreeCardStrip.tsx    # Section 3: Tall editorial cards with zoom
├── lib/
│   └── data.ts               # Brand constants, presets, FAQs, model dossiers
├── next.config.js            # Image remote patterns for Unsplash
├── tailwind.config.js        # Atelier palette, fonts, keyframes, custom animations
└── tsconfig.json             # TypeScript configuration
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the website.

### 3. Production Build
```bash
npm run build
npm start
```
