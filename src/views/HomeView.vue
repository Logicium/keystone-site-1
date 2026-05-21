<script setup lang="ts">
import { siteConfig } from '../config/site.config'
import HeroSection from '../components/sections/HeroSection.vue'
import DispatchBar from '../components/sections/DispatchBar.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import CapabilitiesSection from '../components/sections/CapabilitiesSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import HoursSection from '../components/sections/HoursSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
</script>

<template>
  <HeroSection
    :eyebrow="siteConfig.tagline"
    title="Tools down. Job done."
    :subtitle="siteConfig.blurb"
    :image="siteConfig.photos.hero.src"
    :image-alt="siteConfig.photos.hero.alt"
    :cta-primary="{ label: 'See services', to: '/services' }"
    :cta-secondary="{ label: 'Get a quote', to: '/contact' }"
    layout="split"
  />

  <DispatchBar
    :phone="siteConfig.dispatch.phone"
    :emergency="siteConfig.dispatch.emergency"
    :emergency-phone="siteConfig.dispatch.emergencyPhone"
    :service-area="siteConfig.dispatch.serviceArea"
  />

  <ServicesSection
    eyebrow="What we do"
    title="Services & rates"
    :intro="siteConfig.services.intro"
    :categories="siteConfig.services.categories"
    :quote-cta="siteConfig.services.quoteCta"
  />

  <CapabilitiesSection
    eyebrow="On paper"
    title="Capabilities"
    :intro="siteConfig.capabilities.intro"
    :items="siteConfig.capabilities.items"
  />

  <AboutSection
    eyebrow="The shop"
    :title="siteConfig.story.title"
    :paragraphs="siteConfig.story.paragraphs"
    :image="siteConfig.photos.about.src"
    :image-alt="siteConfig.photos.about.alt"
    :facts="siteConfig.story.facts"
  />

  <ProjectsSection
    eyebrow="Recent work"
    title="From the yard"
    :intro="siteConfig.projects.intro"
    :items="siteConfig.projects.items"
  />

  <HoursSection
    eyebrow="When we're open"
    title="Shop hours"
    :hours="siteConfig.hours"
    note="After-hours dispatch available for fleet contracts."
  />

  <TestimonialsSection
    eyebrow="Word from the lot"
    title="What customers say"
    :items="siteConfig.testimonials"
  />
</template>
