<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">Về AR Vietwood</h2>
          <p class="about-description">
            Chúng tôi là đơn vị tiên phong tại Việt Nam trong việc kết hợp công nghệ AR 
            với nghệ thuật chế tác mô hình gỗ thủ công. Mỗi sản phẩm là sự kết hợp hoàn hảo 
            giữa chất liệu gỗ tự nhiên cao cấp và thiết kế thông minh, mang đến trải nghiệm 
            mua sắm hiện đại nhất.
          </p>
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">1000+</div>
              <div class="stat-label">Khách hàng</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">Mẫu mã</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">Gỗ tự nhiên</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// No props needed
</script>
<style scoped>
.section-title {
  font-size: 2.5rem;
  color: var(--primary-red);
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
}
.section-subtitle {
  text-align: center;
  color: var(--dark);
  font-size: 1.1rem;
  margin-bottom: 4rem;
  opacity: 0.8;

}
.about {
  padding: 6rem 5%;
  background: var(--white);
}
.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--dark);
  margin-bottom: 3rem;
  opacity: 0.85;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 3rem;
}
.stat-item {
  text-align: center;
}
.stat-number {
  font-size: 3rem;
  color: var(--gold-accent);
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.stat-label {
  color: var(--dark);
  font-size: 1.1rem;
  opacity: 0.8;
}
@media (max-width: 900px) {
  .about-stats {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
