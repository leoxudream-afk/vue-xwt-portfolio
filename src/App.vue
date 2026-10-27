<template>
  <main class="portfolio-page">
    <NavBar />
    <HeroSection />
    <ExperienceSection />
    <PersonalWorks />
    <StrengthsSection />
    <ContactSection />
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import PersonalWorks from './components/PersonalWorks.vue'
import StrengthsSection from './components/StrengthsSection.vue'
import ContactSection from './components/ContactSection.vue'

// 加滚动动画
import { onMounted } from 'vue'
// 组件挂载后执行
onMounted(() => {
  // 创建观察器：当元素进入视口时触发
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 如果元素进入视口
        if (entry.isIntersecting) {
          // 加 class，触发 CSS 动画
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.15 }, // 元素 15% 可见时触发
  )

  // 选中所有需要动画的区块
  document
    .querySelectorAll('.experience-section, .works-section, .strengths-section, .contact-section')
    .forEach((el) => {
      el.classList.add('scroll-reveal') // 先加初始 class
      observer.observe(el) // 开始观察
    })
})
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: -apple-system, 'PingFang SC', sans-serif;
  background: #0a0a0a;
  color: #fff;
  line-height: 1.6;
  padding-top: 80px;
}
a {
  color: inherit;
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
}
/* 深色主题（默认） */
:root {
  /* --accent: #c8ff00;
  --bg-dark: #0a0a0a;
  --bg-card: #141414;
  --text-sub: #888;
  --radius: 16px; */
  --accent: #c8ff00; /* 主色：荧光绿 */
  --bg-dark:
    radial-gradient(circle at 8% 8%, #0848563b, #0000 34%),
    radial-gradient(circle at 94% 72%, #4108372e, #0000 38%), #030812; /* 背景 */
  --bg--drak2:
    inear-gradient(90deg, #0000 0 58%, #ffffff05 58% 58.1%, #0000 58.1%) 0 0 / 100% 100%,
    linear-gradient(#ffffff04 1px, #0000 1px) 0 0 / 100% 72px;
  --bg-card: linear-gradient(145deg, #ffffff06, #0000 58%), #070e16e6; /* 卡片背景 */
  --text-main: #ffffff; /* 主文字 */
  --text-sub: #888; /* 次要文字 */
  --radius: 16px; /* 圆角 */
  --experience-line: #adc7d72e;
}

/* 浅色主题：加在 html 上的 light class 触发 */
html.light {
  --bg-dark: #f5f5f5; /* 背景变浅 */
  --bg-dark2: #e1e0e0; /* 背景变浅 */
  --bg-card: #ffffff; /* 卡片变白 */
  --text-main: #1a1a1a; /* 文字变黑 */
  --text-sub: #666; /* 次要文字变深灰 */
  /* 注意：--accent 和 --radius 不变 */
}
/* body 用变量，跟着主题变 */
body {
  background: var(--bg-dark);
  color: var(--text-main);
  transition:
    background 0.3s,
    color 0.3s; /* 平滑过渡 */
}
/* 初始状态：透明 + 下移 40px */
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s,
    transform 0.8s; /* 过渡动画 */
}

/* 进入视口后：不透明 + 回原位 */
.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
