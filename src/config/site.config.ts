import type { ThemeName, SwatchName, SiteVariant } from '../themes/tokens'

/** Photo manifest entry; `slot` matches a key in `photos.*` below. */
export interface PhotoSlot { src: string; alt?: string; caption?: string }

export interface KeystonePhotos {
  hero: PhotoSlot
  about: PhotoSlot
  /** Gallery: 6-8 in essentials, 12-16 in portfolio. */
  gallery: PhotoSlot[]
}

export interface ServiceItem {
  name: string
  description?: string
  /** Display price, rate, or "Quote". */
  price: string
  /** Optional emphasis tags: e.g. 'Same-day', '24/7', 'Free estimate'. */
  tags?: string[]
}
export interface ServiceCategory {
  name: string
  description?: string
  items: ServiceItem[]
}

export interface Capability {
  /** Headline value: "12+", "ASE", "$2M", "50mi". */
  value: string
  /** What the value means. */
  label: string
  /** One-line elaboration. */
  detail?: string
}

export interface ProjectEntry {
  title: string
  /** Service category this project belongs to. */
  category: string
  /** Short scope description. */
  blurb: string
  image: string
  imageAlt?: string
  /** Optional facts shown beneath the title (e.g. "3 weeks", "Commercial"). */
  meta?: string[]
}

export interface KeystoneSiteConfig {
  brand: string
  tagline: string
  blurb: string
  theme: ThemeName
  swatch: SwatchName
  variant: SiteVariant
  contact: {
    address: string
    phone: string
    email: string
    mapEmbedUrl?: string
  }
  dispatch: {
    /** Main dispatch phone, also shown in the sticky dispatch bar. */
    phone: string
    /** True if the shop runs an after-hours / 24/7 emergency line. */
    emergency: boolean
    /** Optional dedicated emergency number; falls back to `phone`. */
    emergencyPhone?: string
    /** Free-text service radius/area description. */
    serviceArea: string
  }
  hours: Array<{ day: string; open: string }>
  photos: KeystonePhotos
  story: {
    title: string
    paragraphs: string[]
    facts?: Array<{ label: string; value: string }>
  }
  services: {
    intro?: string
    categories: ServiceCategory[]
    quoteCta?: { label: string; to: string }
  }
  capabilities: {
    intro?: string
    items: Capability[]
  }
  projects: {
    intro?: string
    items: ProjectEntry[]
  }
  testimonials: Array<{ quote: string; author: string; source?: string }>
  social: Array<{ label: string; href: string }>
}

/**
 * Demo configuration for a utility / skilled-trades business.
 * Swap `theme` / `swatch` to re-skin. Edit content here only.
 */
export const siteConfig: KeystoneSiteConfig = {
  brand: 'Keystone Works',
  tagline: 'Auto · Welding · Build',
  blurb:
    'A working shop in Trinidad, Colorado. Diesel and gas diagnostics, structural welding, and small-commercial build-outs — done by hand, signed by name.',
  theme: 'ironwood',
  swatch: 'stone',
  variant: 'essentials',
  contact: {
    address: '1420 Industrial Way, Trinidad, CO 81082',
    phone: '(719) 555-0140',
    email: 'dispatch@keystoneworks.example',
    mapEmbedUrl: 'https://www.google.com/maps?q=Trinidad,CO&output=embed',
  },
  dispatch: {
    phone: '(719) 555-0140',
    emergency: true,
    emergencyPhone: '(719) 555-0199',
    serviceArea: 'Trinidad, Walsenburg, Aguilar, Raton — 60 mile radius, on-site within 90 minutes.',
  },
  hours: [
    { day: 'Monday – Friday', open: '7:00 – 6:00' },
    { day: 'Saturday',        open: '8:00 – 2:00' },
    { day: 'Sunday',          open: 'Emergency only' },
  ],
  photos: {
    hero:  { src: '/showcase/hero.jpg',   alt: 'Shop bay at first light' },
    about: { src: '/showcase/mesa.jpg',   alt: 'Crew on the floor' },
    gallery: [
      { src: '/showcase/hero.jpg',   alt: 'Diesel rebuild on the lift' },
      { src: '/showcase/mesa.jpg',   alt: 'Custom trailer fabrication' },
      { src: '/showcase/vault.jpg',  alt: 'Structural weld, in progress' },
      { src: '/showcase/hearth.jpg', alt: 'Field service truck loaded out' },
      { src: '/showcase/hero.jpg',   alt: 'Commercial build-out framing' },
      { src: '/showcase/mesa.jpg',   alt: 'Tool wall, end of day' },
    ],
  },
  story: {
    title: 'A shop built on the work, not the pitch.',
    paragraphs: [
      'Keystone Works opened in a former rail-yard machine shop with one rule: every job leaves better than we found it. We are a small crew of mechanics, welders, and builders who would rather show our hands than our brochure.',
      'We work for ranchers, hauliers, small builders, and the people who keep Trinidad running. Bring us the job — we will tell you what it costs, when it will be done, and what we found while we were in there.',
    ],
    facts: [
      { label: 'Founded',  value: '2011' },
      { label: 'Crew',     value: '7' },
      { label: 'Bay area', value: '6,400 sq ft' },
    ],
  },
  services: {
    intro: 'Three trades under one roof. Flat-rate where we can, time-and-materials where we have to — always quoted in writing before the wrench turns.',
    categories: [
      {
        name: 'Auto & Diesel',
        description: 'Cars, trucks, fleet, agricultural. Most repairs same-week.',
        items: [
          { name: 'Diagnostic scan',        description: 'Full OBD-II / J1939 read, written findings.', price: '$95',  tags: ['Same-day'] },
          { name: 'Brake service',          description: 'Pads, rotors, hardware, road test.',           price: '$280', tags: ['Most vehicles'] },
          { name: 'Diesel injector rebuild', description: 'Common-rail, with bench test.',                price: 'Quote' },
          { name: 'Fleet PM program',       description: 'Monthly inspection + service contract.',       price: 'Contract', tags: ['Fleet'] },
        ],
      },
      {
        name: 'Welding & Fabrication',
        description: 'MIG, TIG, stick. Mobile rig available.',
        items: [
          { name: 'Mobile field repair',     description: 'On-site within 90 min in service area.',       price: '$165/hr', tags: ['Mobile'] },
          { name: 'Custom trailer build',    description: 'Utility, flatbed, gooseneck. DOT-ready.',      price: 'Quote' },
          { name: 'Structural weld',         description: 'Stamped drawings, certified welders.',          price: 'Quote',   tags: ['Certified'] },
          { name: 'Aluminum / stainless TIG', description: 'Food-grade, marine, decorative.',              price: 'Quote' },
        ],
      },
      {
        name: 'Build & Contract',
        description: 'Small-commercial and ag build-outs. Licensed, bonded, insured.',
        items: [
          { name: 'Site walk & estimate',    description: 'Free in-county. Written scope inside 48 hr.',  price: 'Free',    tags: ['Free estimate'] },
          { name: 'Pole barn / shop build',  description: 'Permit through close-out.',                     price: 'Quote' },
          { name: 'Concrete & flatwork',     description: 'Pads, drives, ag floors.',                      price: 'Quote' },
          { name: 'Light commercial T.I.',   description: 'Tenant improvement, code close-out.',           price: 'Quote' },
        ],
      },
    ],
    quoteCta: { label: 'Request a written quote', to: '/contact' },
  },
  capabilities: {
    intro: 'What we are equipped to handle, on paper.',
    items: [
      { value: '14',      label: 'Years in business',  detail: 'Same crew, same lot since 2011.' },
      { value: 'ASE',     label: 'Certified techs',    detail: 'Master-cert auto and diesel.' },
      { value: 'AWS D1.1', label: 'Structural welders', detail: 'Certified to AWS structural code.' },
      { value: '$2M',     label: 'Liability coverage', detail: 'General liability + inland marine.' },
      { value: '60 mi',   label: 'Service radius',     detail: 'Mobile field service in-county and beyond.' },
      { value: '24/7',    label: 'Emergency line',     detail: 'After-hours dispatch for fleet contracts.' },
    ],
  },
  projects: {
    intro: 'A small sample of recent work. Reach out for references in your trade.',
    items: [
      {
        title: 'Class-8 fleet PM contract',
        category: 'Auto & Diesel',
        blurb: 'Monthly preventive-maintenance program for a 22-truck regional hauler.',
        image: '/showcase/hero.jpg',
        meta: ['22 trucks', 'Active'],
      },
      {
        title: 'Gooseneck stock trailer',
        category: 'Welding & Fabrication',
        blurb: 'Built-from-frame 24ft gooseneck, DOT lights and brakes, full bed-liner.',
        image: '/showcase/mesa.jpg',
        meta: ['3 weeks', 'Custom'],
      },
      {
        title: 'Ag implement re-build',
        category: 'Welding & Fabrication',
        blurb: 'Structural repair on a 1990s baler frame. Stamped, returned to service.',
        image: '/showcase/vault.jpg',
        meta: ['1 week', 'Certified'],
      },
      {
        title: 'Main-street shop T.I.',
        category: 'Build & Contract',
        blurb: 'Light commercial tenant-improvement, including code close-out.',
        image: '/showcase/hearth.jpg',
        meta: ['8 weeks', 'Commercial'],
      },
    ],
  },
  testimonials: [
    { quote: 'They quoted it, they hit the number, they hit the date. Three for three.', author: 'Eli M.', source: 'Google' },
    { quote: 'Only shop in the county I trust with the whole fleet. Period.',           author: 'Dana R.', source: 'Google' },
    { quote: 'Welds passed inspection first time. Stamped paperwork the same day.',     author: 'Sam K.',  source: 'Referral' },
  ],
  social: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Google',   href: 'https://google.com' },
  ],
}
