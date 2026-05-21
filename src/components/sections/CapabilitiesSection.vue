<script setup lang="ts">
interface Capability { value: string; label: string; detail?: string }

defineProps<{
  eyebrow?: string
  title?: string
  intro?: string
  items: Capability[]
}>()
</script>

<!--
  CapabilitiesSection — keystone's "spec sheet" stat grid.
  Each capability card shows a headline value (years, cert, $$, radius)
  with a short label and optional detail line. Reads like equipment spec
  cards on industrial sites.
-->
<template>
  <section class="ap-section ks-caps">
    <div class="ap-container">
      <div class="ap-section-head">
        <span v-if="eyebrow" class="ap-eyebrow">{{ eyebrow }}</span>
        <h2>{{ title || 'Capabilities' }}</h2>
        <p v-if="intro" style="color: var(--ap-ink-muted); max-width: 60ch;">{{ intro }}</p>
      </div>

      <ul class="ks-caps__grid">
        <li v-for="cap in items" :key="cap.label" class="ks-caps__card">
          <span class="ks-caps__value">{{ cap.value }}</span>
          <span class="ks-caps__label">{{ cap.label }}</span>
          <p v-if="cap.detail" class="ks-caps__detail">{{ cap.detail }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.ks-caps__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0;
  border-top: 1px solid var(--ap-line);
  border-left: 1px solid var(--ap-line);
}
.ks-caps__card {
  border-right: 1px solid var(--ap-line);
  border-bottom: 1px solid var(--ap-line);
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  background: var(--ap-surface);
}
.ks-caps__value {
  font-family: var(--ap-font-display, var(--ap-font-sans, sans-serif));
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--ap-primary, var(--ap-ink));
  font-variant-numeric: tabular-nums;
}
.ks-caps__label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: var(--ap-ink);
  margin-top: 0.25rem;
}
.ks-caps__detail {
  margin: 0.5rem 0 0;
  font-size: 0.85rem;
  color: var(--ap-ink-muted);
  line-height: 1.45;
}
</style>
