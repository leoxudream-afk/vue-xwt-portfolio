<template>
  <!-- 个人优势区块 -->
  <section
    class="strengths-section"
    id="strengths"
  >
    <div class="section-inner">
      <header class="section-heading">
        <p>个人优势</p>
        <h2>Personal strengths <span>↘</span></h2>
      </header>
      <!-- 网格：3 列 -->
      <div class="strengths-grid">
        <!-- 循环渲染每张卡片.   :class="{ wide: s.wide} =>动态加 class -->
        <article
          v-for="s in strengths"
          :key="s.id"
          class="strength-card"
          :class="{ wide: s.wide }"
        >
          <!-- 顶部：编号 + 标签 -->
          <div class="meta">
            <span>{{ s.id }}</span>
            <small>{{ s.tag }}</small>
          </div>
          <!-- 标题 -->
          <h3>{{ s.title }} <span>·</span></h3>
          <!-- 详情列表 -->
          <div class="details">
            <p>DETAILS</p>
            <ul>
              <li
                v-for="d in s.details"
                :key="d"
              >
                {{ d }}
              </li>
            </ul>
          </div>
          <!-- 装饰图：绝对定位到右下角 -->
          <img
            :src="s.img"
            :alt="s.title"
          />
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
import { strengths } from '../data/portfolio.js'
</script>
<style scoped>
.strengths-section {
  padding: 120px 40px;
}
.section-inner {
  max-width: 1480px;
  margin: 0 auto;
}
.section-heading p {
  font-size: 14px;
  color: var(--accent);
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.section-heading h2 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 60px;
}

/* 3 列网格 */
.strengths-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

/* 卡片 */
.strength-card {
  padding: 28px;
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px solid #d3e6ed2e;
  position: relative; /* 作为装饰图定位的基准 */
  overflow: hidden; /* 超出裁掉 */
  transition:
    transform 0.3s,
    background 0.3s;
  grid-column: span 2;
}
.strength-card:hover {
  transform: translateY(-8px);
  background: #1a1a1a; /* 悬停背景变浅 */
}

/* wide 类：占两列*/
.strength-card.wide {
  grid-column: span 3;
}

/* 顶部信息 */
.meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.meta span {
  font-size: 14px;
  font-weight: 700;
  color: var(--accent);
}

.meta small {
  font-size: 11px;
  color: var(--text-sub);
  letter-spacing: 2px;
}

.strength-card h3 {
  font-size: 22px;
  margin-bottom: 20px;
  line-height: 1.3;
}
.strength-card h3 span {
  color: var(--accent); /* 那个小点用主色 */
}

/* 详情 */
.details > p {
  font-size: 12px;
  color: var(--text-sub);
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.details ul {
  list-style: none;
}
.details li {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  padding: 4px 0 4px 16px;
  position: relative; /* 作为伪元素定位的基准 */
}

/* 伪元素：自定义的圆点 */
.details li::before {
  content: '·';
  position: absolute;
  left: 4px;
  color: var(--accent);
}

/* 装饰图：右下角 */
.strength-card img {
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 120px;
  height: 120px;
  object-fit: contain;
  object-fit: contain;
  opacity: 0.6;
}

@media (max-width: 1024px) {
  .strengths-grid {
    grid-template-columns: repeat(2, 1fr);
  } /* 平板：两列 */
}
@media (max-width: 768px) {
  .strengths-grid {
    grid-template-columns: 1fr;
  } /* 手机：一列 */
  /* .strength-card.wide {
    grid-column: span 1;
  } 宽卡片不再跨列 */
  .section-heading h2 {
    font-size: 32px;
  }
}
</style>
