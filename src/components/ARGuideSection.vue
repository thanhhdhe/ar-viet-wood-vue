<template>
  <section id="ar-guide" class="ar-guide">
    <div class="container">
      <div class="guide-header">
        <h2 class="section-title">Hướng dẫn trải nghiệm AR</h2>
        <p class="section-subtitle">Khám phá sản phẩm trong không gian thực của bạn chỉ với 4 bước đơn giản</p>
      </div>

      <div class="guide-steps">
        <div class="step-card" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-icon">{{ step.icon }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
        </div>
      </div>

      <div class="guide-demo">
        <div class="demo-video">
          <div class="video-placeholder">
            <span class="play-icon">▶️</span>
            <p>Video hướng dẫn chi tiết</p>
          </div>
        </div>
        
        <div class="demo-info">
          <h3 class="demo-title">Yêu cầu hệ thống</h3>
          <ul class="requirements-list">
            
            <li>
              <span class="req-icon">🌐</span>
              <div class="req-content">
                <strong>Trình duyệt:</strong>
                <span>Chrome, Safari, hoặc Edge phiên bản mới nhất</span>
              </div>
            </li>
            <li>
              <span class="req-icon">💡</span>
              <div class="req-content">
                <strong>Ánh sáng:</strong>
                <span>Môi trường đủ sáng để camera nhận diện không gian</span>
              </div>
            </li>
          </ul>

          <div class="demo-cta">
            <button class="btn-try-ar">
              Thử ngay AR
            </button>
            <button class="btn-watch-video">
              Xem video hướng dẫn
            </button>
          </div>
        </div>
      </div>

      <div class="guide-tips">
        <h3 class="tips-title">💡 Mẹo để có trải nghiệm AR tốt nhất</h3>
        <div class="tips-grid">
          <div class="tip-card" v-for="(tip, index) in tips" :key="index">
            <span class="tip-icon">{{ tip.icon }}</span>
            <p>{{ tip.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const steps = [
  {
    icon: '🔍',
    title: 'Chọn sản phẩm',
    description: 'Duyệt qua bộ sưu tập và chọn sản phẩm bạn muốn xem'
  },
  {
    icon: '📱',
    title: 'Nhấn nút AR',
    description: 'Nhấn vào nút "Xem AR" trên sản phẩm đã chọn'
  },
  {
    icon: '📷',
    title: 'Quét không gian',
    description: 'Di chuyển camera xung quanh để quét bề mặt phẳng'
  },
  {
    icon: '✨',
    title: 'Đặt sản phẩm',
    description: 'Chạm vào màn hình để đặt và xem sản phẩm 3D'
  }
]

const tips = [

  {
    icon: '🔄',
    text: 'Di chuyển chậm rãi khi sử dụng AR'
  },

  {
    icon: '📶',
    text: 'Đảm bảo kết nối internet ổn định'
  },
  {
    icon: '🔋',
    text: 'Kiểm tra pin đủ để trải nghiệm mượt mà'
  }
]
</script>

<style scoped>
.ar-guide {
  padding: 6rem 5%;
  background: linear-gradient(135deg, #f8f4ef 0%, #fff 50%, #f8f4ef 100%);
  position: relative;
  overflow: hidden;
}

.ar-guide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(139, 28, 35, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.guide-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  color: var(--primary-red);
  margin-bottom: 1rem;
  font-weight: bold;
}

.section-subtitle {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--dark);
  opacity: 0.8;
}

/* Steps Grid */
.guide-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

.step-card {
  background: #FFFFFF;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  position: relative;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 8px rgba(139, 28, 35, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #8B1C23, #C9A464);
  border-radius: 20px 20px 0 0;
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.12),
    0 2px 15px rgba(139, 28, 35, 0.2);
}

.step-card:hover::before {
  transform: scaleX(1);
}

.step-number {
  position: absolute;
  top: -15px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #8B1C23;
  color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(139, 28, 35, 0.4);
}

.step-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.step-title {
  font-size: 1.3rem;
  color: #8B1C23;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.step-description {
  color: #1A1A1A;
  opacity: 0.8;
  line-height: 1.6;
}

/* Demo Section */
.guide-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: start;
}

.demo-video {
  position: relative;
}

.video-placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #8B1C23, #a52229);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow:
    0 15px 40px rgba(139, 28, 35, 0.3),
    0 5px 15px rgba(0, 0, 0, 0.2);
}

.video-placeholder:hover {
  transform: scale(1.02);
  box-shadow:
    0 20px 50px rgba(139, 28, 35, 0.4),
    0 8px 20px rgba(0, 0, 0, 0.25);
}

.play-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
}

.video-placeholder p {
  font-size: 1.2rem;
  font-weight: 600;
}

.demo-info {
  background: #FFFFFF;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 8px rgba(139, 28, 35, 0.1);
}

.demo-title {
  font-size: 1.5rem;
  color: var(--primary-red);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.requirements-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(139, 28, 35, 0.1);
}

.requirements-list li:last-child {
  border-bottom: none;
}

.req-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.req-content {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.req-content strong {
  color: var(--primary-red);
  font-size: 1rem;
}

.req-content span {
  color: var(--dark);
  opacity: 0.8;
  font-size: 0.95rem;
}

.demo-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-try-ar,
.btn-watch-video {
  flex: 1;
  min-width: 150px;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-try-ar {
  background: #8B1C23;
  color: #FFFFFF;
  box-shadow: 0 4px 15px rgba(139, 28, 35, 0.3);
}

.btn-try-ar:hover {
  background: #a52229;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 28, 35, 0.4);
}

.btn-watch-video {
  background: #FFFFFF;
  color: #8B1C23;
  border: 2px solid #8B1C23;
}

.btn-watch-video:hover {
  background: #8B1C23;
  color: #FFFFFF;
  transform: translateY(-2px);
}

/* Tips Section */
.guide-tips {
  background: #FFFFFF;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 8px rgba(139, 28, 35, 0.1);
}

.tips-title {
  font-size: 1.5rem;
  color: var(--primary-red);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.tip-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background: linear-gradient(135deg, #f8f4ef 0%, #fff 100%);
  border-radius: 12px;
  border-left: 4px solid var(--gold-accent);
  transition: all 0.3s ease;
}

.tip-card:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);
}

.tip-icon {
  font-size: 2rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.tip-card p {
  color: var(--dark);
  opacity: 0.9;
  line-height: 1.5;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .ar-guide {
    padding: 4rem 5%;
  }

  .section-title {
    font-size: 2rem;
  }

  .guide-steps {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .guide-demo {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .demo-cta {
    flex-direction: column;
  }

  .btn-try-ar,
  .btn-watch-video {
    min-width: 100%;
  }

  .tips-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
