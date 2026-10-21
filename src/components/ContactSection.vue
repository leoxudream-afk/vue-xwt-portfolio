<template>
  <!-- 联系方式区块 -->
  <section
    class="contact-section"
    id="contact"
  >
    <!-- 内容部分 -->
    <div class="section-inner">
      <!-- 左侧：大字标题 -->
      <div class="intro">
        <p class="kicker">联系方式</p>
        <h2>
          LET'S CREATE <br />
          A <span class="accent">GOOD</span>START ↘
        </h2>
        <!-- 品牌标识 -->
        <a
          href="#home"
          class="brand"
        >
          <img
            src="/public/xwt-ip-v2.webp"
            alt=""
          />
          <span>XWT</span>
        </a>
      </div>
      <!-- 右侧：信息面板 -->
      <aside class="panel">
        <div class="topline">
          <span>CONTACT</span>
          <small>05</small>
        </div>
        <!-- 定义列表：dt 是标题，dd 是内容 -->
        <dl class="list">
          <div>
            <dt>手机号</dt>
            <!-- :href 动态拼接，点击可拨号 -->
            <dd>
              <a href="'tel:${contact.phone}'">{{ contact.phone }}</a>
            </dd>
          </div>
          <div>
            <dt>微信号</dt>
            <dd>{{ contact.wechat }}</dd>
          </div>
          <div>
            <dt>邮箱</dt>
            <!-- mailto: 点击打开邮件客户端 -->
            <dd>
              <a href="'mailto:${contact.email}'">{{ contact.email }}</a>
            </dd>
          </div>
        </dl>
        <!-- 二维码 -->
        <div class="qr-block">
          <p>UI DESIGN BY XWT</p>
          <div class="qr-frame">
            <img
              :src="contact.qr"
              alt="微信二维码"
            />
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
<script setup>
import { contactInfo } from '../data/portfolio.js'
const contact = contactInfo
</script>
<style scoped>
.contact-section {
  padding: 120px 40px;
  background: var(--bg-dark2);
}
/* 两列：左大右小 */
.section-inner {
  max-width: 1480px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 400px; /* 左列占剩余，右列 400px */
  gap: 80px;
  align-items: start; /* 顶部对齐 */
}
.kicker {
  font-size: 14px;
  color: var(--accent);
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.intro h2 {
  font-size: clamp(36px, 6vm, 72px); /* 响应式字号 */
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 40px;
}
.intro h2 .accent {
  color: var(--accent);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.brand img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.brand span {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
}
/* 右侧面板 */
.panel {
  padding: 28px;
  background: var(--bg--card);
  border-radius: var(--radius);
}
.topline {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 14px;
  color: var(--text--sub);
  letter-spacing: 2px;
}
/* 信息列表 */
.list > div {
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}
.list dt {
  font-size: 12px;
  color: var(--text--sub);
  margin-bottom: 8px;
}
.list dd {
  font-size: 16px;
}
.list a:hover {
  color: var(--accent);
}

/* 二维码 */
.qr-block > p {
  font-size: 12px;
  color: var(--text--sub);
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.qr-frame {
  width: 160px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff; /* 二维码底色白 */
}
.qr-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .section-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  } /* 两列变一列 */
}
</style>
