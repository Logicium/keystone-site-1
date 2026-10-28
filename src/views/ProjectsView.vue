<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '../config/site.config'
import { VARIANT_PHOTO_COUNT, resolveVariant } from '@apotome/archetype-shared/themes/tokens'
import { useSiteTheme } from '@apotome/archetype-shared/composables/useSiteTheme'
import HeroSection from '@apotome/archetype-shared/components/sections/HeroSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import GallerySection from '@apotome/archetype-shared/components/sections/GallerySection.vue'

const { variant: liveVariant } = useSiteTheme()
const galleryLimit = computed(() => VARIANT_PHOTO_COUNT[resolveVariant(liveVariant.value)].gallery)
</script>

<template>
  <HeroSection
    subpage
    :eyebrow="siteConfig.sections.projectsPage.eyebrow"
    :title="siteConfig.sections.projectsPage.title"
    :subtitle="siteConfig.sections.projectsPage.subtitle"
    :image="siteConfig.photos.about.src"
  />

  <ProjectsSection
    :intro="siteConfig.projects.intro"
    :items="siteConfig.projects.items"
  />

  <GallerySection
    :eyebrow="siteConfig.sections.projectsPage.galleryEyebrow"
    :title="siteConfig.sections.projectsPage.galleryTitle"
    :photos="siteConfig.photos.gallery"
    :limit="galleryLimit"
  />
</template>
