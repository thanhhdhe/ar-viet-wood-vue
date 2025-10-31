<template>
  <section class="promotion-banner">
    <div class="banner-container">
      <div class="banner-content">
        <h2 class="banner-title">Nhận thông tin khuyến mãi</h2>
        <p class="banner-description">
          Quý khách hãy đăng ký ngay để không bỏ lỡ các ưu đãi hấp dẫn của AR VIETWOOD nhé!
        </p>
        <div class="signup-form">
          <input
            type="email"
            v-model="email"
            placeholder="Nhập địa chỉ email"
            class="email-input"
          />
          <button @click="handleSignup" class="signup-btn">Đăng ký</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSignup = () => {
  if (email.value) {
    // Handle signup logic here
    alert(`Đăng ký thành công với email: ${email.value}`)
    email.value = ''
  } else {
    alert('Vui lòng nhập địa chỉ email')
  }
}
</script>

<style scoped>
.promotion-banner {
  background: white;
  padding: 4rem 2rem;
  text-align: center;
  color: #1A1A1A;
  position: relative;
  overflow: hidden;
}

.promotion-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(201, 164, 100, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(139, 28, 35, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.banner-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.banner-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #8B1C23;
}

.banner-description {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #1A1A1A;
}

.signup-form {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.email-input {
  padding: 0.8rem 1.2rem;
  border: 2px solid #C9A464;
  border-radius: 25px;
  font-size: 1rem;
  width: 300px;
  max-width: 100%;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  color: #1A1A1A;
}

.email-input:focus {
  border-color: #8B1C23;
  box-shadow: 0 0 0 3px rgba(139, 28, 35, 0.1);
}

.signup-btn {
  background: #8B1C23;
  color: #FFFFFF;
  border: 2px solid #8B1C23;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.signup-btn:hover {
  background: #a52229;
  border-color: #a52229;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(139, 28, 35, 0.3);
}

@media (max-width: 768px) {
  .banner-title {
    font-size: 2rem;
  }

  .banner-description {
    font-size: 1rem;
  }

  .signup-form {
    flex-direction: column;
    align-items: center;
  }

  .email-input {
    width: 100%;
    max-width: 300px;
  }
}
</style>