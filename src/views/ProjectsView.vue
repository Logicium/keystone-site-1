<script setup lang="ts">
import { siteConfig } from '../config/site.config'
import HeroSection from '../components/sections/HeroSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import GallerySection from '../components/sections/GallerySection.vue'
</script>

<template>
  <HeroSection
    subpage
    eyebrow="Recent work"
    title="The yard, the shop, the road."
    subtitle="A sample of jobs delivered out of the Trinidad bay. References available in your trade — just ask."
    :image="siteConfig.photos.about.src"
  />

  <ProjectsSection
    :intro="siteConfig.projects.intro"
    :items="siteConfig.projects.items"
  />

  <GallerySection
    eyebrow="From the floor"
    title="Daily work"
    :photos="siteConfig.photos.gallery"
  />
</template>
