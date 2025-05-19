<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed } from 'vue'

import HeroCarousel from '@/components/HeroCarousel.vue'
import heroCarousel1 from '@/assets/hero-carousel-1.png'
import heroCarousel2 from '@/assets/hero-carousel-2.png'
import heroCarousel3 from '@/assets/hero-carousel-3.png'
// import NaviMenu from '@/components/NaviMenu.vue';
import NavBar from '@/components/NavBar.vue'

const activeIndex = ref(0)
const darkMode = computed(() => {
  return carouselItems[activeIndex.value].darkMode
})
const carouselItems = [
  {
    id: 1,
    image: heroCarousel1,
    title: 'Full-Scenario',
    description: 'Intelligent Charging Network Solution',
    darkMode: false,
  },
  {
    id: 2,
    image: heroCarousel2,
    title: 'One-Stop ESS-EVSE Solution',
    description: 'description',
    darkMode: true,
  },
  {
    id: 3,
    image: heroCarousel3,
    title: 'Pioneering the Future of Digital Energy Through',
    description: 'Solar, Storage, and Charging Excellence',
    darkMode: true,
  },
]
</script>

<template>
  <div class="flex justify-center w-full relative">
    <!-- nav -->
    <NavBar :darkMode="darkMode" />
    <!-- hero -->
    <div class="absolute inset-x-0">
      <HeroCarousel
        :carouselItems
        v-model:current="activeIndex"
      />
    </div>
  </div>
</template>

<style scoped></style>
