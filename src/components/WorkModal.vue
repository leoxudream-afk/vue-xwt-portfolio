<template>
  <div
    v-if="visible"
    class="modal-overlay"
    @click="close"
  >
    <div
      class="modal-content"
      @click.stop
    >
      <button
        class="modal-close"
        @click="close"
      >
        ×
      </button>
      <img
        :src="work?.img"
        :alt="work?.title"
        v-if="work"
      />
      <h3 v-if="work">{{ work.title }}</h3>
    </div>
  </div>
</template>

<script setup>
// 这里必须是 defineProps，不要写 export default
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  work: {
    type: Object,
    default: null,
  },
})

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
}
.modal-content {
  position: relative;
  max-width: 900px;
  width: 100%;
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 24px;
  text-align: center;
}
.modal-content img {
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
}
.modal-content h3 {
  margin-top: 16px;
  font-size: 20px;
  color: var(--text-main);
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
}
.modal-close:hover {
  background: var(--accent);
  color: #000;
}
</style>
