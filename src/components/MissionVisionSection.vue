<template>
  <section id="mission-vision" class="mission-vision">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Sứ Mệnh & Tầm Nhìn</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">Định hướng phát triển và cam kết của AR Vietwood</p>
      </div>
      
      <div class="content-wrapper">
        <div class="mission-card">
          <div class="card-header">
            <h3 class="card-title">Sứ Mệnh</h3>
          </div>
          <div class="card-body">
            <p class="card-description">
              AR Vietwood sẽ không ngừng nỗ lực để mang đến cho khách hàng những trải nghiệm đa dạng, cũng như cam kết mang đến những niềm vui học tập qua mỗi mô hình lắp ghép.
            </p>
          </div>
        </div>

        <div class="vision-card">
          <div class="card-header">
            <h3 class="card-title">Tầm Nhìn</h3>
          </div>
          <div class="card-body">
            <p class="card-description">
              AR Vietwood là thương hiệu hàng đầu về đồ chơi lắp ghép gỗ tích hợp AR, nơi mỗi bộ đồ chơi là một hành trình học tập, khám phá và sáng tạo cho trẻ em.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.mission-vision {
  padding: 6rem 5%;
  background: #EADBC8;
  position: relative;
  overflow: hidden;
}

.mission-vision::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 15% 25%, rgba(201, 164, 100, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 85% 75%, rgba(139, 28, 35, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 900;
  color: #8B1C23;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #8B1C23 0%, #C9A464 100%);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
}

.section-subtitle {
  font-weight: 700;
  font-size: 1.15rem;
  color: #1A1A1A;
  opacity: 0.85;
  margin: 0;
}

/* Content Wrapper */
.content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  align-items: stretch;
}

/* Cards */
.mission-card,
.vision-card {
  background: #FFFFFF;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.08),
    0 4px 15px rgba(139, 28, 35, 0.12);
  transition: all 0.4s ease;
  border: 1px solid rgba(201, 164, 100, 0.3);
}

.mission-card:hover,
.vision-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.12),
    0 8px 25px rgba(139, 28, 35, 0.2);
  border-color: #C9A464;
}

/* Card Header */
.card-header {
  background: linear-gradient(135deg, #8B1C23 0%, #a52229 100%);
  padding: 2rem 2.5rem;
  position: relative;
  overflow: hidden;
}

.card-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
}

.vision-card .card-header {
  background: linear-gradient(135deg, #C9A464 0%, #d4b076 100%);
}

.card-title {
  font-size: 2rem;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
}

.vision-card .card-title {
  color: #1A1A1A;
}

/* Card Body */
.card-body {
  padding: 2.5rem;
}

.card-description {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #1A1A1A;
  margin: 0;
  text-align: justify;
}

/* Responsive */
@media (max-width: 968px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .mission-vision {
    padding: 4rem 5%;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .title-underline {
    width: 80px;
    height: 3px;
  }

  .section-subtitle {
    font-weight: 700;
    font-size: 1rem;
  }

  .content-wrapper {
    gap: 2rem;
  }

  .card-header {
    padding: 1.5rem 2rem;
  }

  .card-title {
    font-size: 1.6rem;
  }

  .card-body {
    padding: 2rem 1.5rem;
  }

  .card-description {
    font-size: 1rem;
  }
}

/* Animation on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mission-card {
  animation: fadeInUp 0.8s ease 0.2s both;
}

.vision-card {
  animation: fadeInUp 0.8s ease 0.4s both;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.section-header {
  animation: fadeInUp 0.8s ease both;
}
</style>
