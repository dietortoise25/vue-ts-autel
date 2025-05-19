<script setup lang='ts'>
import { SectionWrapper } from '.';
import { ref } from 'vue'
import productImage1 from '@/assets/product-image-1.png'
import productImage2 from '@/assets/product-image-2.png'
import productImage3 from '@/assets/product-image-3.png'


const tabs = [
  {
    title: 'DC series',
    products: [
      {
        title: 'MaxiCharger DC Pro',
        desription: '640 kW ultra fast charger',
        image: productImage1
      },
      {
        title: 'MaxiCharger DC Elite',
        desription: 'Flexible installation, 40 kW DC charging',
        image: productImage2
      },
      {
        title: 'MaxiCharge DC ultra',
        desription: 'Versatile and efficient,19.2 kW*2 DC charging',
        image: productImage3
      },
    ]
  },
  {
    title: 'AC series',
    products: [
      {
        title: 'MaxiCharger AC Pro',
        desription: '640 kW ultra fast charger',
        image: productImage1
      },
      {
        title: 'MaxiCharger AC Elite',
        desription: 'Flexible installation, 40 kW AC charging',
        image: productImage2
      },
      {
        title: 'MaxiCharge AC ultra',
        desription: 'Versatile and efficient,19.2 kW*2 AC charging',
        image: productImage3
      },
    ]
  },
]
const ActiveTabIndex = ref(0)

function handleTabChange(index: number) {
  ActiveTabIndex.value = index
}

</script>

<template>
  <SectionWrapper title="Products.">
    <div class="max-w-[500px] mx-auto bg-neutral-100 rounded-lg">
      <div class="flex justify-between">

        <div v-for="(tab, index) in tabs" :key="index" class="text-center text-zinc-900 font-sm md:font-medium h-16
          rounded-lg transition-all ease-in-out  cursor-pointer flex-1 m-2
         flex justify-center items-center" :class="index === ActiveTabIndex ? 'bg-white shadow' : ''"
          @click="handleTabChange(index)">
          {{ tab.title }}

        </div>
      </div>
    </div>
    <div
      class="w-full mt-[30px] md:mt-[60px] flex flex-col items-center md:flex-row md:justify-evenly md:items-center gap-4">
      <div v-for="(product, index) in tabs[ActiveTabIndex].products" :key="index" class="flex-1 max-w-[460px] p-4 h-[570px] bg-[#F7F7F7] rounded-lg
        flex flex-col items-center overflow-hidden hover:shadow">
        <div class="w-full h-full  flex-1/2 flex flex-col items-center justify-center gap-1.5 md:gap-2.5">
          <div class="text-zinc-900 text-3xl font-medium text-center">{{ product.title }}</div>
          <div class="text-stone-500 font-normal leading-snug text-center">{{ product.desription }}</div>
        </div>
        <div class="w-full h-full flex justify-center pb-[35px] md:pb-[70px]">
          <img :src="product.image" alt="" class="max-h-[17.5rem]">
        </div>
      </div>
    </div>

  </SectionWrapper>
</template>

<style scoped></style>
