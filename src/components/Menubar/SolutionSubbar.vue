<script setup lang='ts'>
const solutions = [
  {
    title: 'For CPOs',
    description: 'Fast charging solution for inter-city expressway service stations'
  },
  {
    title: 'For Fleets',
    description: 'Intelligent charging solution for commercial vehicle operators'
  },
  {
    title: 'For Destination',
    description: 'Efficient charging solution for both public and hospitality services'
  },
  {
    title: 'For Homes',
    description: 'Cost-efficient and safe charging solution for families'
  },
]
</script>

<template>
  <div class="w-full h-full">
    <div class="2xl:w-[1520px] h-full py-[40px] px-auto mx-auto">
      <div class="2xl:w-[1152px] mx-auto h-full z-99 flex justify-between xl:gap-[100px]">

        <div v-for="solution in solutions" :key="solution.title" class="space-y-[20px] mb-[30px]">
          <div class="text-zinc-900">{{ solution.title }}</div>
          <div class="text-stone-500 text-smleading-snug">
            {{ solution.description }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
