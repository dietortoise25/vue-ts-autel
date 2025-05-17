<script setup lang='ts'>


defineProps(['tabs'])
import { ref } from 'vue';

const activeSubmenu = ref<number | null>(null)

const showSubmenu = (index: number) => {
  activeSubmenu.value = index
}
const hideSubmenu = () => {
  // setTimeout(() => {
  activeSubmenu.value = null
  // }, 500);
}

</script>

<template>
  <!-- menubar -->
  <div class="hidden lg:flex">
    <!-- menuItem -->
    <ul class="flex justify-between items-center lg:gap-x-[15px] 2xl:gap-x-[30px]">

      <!-- v-for -->
      <li v-for="(item, index) in tabs" :key="index" @mouseenter="showSubmenu(index)" class="h-full flex items-center">
        <a href="#">{{ item.title }}</a>
        <!-- 2.下拉菜单 -->
        <div v-show="activeSubmenu === index" @mouseenter="showSubmenu(index)" @mouseleave="hideSubmenu()"
          class="absolute top-[100%] left-0 z-10 w-full bg-white text-black transition-all ease-in-out">
          <component :is="item.component" />
        </div>
      </li>

    </ul>

  </div>

</template>

<style scoped></style>
