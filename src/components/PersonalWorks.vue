<template>
  <!-- 个人作品区块 -->
  <section
    class="works-section"
    id="works"
  >
    <div class="section-inner">
      <header class="section-heading">
        <p>个人作品</p>
        <h2>Personal Works <span>↘</span></h2>
      </header>
      <!-- 3 列网格 -->
      <div class="works-grid">
        <!-- 循环渲染每张卡片，整张卡片是一个链接 -->
        <a
          v-for="work in works"
          :key="work.id"
          :href="work.link"
          target="_blank"
          rel="noreferrer"
          class="work-card"
        >
          <!-- 封面区 -->
          <div class="cover">
            <img
              :src="work.img"
              :alt="work.title"
            />
            <span>{{ work.id }}</span>
          </div>
          <!-- 文字区 -->
          <div class="copy">
            <p>{{ work.tag }}</p>
            <div>
              <h3>{{ work.title }}</h3>
              <span>↗</span>
            </div>
            <small>{{ work.desc }}</small>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { personalWorks } from '../data/portfolio.js'
const works = personalWorks
</script>

<style scoped>
.works-section {
  padding: 120px 40px;
  background: var(--bg-dark2); /* 稍微浅一点的背景，区分区块 */
}

.section-inner {
  max-width: 1480px;
  margin: 0 auto;
}

.section-heading p {
  font-size: 14px;
  color: var(--accent);
  border-left-width: 2px;
  margin-bottom: 8px;
}
.section-heading h2 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 60px;
}
/* 3 列网格 */
.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* 卡片 */
.work-card {
  display: block;
  background: var(--bg--card);
  border-radius: var(--radius);

  overflow: hidden;
  transition: transform 0.3s;
}
.work-card:hover {
  transition: translateY(-8px);
}
/* 封面：固定比例 */
.cover {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}
.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 编号：绝对定位到左上角 */
.cover span {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 14px;
  font-weight: 700;
  color: var(--accent);
}

/* 文字区 */
.copy {
  padding: 24px;
}

.copy > p {
  font-size: 14px;
  color: var(--text-sub);
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.copy > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.copy h3 {
  font-size: 20px;
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
  font-size: 13px;
  color: var(--text-sub);
}
@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: 1fr;
  } /* 三列变一列 */
  .section-heading h2 {
    font-size: 32px;
  }
}
</style>
