<template>
  <nav class="navbar">
    <div class="liquid-glass-overlay"></div>
    <div class="logo">
      <img src="/logo.png" alt="AR Vietwood" class="logo-image" />
      <h1 class="logo-text">AR VIETWOOD</h1>
    </div>
    <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-links" :class="{ 'active': isMenuOpen }">
      <li><a href="#features" @click="closeMenu">Tính năng</a></li>
      <li><a href="#products" @click="closeMenu">Sản phẩm</a></li>
      <li><a href="#about" @click="closeMenu">Giới thiệu</a></li>
      <li><a href="#contact" class="btn-contact" @click="closeMenu">Liên hệ</a></li>
    </ul>
    <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--gold-accent);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  position: relative;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  z-index: 100;
  border-radius: 32px;
  overflow: hidden;
    box-shadow: 0 2px 24px 0 rgb(0 0 0 / 10%), 0 1.5px 8px 0 rgba(201, 164, 100, 0.10), 0 0 0 1.5px rgba(201, 164, 100, 0.18) inset;
    background: rgb(18 10 10 / 53%);
  backdrop-filter: blur(32px) saturate(180%) brightness(1.04);
  -webkit-backdrop-filter: blur(32px) saturate(180%) brightness(1.04);
  border: 1.5px solid rgba(201, 164, 100, 0.10);

}
.liquid-glass-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  z-index: 1;
  background:
    linear-gradient(120deg, rgba(201,164,100,0.06) 0%, rgba(255,255,255,0.06) 60%, rgba(139,28,35,0.03) 100%),
    repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 8px);
  opacity: 0.5;
  mix-blend-mode: lighten;
  filter: blur(12px) brightness(1.02);
  animation: glassGradientMove 8s ease-in-out infinite alternate;
}
@keyframes glassGradientMove {
  0% {
    background-position: 0% 0%;
    opacity: 0.85;
  }
  50% {
    background-position: 100% 100%;
    opacity: 1;
  }
  100% {
    background-position: 0% 0%;
    opacity: 0.85;
  }
}
.navbar::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -16px; height: 32px;
  pointer-events: none;
  z-index: 2;
  background: linear-gradient(180deg, rgba(139,28,35,0.10) 0%, transparent 100%);
  filter: blur(8px);
}
.logo-image {
  height: 40px;
  width: auto;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}
.nav-links a {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}
.nav-links a:hover {
  color: var(--gold-accent);
}
.btn-contact {
  background: var(--gold-accent);
  color: var(--dark);
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
}

/* Mobile menu styles */
.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--white);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.nav-links.active {
  transform: translateX(0);
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  backdrop-filter: blur(4px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background: rgb(101 0 0);
    backdrop-filter: blur(32px) saturate(180%) brightness(1.04);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: transform 0.3s ease;
    z-index: 100;
    padding: 2rem;
    box-shadow: -4px 0 32px rgba(0, 0, 0, 0.3);
  }
  .navbar {
    max-width: none;
    width: 90%;
  }
}

</style>


