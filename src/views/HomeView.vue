<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '../config/site.config'
import { variantAtLeast } from '@apotome/archetype-shared/themes/tokens'
import { useSiteContentStore } from '@apotome/archetype-shared/platform/siteContentStore'
import { useSiteTheme } from '@apotome/archetype-shared/composables/useSiteTheme'
import HeroSection from '@apotome/archetype-shared/components/sections/HeroSection.vue'
import DispatchBar from '../components/sections/DispatchBar.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import CapabilitiesSection from '../components/sections/CapabilitiesSection.vue'
import AboutSection from '@apotome/archetype-shared/components/sections/AboutSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import HoursSection from '@apotome/archetype-shared/components/sections/HoursSection.vue'
import TestimonialsSection from '@apotome/archetype-shared/components/sections/TestimonialsSection.vue'

const { variant: liveVariant } = useSiteTheme()
const isPortfolio = computed(() => variantAtLeast(liveVariant.value, 'portfolio'))
const content = useSiteContentStore()

/** Hero ledger: trades, town, service radius. */
const heroMeta = computed(() => {
  const city = siteConfig.contact.address.split(',').slice(1, 3).map(s => s.trim()).join(', ')
  const items: Array<{ label: string; value?: string }> = [{ label: siteConfig.tagline }]
  if (city) items.push({ label: city })
  items.push({ label: 'Est.', value: siteConfig.story.facts?.find(f => f.label === 'Founded')?.value ?? '' })
  return items.filter(i => i.value !== '')
})
const reviewItems = computed(() =>
  content.reviewsSource === 'google' && content.googleReviews.length
    ? content.googleReviews
    : siteConfig.testimonials,
)
</script>

<template>
  <HeroSection
    :eyebrow="siteConfig.tagline"
    :title="siteConfig.sections.hero.title"
    :subtitle="siteConfig.blurb"
    :image="siteConfig.photos.hero.src"
    :image-alt="siteConfig.photos.hero.alt"
    :images="isPortfolio ? [siteConfig.photos.hero, ...siteConfig.photos.gallery.slice(0, 3)] : []"
    :cta-primary="{ label: siteConfig.sections.hero.ctaPrimary, to: '/services' }"
    :cta-secondary="{ label: siteConfig.sections.hero.ctaSecondary, to: '/contact' }"
    :meta="heroMeta"
    :caption="siteConfig.photos.hero.alt"
    :layout="isPortfolio ? 'stage' : 'split'"
  />

  <DispatchBar
    :label="siteConfig.sections.dispatch.label"
    :emergency-label="siteConfig.sections.dispatch.emergencyLabel"
    :phone="siteConfig.dispatch.phone"
    :emergency="siteConfig.dispatch.emergency"
    :emergency-phone="siteConfig.dispatch.emergencyPhone"
    :service-area="siteConfig.dispatch.serviceArea"
  />

  <ServicesSection
    :eyebrow="siteConfig.sections.services.eyebrow"
    :title="siteConfig.sections.services.title"
    :intro="siteConfig.services.intro"
    :categories="siteConfig.services.categories"
    :quote-cta="siteConfig.services.quoteCta"
  />

  <CapabilitiesSection
    :eyebrow="siteConfig.sections.capabilities.eyebrow"
    :title="siteConfig.sections.capabilities.title"
    :intro="siteConfig.capabilities.intro"
    :items="siteConfig.capabilities.items"
  />

  <AboutSection
    :eyebrow="siteConfig.sections.story.eyebrow"
    :title="siteConfig.story.title"
    :paragraphs="siteConfig.story.paragraphs"
    :image="siteConfig.photos.about.src"
    :image-alt="siteConfig.photos.about.alt"
    :facts="siteConfig.story.facts"
  />

  <ProjectsSection
    :eyebrow="siteConfig.sections.projects.eyebrow"
    :title="siteConfig.sections.projects.title"
    :intro="siteConfig.projects.intro"
    :items="siteConfig.projects.items"
  />

  <HoursSection
    :eyebrow="siteConfig.sections.hours.eyebrow"
    :title="siteConfig.sections.hours.title"
    :hours="siteConfig.hours"
    :note="siteConfig.sections.hours.note"
  />

  <TestimonialsSection
    :eyebrow="siteConfig.sections.reviews.eyebrow"
    :title="siteConfig.sections.reviews.title"
    :items="reviewItems"
  />
</template>
