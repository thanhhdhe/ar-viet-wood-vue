<template>
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="brand-name">AR VIETWOOD</span>
    </h1>
    <p class="hero-subtitle">Điểm chạm khởi nguồn sáng tạo</p>
    <p class="hero-description">
      AR VietWood phát triển bộ mô hình lắp ghép bằng gỗ an toàn, thân thiện với trẻ em, tích hợp trải nghiệm AR để hướng dẫn lắp ghép, kể chuyện, và biến đồ chơi vật lý thành trải nghiệm học tập tương tác.

    </p>
    <div class="hero-buttons">
      <router-link to="/ar-experience" class="btn-primary">
        Trải nghiệm AR ngay
      </router-link>
      <a href="#products" class="btn-secondary">
        Xem sản phẩm
      </a>
    </div>
  </div>
  <div class="hero-decoration">
    <div class="decoration-circle"></div>
    <div class="decoration-line"></div>
  </div>
</template>

<script setup>
// Emits: show-ar-demo
</script>
<style scoped>
.hero-content {
  text-align: center;
  padding: 5rem 5%;
  position: relative;
  z-index: 5;
  max-width: 900px;
  margin: 0 auto;
}
.brand-name {
  font-size: 4rem;
  color: var(--gold-accent);
  font-weight: bold;
  display: block;
  margin-bottom: 1rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
}
.hero-subtitle {
  font-size: 1.5rem;
  color: var(--gold-accent);
  margin-bottom: 1.5rem;
  font-weight: 500;
}
.hero-description {
  font-size: 1.1rem;
  color: var(--white);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}
.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  background: var(--gold-accent);
  color: var(--dark);
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(201, 164, 100, 0.4);
  text-decoration: none;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(201, 164, 100, 0.6);
}
.btn-secondary {
  background: transparent;
  color: var(--white);
  padding: 1rem 2.5rem;
  border: 2px solid var(--gold-accent);
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
}
.btn-secondary:hover {
  background: var(--gold-accent);
  color: var(--dark);
}
.hero-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
}
.decoration-circle {
  position: absolute;
  width: 600px;
  height: 600px;
  border: 2px solid rgba(201, 164, 100, 0.2);
  border-radius: 50%;
  top: -200px;
  right: -200px;
}
.decoration-line {
  position: absolute;
  width: 400px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold-accent), transparent);
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 768px) {
  .brand-name {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1.2rem;
  }
  .hero-buttons {
    flex-direction: column;
  }
  .btn-primary, .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
