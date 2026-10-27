<template>
  <!-- 黑色遮罩层，visible控制显示/隐藏 -->
  <div
    v-if="visible"
    class="modal-overlay"
    @click="close"
  >
    <!-- 弹窗盒子，@click.stop：点弹窗里面不会关掉弹窗 -->
    <div
      class="modal-content"
      @click.stop
    >
      <!-- 关闭按钮 -->
      <button
        class="modal-close"
        @click="close"
      >
        ×
      </button>

      <!-- 滚动容器！所有内容放这里，在这里上下滑动 -->
      <div class="modal-scroll-wrap">
        <!-- 封面图 -->
        <img
          v-if="work?.img"
          :src="work.img"
          :alt="work.title"
          class="cover-img"
        />
        <!-- 标题 -->
        <h3
          v-if="work"
          class="work-title"
        >
          {{ work.title }}
        </h3>

        <!-- 文字详情区域 -->
        <div
          v-if="work"
          class="work-detail"
        >
          <!-- 标签 -->
          <div
            class="tag-group"
            v-if="work.tags.length"
          >
            <span
              class="tag"
              v-for="tag in work.tags"
              :key="tag"
              >{{ tag }}</span
            >
          </div>
          <!-- 时间、角色 -->
          <div
            class="info-line"
            v-if="work.year || work.role"
          >
            <span v-if="work.year">时间：{{ work.year }}</span>
            <span v-if="work.role">｜角色：{{ work.role }}</span>
          </div>
          <!-- 描述文字 -->
          <div class="desc">{{ work.desc }}</div>

          <!-- 多张详情图，纵向排列 -->
          <div
            class="gallery"
            v-if="work.gallery.length"
          >
            <p class="gallery-title">项目详情图（上下滑动查看）</p>
            <div class="gallery-list">
              <img
                v-for="(pic, index) in work.gallery"
                :key="index"
                :src="pic"
                alt="详情图"
                class="gallery-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// defineProps：接收【外面页面传给弹窗的数据】
const props = defineProps({
  visible: { type: Boolean, default: false }, // 是否打开弹窗 true打开 false关闭
  work: { type: Object, default: null }, // 当前这个作品的数据
})
// defineEmits：弹窗通知外面页面：我要关闭啦！
const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  overflow: hidden;
}
.modal-content {
  position: relative;
  max-width: 900px;
  width: 100%;
  height: 85vh;
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 0;
  display: flex;
  flex-direction: column;
}
.modal-scroll-wrap {
  flex: 1;
  padding: 24px;
  overflow-y: auto; /* ✅ 核心：这个区域可以上下滚动 */
  -webkit-overflow-scrolling: touch;
}
.cover-img {
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
  border-radius: 8px;
}
.work-title {
  margin-top: 16px;
  font-size: 20px;
  color: var(--text-main);
  margin-bottom: 12px;
  text-align: center;
}
.work-detail {
  margin-top: 16px;
  text-align: left;
}
.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}
.tag {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-main);
  font-size: 12px;
  border-radius: 999px;
}
.info-line {
  font-size: 14px;
  color: var(--text-weak);
  margin-bottom: 12px;
}
.desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-main);
  margin-bottom: 20px;
}
.gallery-title {
  font-size: 14px;
  color: var(--text-weak);
  margin-bottom: 12px;
}
.gallery-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.gallery-img {
  width: 100%;
  border-radius: 8px;
  object-fit: contain;
}
.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  z-index: 2;
}
.modal-close:hover {
  background: var(--accent);
  color: #000;
}
@media (max-width: 768px) {
  .modal-overlay {
    padding: 16px;
  }
  .modal-content {
    height: 90vh;
  }
}
</style>
