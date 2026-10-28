<script setup lang="ts">
import { Phone, AlertTriangle } from 'lucide-vue-next'
import Marquee from '@apotome/archetype-shared/components/motion/Marquee.vue'

withDefaults(defineProps<{
  phone: string
  emergency?: boolean
  emergencyPhone?: string
  serviceArea?: string
  /** Bar label. Owner-editable. */
  label?: string
  /** Emergency line label. Owner-editable. */
  emergencyLabel?: string
}>(), { label: 'Dispatch', emergencyLabel: 'Emergency line' })
</script>

<!--
  DispatchBar — the "call us now" strip between the hero and the page.
  Phone numbers sit as fixed cells on the left; the service area runs as
  a slow mono ticker on the right so long coverage lists never wrap.
-->
<template>
  <section class="ks-dispatch" aria-label="Dispatch">
    <div class="ks-dispatch__row">
      <a class="ks-dispatch__cell ks-dispatch__primary" :href="'tel:' + phone.replace(/[^0-9+]/g, '')">
        <Phone :size="16" :stroke-width="2" />
        <span class="ks-dispatch__label">{{ label }}</span>
        <strong>{{ phone }}</strong>
      </a>
      <a
        v-if="emergency"
        class="ks-dispatch__cell ks-dispatch__emerg"
        :href="'tel:' + (emergencyPhone || phone).replace(/[^0-9+]/g, '')"
      >
        <AlertTriangle :size="15" :stroke-width="2" />
        <span class="ks-dispatch__label">{{ emergencyLabel }}</span>
        <strong>{{ emergencyPhone || phone }}</strong>
      </a>
      <div v-if="serviceArea" class="ks-dispatch__area">
        <Marquee :items="serviceArea.split(/\s*[,—·]\s*/).filter(Boolean)" :seconds="40" separator="rule" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.ks-dispatch {
  background: var(--ap-ink);
  color: var(--ap-surface);
  border-bottom: 2px solid var(--ap-ink);
  overflow: hidden;
}
.ks-dispatch__row {
  display: flex;
  align-items: stretch;
  min-height: 48px;
}
.ks-dispatch__cell {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0 clamp(1rem, 2.5vw, 2rem);
  color: var(--ap-surface);
  text-decoration: none;
  border: none;
  border-right: 1px solid color-mix(in srgb, var(--ap-surface) 25%, transparent);
  white-space: nowrap;
  transition: background 120ms ease;
}
.ks-dispatch__cell:hover { background: var(--ap-primary); color: var(--ap-on-primary); }
.ks-dispatch__cell strong {
  font-family: var(--ap-font-mono);
  font-variant-numeric: tabular-nums;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.ks-dispatch__label {
  font-family: var(--ap-font-mono);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.6rem;
  opacity: 0.7;
}
.ks-dispatch__emerg .ks-dispatch__label { opacity: 1; color: var(--ap-accent); }
.ks-dispatch__area {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  font-family: var(--ap-font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--ap-surface) 80%, transparent);
  padding-left: clamp(1rem, 2.5vw, 2rem);
}
.ks-dispatch__area > * { width: 100%; }
@media (max-width: 720px) {
  .ks-dispatch__row { flex-wrap: wrap; }
  .ks-dispatch__cell { flex: 1 1 50%; justify-content: center; padding: 0.7rem 0.75rem; border-right: 0; border-bottom: 1px solid color-mix(in srgb, var(--ap-surface) 25%, transparent); }
  .ks-dispatch__area { flex-basis: 100%; padding: 0.55rem 0; }
}
</style>
