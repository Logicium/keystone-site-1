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

withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  intro?: string
  items: ProjectEntry[]
}>(), { title: 'Recent work' })
</script>

<!--
  ProjectsSection — completed work filed as archival plates. Each plate
  carries its number and category on the photo, the title beneath, and
  the job facts as a mono line. Built to say "here is what we built",
  not "buy this".
-->
<template>
  <section class="ap-section ks-projects" data-index>
    <div class="ap-container">
      <div class="ap-section-head">
        <span v-if="eyebrow" class="ap-eyebrow">{{ eyebrow }}</span>
        <h2 v-lines>{{ title }}</h2>
        <p v-if="intro" style="color: var(--ap-ink-muted); max-width: 60ch;">{{ intro }}</p>
      </div>

      <ul class="ks-projects__grid" v-cascade="110">
        <li v-for="(p, i) in items" :key="p.title" class="ks-projects__plate">
          <div class="ks-projects__media" v-grow>
            <OptimizedImage :src="p.image" :alt="p.imageAlt || p.title" />
            <span class="ks-projects__tag">
              <span class="ks-projects__tag-num">Plate {{ String(i + 1).padStart(2, '0') }}</span>
              <span class="ks-projects__tag-cat">{{ p.category }}</span>
            </span>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 2.5vw, 2rem);
}
.ks-projects__plate { display: flex; flex-direction: column; gap: 0.9rem; }
.ks-projects__media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border: 1px solid var(--ap-ink);
}
.ks-projects__media :deep(img) { width: 100%; height: 100%; object-fit: cover; }
.ks-projects__tag {
  position: absolute;
  left: 0;
  bottom: 0;
  display: inline-flex;
  gap: 0.8rem;
  padding: 0.35rem 0.65rem;
  background: var(--ap-ink);
  color: var(--ap-surface);
  font-family: var(--ap-font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.ks-projects__tag-num { color: var(--ap-accent); }
.ks-projects__body h3 {
  margin: 0 0 0.35rem;
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  line-height: 1.05;
}
.ks-projects__meta { margin: 0 0 0.5rem; display: flex; flex-wrap: wrap; gap: 0.4rem 1rem; }
.ks-projects__meta span {
  font-family: var(--ap-font-mono);
  font-size: 0.64rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ap-ink-muted);
}
.ks-projects__meta span + span::before { content: '\00B7'; margin-right: 1rem; }
.ks-projects__blurb { margin: 0; font-size: 0.92rem; color: var(--ap-ink-muted); line-height: 1.5; max-width: 42ch; }
</style>
