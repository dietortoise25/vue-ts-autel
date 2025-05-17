<script setup lang='ts'>
defineProps(['title'])

</script>

<template>
  <div class="container mx-auto">

    <!-- title -->
    <div class="w-full">
      <div class="h-[100px] md:h-[125px] lg:h-[180px] xl:h-[220px] 2xl:h-[248px] flex justify-center items-center">
        <div class="mt-[4%]">
          <div class="text-zinc-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
            {{ title }}
          </div>
        </div>
      </div>
    </div>

    <!-- content -->
    <div>
      <slot />
    </div>

  </div>


</template>

<style scoped></style>
