<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Tại sao chọn AR Vietwood?</h2>
      <p class="section-subtitle">Kết hợp hoàn hảo giữa nghệ thuật gỗ truyền thống và công nghệ hiện đại</p>
      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({ features: Array })
</script>
<style scoped>
.features {
  padding: 6rem 5%;
  background: var(--white);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
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
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}
.feature-card {
  text-align: center;
  padding: 2.5rem;
  background: var(--light-wood);
  border-radius: 15px;
  transition: all 0.3s;
}
.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(139, 28, 35, 0.15);
}
.feature-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}
.feature-title {
  font-size: 1.5rem;
  color: var(--primary-red);
  margin-bottom: 1rem;
  font-weight: 600;
}
.feature-description {
  color: var(--dark);
  line-height: 1.6;
  opacity: 0.85;
}
</style>
