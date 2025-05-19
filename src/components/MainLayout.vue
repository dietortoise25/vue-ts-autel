<!-- MainLayout.vue -->
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class="mt-26">
    <router-view />
  </div>
</template>
