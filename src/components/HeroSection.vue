<template>
  <section
    class="hero-section"
    id="home"
  >
    <!-- 背景视频 -->
    <div class="hero-media">
      <video
        ref="videoRef"
        src="/hero-bg-4k.mp4"
        autoplay
        muted
        loop
        playsinline
      ></video>
    </div>
    <div class="hero-shade"></div>

    <!-- 大标题 -->
    <div class="hero-copy">
      <h1>
        <span>XWT</span>
        <span>PORTFOLIO</span>
      </h1>
      <p>AI 赋能，简于设计，胜于效率。</p>
    </div>

    <!-- 声音开关 -->
    <button
      class="sound-toggle"
      @click="toggleSound"
      :aria-pressed="soundOn"
    >
      <span>{{ soundOn ? 'SOUND ON' : 'SOUND OFF' }}</span>
    </button>

    <!-- 画廊 -->
    <div
      class="work-gallery"
      ref="galleryRef"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div
        class="gallery-track"
        :style="{ transform: `translateX(${offset}px)` }"
      >
        <!-- 第一组 -->
        <figure
          v-for="work in works"
          :key="'a-' + work.id"
          class="work-card"
          @click="selectWork(work)"
        >
          <img
            :src="work.img"
            :alt="work.title"
          />
        </figure>
        <!-- 第二组：无缝循环 -->
        <figure
          v-for="work in works"
          :key="'b-' + work.id"
          class="work-card"
          @click="selectWork(work)"
        >
          <img
            :src="work.img"
            :alt="work.title"
          />
        </figure>
      </div>
    </div>

    <!-- 弹窗：放在 section 内部 -->
    <WorkModal
      :visible="modalVisible"
      :work="selectedWork"
      @close="modalVisible = false"
    />
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 94vh;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}
.hero-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-shade {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.hero-copy {
  z-index: 2;
  pointer-events: none;
  width: min(1400px, 100% - 112px);
  position: absolute;
  top: 24vh;
  left: 50%;
  transform: translate(-50%);
}
.hero-copy h1 {
  display: flex;
  font-family:
    DIN Condensed,
    DIN Pro,
    Arial,
    Helvetica,
    sans-serif;
  text-shadow:
    0 2px 3px #000000b8,
    0 12px 34px #00000075;
  flex-direction: column;
  font-size: clamp(48px, 5.2vw, 140px);
  line-height: 0.88;
  font-weight: 800;
  letter-spacing: -0.018em;
  white-space: nowrap;
  align-items: flex-start;
}
.hero-copy p {
  margin-top: 24px;
  color: #fffffff5;
  letter-spacing: 0.06em;
  text-shadow:
    0 1px 2px #000000db,
    0 7px 22px #00000094;
  font-size: clamp(15px, 1.05vw, 19px);
}

.work-gallery {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  z-index: 2;
  cursor: grab;
  overflow: hidden;
}
.work-gallery:active {
  cursor: grabbing;
}
.gallery-track {
  display: flex;
  gap: clamp(18px, 1.4vw, 30px);
  padding: 0 40px;
  will-change: transform;
}
.work-card {
  flex-shrink: 0;
  width: 200px;
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
}
.work-card:hover {
  transform: translateY(-8px);
}
.work-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sound-toggle {
  position: absolute;
  right: max(56px, 50vw - 700px);
  top: 40px;
  z-index: 3;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition:
    color 0.22s,
    background-color 0.22s,
    border-color 0.22s;
  max-width: 168px;
  height: 40px;
  border-radius: 20px;
}
.sound-toggle:hover {
  background: var(--accent);
  color: #000;
}

@media (max-width: 768px) {
  .work-card {
    width: 140px;
    height: 200px;
  }
  .gallery-track {
    padding: 0 20px;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { galleryWorks } from '../data/portfolio.js'
import WorkModal from './WorkModal.vue'

// ===== 数据 =====
const works = ref(galleryWorks)
const offset = ref(0)
const galleryRef = ref(null)

// ===== 视频 =====
const videoRef = ref(null)
const soundOn = ref(false)

// ===== 弹窗 =====
const modalVisible = ref(false)
const selectedWork = ref(null)

// ===== 自动播放 =====
let autoTimer = null
let isHovering = false
const AUTO_SPEED = 0.5

// ===== 拖动 =====
let isDragging = false
let startX = 0
let startOffset = 0

// 声音开关
const toggleSound = () => {
  soundOn.value = !soundOn.value
  if (videoRef.value) {
    videoRef.value.muted = !soundOn.value
  }
}

// 打开弹窗
const selectWork = (work) => {
  selectedWork.value = work
  modalVisible.value = true
}

// 自动播放
const startAutoPlay = () => {
  if (autoTimer) return
  autoTimer = setInterval(() => {
    if (isHovering || isDragging) return
    offset.value -= AUTO_SPEED

    const track = galleryRef.value?.querySelector('.gallery-track')
    if (track) {
      const groupWidth = track.scrollWidth / 2
      if (Math.abs(offset.value) >= groupWidth) {
        offset.value = 0
      }
    }
  }, 16)
}

const stopAutoPlay = () => {
  if (autoTimer) {
    clearInterval(autoTimer)
    autoTimer = null
  }
}

// 拖动
const onMouseDown = (e) => {
  isDragging = true
  startX = e.clientX
  startOffset = offset.value
}
const onMouseMove = (e) => {
  if (!isDragging) return
  offset.value = startOffset + (e.clientX - startX)
}
const onMouseUp = () => {
  isDragging = false
}

// 悬停暂停
const onMouseEnter = () => {
  isHovering = true
}
const onMouseLeave = () => {
  isHovering = false
}

// 生命周期
onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
  if (galleryRef.value) {
    galleryRef.value.addEventListener('mousedown', onMouseDown)
  }
  startAutoPlay()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
  stopAutoPlay()
})
</script>
