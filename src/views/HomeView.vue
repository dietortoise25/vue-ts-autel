<script setup lang="ts">
import Header from '@/components/Header.vue'
import { MainSections } from '@/components/MainSections'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main class="mt-[50vh] md:mt-[100vh]">
    <MainSections />
  </main>
  <Footer />
</template>

<style scoped></style>
