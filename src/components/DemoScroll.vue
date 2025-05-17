<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue'
// 添加滚动监听
onMounted(() => {
  window.addEventListener('scroll', checkAnimations)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkAnimations)
})
const checkAnimations = () => {
  // 这个方法会强制触发Vue的响应式更新
  animatedElements.value = [...animatedElements.value]
}
// 1. 基础滚动事件
const scrollY = ref(0)
const containerHeight = ref(0)
const scrollHeight = ref(0)
const scrollPercentage = ref(0)
const isScrolled = ref(false)

const handleScroll = (e) => {
  const target = e.target
  scrollY.value = target.scrollTop
  containerHeight.value = target.clientHeight
  scrollHeight.value = target.scrollHeight
  scrollPercentage.value = scrollY.value * 100 / (scrollHeight.value - containerHeight.value)
}

// 2. 滚动触发动画
const animatedElements = ref([])
const isInView = (index) => {
  if (!animatedElements.value[index]) {
    return false
  }

  const rect = animatedElements.value[index].getBoundingClientRect()
  return (
    rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0 // 修复 react -> rect 拼写错误
  )
}


</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <header class="fixed top-0 left-0 right-0 bg-white shadow-md py-4 px-6 z-50 transition-all duration-300"
      :class="{ 'bg-opacity-95': isScrolled }">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Vue 3滚动事件教学Demo</h1>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="#section1" @click="scrollToSection('section1')"
                class="text-gray-700 hover:text-blue-600 transition-colors duration-200">第一节</a></li>
            <li><a href="#section2" @click="scrollToSection('section2')"
                class="text-gray-700 hover:text-blue-600 transition-colors duration-200">第二节</a></li>
            <li><a href="#section3" @click="scrollToSection('section3')"
                class="text-gray-700 hover:text-blue-600 transition-colors duration-200">第三节</a></li>
            <li><a href="#section4" @click="scrollToSection('section4')"
                class="text-gray-700 hover:text-blue-600 transition-colors duration-200">无限滚动</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- 滚动位置指示器 -->
    <div class="fixed top-0 left-0 h-2 bg-blue-500 z-50" :style="{ width: scrollPercentage + '%' }"></div>

    <main class="container mx-auto px-4 pt-24 pb-16">
      <!-- 1. 基础滚动事件 -->
      <section id="section1" class="mb-20 bg-white rounded-xl shadow-md p-6 scroll-trigger">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. 基础滚动事件</h2>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-1/2">
            <div class="h-60 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200" @scroll="handleScroll">
              <p class="mb-4 text-gray-700">
                这个窗口使用了@scroll="handleScroll"
              </p>
              <p class="mb-4 text-gray-700">
                这是一个可滚动的区域。滚动这个区域来查看滚动事件的触发情况。
              </p>
              <p class="mb-4 text-gray-700">
                滚动事件是Web开发中常用的交互方式，可以用来实现各种动态效果，如懒加载、导航栏变化、元素动画等。
              </p>
              <p class="mb-4 text-gray-700">
                在Vue中，我们可以通过监听`scroll`事件来捕获滚动行为，并获取相关的滚动位置信息。
              </p>
              <p class="mb-4 text-gray-700">
                这个区域包含了足够多的文本，以便您可以测试滚动效果。尝试上下滚动，观察右侧的滚动数据变化。
              </p>
              <p class="mb-4 text-gray-700">
                滚动事件会在用户滚动元素时持续触发，因此在处理滚动事件时需要注意性能优化，避免频繁的DOM操作。
              </p>
              <p class="mb-4 text-red-600">
                滚动距离：<code class="text-amber-500 font-semibold">e.target.scrollTop</code>
              </p>
              <p class="mb-4 text-red-600">
                容器高度：<code class="text-amber-500 font-semibold">e.target.clientHeight</code>
              </p>
              <p class="mb-4 text-red-600">
                内容高度：<code class="text-amber-500 font-semibold">e.target.scrollHeight</code>
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3">滚动数据</h3>
            <p class="text-gray-700 mb-2">
              滚动距离: <span class="font-semibold text-blue-600">{{ scrollY }}px</span>
            </p>
            <p class="text-gray-700 mb-2">
              容器高度: <span class="font-semibold text-blue-600">{{ containerHeight }}px</span>
            </p>
            <p class="text-gray-700 mb-2">
              内容高度: <span class="font-semibold text-blue-600">{{ scrollHeight }}px</span>
            </p>
            <p class="text-gray-700 mb-2">
              滚动百分比: <span class="font-semibold text-blue-600">{{ scrollPercentage?.toFixed(1) }}%</span>
            </p>
            <div class="mt-4 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-blue-500/70" :style="{ width: scrollPercentage + '%' }"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. 滚动触发动画 -->
      <section id="section2" class="mb-20 scroll-animation">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">2. 滚动触发动画</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div ref="el => animatedElements[0] = el"
            class="bg-white rounded-xl shadow-md p-6 transform opacity-50 transition-all duration-700"
            :class="{ 'opacity-100 translate-y-0': isInView(0) }">
            <!-- 卡片内容保持不变 -->
          </div>
          <div ref="el => animatedElements[1] = el"
            class="bg-white rounded-xl shadow-md p-6 transform opacity-0 transition-all duration-700 delay-200"
            :class="{ 'opacity-100 translate-y-0': isInView(1) }">
            <!-- 卡片内容保持不变 -->
          </div>
          <div ref="el => animatedElements[2] = el"
            class="bg-white rounded-xl shadow-md p-6 transform opacity-0 transition-all duration-700 delay-400"
            :class="{ 'opacity-100 translate-y-0': isInView(2) }">
            <!-- 卡片内容保持不变 -->
          </div>
        </div>
      </section>

      <!-- 3. 滚动导航高亮 -->
      <!-- <section id="section3" class="mb-20 bg-white rounded-xl shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">3. 滚动导航高亮</h2>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-1/4">
            <div class="sticky top-24 bg-gray-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-800 mb-3">内容导航</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#sub1" @click="scrollToSection('sub1')"
                    class="block py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    :class="{ 'bg-blue-500 text-white': currentSection === 'sub1' }">
                    子部分 1
                  </a>
                </li>
                <li>
                  <a href="#sub2" @click="scrollToSection('sub2')"
                    class="block py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    :class="{ 'bg-blue-500 text-white': currentSection === 'sub2' }">
                    子部分 2
                  </a>
                </li>
                <li>
                  <a href="#sub3" @click="scrollToSection('sub3')"
                    class="block py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    :class="{ 'bg-blue-500 text-white': currentSection === 'sub3' }">
                    子部分 3
                  </a>
                </li>
                <li>
                  <a href="#sub4" @click="scrollToSection('sub4')"
                    class="block py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    :class="{ 'bg-blue-500 text-white': currentSection === 'sub4' }">
                    子部分 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-3/4">
            <div class="h-[1200px] relative">
              <div id="sub1" class="h-1/4 p-6 bg-blue-50 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-blue-800 mb-2">子部分 1</h3>
                <p class="text-gray-700">
                  这是内容的第一部分。当滚动到这个部分时，左侧导航中的"子部分 1"会高亮显示。
                  滚动导航高亮是一种常见的UI模式，可以帮助用户了解他们在页面中的位置。
                </p>
              </div>
              <div id="sub2" class="h-1/4 p-6 bg-green-50 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-green-800 mb-2">子部分 2</h3>
                <p class="text-gray-700">
                  这是内容的第二部分。滚动到这里时，导航高亮会自动切换。这种效果可以通过监听
                  滚动事件并计算各部分的位置来实现。在实际应用中，您可能需要添加一些阈值或延迟
                  来避免频繁切换。
                </p>
              </div>
              <div id="sub3" class="h-1/4 p-6 bg-purple-50 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-purple-800 mb-2">子部分 3</h3>
                <p class="text-gray-700">
                  这是内容的第三部分。注意观察当您滚动到这个区域时，导航如何响应。这种交互可以
                  大大提升用户体验，特别是在长页面或文档型网站中。
                </p>
              </div>
              <div id="sub4" class="h-1/4 p-6 bg-yellow-50 rounded-lg">
                <h3 class="text-xl font-semibold text-yellow-800 mb-2">子部分 4</h3>
                <p class="text-gray-700">
                  这是内容的最后一部分。滚动导航高亮是通过比较滚动位置与各部分在页面中的位置
                  来实现的。您可以使用Element.getBoundingClientRect()方法获取元素的位置信息。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> -->

      <!-- 4. 无限滚动加载 -->
      <!-- <section id="section4" class="mb-20">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">4. 无限滚动加载</h2>
        <div class="relative">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            id="infinite-scroll-container">

            <div v-for="item in items" :key="item.id"
              class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img :src="item.image" alt="示例图片" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="font-semibold text-gray-800 mb-1">项目 {{ item.id }}</h3>
                <p class="text-gray-600 text-sm">这是一个动态加载的内容卡片，滚动到底部自动加载更多。</p>
              </div>
            </div>
          </div>


          <div v-if="isLoading" class="flex justify-center py-8">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>


          <div v-if="isEnd" class="text-center py-8 text-gray-500">
            <p>已加载全部内容</p>
          </div>
        </div>
      </section> -->
    </main>

    <!-- 返回顶部按钮 -->
    <!-- <button v-show="scrollY > 300" @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110">
      <i class="fa fa-arrow-up"></i>
    </button> -->
  </div>
</template>

<style scoped>
/* 自定义动画 */
.scroll-trigger {
  transition: all 0.5s ease;
}

.scroll-animation>div>div {
  transform: translateY(30px);
  opacity: 0;
}

.scroll-animation>div>div.animate {
  transform: translateY(0);
  opacity: 1;
}
</style>
