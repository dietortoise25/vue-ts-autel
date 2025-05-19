<script setup lang="ts">
import { SectionWrapper } from '.'
import Card from './Card.vue'
import cardImage1 from '@/assets/card-img-1.png'
import cardImage2 from '@/assets/card-img-2.png'
import cardImage3 from '@/assets/card-img-3.png'
import cardImage4 from '@/assets/card-img-4.png'

const cardsContent = [
  {
    image: cardImage1,
    title: 'CPO Charging',
    description:
      'Innovate your business with Autel Smart Charging Network and invest for the future success. We offer both air-cooled fast charging and liquid-cooled ultra-fast charging solutions that are compatible with most vehicle models, ensuring fast and smooth charging experience with multiple payment methods.',
    link: '',
  },
  {
    image: cardImage2,
    title: 'Fleet Charging',
    description:
      'Accelerate fleet electrification with Autel and step into the future of intelligent fleet management and energy management. Vehicle ready tailored to you needs. From initial planning to site maintenance, Autel ensures all-stage hassle-free charging experience and service for fleet owners.',
    link: '',
  },
  {
    image: cardImage3,
    title: 'Destination Charging',
    description:
      'Autel offers one-stop solution for business owners with enhanced reliability and ensure higher yields. With customized consultance, reliable design, intelligent software and global service network, we ensure long-term worry free charging experience.',
    link: '',
  },
  {
    image: cardImage4,
    title: 'Residential Charing',
    description:
      'We strive to create an ultimate and seamless charging experience for desired homes with sleek design, top-tier reliability and superior charging efficiency. Our smart home charging solution optimizes charging power, prioritizes safety, and intelligently integrates green energy for future possibilities.',
    link: '',
  },
]
</script>

<template>
  <SectionWrapper title="Solution.">
    <div class="flex flex-col gap-4">
      <Card
        v-for="(card, index) in cardsContent"
        :key="index"
        :card-content="card"
        :isOdd="index % 2 === 0"
      />
    </div>
  </SectionWrapper>
</template>

<style scoped></style>
