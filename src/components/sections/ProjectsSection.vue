<script setup lang="ts">
import OptimizedImage from '@apotome/archetype-shared/components/OptimizedImage.vue'

interface ProjectEntry {
  title: string
  category: string
  blurb: string
  image: string
  imageAlt?: string
  meta?: string[]
}

defineProps<{
  eyebrow?: string
  title?: string
  intro?: string
  items: ProjectEntry[]
}>()
</script>

<!--
  ProjectsSection — keystone's portfolio of completed work.
  Half-image / half-spec card. The category badge sits top-left,
  meta chips sit under the title (e.g. "3 weeks", "Commercial").
  Tuned for "see what we've built" not "buy this product".
-->
<template>
  <section class="ap-section ks-projects">
    <div class="ap-container">
      <div class="ap-section-head">
        <span v-if="eyebrow" class="ap-eyebrow">{{ eyebrow }}</span>
        <h2>{{ title || 'Recent work' }}</h2>
        <p v-if="intro" style="color: var(--ap-ink-muted); max-width: 60ch;">{{ intro }}</p>
      </div>

      <ul class="ks-projects__grid">
        <li v-for="p in items" :key="p.title" class="ks-projects__card">
          <div class="ks-projects__media">
            <OptimizedImage :src="p.image" :alt="p.imageAlt || p.title" />
            <span class="ks-projects__cat">{{ p.category }}</span>
          </div>
          <div class="ks-projects__body">
            <h3>{{ p.title }}</h3>
            <p v-if="p.meta?.length" class="ks-projects__meta">
              <span v-for="m in p.meta" :key="m">{{ m }}</span>
            </p>
            <p class="ks-projects__blurb">{{ p.blurb }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.ks-projects__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
.ks-projects__card {
  border: 1px solid var(--ap-line);
  background: var(--ap-surface);
  display: flex;
  flex-direction: column;
}
.ks-projects__media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-bottom: 1px solid var(--ap-line);
}
.ks-projects__media :deep(img) {
  width: 100%; height: 100%; object-fit: cover;
}
.ks-projects__cat {
  position: absolute;
  top: 0.75rem; left: 0.75rem;
  background: var(--ap-ink);
  color: var(--ap-surface);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.55rem;
  font-weight: 600;
}
.ks-projects__body {
  padding: 1.1rem 1.15rem 1.25rem;
}
.ks-projects__body h3 {
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 700;
}
.ks-projects__meta {
  margin: 0 0 0.5rem;
  display: flex; flex-wrap: wrap; gap: 0.35rem;
}
.ks-projects__meta span {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.12rem 0.45rem;
  border: 1px solid var(--ap-line);
  color: var(--ap-ink-muted);
  font-family: var(--ap-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
}
.ks-projects__blurb {
  margin: 0;
  font-size: 0.92rem;
  color: var(--ap-ink-muted);
  line-height: 1.5;
}
</style>
