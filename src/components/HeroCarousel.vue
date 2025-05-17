<script setup lang="ts">
import { ref, watch } from 'vue'
import type { CarouselApi } from '@/components/ui/carousel'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { watchOnce } from '@vueuse/core'
import prevArrow from '@/components/icons/prevArrow.vue';
import nextArrow from '@/components/icons/nextArrow.vue';

defineProps(["carouselItems"])
const emit = defineEmits(['update:current'])
const api = ref<CarouselApi>()
const totalCount = ref(0)
const current = ref(0)

function setApi(val: CarouselApi) {
  api.value = val
}

watchOnce(api, (api) => {
  if (!api)
    return

  totalCount.value = api.scrollSnapList().length
  current.value = api.selectedScrollSnap()

  api.on('select', () => {
    current.value = api.selectedScrollSnap()
    emit('update:current', current.value) // 触发事件通知父组件
  })


})
function scrollNext() {
  api.value?.scrollNext()
}

function scrollPrev() {
  api.value?.scrollPrev()
}

function scrollTo(index: number) {
  api.value?.scrollTo(index)
}
// 监听current变化，确保双向绑定
watch(current, (val) => {
  emit('update:current', val)
})

</script>

<template>
  <div class="relative w-full h-full">
    <Carousel @init-api="setApi" class="relative w-full h-full" :opts="{
      align: 'start',
      loop: true,
    }">
      <CarouselContent>
        <CarouselItem v-for="(item, index) in carouselItems" :key="index" class="w-full h-full">
          <!-- darkMode遮罩 -->
          <div class="relative select-none h-[50vh] md:h-[100vh]">
            <div v-show="item.darkMode"
              class="absolute bg-linear-to-b from-black/50 to-black/0 w-full h-72 inset-x-0" />
            <!-- 轮播图主体 -->
            <div class="absolute inset-0 flex flex-col justify-center items-center -translate-y-1/5">
              <h1 class="text-center text-white text-2xl lg:text-4xl 2xl:text-[56px] font-semibold">{{ item.title }}
              </h1>
              <p class="text-center text-white text-2xl lg:text-4xl 2xl:text-[56px] font-semibold mb-4">{{
                item.description }}</p>
            </div>
            <img :src="item.image" alt="" class="w-full h-full object-cover">
          </div>
        </CarouselItem>

      </CarouselContent>
    </Carousel>

    <!-- 前进后退按钮 -->

    <div class="absolute w-full lg:w-[960px] 2xl:w-[1520px]
    top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div class="flex justify-between">
        <button @click="scrollPrev" class="">
          <prevArrow />
        </button>
        <button @click="scrollNext" class="">
          <nextArrow />
        </button>
      </div>
    </div>


    <!-- 指示器 -->
    <div class="absolute bottom-[50px] left-1/2 -translate-x-1/2 flex gap-2">
      <div v-for="(item, index) in carouselItems" :key="index" class="w-[50px] lg:w-[100px] h-[3px]"
        :class="current === index ? 'bg-white' : 'bg-white/30'" @click="scrollTo(index)" />
    </div>
  </div>
</template>
