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
  background: linear-gradient(135deg, var(--light-wood) 0%, var(--gold-accent) 50%, var(--primary-red) 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: var(--dark);
}

.banner-container {
  max-width: 800px;
  margin: 0 auto;
}

.banner-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: var(--primary-red);
}

.banner-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.signup-form {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.email-input {
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  width: 300px;
  max-width: 100%;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.signup-btn {
  background: var(--gold-accent);
  color: var(--dark);
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.signup-btn:hover {
  background: var(--darker-gold);
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