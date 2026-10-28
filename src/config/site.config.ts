import type { ThemeName, SwatchName, SiteVariant } from '@apotome/archetype-shared/themes/tokens'

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
  /** Editable section headers (eyebrows / titles / notes / CTA labels) so
   *  owners control every heading on the site, not just body copy. */
  sections: {
    nav: { home: string; services: string; work: string; contact: string; ctaLabel: string }
    hero: { title: string; ctaPrimary: string; ctaSecondary: string }
    dispatch: { label: string; emergencyLabel: string }
    services: { eyebrow: string; title: string }
    capabilities: { eyebrow: string; title: string }
    story: { eyebrow: string }
    projects: { eyebrow: string; title: string }
    hours: { eyebrow: string; title: string; note: string }
    reviews: { eyebrow: string; title: string }
    servicesPage: { eyebrow: string; title: string; subtitle: string; capabilitiesEyebrow: string; capabilitiesTitle: string }
    projectsPage: { eyebrow: string; title: string; subtitle: string; galleryEyebrow: string; galleryTitle: string }
    contactPage: { eyebrow: string; title: string; subtitle: string; hoursEyebrow: string; hoursNote: string }
    booking: { eyebrow: string; title: string; intro: string }
    contact: { title: string; intro: string }
  }
}

/**
 * Demo configuration for a utility / skilled-trades business.
 * Swap `theme` / `swatch` to re-skin. Edit content here only.
 */
import { reactive } from 'vue'

export const siteConfig: KeystoneSiteConfig = reactive(({
  brand: 'Keystone Works',
  tagline: 'Auto · Welding · Build',
  blurb:
    'Diesel and gas repair, structural welding, and small commercial build-outs from one shop on Industrial Way. Written quotes, real dates, and a crew that answers the phone.',
  theme: 'ironwood',
  swatch: 'ultramarine-light',
  variant: 'portfolio',
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
    serviceArea: 'Trinidad, Walsenburg, Aguilar, Raton, 60 mile radius, on site within 90 minutes',
  },
  hours: [
    { day: 'Monday – Friday', open: '7:00 – 6:00' },
    { day: 'Saturday',        open: '8:00 – 2:00' },
    { day: 'Sunday',          open: 'Emergency only' },
  ],
  photos: {
    hero:  { src: '/photos/hero.jpg',  alt: 'Shop bay at first light' },
    about: { src: '/photos/about.jpg', alt: 'The crew on the floor' },
    gallery: [
      { src: '/photos/gallery-diesel.jpg', alt: 'Diesel rebuild on the lift' },
      { src: '/photos/gallery-fab.jpg',    alt: 'Custom trailer fabrication' },
      { src: '/photos/gallery-weld.jpg',   alt: 'Structural weld, in progress' },
      { src: '/photos/gallery-truck.jpg',  alt: 'Field service truck loaded out' },
      { src: '/photos/gallery-build.jpg',  alt: 'Commercial build-out framing' },
      { src: '/photos/gallery-tools.jpg',  alt: 'Tool wall, end of day' },
      { src: '/photos/gallery-07.jpg', alt: 'Engine bay teardown' },
      { src: '/photos/gallery-08.jpg', alt: 'TIG bead on stainless' },
      { src: '/photos/gallery-09.jpg', alt: 'Steel beam set on a build-out' },
      { src: '/photos/gallery-10.jpg', alt: 'Fleet truck on the lift' },
      { src: '/photos/gallery-11.jpg', alt: 'Plasma table cutting plate' },
      { src: '/photos/gallery-12.jpg', alt: 'Bench, end of shift' },
      { src: '/photos/gallery-13.jpg', alt: 'Hitch fabrication' },
      { src: '/photos/gallery-14.jpg', alt: 'Diesel pickup after service' },
      { src: '/photos/gallery-15.jpg', alt: 'Framing a commercial bay' },
      { src: '/photos/gallery-16.jpg', alt: 'The shop floor at dawn' },
    ],
  },
  story: {
    title: 'One bay, three trades, since 2011.',
    paragraphs: [
      'Keystone Works opened in a former rail-yard machine shop in 2011. Seven of us work the floor: mechanics, certified welders, and builders who have framed, plumbed, and closed out jobs across Las Animas County.',
      'We work for ranchers, haulers, small builders, and fleet managers. Every job gets a written quote before work starts, a finish date you can plan around, and a straight report of anything else we found.',
    ],
    facts: [
      { label: 'Founded',  value: '2011' },
      { label: 'Crew',     value: '7' },
      { label: 'Bay area', value: '6,400 sq ft' },
    ],
  },
  services: {
    intro: 'Three trades under one roof. Flat-rate where the job allows, time and materials where it does not, and every quote in writing before work starts.',
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
        image: '/photos/project-fleet.jpg',
        meta: ['22 trucks', 'Active'],
      },
      {
        title: 'Gooseneck stock trailer',
        category: 'Welding & Fabrication',
        blurb: 'Built-from-frame 24ft gooseneck, DOT lights and brakes, full bed-liner.',
        image: '/photos/project-trailer.jpg',
        meta: ['3 weeks', 'Custom'],
      },
      {
        title: 'Ag implement re-build',
        category: 'Welding & Fabrication',
        blurb: 'Structural repair on a 1990s baler frame. Stamped, returned to service.',
        image: '/photos/project-ag.jpg',
        meta: ['1 week', 'Certified'],
      },
      {
        title: 'Main-street shop T.I.',
        category: 'Build & Contract',
        blurb: 'Light commercial tenant-improvement, including code close-out.',
        image: '/photos/project-ti.jpg',
        meta: ['8 weeks', 'Commercial'],
      },
    ],
  },
  testimonials: [
    { quote: 'The quote matched the invoice and the truck was ready the day they said. That is all I ask of a shop.', author: 'Eli M.', source: 'Google' },
    { quote: 'They handle our whole fleet on a monthly schedule now. Fewer surprises, less downtime.', author: 'Dana R.', source: 'Google' },
    { quote: 'Structural welds passed inspection the first time, and the stamped paperwork came the same day.', author: 'Sam K.', source: 'Referral' },
  ],
  social: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Google',   href: 'https://google.com' },
  ],
  sections: {
    nav: { home: 'Home', services: 'Services', work: 'Work', contact: 'Contact', ctaLabel: 'Get a quote' },
    hero: { title: 'Diesel, welding, and build-outs.', ctaPrimary: 'See services', ctaSecondary: 'Get a quote' },
    dispatch: { label: 'Dispatch', emergencyLabel: 'Emergency line' },
    services: { eyebrow: 'What we do', title: 'Services & rates' },
    capabilities: { eyebrow: 'Spec sheet', title: 'Capabilities' },
    story: { eyebrow: 'The shop' },
    projects: { eyebrow: 'Recent work', title: 'Jobs out the door' },
    hours: {
      eyebrow: 'When we\u2019re open',
      title: 'Shop hours',
      note: 'After-hours dispatch available for fleet contracts.',
    },
    reviews: { eyebrow: 'Customers', title: 'What customers say' },
    servicesPage: {
      eyebrow: 'Services & rates',
      title: 'Services and rates',
      subtitle: 'Three trades under one roof. Flat-rate where the job allows, time and materials where it does not, and every quote in writing before work starts.',
      capabilitiesEyebrow: 'Spec sheet',
      capabilitiesTitle: 'Equipped for the job',
    },
    projectsPage: {
      eyebrow: 'Recent work',
      title: 'Recent jobs',
      subtitle: 'A sample of jobs delivered out of the Trinidad bay. References available in your trade on request.',
      galleryEyebrow: 'From the floor',
      galleryTitle: 'Daily work',
    },
    contactPage: {
      eyebrow: 'Contact & dispatch',
      title: 'Call the shop or send a quote request.',
      subtitle: 'Walk-ins welcome during shop hours. Fleet, mobile field service, and emergency dispatch by phone.',
      hoursEyebrow: 'Shop hours',
      hoursNote: 'After-hours emergency dispatch for fleet contracts.',
    },
    booking: {
      eyebrow: 'Book a service',
      title: 'Schedule an appointment online',
      intro: 'Pick a service and a time that works for you \u2014 we\u2019ll send a confirmation right away.',
    },
    contact: {
      title: 'Request a quote',
      intro: 'Tell us what you\u2019ve got. We\u2019ll come back with a written estimate and a realistic start date.',
    },
  },
}))
