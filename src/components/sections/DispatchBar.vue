<script setup lang="ts">
import { Phone, AlertTriangle, MapPin } from 'lucide-vue-next'

defineProps<{
  phone: string
  emergency?: boolean
  emergencyPhone?: string
  serviceArea?: string
}>()
</script>

<!--
  DispatchBar — full-width stripe with the dispatch phone, optional
  emergency line, and service-area blurb. Sits between the hero and
  the rest of the page to make the "call us now" affordance unmissable.
-->
<template>
  <section class="ks-dispatch" aria-label="Dispatch">
    <div class="ap-container ks-dispatch__row">
      <a class="ks-dispatch__primary" :href="'tel:' + phone.replace(/[^0-9+]/g, '')">
        <Phone :size="20" :stroke-width="2" />
        <span class="ks-dispatch__label">Dispatch</span>
        <strong>{{ phone }}</strong>
      </a>
      <a
        v-if="emergency"
        class="ks-dispatch__emerg"
        :href="'tel:' + (emergencyPhone || phone).replace(/[^0-9+]/g, '')"
      >
        <AlertTriangle :size="18" :stroke-width="2" />
        <span class="ks-dispatch__label">24/7 emergency</span>
        <strong>{{ emergencyPhone || phone }}</strong>
      </a>
      <div v-if="serviceArea" class="ks-dispatch__area">
        <MapPin :size="16" :stroke-width="2" />
        <span>{{ serviceArea }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ks-dispatch {
  background: var(--ap-ink);
  color: var(--ap-surface);
  border-top: 2px solid var(--ap-primary, var(--ap-ink));
  border-bottom: 2px solid var(--ap-primary, var(--ap-ink));
}
.ks-dispatch__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem 2rem;
  padding: 0.9rem 0;
}
.ks-dispatch__primary,
.ks-dispatch__emerg {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--ap-surface);
  text-decoration: none;
  font-size: 0.95rem;
  border: none;
  background: none;
  transition: color 0.12s;
}
.ks-dispatch__primary strong,
.ks-dispatch__emerg strong {
  font-family: var(--ap-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-variant-numeric: tabular-nums;
  font-size: 1rem;
  letter-spacing: 0.02em;
}
.ks-dispatch__primary:hover,
.ks-dispatch__emerg:hover { color: var(--ap-primary, var(--ap-surface)); }
.ks-dispatch__label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.7;
}
.ks-dispatch__emerg { color: var(--ap-primary, #ffaa33); }
.ks-dispatch__emerg .ks-dispatch__label { opacity: 0.85; }
.ks-dispatch__area {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-left: auto;
  font-size: 0.82rem;
  opacity: 0.82;
}
@media (max-width: 720px) {
  .ks-dispatch__area { margin-left: 0; flex-basis: 100%; }
}
</style>
