<script setup lang="ts">
import { siteConfig } from '../config/site.config'
import HeroSection from '../components/sections/HeroSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import CapabilitiesSection from '../components/sections/CapabilitiesSection.vue'
import DispatchBar from '../components/sections/DispatchBar.vue'
</script>

<template>
  <HeroSection
    subpage
    eyebrow="Services & rates"
    title="What we'll quote, and what we won't"
    subtitle="Three trades under one roof. Flat-rate where we can, time-and-materials where we have to — always in writing before the wrench turns."
    :image="siteConfig.photos.hero.src"
  />

  <DispatchBar
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
    eyebrow="Spec sheet"
    title="Equipped for the job"
    :intro="siteConfig.capabilities.intro"
    :items="siteConfig.capabilities.items"
  />
</template>
