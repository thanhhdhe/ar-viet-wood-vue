<template>
  <section class="cta">
    <div class="container">
      <h2 class="cta-title">Sẵn sàng trải nghiệm?</h2>
      <p class="cta-description">Khám phá thế giới mô hình gỗ với công nghệ AR ngay hôm nay</p>
      <button class="btn-primary btn-large">Bắt đầu ngay</button>
    </div>
  </section>
</template>
<script setup>
// No props needed
</script>
<style scoped>
.cta {
  padding: 6rem 5%;
  background: linear-gradient(135deg, var(--primary-red) 0%, #6a151a 100%);
  text-align: center;
}
.cta-title {
  font-size: 3rem;
  color: var(--gold-accent);
  margin-bottom: 1rem;
  font-weight: bold;
}
.cta-description {
  font-size: 1.2rem;
  color: var(--white);
  margin-bottom: 2.5rem;
  opacity: 0.9;
}
.btn-large {
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
}
</style>
