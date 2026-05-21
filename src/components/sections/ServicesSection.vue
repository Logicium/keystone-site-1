<script setup lang="ts">
interface ServiceItem { name: string; description?: string; price: string; tags?: string[] }
interface ServiceCategory { name: string; description?: string; items: ServiceItem[] }

defineProps<{
  eyebrow?: string
  title?: string
  intro?: string
  categories: ServiceCategory[]
  quoteCta?: { label: string; to: string }
}>()
</script>

<!--
  ServicesSection — keystone's signature trade-catalog list.
  Spec-sheet aesthetic: bold category headers, monospaced prices,
  rule-divided rows, tags as small square chips. Maps to "Menu" in
  Mesa but tuned for the trades: rates instead of prices, tags like
  "Same-day" / "Mobile" / "Certified".
-->
<template>
  <section class="ap-section ks-services">
    <div class="ap-container">
      <div class="ap-section-head">
        <span v-if="eyebrow" class="ap-eyebrow">{{ eyebrow }}</span>
        <h2>{{ title || 'Services & rates' }}</h2>
        <p v-if="intro" style="color: var(--ap-ink-muted); max-width: 60ch;">{{ intro }}</p>
      </div>

      <div class="ks-services__grid">
        <section v-for="cat in categories" :key="cat.name" class="ks-services__cat">
          <header class="ks-services__cat-head">
            <h3>{{ cat.name }}</h3>
            <p v-if="cat.description">{{ cat.description }}</p>
          </header>
          <ul class="ks-services__list">
            <li v-for="item in cat.items" :key="item.name" class="ks-services__row">
              <div class="ks-services__row-main">
                <div class="ks-services__row-head">
                  <span class="ks-services__name">{{ item.name }}</span>
                  <span class="ks-services__price">{{ item.price }}</span>
                </div>
                <p v-if="item.description" class="ks-services__desc">{{ item.description }}</p>
                <p v-if="item.tags?.length" class="ks-services__tags">
                  <span v-for="t in item.tags" :key="t">{{ t }}</span>
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <div v-if="quoteCta" class="ks-services__cta">
        <router-link :to="quoteCta.to" class="ap-btn">{{ quoteCta.label }}</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ks-services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}
.ks-services__cat-head {
  border-bottom: 2px solid var(--ap-ink);
  padding-bottom: 0.6rem;
  margin-bottom: 1rem;
}
.ks-services__cat-head h3 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 1.05rem;
}
.ks-services__cat-head p {
  margin: 0.35rem 0 0;
  color: var(--ap-ink-muted);
  font-size: 0.88rem;
}
.ks-services__list { list-style: none; padding: 0; margin: 0; }
.ks-services__row {
  border-bottom: 1px dashed var(--ap-line);
  padding: 0.85rem 0;
}
.ks-services__row:last-child { border-bottom: none; }
.ks-services__row-head {
  display: flex; justify-content: space-between; align-items: baseline;
  gap: 1rem;
}
.ks-services__name {
  font-weight: 600;
  font-size: 1rem;
}
.ks-services__price {
  font-family: var(--ap-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: var(--ap-primary, var(--ap-ink));
  white-space: nowrap;
}
.ks-services__desc {
  margin: 0.25rem 0 0;
  font-size: 0.88rem;
  color: var(--ap-ink-muted);
}
.ks-services__tags {
  margin: 0.45rem 0 0;
  display: flex; flex-wrap: wrap; gap: 0.35rem;
}
.ks-services__tags span {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.15rem 0.5rem;
  border: 1px solid var(--ap-line);
  background: var(--ap-surface-alt, transparent);
  color: var(--ap-ink-muted);
}
.ks-services__cta {
  margin-top: 2.5rem;
  text-align: center;
}
</style>
