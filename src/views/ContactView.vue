<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '../config/site.config'
import HeroSection from '@apotome/archetype-shared/components/sections/HeroSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import DispatchBar from '../components/sections/DispatchBar.vue'
import HoursSection from '@apotome/archetype-shared/components/sections/HoursSection.vue'
import BookingSection from '@apotome/archetype-shared/components/sections/BookingSection.vue'
import { useSiteContentStore } from '@apotome/archetype-shared/platform/siteContentStore'

const store = useSiteContentStore()
const showBooking = computed(() => store.hasAddOn('appointments'))
</script>

<template>
  <HeroSection
    subpage
    eyebrow="Contact & dispatch"
    title="Call the shop. Or send a quote request."
    subtitle="Walk-ins welcome during shop hours. Fleet, mobile field service, and emergency dispatch by phone."
    :image="siteConfig.photos.hero.src"
  />

  <DispatchBar
    :phone="siteConfig.dispatch.phone"
    :emergency="siteConfig.dispatch.emergency"
    :emergency-phone="siteConfig.dispatch.emergencyPhone"
    :service-area="siteConfig.dispatch.serviceArea"
  />

  <BookingSection
    v-if="showBooking"
    eyebrow="Book a service"
    title="Schedule an appointment online"
    intro="Pick a service and a time that works for you — we'll send a confirmation right away."
  />

  <ContactSection
    title="Request a quote"
    intro="Tell us what you've got. We'll come back with a written estimate and a realistic start date."
    :address="siteConfig.contact.address"
    :phone="siteConfig.contact.phone"
    :email="siteConfig.contact.email"
    :map-embed-url="siteConfig.contact.mapEmbedUrl"
  />

  <HoursSection
    eyebrow="Shop hours"
    :hours="siteConfig.hours"
    note="After-hours emergency dispatch for fleet contracts."
  />
</template>
