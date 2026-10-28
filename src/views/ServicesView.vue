<script setup lang="ts">
import { siteConfig } from '../config/site.config'
import HeroSection from '@apotome/archetype-shared/components/sections/HeroSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import CapabilitiesSection from '../components/sections/CapabilitiesSection.vue'
import DispatchBar from '../components/sections/DispatchBar.vue'
</script>

<template>
  <HeroSection
    subpage
    :eyebrow="siteConfig.sections.servicesPage.eyebrow"
    :title="siteConfig.sections.servicesPage.title"
    :subtitle="siteConfig.sections.servicesPage.subtitle"
    :image="siteConfig.photos.hero.src"
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
    :intro="siteConfig.services.intro"
    :categories="siteConfig.services.categories"
    :quote-cta="siteConfig.services.quoteCta"
  />

  <CapabilitiesSection
    :eyebrow="siteConfig.sections.servicesPage.capabilitiesEyebrow"
    :title="siteConfig.sections.servicesPage.capabilitiesTitle"
    :intro="siteConfig.capabilities.intro"
    :items="siteConfig.capabilities.items"
  />
</template>
