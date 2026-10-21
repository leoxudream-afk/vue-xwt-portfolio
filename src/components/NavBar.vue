<template>
  <header class="nav-bar">
    <a
      href="#home"
      class="brand"
    >
      <img
        src="/public/xwt-ip-v2.webp"
        alt="图片呢"
        class="brand-mark"
      />
      <span>XWT</span>
      <nav class="nav-links">
        <a href="#experience">工作经历</a>
        <a href="#works">服务内容</a>
        <a href="#strengths">个人优势</a>
      </nav>
    </a>
    <div class="right-component">
      <button
        class="theme-toggle"
        @click="toggleTheme"
        :aria-label="isLight ? '切换到深色' : '切换到浅色'"
      >
        {{ isLight ? '🌙' : '☀️' }}
      </button>
      <a
        href="#contact"
        class="contact-btn"
        >联系方式</a
      >
    </div>
  </header>
</template>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand-mark {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.brand span {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
}
.nav-links {
  display: flex;
  gap: 32px;
}
.nav-links a {
  font-size: 14px;
  color: var(--text-sub);
  transition: color 0.3s;
}
.nav-links a:hover {
  color: var(--accent);
}
.contact-btn {
  padding: 10px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  font-size: 14px;
  transition: all 0.3s;
}
.contact-btn:hover {
  background: var(--accent);
  color: #000;
  border-color: var(--accent);
}

/* 屏幕小于 768px 时 */
@media (max-width: 768px) {
  .nav-bar {
    padding: 16px 20px; /* 减小内边距 */
  }
  .nav-links {
    display: none;
  }
  /* 隐藏菜单，简化导航 */
}

.theme-toggle {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
}

.theme-toggle:hover {
  background: var(--accent);
  border-color: var(--accent);
}

.right-component {
  display: flex;
  gap: 16px;
}
</style>
<script setup>
import { ref, onMounted } from 'vue'

const isLight = ref(false) // 当前是否浅色

// 切换主题
const toggleTheme = () => {
  isLight.value = !isLight.value
  // 给 html 加/删 light class
  document.documentElement.classList.toggle('light', isLight.value)
  // 存到 localStorage，下次打开记住
  localStorage.setItem('theme', isLight.value ? 'light' : 'dark')
}

// 页面加载时读取上次的选择
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    isLight.value = true
    document.documentElement.classList.add('light')
  }
})
</script>
