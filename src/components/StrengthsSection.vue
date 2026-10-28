<template>
  <!-- 个人优势模块，id用于页面锚点跳转 -->
  <section
    class="strengths-section"
    id="strengths"
  >
    <div class="section-inner">
      <!-- 模块标题 -->
      <header class="section-heading">
        <p>个人优势</p>
        <h2>Personal strengths <span>↘</span></h2>
      </header>

      <!-- 卡片网格容器 -->
      <div class="strengths-grid">
        <article
          v-for="item in strengths"
          :key="shturl"
          class="strength-card"
          :class="{ wide: item.wide }"
        >
          <!-- 卡片头部信息：编号 + 分类标签 -->
          <div class="meta">
            <span>{{ shturl }}</span>
            <small>{{ item.tag }}</small>
          </div>

          <!-- 卡片标题 -->
          <h3>{{ item.title }}<span>✩</span></h3>

          <!-- 详情标签容器：绝对定位自由错落布局， -->
          <div class="details">
            <div class="tag-wrap">
              <span
                v-for="(detail, index) in item.details"
                :key="index"
                class="tag-item"
                :class="`tag-${index}`"
                :style="{ transitionDelay: `${index * 0.12}s` }"
              >
                {{ detail }}
              </span>
            </div>
          </div>

          <!-- 右下角装饰图，pointer-events 避免遮挡hover -->
          <img
            :src="item.img"
            :alt="item.title"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * 引入优势卡片配置数据
 * 数据字段：id / tag / title / details / img / wide
 */
import { strengths } from '../data/portfolio.js'
</script>

<style scoped>
/* 外层容器，深色渐变背景 */
.strengths-section {
  isolation: isolate;
  background:
    radial-gradient(circle at 8% 8%, #0848563b, transparent 34%),
    radial-gradient(circle at 94% 72%, #4108372e, transparent 38%), #030812;
  min-height: 100svh;
  position: relative;
  overflow: hidden;
}

/* 内容容器，居中、限制最大宽度 */
.section-inner {
  display: flex;
  flex-direction: column;
  width: min(1480px, 100% - 112px);
  min-height: 100svh;
  margin: 0 auto;
  padding: clamp(86px, 9vh, 118px) 0 clamp(60px, 6vh, 82px);
}

/* 标题区域 */
.section-heading {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  margin-bottom: clamp(28px, 3.8vh, 44px);
}
.section-heading p {
  color: var(--text-sub);
  letter-spacing: 0.12em;
  margin: 8px 0 0;
  font-size: 14px;
}
.section-heading h2 {
  color: var(--text-main);
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
  color: var(--accent);
  margin-left: 9px;
  font-size: 0.42em;
  display: inline-block;
  transform: translateY(-0.08em);
}

/* 网格布局：6列均分 */
.strengths-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(250px, 1fr));
  gap: clamp(14px, 1.45vw, 24px);
  min-height: 0;
}

/* 卡片基础样式：默认占2列 */
.strength-card {
  color: #f7fbfcf0;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.06), transparent 58%), #070e16e6;
  border: 1px solid rgba(211, 230, 237, 0.18);
  border-radius: 22px;
  grid-column: span 2;
  min-width: 0;
  min-height: 0;
  padding: clamp(18px, 1.7vw, 28px);
  position: relative;
  overflow: hidden;
  transition:
    background-color 0.32s,
    border-color 0.32s,
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}

/* 宽卡片，跨3列 */
.strength-card.wide {
  grid-column: span 3;
}

/* hover 卡片高亮变色上浮 */
.strength-card:hover {
  transform: translateY(-8px);
  background: #c9ff1a;
  border-color: #c9ff1a;
  color: #030812;
}
.strength-card:hover .meta span {
  background: rgba(3, 8, 18, 0.14);
  border-color: rgba(3, 8, 18, 0.24);
  color: #030812;
}
.strength-card:hover .meta small {
  color: rgba(3, 8, 18, 0.47);
}

/* 卡片头部信息行 */
.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 3;
}
.meta span {
  min-width: 36px;
  color: var(--accent);
  text-align: center;
  background: rgba(201, 255, 26, 0.08);
  border: 1px solid rgba(201, 255, 26, 0.24);
  border-radius: 999px;
  padding: 5px 9px;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 10px;
  font-weight: 700;
  transition: all 0.26s;
}
.meta small {
  color: rgba(234, 243, 246, 0.42);
  letter-spacing: 0.14em;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 8px;
  font-weight: 700;
  transition: color 0.26s;
}

/* 卡片标题 */
.strength-card h3 {
  position: relative;
  z-index: 3;
  letter-spacing: 0.015em;
  max-width: 100%;
  margin: clamp(24px, 3vh, 38px) 0 0;
  font-size: clamp(19px, 1.65vw, 28px);
  font-weight: 400;
  line-height: 1.35;
  transition: color 0.26s;
}
.strength-card h3 span {
  color: var(--accent);
  margin-left: 5px;
  transition: color 0.26s;
}

/* ========== 错落标签核心样式（模仿截图效果） ========== */
.details {
  position: relative;
  z-index: 3;
  width: 100%;
  margin-top: clamp(24px, 3vh, 36px);
}
.details-label {
  letter-spacing: 0.15em;
  margin: 0 0 24px;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 8px;
  font-weight: 700;
}
.tag-wrap {
  position: relative;
  min-height: 140px;
}
.tag-item {
  position: absolute;
  white-space: nowrap;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: clamp(12px, 1vw, 16px);
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  opacity: 0;
  filter: blur(4px);
  transform: translateY(16px) scale(0.94);
  transition:
    opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}
/* 三个标签的错位定位，和示例图一样交叉叠加 */
.tag-0 {
  background: #fff;
  color: #111;
  top: 0;
  left: 0;
  z-index: 1;
}
.tag-1 {
  background: #111;
  color: #fff;
  top: 36px;
  left: 80px;
  z-index: 2;
}
.tag-2 {
  background: #eaff70;
  color: #111;
  top: 72px;
  left: 20px;
  z-index: 1;
}

/* hover卡片，标签依次弹出 */
.strength-card:hover .tag-item {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
}

/* 右下角装饰图片 */
.strength-card img {
  position: absolute;
  z-index: 1;
  bottom: 12px;
  right: 12px;
  width: min(28%, 168px);
  height: auto;
  object-fit: contain;
  opacity: 0.6;
  filter: saturate(0.8);
  pointer-events: none;
  transition:
    opacity 0.28s,
    transform 0.42s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.28s;
}
.strength-card:hover img {
  opacity: 0.2;
  filter: saturate(1);
}

/* 响应式：平板 */
@media (max-width: 1024px) {
  .strengths-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .strength-card,
  .strength-card.wide {
    grid-column: span 1;
  }
  .tag-wrap {
    min-height: 120px;
  }
}

/* 响应式：移动端 */
@media (max-width: 768px) {
  .strengths-grid {
    grid-template-columns: 1fr;
  }
  .section-heading h2 {
    font-size: 32px;
  }
  .tag-wrap {
    min-height: 110px;
  }
  .tag-item {
    padding: 10px 16px;
  }
}
</style>
