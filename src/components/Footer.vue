<!-- eslint-disable vue/multi-word-component-names -->
<!-- Footer.vue -->
<script setup lang='ts'>
import Button from '@/components/ui/button/Button.vue';
import InsIcon from '@/components/icons/InsIcon.vue';
import FaceIcon from '@/components/icons/faceIcon.vue';
import XIcon from '@/components/icons/XIcon.vue';
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue';

const footerLinks = [
  {
    title: 'Solutions',
    children: [
      { title: 'CPO', href: '/' },
      { title: 'Fleets', href: '/' },
      { title: 'Destination', href: '/' },
      { title: 'Home', href: '/' },
    ]
  },
  {
    title: 'Products',
    children: [
      { title: 'MaxiCharger DC HiPower', href: '/' },
      { title: 'MaxiCharger DC Fast', href: '/' },
      { title: 'MaxiCharger DC Compact', href: '/' },
      { title: 'MaxiCharger AC Pro', href: '/' },
      { title: 'MaxiCharger AC Elite', href: '/' },
      { title: 'MaxiCharger AC Ultra', href: '/' },
      { title: 'Software', href: '/' },
      { title: 'All Products', href: '/products' },
    ]
  },
  {
    title: 'Resources',
    children: [
      { title: 'Event', href: '/' },
      { title: 'FAQ', href: '/' },
      { title: 'Blog', href: '/' },
      { title: 'Incentives', href: '/' },
    ]
  },
  {
    title: 'About',
    children: [
      { title: 'Why Autel', href: '/' },
      { title: 'Contact Us', href: '/' },
      { title: 'Sustainability', href: '/' },
      { title: 'Newsroom', href: '/' },
    ]
  }
]
const legals = [
  { title: 'Privacy', href: '/' },
  { title: 'Terms of Use', href: '/' },
  { title: 'Legal Information', href: '/' },
  { title: 'Copyright © 2004-2021 AUTEL. All rights reserved.', href: '#' },
]

</script>

<template>

  <footer class="bg-[#F7F7F7]">
    <div class="container mx-auto">

      <div class="w-full text-center font-bold text-7xl">Bread</div>

      <div class="w-full">
        <div class="grid  grid-cols-3 md:grid-cols-5 pb-[30px] lg:pb-[70px]
        border-b border-[#939393]/50

        ">

          <div v-for="(footerlink, index) in footerLinks" :key="index">
            <div class="my-[10px] md:my-[20px]
            font-medium text-[#1D1D1F]

            ">
              {{ footerlink.title }}
            </div>
            <div class="flex flex-col md:gap-[15px]
            font-normal text-sm text-[#666]
            ">
              <div v-for="(subFooterLink, subIndex) in footerlink.children" :key="subIndex">
                <RouterLink :to="subFooterLink.href">
                  <div>{{ subFooterLink.title }}</div>
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="max-w-[188px]">
            <div class="my-[10px] md:my-[20px]
            font-medium text-[#1D1D1F]
            ">
              Follow Autel
            </div>
            <div class="flex justify-between h-[24px]">
              <InsIcon />
              <FaceIcon />
              <XIcon />
              <YoutubeIcon />
            </div>
            <div class="lg:mt-[32px] mt-[16px]">
              <Button variant="outline" class="border-primary text-primary bg-transparent">Become A Dealer</Button>
            </div>
          </div>

        </div>
        <div class="flex justify-start w-full lg:w-1/2">
          <div class="flex justify-between text-xs text-[#666] font-normal w-full my-[10px] lg:my-[25px]">
            <div v-for="(link, index) in legals" :key="index">
              <RouterLink :to="link.href">
                <div>{{ link.title }}</div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>


    </div>
  </footer>

</template>
