<template>
  <!-- 作品区块容器，id用于页面锚点跳转 -->
  <section
    class="works-section"
    id="works"
  >
    <div class="section-inner">
      <!-- 区块标题区域 -->
      <header class="section-heading">
        <p>个人作品</p>
        <h2>Personal Works <span>↘</span></h2>
      </header>

      <!-- 作品网格容器：承载所有作品卡片 -->
      <div class="works-grid">
        <!--
          v-for：循环遍历作品数组，批量生成卡片
          work：循环单项，代表单个作品对象
          :key：Vue循环唯一标识，优化渲染性能
          :class：动态绑定选中类，activeId与当前作品id相等时添加active样式
          @click：卡片点击事件，触发选中与跳转逻辑
        -->
        <div
          v-for="work in works"
          :key="work.id"
          class="work-card"
          :class="{ active: activeId === work.id }"
          @click="handleCardClick(work)"
        >
          <!-- 封面图片区域 -->
          <div class="cover">
            <!-- :src 动态绑定图片地址；alt 图片替代描述，无障碍适配 -->
            <img
              :src="work.img"
              :alt="work.title"
            />
            <!-- 作品编号 -->
            <span>{{ work.id }}</span>
          </div>

          <!-- 作品文字信息区域 -->
          <div class="copy">
            <p>{{ work.tag }}</p>
            <div>
              <h3>{{ work.title }}</h3>
              <span>↗</span>
            </div>
            <small>{{ work.desc }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 引入Vue响应式API ref，用于定义可更新的变量
import { ref } from 'vue'
// 引入外部作品数据
import { personalWorks } from '../data/portfolio.js'
// 赋值，供模板使用
const works = personalWorks

// 记录当前选中作品的ID
// 默认赋值第一条作品id，实现页面初始化时第一张卡片默认高亮
const activeId = ref(personalWorks[0].id)

/**
 * 卡片点击处理函数
 * @param {Object} work - 当前点击的作品对象
 * @description 1. 更新选中ID，锁定卡片高亮状态；2. 新标签页打开作品链接
 */
const handleCardClick = (work) => {
  // 更新选中标识
  activeId.value = work.id
  // 新开标签页跳转链接，noreferrer 安全属性
  window.open(work.link, '_blank', 'noreferrer')
}
</script>

<style scoped>
/**
 * scoped：当前样式仅作用于本组件，不会污染其他组件
 */

/* 作品区块外层容器 */
.works-section {
  padding: 120px 40px;
  background: var(--bg-dark2); /* 全局CSS变量，深色背景 */
}

/* 内容容器：限制最大宽度、居中布局 */
.section-inner {
  flex-direction: column;
  width: min(1480px, 100% - 112px);
  min-height: 100svh;
  margin: 0 auto; /* 水平居中 */
  padding: clamp(92px, 10vh, 132px) 0 clamp(70px, 8vh, 104px);
  display: flex;
}

/* 标题容器 */
.section-heading {
  flex-direction: column-reverse;
  align-items: flex-start;
  margin-bottom: clamp(34px, 5vh, 56px);
  display: flex;
}
.section-heading p {
  color: var(--text-sub);
  letter-spacing: 0.12em;
  margin: 8px 0 0;
  font-size: 14px;
}
.section-heading h2 {
  color: #f7fbfc;
  letter-spacing: -0.045em;
  margin: 0;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: clamp(42px, 4.4vw, 72px);
  font-weight: 300;
  line-height: 0.95;
}
.section-heading h2 span {
  color: var(--accent); /* 主题强调色变量 */
  margin-left: 9px;
  font-size: 0.42em;
  display: inline-block;
  transform: translateY(-0.08em);
}

/* 网格布局：三列等宽卡片 */
.works-grid {
  flex: 1;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(18px, 2vw, 32px); /* 卡片间距，自适应 */
  min-height: 0;
  display: grid;
}

/* 卡片基础样式 */
.work-card {
  outline: none;
  grid-template-rows: minmax(0, 1fr) auto;
  min-width: 0;
  display: grid;
  overflow: hidden;
  transition: transform 0.3s; /* 上浮过渡动画时长 */
  position: relative;
  cursor: pointer; /* 鼠标悬浮显示手型，提示可点击 */
}
/* 卡片悬浮上浮效果 */
.work-card:hover {
  transform: translateY(-8px);
}

/* 封面容器：图片载体 */
.cover {
  background: #0c1820;
  border: 1px solid #d6e8ee29;
  border-radius: 20px; /* 圆角 */
  min-height: clamp(300px, 43vh, 560px);
  position: relative;
  overflow: hidden;
}
/* 封面底部渐变遮罩，增加画面层次感，不响应鼠标事件 */
.cover:after {
  content: '';
  pointer-events: none;
  background: linear-gradient(#0000 54%, #02080d7a);
  position: absolute;
  inset: 0;
}
/* 图片默认样式：降低透明度、饱和度，弱化未选中状态 */
.cover img {
  object-fit: cover; /* 图片保持比例填满容器，不拉伸 */
  opacity: 0.46;
  filter: saturate(0.62) contrast(0.96);
  width: 100%;
  height: 100%;
  /* 多属性组合过渡动画 */
  transition:
    transform 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.32s,
    opacity 0.32s;
  display: block;
}
/* 右下角编号文字 */
.cover span {
  z-index: 2; /* 提高层级，保证文字在遮罩上层可见 */
  color: #ffffffd1;
  letter-spacing: 0.1em;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 11px;
  font-weight: 500;
  position: absolute;
  bottom: 13px;
  right: 16px;
}

/* 文字区域默认样式 */
.copy {
  opacity: 0.68;
  border-bottom: 1px solid #cbe0e833;
  padding: 18px 2px 20px;
  transition:
    opacity 0.28s,
    border-color 0.28s;
  position: relative;
  z-index: 2;
}
.copy > p {
  color: var(--accent);
  letter-spacing: 0.14em;
  margin: 0 0 9px;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 9px;
  font-weight: 700;
}
.copy > div {
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  display: flex;
}
.copy h3 {
  font-size: 20px;
  margin: 0;
}
.copy span {
  color: var(--accent);
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 18px;
  transition: transform 0.28s;
  transform: translate(0);
}
.copy small {
  color: #e1edf18f;
  letter-spacing: 0.04em;
  margin-top: 10px;
  font-size: 12px;
  display: block;
}

/* ============================================= */
/* 高亮样式：悬浮hover / 点击选中active共用一套 */
/* ============================================= */
/* 图片恢复正常透明度、饱和度 */
.work-card:hover .cover img,
.work-card.active .cover img {
  opacity: 1;
  filter: saturate(1) contrast(1);
}
/* 文字完全不透明，底线切换为主题色 */
.work-card:hover .copy,
.work-card.active .copy {
  opacity: 1;
  border-bottom-color: var(--accent);
}
/* 箭头向上偏移，增加动效 */
.work-card:hover .copy span,
.work-card.active .copy span {
  transform: translateY(-4px);
}

/* 移动端响应式适配：屏幕宽度小于768px */
@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: 1fr; /* 三列改为单列 */
  }
  .section-heading h2 {
    font-size: 32px;
  }
}
</style>
