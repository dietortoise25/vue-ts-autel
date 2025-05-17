<script setup lang='ts'>
import searchIcon from '@/components/icons/searchIcon.vue';
import shopIcon from '@/components/icons/shopIcon.vue';
import earthIcon from '@/components/icons/earthIcon.vue';
import userIcon from '@/components/icons/userIcon.vue';
import logo from '@/components/icons/logo.svg';
import humburger from '@/components/icons/humburger.vue';

import Button from '@/components/ui/button/Button.vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import SolutionSubbar from '@/components/Menubar/SolutionSubbar.vue';
import MenuBar from '@/components/MenuBar.vue';

import { ref } from 'vue'


const isHovering = ref(false)

defineProps(['darkMode'])

const tabsLeft = [
  {
    id: 1,
    title: 'Solution',
    component: SolutionSubbar
  },
  {
    id: 2,
    title: 'Products',
  },
  {
    id: 3,
    title: 'Partners',
  },
  {
    id: 4,
    title: 'Services',
  },
  {
    id: 5,
    title: 'Resources',
  },
  {
    id: 6,
    title: 'About',
  }
]

const tabsRight = [
  {
    id: 1,
    title: 'MediaBank',
  },
  {
    id: 2,
    title: 'Shop',
  }
]

const navTop = [
  {
    id: 1,
    title: 'Search',
    component: searchIcon,
  },
  {
    id: 2,
    title: 'Shop',
    component: shopIcon,
  },
  {
    id: 3,
    title: 'Earth',
    component: earthIcon,
  },
  {
    id: 4,
    title: 'User',
    component: userIcon,
  }
]


</script>

<template>

  <div class="z-1 fixed top-0 left-0 right-0 w-full flex flex-col items-center transition-colors ease-in-out"
    :class="isHovering ? 'bg-white text-black' : darkMode ? 'text-white' : ''" @mouseenter="isHovering = true"
    @mouseleave="isHovering = false">


    <!-- nav-top -->
    <div class="w-full mx-auto transition-colors ease-in-out hidden md:flex "
      :class="isHovering ? 'bg-white ' : darkMode ? 'bg-black/50' : 'bg-white/50'" @mouseenter="isHovering = true">
      <div class="w-full h-10 lg:w-[960px] 2xl:w-[1520px]  mx-auto flex justify-end">
        <div class="flex gap-4 justify-between items-center">
          <div v-for="(item) in navTop" :key="item.id" class="flex gap-2 items-center">
            <component :is="item.component" />
          </div>
        </div>
      </div>
    </div>

    <!-- nav-bottom -->
    <div class="w-full h-16 lg:w-[960px] 2xl:w-[1520px] flex justify-between items-center">

      <!-- nav-bottom-left -->
      <div class="flex h-full lg:gap-[20px] 2xl:gap-[50px] justify-between">
        <!-- logo -->
        <img :src="logo" alt="" class="w-[130px]">
        <MenuBar :tabs="tabsLeft" />
      </div>

      <!-- nav-bottom-right -->
      <div class="hidden md:flex gap-[10px] 2xl:gap-[24px] justify-between">
        <!-- menu -->
        <MenuBar :tabs="tabsRight" />
        <!-- button -->
        <Button>Talk to An Expert</Button>
      </div>

      <!-- menu-mobile -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" class="md:hidden">
            <humburger class="w-full" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>

<style scoped></style>
