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
    :eyebrow="siteConfig.sections.contactPage.eyebrow"
    :title="siteConfig.sections.contactPage.title"
    :subtitle="siteConfig.sections.contactPage.subtitle"
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

  <BookingSection
    v-if="showBooking"
    :eyebrow="siteConfig.sections.booking.eyebrow"
    :title="siteConfig.sections.booking.title"
    :intro="siteConfig.sections.booking.intro"
  />

  <ContactSection
    :title="siteConfig.sections.contact.title"
    :intro="siteConfig.sections.contact.intro"
    :address="siteConfig.contact.address"
    :phone="siteConfig.contact.phone"
    :email="siteConfig.contact.email"
    :map-embed-url="siteConfig.contact.mapEmbedUrl"
  />

  <HoursSection
    :eyebrow="siteConfig.sections.contactPage.hoursEyebrow"
    :title="siteConfig.sections.hours.title"
    :hours="siteConfig.hours"
    :note="siteConfig.sections.contactPage.hoursNote"
  />
</template>
