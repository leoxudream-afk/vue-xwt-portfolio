<template>
  <!-- 导航栏头部容器 -->
  <header class="nav-bar">
    <!-- 左侧品牌logo按钮，跳转到首页 -->
    <a
      href="#home"
      class="brand"
    >
      <!-- vite public文件夹资源：直接 /logo.svg，不要写 /public/logo.svg -->
      <img
        src="/logo.svg"
        alt="品牌logo"
        class="brand-mark"
      />
      <span>XWT</span>
    </a>

    <!-- 中间导航链接区域 -->
    <nav class="nav-links">
      <!--
        :class 动态绑定class
        @click.prevent：阻止原生a标签跳转，交给我们自定义平滑滚动函数
      -->
      <a
        href="#experience"
        :class="{ 'nav-active': activeId === 'experience' }"
        @click.prevent="scrollToSection('experience')"
        >工作经历</a
      >
      <a
        href="#works"
        :class="{ 'nav-active': activeId === 'works' }"
        @click.prevent="scrollToSection('works')"
        >服务内容</a
      >
      <a
        href="#strengths"
        :class="{ 'nav-active': activeId === 'strengths' }"
        @click.prevent="scrollToSection('strengths')"
        >个人优势</a
      >
    </nav>

    <!-- 右侧组件：主题切换 + 联系方式按钮 -->
    <div class="right-component">
      <!-- 主题切换按钮，点击执行 toggleTheme 函数 -->
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
        @click.prevent="scrollToSection('contact')"
        >联系方式</a
      >
    </div>
  </header>
</template>

<script setup>
// 引入vue内置工具
// ref：创建响应式变量（数据变化，页面自动更新）
// onMounted：组件渲染完成后执行
// onUnmounted：组件销毁离开页面时执行
import { ref, onMounted, onUnmounted } from 'vue'

// isLight：标记当前是否浅色主题，默认false=深色模式
const isLight = ref(false)
// activeId：记录导航当前激活项，默认【工作经历】
const activeId = ref('experience')

// -------------------------- 防抖函数（优化滚动性能） --------------------------
// 短时间多次滚动，不会反复执行handleScroll，减少浏览器压力
const debounce = (fn, delay = 80) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * 滚动监听函数
 * 页面滚动自动识别当前所在板块，自动高亮导航
 */
const handleScroll = () => {
  // 导航和区块的映射列表，后期新增导航只需要在这里追加
  const navList = [{ id: 'experience' }, { id: 'works' }, { id: 'strengths' }, { id: 'contact' }]

  for (const item of navList) {
    const el = document.getElementById(item.id)
    if (!el) continue

    // 获取区块相对于浏览器窗口的位置信息
    const rect = el.getBoundingClientRect()
    // 判断规则：区块经过屏幕中线时激活导航
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      activeId.value = item.id
      break
    }
  }
}
// 给滚动函数套上防抖
const scrollFn = debounce(handleScroll)

/**
 * 平滑滚动到指定区块（方案二核心函数）
 * @param {string} id 目标区块DOM id
 */
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  // 更新导航高亮
  activeId.value = id

  // 导航栏高度，用来偏移，防止内容被fixed导航遮挡
  const navHeight = 80
  // 计算目标滚动位置
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight

  window.scrollTo({
    top,
    behavior: 'smooth', // 开启平滑滚动动画
  })
}

/**
 * 切换深色/浅色主题
 */
const toggleTheme = () => {
  isLight.value = !isLight.value
  // 给html根标签添加/移除light类，用来写浅色模式样式
  document.documentElement.classList.toggle('light', isLight.value)
  // localStorage本地存储，刷新页面记住主题选择
  localStorage.setItem('theme', isLight.value ? 'light' : 'dark')
}

// 组件挂载（页面渲染完成）
onMounted(() => {
  // 读取本地保存的主题
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isLight.value = true
    document.documentElement.classList.add('light')
  }
  // 绑定滚动事件
  window.addEventListener('scroll', scrollFn)
  // 页面刚加载，先执行一次，初始化导航高亮
  handleScroll()
})

// 组件销毁（离开页面）
onUnmounted(() => {
  // 移除滚动监听，防止内存泄漏、页面卡顿
  window.removeEventListener('scroll', scrollFn)
})
</script>

<style scoped>
/* scoped：样式只作用于当前组件，不会污染其他页面 */
:root {
  /* 全局主色调，你可以自行修改 */
  --accent: #42b983;
}

.nav-bar {
  --nav-bg: rgba(10, 10, 10, 0.4);
  --nav-text: #ffffffe6;
  --nav-item-default-bg: rgba(255, 255, 255, 0.12);
  --nav-item-border: rgba(255, 255, 255, 0.35);
  --border-weak: rgba(255, 255, 255, 0.06);

  position: fixed; /* 固定在顶部，滚动页面不会消失 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 100; /* 层级，数字大，不容易被其他内容盖住 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: var(--nav-bg);
  backdrop-filter: blur(20px); /* 毛玻璃模糊效果 */
  border-bottom: 1px solid var(--border-weak);
  box-shadow:
    0 20px 56px #030a0e52,
    inset 0 1px #ffffff38,
    inset 0 -1px #ffffff0f;
}

/* 左侧品牌按钮 */
.brand {
  border-radius: 999px; /* 999px 实现胶囊圆角 */
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 143px;
  height: 42px;
  padding: 0 20px 0 11px;
  overflow: hidden;
  color: var(--nav-text);
  text-decoration: none;
}
.brand-mark {
  background: var(--accent);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.brand span {
  letter-spacing: 0.035em;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 700;
}

/* 中间导航容器 */
.nav-links {
  color: var(--nav-text);
  letter-spacing: 0.04em;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(34px, 3.5vw, 58px);
  font-size: 13px;
  font-weight: 500;
}

/* ========== 导航【默认样式】 框一：填充底色 ========== */
.nav-links a {
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 18px;
  background: var(--nav-item-default-bg);
  border: 1px solid transparent; /* 透明边框占位，切换样式不会跳动 */
  transition: all 0.22s ease;
  color: var(--nav-text);
  text-decoration: none;
}

/* ========== 导航【选中激活样式】 框二：透明底+白色描边 ========== */
.nav-links a.nav-active {
  background: transparent;
  border: 1px solid var(--nav-item-border);
}

/* 鼠标悬浮导航文字变色 */
.nav-links a:hover {
  color: var(--accent);
}

/* 联系方式按钮 */
.contact-btn {
  padding: 10px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  font-size: 14px;
  transition: all 0.3s ease;
  color: var(--nav-text);
  text-decoration: none;
}
.contact-btn:hover {
  background: var(--accent);
  color: #000;
  border-color: var(--accent);
}

/* 主题切换按钮 */
.theme-toggle {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--nav-text);
}
.theme-toggle:hover {
  background: var(--accent);
  border-color: var(--accent);
}

/* 右侧容器 */
.right-component {
  display: flex;
  gap: 16px;
  align-items: center;
}

/* ====================== 浅色模式变量覆盖 ====================== */
.light .nav-bar {
  --nav-bg: rgba(255, 255, 255, 0.4);
  --nav-text: #111111e6;
  --nav-item-default-bg: rgba(0, 0, 0, 0.08);
  --nav-item-border: rgba(0, 0, 0, 0.35);
  --border-weak: rgba(0, 0, 0, 0.06);
}
.light .theme-toggle {
  background: rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.2);
}
.light .contact-btn {
  border-color: rgba(0, 0, 0, 0.2);
}

/* ========== 手机端适配 宽度小于768px ========== */
@media (max-width: 768px) {
  .nav-bar {
    padding: 16px 20px;
  }
  .nav-links {
    display: none; /* 手机隐藏导航，后续再加汉堡折叠菜单 */
  }
}
</style>
