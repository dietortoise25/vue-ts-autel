<script setup lang='ts'>
const emit = defineEmits(['sayYeah', 'sayHi'])
const props = defineProps(['class'])

import { componentName } from '@/lib/utils'

const myName =
  componentName(import.meta.url)



const handleClick = () => {
  console.log(myName);
  emit('sayYeah', myName)

}

</script>

<template>
  <button @click="handleClick" class="py-2 px-4 rounded-lg text-white bg-primary" :class="props.class">
    我是一个按钮
  </button>
</template>

<style scoped></style>
