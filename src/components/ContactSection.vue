<template>
  <!-- 联系我们区块 主容器 -->
  <section
    class="contact-section"
    id="contact"
  >
    <!-- 背景光晕装饰元素 -->
    <div class="contact-section-glow"></div>

    <!-- 内容容器，控制左右布局 -->
    <div class="section-inner">
      <!-- 左侧标题区域 -->
      <div class="intro">
        <p class="kicker">联系方式</p>

        <!-- 整行标题容器：悬浮时每个字母独立微扰 -->
        <h2 class="title-animate">
          <!-- 第一行 LET'S CREATE -->
          <span class="line">
            <span
              class="char char-micro"
              v-for="(c, idx) in line1"
              :key="idx"
              :data-index="idx"
              >{{ c }}</span
            >
          </span>

          <!-- 第二行 A + GOOD -->
          <p class="line">
            <span
              class="char char-micro"
              :data-index="0"
              >A</span
            >

            <!-- GOOD 整组：永久循环 G-O-O-D 依次缩放序列 -->
            <span class="accent good-animate">
              <span
                class="char good-char"
                v-for="(c, idx) in lineGood"
                :key="idx"
                :style="{ '--delay': idx * 0.22 + 's' }"
                >{{ c }}</span
              >
            </span>
          </p>

          <!-- 第三行 START + 箭头 -->
          <span class="line">
            <span
              class="char char-micro"
              v-for="(c, idx) in lineStart"
              :key="idx"
              :data-index="idx + 1"
              >{{ c }}</span
            >

            <!-- 箭头也参与每个字母独立微扰 -->
            <span
              class="arrow-right char-micro"
              :data-index="8"
              >↘</span
            >
          </span>
        </h2>

        <!-- 底部品牌链接 -->
        <a
          href="#home"
          class="brand"
        >
          <img
            src="/public/logo.svg"
            alt=""
          />
          <span>XWT</span>
        </a>
      </div>

      <!-- 右侧信息卡片面板 -->
      <aside class="panel">
        <div class="topline">
          <span>CONTACT</span>
          <small>05</small>
        </div>

        <!-- 联系信息列表 -->
        <dl class="list">
          <div>
            <dt>手机号</dt>
            <dd>
              <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
            </dd>
          </div>
          <div>
            <dt>微信号</dt>
            <dd>{{ contact.wechat }}</dd>
          </div>
          <div>
            <dt>邮箱</dt>
            <dd>
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </dd>
          </div>
        </dl>

        <!-- 二维码区域 -->
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

// 标题文字拆分为字符数组，避免模板引号冲突
const line1 = "LET'S CREATE".split('')
const lineGood = 'GOOD'.split('')
const lineStart = 'START'.split('')
</script>

<style scoped>
/* ========== 区块基础布局 ========== */
.contact-section {
  isolation: isolate;
  background:
    radial-gradient(circle at 18% 78%, #0544504d, #0000 34%),
    radial-gradient(circle at 83% 20%, #748f1a33, #0000 28%),
    radial-gradient(circle at 82% 86%, #5e711021, #0000 25%),
    linear-gradient(118deg, #020709 0%, #07070b 54%, #080508 100%);
  min-height: 100svh;
  position: relative;
  overflow: hidden;
}

/* 背景浮动光晕 */
.contact-section-glow {
  z-index: -1;
  aspect-ratio: 1;
  filter: blur(100px);
  pointer-events: none;
  background: #acdc2617;
  border-radius: 50%;
  width: min(34vw, 520px);
  position: absolute;
  top: 13%;
  right: 8%;
}

/* 主内容网格：左大标题，右信息面板 */
.section-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(330px, 390px);
  align-items: center;
  gap: clamp(80px, 10vw, 170px);
  width: min(1480px, 100% - 112px);
  min-height: 100svh;
  margin: 0 auto;
  padding: clamp(112px, 13vh, 156px) 0 clamp(76px, 9vh, 110px);
}

/* 顶部小标题 */
.kicker {
  color: #edf4f5a3;
  letter-spacing: 0.12em;
  margin: 0 0 14px;
  font-size: clamp(14px, 1vw, 17px);
}

.intro {
  align-self: center;
}

/* 大标题基础样式 */
.intro h2 {
  color: #f6f8f5;
  letter-spacing: -0.055em;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: clamp(62px, 6.6vw, 112px);
  font-weight: 500;
  line-height: 0.84;
  gap: 16px;
}

/* GOOD 基础高亮色 */
.intro h2 .accent {
  color: var(--accent);
}

/* 底部品牌标识 */
.brand {
  color: #0a1109;
  background: var(--accent);
  letter-spacing: 0.04em;
  border-radius: 999px;
  outline: none;
  align-items: center;
  gap: 9px;
  min-width: 132px;
  height: 40px;
  margin-top: clamp(28px, 4vh, 42px);
  padding: 0 18px 0 8px;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 700;
  transition:
    box-shadow 0.26s,
    transform 0.26s cubic-bezier(0.22, 1, 0.36, 1);
  display: inline-flex;
  box-shadow: 0 10px 32px #c9ff1a2e;
}

.brand img {
  border-radius: 50%;
  place-items: center;
  width: 28px;
  height: 28px;
  display: grid;
  overflow: hidden;
}

.brand span {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
}

/* ========== 标题字母基础 ========== */
.title-animate .line {
  display: inline-block;
}

.title-animate .char {
  display: inline-block;
  cursor: pointer;
  transition:
    transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1),
    color 0.28s ease,
    text-shadow 0.28s ease;
}

/* ========== 关键：每个字母独立微扰，不再整体抖动 ========== */
.char-micro {
  transform-origin: center center;
}

/* 悬浮标题区域时，每个字母都动，但各自使用不同动画 */
.title-animate:hover .char-micro {
  animation-play-state: running;
}

/* 默认暂停，鼠标进入才播放 */
.char-micro {
  animation-play-state: paused;
}

/* 每一个字母都有不同的运动曲线 */
.char-micro[data-index='0'] {
  animation: micro1 0.72s ease-in-out infinite alternate;
}
.char-micro[data-index='1'] {
  animation: micro2 0.66s ease-in-out infinite alternate;
}
.char-micro[data-index='2'] {
  animation: micro3 0.8s ease-in-out infinite alternate;
}
.char-micro[data-index='3'] {
  animation: micro4 0.64s ease-in-out infinite alternate;
}
.char-micro[data-index='4'] {
  animation: micro5 0.76s ease-in-out infinite alternate;
}
.char-micro[data-index='5'] {
  animation: micro1 0.68s ease-in-out infinite alternate;
}
.char-micro[data-index='6'] {
  animation: micro2 0.74s ease-in-out infinite alternate;
}
.char-micro[data-index='7'] {
  animation: micro3 0.82s ease-in-out infinite alternate;
}
.char-micro[data-index='8'] {
  animation: micro4 0.7s ease-in-out infinite alternate;
}
.char-micro[data-index='9'] {
  animation: micro5 0.78s ease-in-out infinite alternate;
}
.char-micro[data-index='10'] {
  animation: micro1 0.62s ease-in-out infinite alternate;
}
.char-micro[data-index='11'] {
  animation: micro2 0.84s ease-in-out infinite alternate;
}
.char-micro[data-index='12'] {
  animation: micro3 0.7s ease-in-out infinite alternate;
}
.char-micro[data-index='13'] {
  animation: micro4 0.74s ease-in-out infinite alternate;
}
.char-micro[data-index='14'] {
  animation: micro5 0.66s ease-in-out infinite alternate;
}
.char-micro[data-index='15'] {
  animation: micro1 0.8s ease-in-out infinite alternate;
}
.char-micro[data-index='16'] {
  animation: micro2 0.72s ease-in-out infinite alternate;
}
.char-micro[data-index='17'] {
  animation: micro3 0.68s ease-in-out infinite alternate;
}

/* 5 种不同微扰轨迹 */
@keyframes micro1 {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(-3px, -4px) rotate(-1deg);
  }
}

@keyframes micro2 {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(3px, -2px) rotate(0.8deg);
  }
}

@keyframes micro3 {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(-2px, 4px) rotate(-0.6deg);
  }
}

@keyframes micro4 {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(4px, 3px) rotate(1.2deg);
  }
}

@keyframes micro5 {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(-1px, -3px) rotate(0.5deg);
  }
}

/* 单个字母 hover：局部高亮 */
.title-animate .char:hover {
  color: #d8ff58;
  text-shadow:
    0 0 12px #acdc26,
    0 0 22px #acdc2666;
}

/* ========== 箭头参与每个字母独立微扰 ========== */
.arrow-right {
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* ========== GOOD 专属：永久循环 G → O → O → D 依次放大缩小回弹 ========== */
.good-animate {
  display: inline-block;
}
.good-char {
  display: inline-block;
  color: var(--accent);
  text-shadow: 0 0 6px var(--accent);
  animation: goodScaleLoop 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  animation-delay: var(--delay, 0s);
}

/* 序列：放大 → 压缩缩小 → 回弹略大 → 归位等待下一轮 */
@keyframes goodScaleLoop {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.18);
  }
  42% {
    transform: scale(0.94);
  }
  60% {
    transform: scale(1.06);
  }
  100% {
    transform: scale(1);
  }
}

/* ========== 右侧信息面板 ========== */
.panel {
  /* padding: 28px;
  background: var(--bg--card);
  border-radius: var(--radius); */
  background: linear-gradient(145deg, #ffffff12, #ffffff05), #131918c7;
  border: 1px solid #deebe224;
  border-radius: 26px;
  min-height: 460px;
  padding: clamp(26px, 2.5vw, 36px);
  position: relative;
  box-shadow:
    0 34px 90px #00000057,
    inset 0 1px #ffffff14;
}

.panel .topline {
  color: var(--accent);
  letter-spacing: 0.08em;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 700;
  display: flex;
}

/* 联系信息列表 */
.list > div {
  border-bottom: 1px solid #e7f0ea1a;
  grid-template-columns: 74px minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  padding: 13px 0;
  display: grid;
}

.list dt {
  color: #eff5f180;
  font-size: 12px;
}

.list dd {
  color: #f9fbf9f0;
  letter-spacing: 0.015em;
  overflow-wrap: anywhere;
  min-width: 0;
  margin: 0;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 500;
}

.list a:hover {
  color: var(--accent);
}

/* 二维码区域 */
.qr-block {
  margin-top: 25px;
}
.qr-block > p {
  color: #eef5f18a;
  letter-spacing: 0.08em;
  margin: 0 0 13px;
  font-family:
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 9px;
  font-weight: 500;
}

.qr-frame {
  background: #f7f8f3;
  border: 1px solid #c9ff1a33;
  border-radius: 16px;
  width: 148px;
  padding: 8px;
  box-shadow: 0 14px 34px #00000040;
}

.qr-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ========== 移动端响应式 ========== */
@media (max-width: 768px) {
  .section-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
