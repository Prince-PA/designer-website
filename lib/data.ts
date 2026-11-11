export interface ModelProfile {
  id: string;
  name: string;
  origin: string;
  archetype: string;
  height: string;
  hair: string;
  eyes: string;
  look: string;
  image: string;
  bio: string;
}

export interface PhotoshootPose {
  id: number;
  title: string;
  subtitle: string;
  pose: string;
  aspect: string;
  image: string;
  tag: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  company: string;
  stats: string;
  avatar: string;
}

export interface FaqItem {
  questionEn: string;
  questionDe: string;
  answerEn: string;
  answerDe: string;
}

export const BRAND = {
  name: "ATELIER LUMEN",
  shortName: "LUMEN",
  tagline: "The AI Fashion Photo Studio Without a Set",
  company: "Lumen Studios Technologies GmbH",
};

export const THREE_CARDS = [
  {
    id: "campaigns",
    titleEn: "Campaigns with attitude",
    titleDe: "Kampagnen mit Haltung",
    descEn: "Bold, narrative-driven editorial series ready for print billboards, glossy spreads, and global digital drops.",
    descDe: "Ausdrucksstarke, narrative Editorial-Strecken bereit für Großflächenplakate, Hochglanzmagazine und globale Drops.",
    category: "EDITORIAL / AW26",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=85",
    aspect: "4:5 Portrait",
    badge: "Cover Grade"
  },
  {
    id: "lookbooks",
    titleEn: "Lookbooks as one piece",
    titleDe: "Lookbooks aus einem Guss",
    descEn: "Consistent lighting, identical models, harmonious grading across 80+ collection pieces without multi-day model fatigue.",
    descDe: "Konsistente Lichtführung, identische Models und harmonische Farbgebung über 80+ Kollektionsteile hinweg.",
    category: "LOOKBOOK HARMONY",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
    aspect: "Full Silhouette",
    badge: "100% Continuity"
  },
  {
    id: "product-shots",
    titleEn: "Product shots that sell",
    titleDe: "Produktfotos, die konvertieren",
    descEn: "E-commerce imagery tuned for ultra-high conversion. True-to-life drape, drape elasticity, and hyper-crisp texture.",
    descDe: "E-Commerce-Bildwelten für maximale Conversion. Realistischer Faltenwurf, Stoffelastizität und gestochen scharfe Textur.",
    category: "CONVERSION E-COM",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
    aspect: "Ghost & On-Model",
    badge: "+34% Add-to-Cart"
  }
];

export const SHOWCASE_POSES: PhotoshootPose[] = [
  {
    id: 1,
    title: "The Parisian Stride",
    subtitle: "Natural outdoor motion & trench coat drape",
    pose: "Walking Stride",
    aspect: "Full Body Walk",
    tag: "Motion Blur & Drape",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    title: "Seated Sculptural",
    subtitle: "Mid-century Bauhaus seat framing",
    pose: "Seated Poise",
    aspect: "Editorial 3/4",
    tag: "Studio Softbox",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    title: "Dynamic Ground Poise",
    subtitle: "Street couture architectural pose",
    pose: "Crouching Dynamic",
    aspect: "Low Angle",
    tag: "High Contrast Flash",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    title: "Editorial Beauty Front",
    subtitle: "Collar lapel & button alignment close-up",
    pose: "Front Portrait",
    aspect: "Waist Up",
    tag: "Beauty Lighting 85mm",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    title: "Back Yoke & Storm Flap",
    subtitle: "Tailoring precision on back pleats and belt",
    pose: "Back Silhouette",
    aspect: "Back Full",
    tag: "Rim Lighting",
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    title: "Accessory Editorial",
    subtitle: "Styled with structured leather weekender",
    pose: "With Tote Bag",
    aspect: "Environmental",
    tag: "Commercial Hero",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85"
  }
];

export const EXCLUSIVE_MODELS: ModelProfile[] = [
  {
    id: "valerie",
    name: "Valérie Laurent",
    origin: "Paris, France",
    archetype: "High Editorial & Avant-Garde",
    height: "179 cm / 5'10.5\"",
    hair: "Espresso Brunette",
    eyes: "Hazelnut Amber",
    look: "Sharp bone structure, effortless Parisian nonchalance, perfect for structured outerwear and couture gowns.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    bio: "Reserved exclusively for flagship European luxury houses. Certified zero likeness collisions with third-party brands."
  },
  {
    id: "kaelen",
    name: "Kaelen Thorne",
    origin: "London, UK",
    archetype: "Modern Sartorial & Tailoring",
    height: "188 cm / 6'2\"",
    hair: "Textured Dark Bronze",
    eyes: "Slate Gray",
    look: "Sculpted jawline, athletic posture, ideal for Savile Row cut suits, luxury knitwear, and modern menswear drops.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    bio: "Exclusively trained on high-movement sartorial physics, rendering natural shoulder drape and lapel break."
  },
  {
    id: "mei-lin",
    name: "Mei Lin Zhou",
    origin: "Tokyo / Shanghai",
    archetype: "Minimalist Luxe & Street Haute",
    height: "178 cm / 5'10\"",
    hair: "Glossy Jet Black",
    eyes: "Deep Obsidian",
    look: "Graphic editorial poise, expressive eyes, unmatched elegance for tech-wear, silk drapery, and fine jewelry.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
    bio: "Engineered for pan-Asian and global luxury markets with precision skin-tone fidelity across 12 studio lighting rigs."
  },
  {
    id: "zayn",
    name: "Zayn Adebayo",
    origin: "Milan / Lagos",
    archetype: "Contemporary Statement & Sport Luxe",
    height: "187 cm / 6'1.5\"",
    hair: "Sculpted Fade",
    eyes: "Dark Espresso",
    look: "Regal presence, luminous complexion, radiant under warm golden hour light and punchy studio strobe.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    bio: "Proprietary digital identity registered on secure decentralized brand ledgers to protect brand exclusivity."
  }
];

export const INTEGRATIONS = [
  { name: "Shopify", category: "E-Commerce", desc: "Automated 2-way product catalog & variant imagery sync" },
  { name: "Shopware", category: "Enterprise Store", desc: "Native Shopware 6 plugin with background variant batching" },
  { name: "Magento", category: "Adobe Commerce", desc: "Real-time headless asset deployment to Adobe Experience" },
  { name: "Cloudinary", category: "Media CDN", desc: "Lossless WebP/AVIF transformations and auto-responsive crops" },
  { name: "Bynder", category: "Enterprise DAM", desc: "Automated metadata tagging, copyright tokens, and approvals" },
  { name: "Akeneo", category: "Product PIM", desc: "Direct product specification mapping to shoot compositions" }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Atelier Lumen changed our entire pre-collection launch velocity. We produced 140 campaign assets across 4 distinct virtual locations in 48 hours. The coat drape and leather texture are indistinguishable from a $120k Milan shoot.",
    author: "Charlotte Von Berg",
    title: "Global Creative Director",
    company: "MAISON MARCEAU",
    stats: "87% budget reduction",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Our customer returns dropped by 22% because color fidelity and textile weight are mathematically matched to the real physical garment. No other AI tool comes close to this standard.",
    author: "Maximilian Richter",
    title: "VP of E-Commerce",
    company: "VOGEL & SÖHNE BERLIN",
    stats: "-22% garment returns",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "We don't need to fly an 18-person crew to Iceland or wait for permits anymore. Our signature brand model looks identical in Paris, Tokyo, or a sun-drenched architectural villa.",
    author: "Elena Rostova",
    title: "Head of Digital Brand",
    company: "AURA LUXURY GROUP",
    stats: "6x faster campaign velocity",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS: FaqItem[] = [
  {
    questionEn: "What is AI fashion photography?",
    questionDe: "Was genau ist KI-Modefotografie?",
    answerEn: "AI fashion photography combines proprietary neural rendering with physics-based textile modeling. Instead of flying a crew to a physical studio or remote location, our engine places your real garment packshots onto virtual, exclusive models in hyper-realistic scenes with studio-grade lighting, accurate shadows, and photorealistic fabric drape.",
    answerDe: "KI-Modefotografie kombiniert proprietäres neuronales Rendering mit physikbasierter Textilmodellierung. Statt ein Team an ein physisches Set zu fliegen, platziert unsere Engine Ihre echten Produkt-Packshots auf exklusiven virtuellen Models – mit realistischer Lichtführung, Schattenwurf und authentischem Faltenwurf."
  },
  {
    questionEn: "How does a shoot work?",
    questionDe: "Wie läuft ein digitaler Shoot ab?",
    answerEn: "You simply upload your garment packshot (flat lay, mannequin, or ghost shot) or take a quick snapshot with your camera. Choose an exclusive brand model, pick an environment (e.g. Haussmann balcony, brutalist studio, sunlit runway), select your lighting direction, and hit Generate. In approximately 3 minutes, you receive editorial 4K images ready for commercial use.",
    answerDe: "Sie laden einfach Ihren Produkt-Packshot hoch (Flat Lay, Geisterpuppe oder Schnappschuss). Wählen Sie Ihr Marken-Model, eine Umgebung (z. B. Haussmann-Balkon, brutalistisches Studio, sonnendurchfluteter Runway) und das Licht-Setup. Nach rund 3 Minuten erhalten Sie fertige 4K-Kampagnenbilder."
  },
  {
    questionEn: "Can I turn packshots into on-model images?",
    questionDe: "Kann ich einfache Packshots in On-Model-Bilder verwandeln?",
    answerEn: "Yes, this is our core specialization. Our neural garment transfer technology recognizes collar lines, seams, buttons, patterns, and drape physics, seamlessly dressing the virtual model while preserving every micron of your garment's real construction.",
    answerDe: "Ja, genau das ist unsere Kernkompetenz. Unsere neuronale Garment-Transfer-Technologie erkennt Kragenlinien, Nähte, Knöpfe, Muster und Faltenwurf und zieht das Model naturgetreu an – ohne dass Schnitt oder Details verfälscht werden."
  },
  {
    questionEn: "What does it cost?",
    questionDe: "Was kostet der Service?",
    answerEn: "Atelier Lumen costs up to 80% less than traditional physical studio shoots. We offer self-service SaaS subscriptions for in-house creative teams starting at €1,200/mo, as well as high-touch full-service concierge packages where our digital art directors handle your entire seasonal collection.",
    answerDe: "Atelier Lumen ist bis zu 80 % günstiger als klassische Studioshoots. Wir bieten SaaS-Abonnements für Inhouse-Teams ab 1.200 €/Monat sowie Concierge-Full-Service-Pakete an, bei denen unsere Art Directoren Ihre komplette Saisonkollektion umsetzen."
  },
  {
    questionEn: "Does the model stay identical across a campaign?",
    questionDe: "Bleibt das Model über die gesamte Kampagne identisch?",
    answerEn: "100% yes. Unlike random consumer generative AI generators that produce shifting faces and bodies, our models are locked digital identity profiles. Valérie or Kaelen will look identical across 100 images, whether walking down a boulevard, sitting in a studio, or captured in a close-up detail shot.",
    answerDe: "Zu 100 % ja. Im Gegensatz zu herkömmlichen KI-Bildgeneratoren mit wechselnden Gesichtern basieren unsere Models auf fest verankerten digitalen Identitäten. Ihr Marken-Model bleibt über alle 100+ Motive hinweg absolut identisch."
  },
  {
    questionEn: "Do I have to create images myself?",
    questionDe: "Muss ich die Bilder selbst erstellen?",
    answerEn: "You have complete freedom: use our Software platform if your design team wants full real-time control, or choose our Concierge Service, where you simply ship sample garments or send high-res packshots and our senior art directors deliver finalized, retouched master assets.",
    answerDe: "Sie haben die Wahl: Nutzen Sie unsere intuitive Software, wenn Ihr Team selbst gestalten möchte – oder wählen Sie unseren Full Service, bei dem wir die komplette Produktion, Kuration und Retusche für Sie übernehmen."
  }
];

export const STUDIO_PRESETS = {
  garments: [
    {
      id: "burgundy-trench",
      name: "Bordeaux Leather Trench",
      color: "Burgundy #6B1425",
      material: "Glazed Vegetable Calfskin",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "silk-slip",
      name: "Silk Satin Slip Gown",
      color: "Champagne Pearl",
      material: "100% Mulberry Silk 22mm",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cashmere-overcoat",
      name: "Double-Faced Cashmere Coat",
      color: "Camel Dune",
      material: "Pure Mongolian Cashmere",
      image: "https://images.unsplash.com/photo-1539533018447-63fcce667883?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "structured-blazer",
      name: "Sculpted Hourglass Blazer",
      color: "Obsidian Black",
      material: "Virgin Wool Crepe",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
    }
  ],
  scenes: [
    {
      id: "paris-balcony",
      name: "Haussmann Balcony, Paris",
      desc: "Wrought iron railing, soft morning Seine mist, limestone facades",
      badge: "Editorial Classic",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "brutalist-studio",
      name: "Concrete Studio, Berlin",
      desc: "Minimalist raw concrete walls, warm oak plinth, architectural shadow",
      badge: "High-Fashion Minimal",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "milan-runway",
      name: "Milan Galleria Colonnade",
      desc: "Polished terrazzo reflections, grand marble arches, ambient glow",
      badge: "Sartorial Grandeur",
      image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sunset-dune",
      name: "Sahara Golden Hour Dunes",
      desc: "Warm terracotta sand ripples, gentle desert breeze, cinematic backlight",
      badge: "Campaign Warmth",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80"
    }
  ],
  lightings: [
    {
      id: "golden-hour",
      name: "Golden Hour Editorial",
      spec: "3200K Low Angle Tungsten & Sun",
      feel: "Warm, luminous skin tones, gentle edge rim light"
    },
    {
      id: "high-key-flash",
      name: "High-Key Direct Flash",
      spec: "5600K On-Axis Ring Flash + Soft Fill",
      feel: "Punchy, modern streetwear attitude, crisp micro-details"
    },
    {
      id: "moody-rembrandt",
      name: "Moody Rembrandt Chiaroscuro",
      spec: "45-Degree Octabox with Grid Spill",
      feel: "Intimate, dramatic luxury contrast, rich shadow depth"
    },
    {
      id: "soft-diffused",
      name: "Diffused North Skylight",
      spec: "Overhead 12x12 Silk Diffusion",
      feel: "Ultra-pure color reproduction, zero specular harshness"
    }
  ]
};
