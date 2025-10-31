<script setup>
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
/* Color Variables - Bảng màu sang trọng */
:root {
  --primary-red: #8B1C23;      /* Đỏ Chủ Đạo */
  --gold-accent: #C9A464;       /* Vàng Kim */
  --white: #FFFFFF;             /* Trắng Sáng */
  --dark: #1A1A1A;              /* Đen/Xám Đậm */
  --light-wood: #EADBC8;        /* Vàng Nhạt/Gỗ Nhạt */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--dark);
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--primary-red) 0%, #6a151a 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 20;
  border-radius: 32px;
  overflow: hidden;
  box-shadow:
    0 2px 24px 0 rgba(139, 28, 35, 0.10),
    0 1.5px 8px 0 rgba(201, 164, 100, 0.10),
    0 0 0 1.5px rgba(201, 164, 100, 0.18) inset;
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(24px) saturate(180%) brightness(1.1);
  -webkit-backdrop-filter: blur(24px) saturate(180%) brightness(1.1);
  border: 1.5px solid rgba(201, 164, 100, 0.25);
  transition: background 0.5s, box-shadow 0.5s;
} */

.liquid-glass-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  z-index: 1;
  background:
    linear-gradient(120deg, rgba(201,164,100,0.12) 0%, rgba(255,255,255,0.18) 60%, rgba(139,28,35,0.10) 100%),
    repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 8px);
  opacity: 0.85;
  mix-blend-mode: lighten;
  filter: blur(8px) brightness(1.08);
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

/* Glassmorphism shadow layer for depth */
.navbar::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -16px; height: 32px;
  pointer-events: none;
  z-index: 2;
  background: linear-gradient(180deg, rgba(139,28,35,0.10) 0%, transparent 100%);
  filter: blur(8px);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--gold-accent);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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

/* Features Section */
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
  font-weight: 700;
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

/* AR Technology Section */
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
  background: #2a2a2a;
  border-radius: 40px;
  padding: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid var(--gold-accent);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-red), #6a151a);
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


/* About Section */
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

/* CTA Section */
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

/* Footer */


/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 26, 26, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--white);
  padding: 3rem;
  border-radius: 20px;
  max-width: 500px;
  text-align: center;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--dark);
  transition: color 0.3s;
}

.modal-close:hover {
  color: var(--primary-red);
}

.modal-content h3 {
  color: var(--primary-red);
  margin-bottom: 1rem;
  font-size: 2rem;
}

.modal-content p {
  color: var(--dark);
  margin-bottom: 2rem;
  opacity: 0.8;
}

.qr-code {
  width: 200px;
  height: 200px;
  background: var(--light-wood);
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 2rem;
  border: 3px solid var(--gold-accent);
}

/* Responsive Design */
@media (max-width: 768px) {
  .brand-name {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .nav-links {
    display: none;
  }
  
  .ar-content {
    grid-template-columns: 1fr;
  }
  
  .about-stats {
    grid-template-columns: 1fr;
    gap: 2rem;
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
