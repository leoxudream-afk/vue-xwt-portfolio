<template>
  <!-- 工作经历区块，id 用于锚点跳转 -->
  <section
    class="experience-section"
    id="experience"
  >
    <div class="section-inner">
      <!-- 区块标题 -->
      <header class="section-heading">
        <p>个人经历</p>
        <h2>WORK EXPERIENCE <span>↘</span></h2>
      </header>

      <!-- 个人简介：左图右文 -->
      <div class="profile">
        <figure class="portrait">
          <img
            src="/public/experience-ip.webp"
            alt="Hi, I am XWT"
          />
        </figure>
        <div class="about">
          <p class="intro">8 年政企 UI 产品设计师、工程师，擅长项目方案、界面设计与标书交付。</p>

          <!-- 4 张信息卡片：网格布局 -->
          <div class="highlights">
            <article>
              <span>当前身份</span>
              <strong>UI Designer</strong>
            </article>
            <article>
              <span>服务方向</span>
              <strong>政企数字化 / UI 产品 / 标书交付 / 前端开发</strong>
            </article>
            <article>
              <span>电话</span>
              <strong>18213560021</strong>
            </article>
            <article>
              <span>邮箱</span>
              <strong>leoxudream@gmail.com</strong>
            </article>
          </div>

          <!-- 3 个数据：v-for 循环 -->
          <div class="stats">
            <article
              v-for="s in stats"
              :key="s.label"
            >
              <strong
                >{{ s.num }} <span>{{ s.unit }}</span></strong
              >
              <p>{{ s.label }}</p>
            </article>
          </div>
          <!-- 标签：v-for 循环 -->
          <div class="tags">
            <p>个性标签</p>
            <div>
              <span
                v-for="tag in tags"
                :key="tag"
                >{{ tag }}></span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 工作经历时间线 -->
      <div class="career">
        <div class="career-title">
          <p>CAREER PATH</p>
          <h3>工作经历</h3>
        </div>

        <div class="timeline">
          <!-- 循环渲染每条经历 -->
          <article
            v-for="(item, i) in careers"
            :key="i"
            class="career-item"
          >
            <time>{{ item.time }}</time>
            <h4>{{ item.company }}</h4>
            <strong>{{ item.desc }}</strong>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 导入数据
import { careerList, stats, tags } from '../data/portfolio.js'
// 赋值给变量，模板里用 careers
const careers = careerList
</script>

<style scoped>
.experience-section {
  padding: 120px 40px; /* 上下 120，左右 40 */
}
.section-inner {
  max-width: 1480px;
  margin: 0 auto;
}

/* 区块标题 */
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

/* 个人简介：左图右文，网格布局 */
.profile {
  display: grid;
  grid-template-columns: 300px 1fr; /* 左列 300px，右列占剩余 */
  gap: 60px;
}
.portrait img {
  width: 100%;
  border-radius: var(--radius);
}
.eyebrow {
  font-size: 12px;
  color: var(--accent);
  letter-spacing: 2px;
}

.about h3 {
  font-size: 32px;
  margin: 8px 0 16px;
}
.intro {
  color: var(--text-sub);
  margin-bottom: 32px;
}

/* 信息卡片：两列网格 */
.highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 32px;
}

.highlights article {
  padding: 16px;
  background: var(--bg-card);
  border-radius: 12px;
}
.highlights span {
  display: block;
  font-size: 12px;
  color: var(--text-sub);
  margin-bottom: 4px;
}

/* 数据：三列网格 */
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三列等宽 */
  gap: 16px;
  margin-bottom: 32px;
}
.stats strong {
  font-size: 32px;
  font-weight: 800;
  color: var(--accent);
}
.stats p {
  font-size: 12px;
  color: var(--text-sub);
}

/* 标签 */
.tags > p {
  font-size: 12px;
  color: var(--text-sub);
  margin: 8px;
}

.tags > div {
  display: block;
  flex-wrap: wrap; /* 允许换行 */
  gap: 8px;
}

.tags span {
  padding: 6px 14px;
  background: var(--bg-card);
  border-radius: 999px; /* 胶囊形状 */
  font-size: 13px;
}

/* 工作经历时间线 */
.career {
  margin-top: 80px;
}

.career-title p {
  font-size: 12px;
  color: var(--accent);
  letter-spacing: 2px;
}

.career-title h3 {
  font-size: 28px;
  margin-bottom: 24px;
}

.timeline {
  display: flex;
  /* 竖排 */
  flex-direction: column;
  gap: 24px;
}

.career-item {
  padding: 24px;
  background: var(--bg-card);
  border-radius: var(--radius);
}
.career-item time {
  font-size: 13px;
  color: var(--accent);
}
.career-item h4 {
  font-size: 18px;
  margin: 8px 0 4px;
}
.career-item strong {
  font-size: 14px;
  color: var(--text-sub);
}
.career-item p {
  margin-top: 12px;
  color: var(--text-sub);
  font-size: 14px;
}

@media (max-width: 768px) {
  .profile {
    grid-template-columns: 1fr;
  } /* 左图右文变上下 */
  .highlights {
    grid-template-columns: 1fr;
  } /* 两列变一列 */
  .section-heading h2 {
    font-size: 32px;
  } /* 标题变小 */
}
</style>
