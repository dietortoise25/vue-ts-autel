<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang='ts'>
import { ref } from 'vue';
// 1. 基础点击事件
const clickCount = ref(0);
const doubleClickCount = ref(0);
function handleClick() {
  clickCount.value++;
}
function handleDoubleClick() {
  doubleClickCount.value++;
}
// 2. 鼠标悬停事件
const isHovering = ref(false)
const hoverCount = ref(0)
const hoverMessage = ref('')
function handleMouseEnter() {
  isHovering.value = true
  hoverCount.value++
  hoverMessage.value = '鼠标已进入'
}
function handleMouseLeave() {
  isHovering.value = false
  hoverMessage.value = '鼠标已离开'
}
// 3. 鼠标移动事件
const showMousePosition = ref(false)
const moveCount = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)
const clientX = ref(0)
const clientY = ref(0)
const targetEl = ref(null)
const targetX = ref(0)
const targetY = ref(0)

function handleMouseMove(e) {
  if (!targetEl.value) return
  showMousePosition.value = true
  moveCount.value++
  clientX.value = e.clientX
  clientY.value = e.clientY
  const rect = targetEl.value.getBoundingClientRect()
  targetX.value = rect.x
  targetY.value = rect.y
  mouseX.value = clientX.value - rect.x
  mouseY.value = clientY.value - rect.y
}
//   4. 鼠标按下与释放
const isMouseDown = ref(false)
const pressCount = ref(0)
function handleMouseDown() {
  isMouseDown.value = true
}
function handleMouseUp() {
  isMouseDown.value = false
  pressCount.value++
}
// 5. 右击菜单事件
const contextMenuCount = ref(0)
function handleContextMenu(e) {
  e.preventDefault()
  contextMenuCount.value++
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <header class="bg-white shadow-md py-4 px-6">
      <h1 class="text-2xl font-bold text-gray-800">Vue 3鼠标事件教学Demo</h1>
    </header>

    <main class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- 1. 基础点击事件 -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">1. 基础点击事件</h2>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-1/2">
            <button @click="handleClick" @dblclick="handleDoubleClick"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300">
              点击我
            </button>
            <p class="mt-4 text-gray-600 text-sm">
              单点击触发单次事件，双击触发双击事件
            </p>
          </div>
          <div class="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-700">点击次数: <span class="font-semibold">{{ clickCount }}</span></p>
            <p class="text-gray-700">双击次数: <span class="font-semibold">{{ doubleClickCount }}</span></p>
          </div>
        </div>
      </div>

      <!-- 2. 鼠标悬停事件 -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">2. 鼠标悬停事件</h2>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-1/2">
            <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
              class="w-full h-40 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300">
              <p class="text-gray-700 font-medium" :class="{ 'text-blue-600': isHovering }">
                {{ hoverMessage }}
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-700">悬停状态: <span class="font-semibold"
                :class="{ 'text-green-600': isHovering, 'text-red-600': !isHovering }">
                {{ isHovering ? '是' : '否' }}
              </span></p>
            <p class="text-gray-700">悬停次数: <span class="font-semibold">{{ hoverCount }}</span></p>
          </div>
        </div>
      </div>

      <!-- 3. 鼠标移动事件 -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">3. 鼠标移动事件</h2>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-1/2">
            <div ref="targetEl" @mousemove="handleMouseMove"
              class="w-full h-60 bg-gray-100 rounded-lg relative overflow-hidden">
              <div v-if="showMousePosition" :style="{ left: `${mouseX}px`, top: `${mouseY}px` }"
                class="absolute w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-0">
              </div>
              <p class="absolute bottom-4 left-4 text-gray-600 text-sm">
                鼠标位置: ({{ mouseX }}, {{ mouseY }})
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg flex justify-between">
            <div>
              <p class="text-gray-700">移动次数: <span class="font-semibold">{{ moveCount }}</span></p>
              <p class="text-gray-700">画布坐标: <span class="font-semibold">({{ targetX }}, {{ targetY }})</span></p>
              <p class="text-gray-700">鼠标相对视口坐标:<br> <span class="font-semibold">({{ clientX }}, {{ clientY }})</span>
              </p>
            </div>
            <div>
              <p class="text-gray-700">当前坐标(画布): <span class="font-semibold">({{ mouseX }}, {{ mouseY }})</span></p>
            </div>

          </div>
        </div>
      </div>

      <!-- 4. 鼠标按下与释放 -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">4. 鼠标按下与释放</h2>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-1/2">
            <button @mousedown="handleMouseDown" @mouseup="handleMouseUp"
              class="w-full h-20 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium rounded-lg transition-all duration-200"
              :class="{ 'bg-blue-500 text-white': isMouseDown }">
              {{ isMouseDown ? '鼠标已按下' : '按下并释放鼠标' }}
            </button>
            <p class="mt-4 text-gray-600 text-sm">
              鼠标按下时改变颜色，释放时恢复
            </p>
          </div>
          <div class="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-700">按下状态: <span class="font-semibold"
                :class="{ 'text-green-600': isMouseDown, 'text-red-600': !isMouseDown }">
                {{ isMouseDown ? '按下' : '释放' }}
              </span></p>
            <p class="text-gray-700">点击次数: <span class="font-semibold">{{ pressCount }}</span></p>
          </div>
        </div>
      </div>

      <!-- 5. 右键菜单事件 -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">5. 右键菜单事件</h2>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-1/2">
            <div @contextmenu="handleContextMenu"
              class="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer">
              <p class="text-gray-700 font-medium">右键点击此处</p>
            </div>
            <p class="mt-4 text-gray-600 text-sm">
              右键点击触发自定义事件，默认菜单已被禁用
            </p>
          </div>
          <div class="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-700">右键点击次数: <span class="font-semibold">{{ contextMenuCount }}</span></p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 自定义动画效果 */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

button:active {
  transform: translateY(0);
}
</style>
