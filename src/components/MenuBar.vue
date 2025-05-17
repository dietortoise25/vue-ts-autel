<script setup lang='ts'>
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

// defineProps(['tabs'])
import { ref } from 'vue';
const tabs = ref([
  {
    id: 'home',
    title: '首页',
    href: '/home',
    children: null,
  },
  {
    id: 'products',
    title: '产品',
    href: '/products',
    children: [
      { id: 'product1', title: '产品一', href: '/product1' },
      { id: 'product2', title: '产品二', href: '/product2' },
    ],
  },
  {
    id: 'about',
    title: '关于',
    href: '/about',
    children: null,
  },
]);

// 状态管理
const isMobileMenuOpen = ref(false);


</script>

<template>
  <!-- menubar -->
  <div class="hidden lg:flex justify-between items-center lg:gap-x-[15px] 2xl:gap-x-[30px]">
    <div v-for="(item) in tabs" :key="item.id" class="">{{ item.title }}</div>
  </div>

</template>

<style scoped></style>
