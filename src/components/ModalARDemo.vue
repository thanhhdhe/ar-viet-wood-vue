<template>
  <div v-if="show" class="modal" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="$emit('close')">×</button>
      <h3>Trải nghiệm AR</h3>
      <p>Quét mã QR bằng điện thoại để bắt đầu trải nghiệm AR</p>
      <div class="qr-code">📱 QR CODE</div>
      <button class="btn-primary" @click="$emit('close')">Đóng</button>
    </div>
  </div>
</template>
<script setup>
defineProps({ show: Boolean })
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 26, 26, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: var(--white);
  padding: 3rem;
  border-radius: 20px;
  max-width: 500px;
  text-align: center;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}
.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--dark);
  transition: color 0.3s;
}
.modal-close:hover {
  color: var(--primary-red);
}
.modal-content h3 {
  color: var(--primary-red);
  margin-bottom: 1rem;
  font-size: 2rem;
}
.modal-content p {
  color: var(--dark);
  margin-bottom: 2rem;
  opacity: 0.8;
}
.qr-code {
  width: 200px;
  height: 200px;
  background: var(--light-wood);
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 2rem;
  border: 3px solid var(--gold-accent);
}
</style>
