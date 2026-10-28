<template>
  <!-- 工作经历区块，id 用于锚点跳转 -->
  <section
    class="experience-section"
    id="experience"
  >
    <div class="section-inner">
      <!-- 区块标题 -->
      <header class="section-heading">
        <h2>WORK EXPERIENCE <span>↘</span></h2>
        <p>个人经历</p>
      </header>

      <!-- 个人简介：左图右文 -->
      <div class="profile">
        <figure class="portrait">
          <img
            src="/experience-ip.png"
            alt="Hi, I am XWT"
          />
        </figure>
        <div class="about">
          <p class="eyebrow">ABOUT ME</p>
          <h3>Hi, I am XWT</h3>
          <p class="intro">
            8 年政企 UI/UX设计师、 产品设计师、工程师，擅长项目方案、界面设计与标书交付。
          </p>

          <!-- 4 张信息卡片：网格布局 -->
          <div class="highlights">
            <article>
              <span>当前身份</span>
              <strong>UI/UX Designer</strong>
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
            <div
              class="career-marker"
              aria-hidden="true"
            ></div>
            <time>{{ item.time }}</time>
            <h4>{{ item.company }}</h4>
            <strong>{{ item.role }}</strong>
            <p>{{ item.desc }}</p>
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
.section-heading {
  flex-direction: column-reverse;
  align-items: flex-start;
  margin-bottom: 24px;
  display: flex;
}

.section-heading p {
  color: #eef5f79e;
  letter-spacing: 0.12em;
  margin: 7px 0 0;
  font-size: 14px;
}
.section-heading h2 {
  color: #f7fbfc;
  letter-spacing: -0.035em;
  margin: 0;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: clamp(34px, 3.5vw, 58px);
  font-weight: 300;
  line-height: 1;
}
.section-heading h2 span {
  color: var(--accent);
  margin-left: 8px;
  font-size: 0.48em;
  display: inline-block;
  transform: translateY(-0.1em);
}
/* 个人简介：左图右文，网格布局 */
.profile {
  display: grid;
  grid-template-columns: 300px 1fr; /* 左列 300px，右列占剩余 */
  gap: 60px;
}
.portrait img {
  border-radius: var(--radius);
  object-fit: cover;
  object-position: center 29%;
  width: 100%;
  height: 100%;
}
.eyebrow {
  /* font-size: 12px;
  color: var(--accent);
  letter-spacing: 2px; */
  color: var(--accent);
  letter-spacing: 0.14em;
  margin: 0 0 8px;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 9px;
  font-weight: 800;
}

.about h3 {
  color: var(--text-main);
  letter-spacing: -0.04em;
  margin: 0;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: clamp(38px, 4.2vw, 64px);
  font-weight: 300;
  line-height: 1;
}
.intro {
  color: var(--text-sub);
  max-width: 780px;
  margin: 18px 0 0;
  font-size: 14px;
  line-height: 1.85;
}

/* 信息卡片：两列网格 */
.highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 32px;
}
.highlights article::nth-child(odd) {
  padding-right: clamp(18px, 2.4vw, 34px);
}
.highlights article {
  border-bottom: 1px solid var(--experience-line);
  min-width: 0;
  padding: 16px 0 14px 0;
}

.highlights span {
  /* display: block;
  font-size: 12px;
  color: var(--text-sub);
  margin-bottom: 4px; */
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-bottom: 8px;
  font-size: 10px;
  display: block;
}
.highlights strong {
  color: #fffffff0;
  font-variant-numeric: tabular-nums;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family:
    DIN Pro,
    Microsoft YaHei,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  display: block;
  overflow: hidden;
}
/* 数据：三列网格 */
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三列等宽 */
  gap: 16px;
  border-bottom: 1px solid #cbe0e829;
  margin-top: 0;
}
.stats article {
  min-width: 0;
  padding: 24px 18px 24px 0;
  position: relative;
}
.stats strong {
  color: var(--text-main);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.055em;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: clamp(28px, 2.5vw, 42px);
  font-weight: 500;
  line-height: 0.95;
  display: block;
}
.stats strong span {
  color: var(--accent);
  letter-spacing: 0;
  margin-left: 3px;
  font-size: 0.48em;
}
.stats p {
  color: var(--text-sub);
  letter-spacing: 0.12em;
  margin: 10px 0 0;
  font-size: 10px;
}

/* 标签 */
.tags {
  grid-template-columns: 1fr;
  align-items: start;
  gap: 10px;
  margin-top: 24px;
  display: grid;
}
.tags > p {
  color: var(--accent);
  letter-spacing: 0.08em;
  margin: 0;
  font-size: 10px;
}

.tags > div {
  flex-wrap: wrap;
  gap: 8px;
  display: flex;
}

.tags span {
  color: #eaf3f6b8;
  background: #ffffff06;
  border: 1px solid #d7e9ef2e;
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 10px;
}

/* 工作经历时间线 */
.career {
  margin-top: clamp(42px, 6vh, 72px);
}
.career-title {
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  display: flex;
}
.career-title p {
  font-size: 12px;
  color: var(--accent);
  letter-spacing: 2px;
}

.career-title h3 {
  color: #f0f7f9b8;
  letter-spacing: 0.06em;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
}

.timeline {
  border-top: 1px solid #cbe0e838;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
}

.career-item {
  /* padding: 24px;
  background: var(--bg-card);
  border-radius: var(--radius); */
  min-width: 0;
  padding: 24px clamp(18px, 2vw, 32px) 0 0;
  position: relative;
}
.career-marker {
  background: var(--accent);
  width: 9px;
  height: 9px;
  position: absolute;
  top: -5px;
  left: 0;
  transform: rotate(45deg);
  box-shadow: 0 0 18px #c9ff1ab8;
}
.career-item time {
  color: #c9ff1ac2;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.05em;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 10px;
}
.career-item h4 {
  color: #f6fafb;
  margin: 12px 0 8px;
  font-size: clamp(16px, 1.25vw, 20px);
  font-weight: 600;
}
.career-item strong {
  color: #c9ff1ae0;
  background: #c9ff1a09;
  border: 1px solid #c9ff1a57;
  border-radius: 999px;
  padding: 5px 9px;
  font-size: 10px;
  font-weight: 700;
  display: inline-flex;
}
.career-item p {
  color: #e0ecf185;
  max-width: 360px;
  margin: 14px 0 0;
  font-size: 12px;
  line-height: 1.7;
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
