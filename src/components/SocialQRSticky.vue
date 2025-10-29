<template>
  <div class="social-qr-sticky">
    <div class="qr-btn" @click="toggleFB">
      <span class="qr-social-icon fb-icon"></span>
    </div>
    <div class="qr-btn" @click="toggleTikTok">
      <span class="qr-social-icon tiktok-icon"></span>
    </div>
    <div v-if="showFB" class="qr-popup" @click.self="showFB = false">
      <img :src="qrFB" alt="Facebook QR" class="qr-popup-img" />
      <span class="qr-label">Facebook</span>
    </div>
    <div v-if="showTikTok" class="qr-popup" @click.self="showTikTok = false">
      <img :src="qrTikTok" alt="TikTok QR" class="qr-popup-img" />
      <span class="qr-label">TikTok</span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import qrFB from '../assets/images/QR_FB.png'
import qrTikTok from '../assets/images/QR_Tiktok.png'
const showFB = ref(false)
const showTikTok = ref(false)

function closeAll() {
  showFB.value = false
  showTikTok.value = false
}
function handleClick(e) {
  const sticky = document.querySelector('.social-qr-sticky')
  if (sticky && !sticky.contains(e.target)) {
    closeAll()
  }
}
function toggleFB() {
  showFB.value = !showFB.value
  if (showFB.value) showTikTok.value = false
}
function toggleTikTok() {
  showTikTok.value = !showTikTok.value
  if (showTikTok.value) showFB.value = false
}
onMounted(() => {
  window.addEventListener('click', handleClick)
})
onUnmounted(() => {
  window.removeEventListener('click', handleClick)
})
</script>
<style scoped>
.social-qr-sticky {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
}
.qr-btn {
  background: linear-gradient(135deg, var(--gold-accent), var(--gold-accent));
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(139, 28, 35, 0.2);
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
}
.qr-btn:hover {
  box-shadow: 0 8px 28px rgba(139, 28, 35, 0.3);
  transform: translateY(-4px);
}
.qr-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
.qr-popup {
  position: absolute;
  bottom: 140px;
  right: 0px;
  background: var(--white);
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.25);
  padding: 20px 28px 16px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInQR 0.3s;
  border: 2px solid var(--gold-accent);
}
.qr-popup-img {
  width: 140px;
  height: 140px;
  object-fit: contain;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid var(--light-wood);
  padding: 4px;
}
.qr-label {
  font-size: 1.1rem;
  color: var(--primary-red);
  font-weight: bold;
  letter-spacing: 0.5px;
}
.qr-social-icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  vertical-align: middle;
  background-size: contain;
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
}
.fb-icon {
  background-image: url('https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg');
}
.tiktok-icon {
  background-image: url('https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg');
}
@keyframes fadeInQR {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 600px) {
  .social-qr-sticky {
    bottom: 16px;
    right: 8px;
    gap: 10px;
  }
  .qr-popup-img {
    width: 80px;
    height: 80px;
  }
}
</style>
