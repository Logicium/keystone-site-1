<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { siteConfig } from './config/site.config'
import { useSiteTheme } from '@apotome/archetype-shared/composables/useSiteTheme'
import { useSiteSeo } from '@apotome/archetype-shared/platform/seo'
import { useImagePreload } from '@apotome/archetype-shared/composables/useImagePreload'
import { useApScrollbar } from '@apotome/archetype-shared/composables/useApScrollbar'
import { usePreferences } from '@apotome/archetype-shared/composables/usePreferences'
import AppHeader from '@apotome/archetype-shared/components/layout/AppHeader.vue'
import AppFooter from '@apotome/archetype-shared/components/layout/AppFooter.vue'
import AppLoader from '@apotome/archetype-shared/components/AppLoader.vue'
import ThemeSwitcher from '@apotome/archetype-shared/components/ThemeSwitcher.vue'

const { initFromConfig } = useSiteTheme()

/* Title, description, social cards, favicon and LocalBusiness data follow the
   owner's content (brand, tagline, blurb, contact, hero photo) and change per
   page; dashboard, checkout and order pages stay out of search. */
useSiteSeo({
  site: siteConfig,
  archetype: 'utility',
  page: (route) => {
    const s = siteConfig.sections
    switch (route.name) {
      case 'services': return { title: s.servicesPage.title, description: s.servicesPage.subtitle }
      case 'projects': return { title: s.projectsPage.title, description: s.projectsPage.subtitle }
      case 'contact': return { title: s.contactPage.title, description: s.contactPage.subtitle }
      default: return null
    }
  },
})
const { isReady, progress, loaded, total, label, preloadCritical } = useImagePreload()

onMounted(async () => {
  initFromConfig(siteConfig, 'utility')
  useApScrollbar()
  try {
    await preloadCritical([
      siteConfig.photos.hero.src,
      siteConfig.photos.about.src,
      ...siteConfig.photos.gallery.map(p => p.src),
    ])
  } catch {
    // Malformed hydrated content must never strand the splash screen.
    await preloadCritical([])
  }
})

const showSwitcher = usePreferences().themePickerVisible

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <AppLoader :brand="siteConfig.brand" :visible="!isReady" :progress="progress" :loaded="loaded" :total="total" :label="label" />
  <AppHeader
    :brand="siteConfig.brand"
    :tagline="siteConfig.tagline"
    :links="navLinks"
    cta-label="Get a quote"
    cta-to="/contact"
  />
  <main><RouterView /></main>
  <AppFooter
    :brand="siteConfig.brand"
    :blurb="siteConfig.blurb"
    :address="siteConfig.contact.address"
    :phone="siteConfig.contact.phone"
    :email="siteConfig.contact.email"
    :links="navLinks"
    :social="siteConfig.social"
  />
  <ThemeSwitcher v-if="showSwitcher" />
</template>
