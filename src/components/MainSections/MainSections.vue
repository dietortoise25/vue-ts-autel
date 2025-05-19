<script setup lang="ts">
import { SolutionSection } from '.'
import { ProductSection } from '.'
import SoftwareSection from './SoftwareSection.vue'
</script>

<template>
  <section class="bg-[#F7F7F7] pb-4 md:pb-12 2xl:pb-18">
    <SolutionSection />
  </section>
  <section class="bg-white pb-4 md:pb-12 2xl:pb-18">
    <ProductSection />
  </section>
  <section>
    <SoftwareSection />
  </section>
  <section class="bg-white pb-4 md:pb-12 2xl:pb-18">
    <ProductSection />
  </section>
</template>

<style scoped></style>
