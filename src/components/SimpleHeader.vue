<template>
  <header class="simple-header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <img src="/logo.png" alt="AR Vietwood" class="logo-img" />
          <span class="logo-text">AR Vietwood</span>
        </router-link>
        
        <nav class="nav-menu">
          <router-link to="/" class="nav-link">Trang chủ</router-link>
          <router-link to="/ar-experience" class="nav-link">AR Camera</router-link>
          <button class="nav-link contact-btn" @click="showContactPopup = true">Liên hệ</button>
        </nav>

        <button class="mobile-menu-btn" @click="toggleMenu">
          <span class="hamburger">☰</span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ active: menuOpen }">
        <router-link to="/" class="mobile-nav-link" @click="closeMenu">Trang chủ</router-link>
        <router-link to="/ar-experience" class="mobile-nav-link" @click="closeMenu">AR Camera</router-link>
        <button class="mobile-nav-link contact-btn-mobile" @click="handleMobileContact">Liên hệ</button>
      </div>
    </div>

    <!-- Contact Popup -->
    <div v-if="showContactPopup" class="contact-popup-overlay" @click="showContactPopup = false">
      <div class="contact-popup" @click.stop>
        <button class="close-popup" @click="showContactPopup = false">✕</button>
        <h2 class="popup-title">Liên hệ tư vấn</h2>
        <p class="popup-description">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn cho bạn sớm nhất</p>
        
        <form @submit.prevent="submitContact" class="contact-form">
          <div class="form-group">
            <label for="name">Họ và tên *</label>
            <input 
              type="text" 
              id="name" 
              v-model="contactForm.name" 
              required 
              placeholder="Nhập họ tên của bạn"
            />
          </div>
          
          <div class="form-group">
            <label for="phone">Số điện thoại *</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="contactForm.phone" 
              required 
              placeholder="Nhập số điện thoại"
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="contactForm.email" 
              placeholder="Nhập email của bạn"
            />
          </div>
          
          <div class="form-group">
            <label for="message">Lời nhắn</label>
            <textarea 
              id="message" 
              v-model="contactForm.message" 
              rows="4"
              placeholder="Nhập nội dung bạn muốn tư vấn..."
            ></textarea>
          </div>
          
          <button type="submit" class="btn-submit-contact">
            Gửi thông tin
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const showContactPopup = ref(false)
const contactForm = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const handleMobileContact = () => {
  closeMenu()
  showContactPopup.value = true
}

const submitContact = () => {
  console.log('Contact form submitted:', contactForm.value)
  alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm nhất.')
  showContactPopup.value = false
  contactForm.value = {
    name: '',
    phone: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
.simple-header {
  background: #71171b;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform 0.3s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-img {
  height: 45px;
  width: auto;
  object-fit: contain;
  display: block;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  color: #FFFFFF;
  white-space: nowrap;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #C9A464;
  transition: width 0.3s;
}

.nav-link:hover {
  color: #C9A464;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #FFFFFF;
  padding: 0.5rem;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.mobile-menu.active {
  max-height: 300px;
}

.mobile-nav-link {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s;
}

.mobile-nav-link:hover {
  background: rgba(201, 164, 100, 0.2);
  color: #C9A464;
}

.contact-btn,
.contact-btn-mobile {
  background: none;
  border: none;
  cursor: pointer;
}

.contact-btn {
  padding: 0;
}

.contact-btn-mobile {
  text-align: left;
  width: 100%;
}

/* Contact Popup */
.contact-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.contact-popup {
  background: #FFFFFF;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: popupSlide 0.3s ease-out;
}

@keyframes popupSlide {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.close-popup {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #1A1A1A;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s;
}

.close-popup:hover {
  background: #F5F5F5;
  transform: rotate(90deg);
}

.popup-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #8B1C23;
  margin-bottom: 0.5rem;
  text-align: center;
}

.popup-description {
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #1A1A1A;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 0.9rem 1.2rem;
  border: 2px solid #E0E0E0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #C9A464;
  box-shadow: 0 0 0 3px rgba(201, 164, 100, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.btn-submit-contact {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #8B1C23 0%, #C9A464 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(139, 28, 35, 0.3);
}

.btn-submit-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 28, 35, 0.4);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-menu {
    display: flex;
  }

  .logo-img {
    height: 40px;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .container {
    padding: 0 1rem;
  }
}
</style>
