<script setup lang="ts">
interface Capability { value: string; label: string; detail?: string }

withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  intro?: string
  items: Capability[]
}>(), { title: 'Capabilities' })
</script>

<!--
  CapabilitiesSection — the spec sheet. Each capability is one ruled row:
  a mono line number, the headline value set in the display face at a
  size that belongs to the same scale as the labels, the label, and an
  optional detail. Reads like the specification table on a data sheet,
  not like a row of marketing stat tiles.
-->
<template>
  <section class="ap-section ks-caps" data-index>
    <div class="ap-container">
      <div class="ap-section-head">
        <span v-if="eyebrow" class="ap-eyebrow">{{ eyebrow }}</span>
        <h2 v-lines>{{ title }}</h2>
        <p v-if="intro" style="color: var(--ap-ink-muted); max-width: 60ch;">{{ intro }}</p>
      </div>

      <ol class="ks-caps__ledger" v-cascade="70">
        <li v-for="(cap, i) in items" :key="cap.label" class="ks-caps__row">
          <span class="ks-caps__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="ks-caps__value">{{ cap.value }}</span>
          <span class="ks-caps__label">{{ cap.label }}</span>
          <span v-if="cap.detail" class="ks-caps__detail">{{ cap.detail }}</span>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.ks-caps__ledger {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 2px solid var(--ap-ink);
}
.ks-caps__row {
  display: grid;
  grid-template-columns: 3rem minmax(120px, 0.55fr) minmax(0, 0.8fr) minmax(0, 1.4fr);
  gap: 0.5rem clamp(1rem, 2.5vw, 2.5rem);
  align-items: baseline;
  padding: clamp(0.9rem, 1.6vw, 1.25rem) 0;
  border-bottom: 1px solid var(--ap-line);
}
.ks-caps__num {
  font-family: var(--ap-font-mono);
  font-size: 0.64rem;
  letter-spacing: 0.2em;
  color: var(--ap-ink-muted);
}
.ks-caps__value {
  font-family: var(--ap-font-heading);
  font-size: clamp(1.5rem, 2.6vw, 2.1rem);
  font-weight: var(--ap-heading-weight, 600);
  line-height: 1;
  letter-spacing: var(--ap-tracking-heading);
  text-transform: var(--ap-heading-transform);
  color: var(--ap-ink);
  font-variant-numeric: tabular-nums;
}
.ks-caps__label {
  font-family: var(--ap-font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ap-ink);
}
.ks-caps__detail {
  font-size: 0.9rem;
  color: var(--ap-ink-muted);
  line-height: 1.45;
}
@media (max-width: 720px) {
  .ks-caps__row { grid-template-columns: 2.5rem 1fr; row-gap: 0.25rem; }
  .ks-caps__label, .ks-caps__detail { grid-column: 2; }
}
</style>
