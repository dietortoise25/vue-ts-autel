<script setup lang='ts'>

import RightArrow from '@/components/icons/RightArrow.vue';

defineProps(['isOdd', 'cardContent'])
</script>

<template>
  <div class="w-full h-full bg-white rounded-[20px] shadow-md hover:shadow-lg
  flex flex-col md:flex-row overflow-hidden
  " :class="isOdd ? '' : 'md:flex-row-reverse'">
    <!-- image -->
    <img :src="cardContent.image" alt="" class="w-full md:w-55/100 object-cover">
    <!-- text -->
    <div class="flex flex-col justify-center p-10 gap-[20px]">
      <div class="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium">
        {{ cardContent.title }}
      </div>
      <div class="text-zinc-800 2xl:text-xl xl:text-lg lg:text-md md:text-lg sm:text-md text-sm font-normal">
        {{ cardContent.description }}
      </div>
      <div class="text-primary flex gap-2 items-center">
        Learn more<span class="size-2.5">
          <RightArrow />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
