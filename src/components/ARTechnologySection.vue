<template>
  <section class="ar-technology">
    <div class="container">
      <div class="ar-content">
        <div class="ar-text">
          <h2 class="ar-title">Công nghệ AR Thông minh</h2>
          <p class="ar-description">
            Sử dụng camera điện thoại của bạn để xem sản phẩm trong không gian thực. 
            Đặt mô hình vào bất kỳ đâu trong nhà, xoay, phong to/thu nhỏ để xem chi tiết.
          </p>
          <ul class="ar-features">
            <li>✓ Xem trước sản phẩm trong không gian thực</li>
            <li>✓ Tương tác 360° với mô hình 3D</li>
            <li>✓ Điều chỉnh kích thước và vị trí</li>
            <li>✓ Chụp ảnh và chia sẻ</li>
          </ul>
          <button class="btn-primary">Tìm hiểu thêm</button>
        </div>
        <div class="ar-visual">
          <div class="ar-phone">
            <div class="phone-screen">
              <div class="ar-demo-content">
                <span class="ar-icon">📱✨</span>
                <p>AR Demo</p>
              </div>
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
.ar-technology {
  padding: 6rem 5%;
  background: var(--dark);
}
.ar-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.ar-title {
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 1.5rem;
  font-weight: bold;
}
.ar-description {
  color: var(--white);
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.9;
}
.ar-features {
  list-style: none;
  margin-bottom: 2rem;
}
.ar-features li {
  color: var(--white);
  padding: 0.8rem 0;
  font-size: 1.1rem;
  border-bottom: 1px solid rgba(201, 164, 100, 0.2);
}
.ar-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ar-phone {
  width: 300px;
  height: 600px;
  background: var(--almost-dark);
  border-radius: 40px;
  padding: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid var(--gold-accent);
}
.phone-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-red), var(--darker-red));
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ar-demo-content {
  text-align: center;
  color: var(--gold-accent);
}
.ar-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}
@media (max-width: 900px) {
  .ar-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .ar-phone {
    width: 220px;
    height: 400px;
  }
}
</style>
