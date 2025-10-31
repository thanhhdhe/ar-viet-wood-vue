<template>
  <section id="core-values" class="core-values" ref="sectionRef">
    <div class="container">
      <div class="values-header">
        <h2 class="section-title">
          GIÁ TRỊ CỐT LÕI
        </h2>
      </div>

      <div class="values-grid">
        <div 
          v-for="(value, index) in coreValues" 
          :key="index" 
          class="value-card"
          :class="[`value-${index + 1}`, { 'is-visible': visibleCards[index] }]"
          ref="cardRefs"
        >
          <div class="card-inner">
            <div class="card-front">
              <!-- <div class="value-number">{{ index + 1 }}</div> -->
              <div class="value-image">
                <img :src="value.image" :alt="value.title" />
              </div>
              <h3 class="value-title">{{ value.title }}</h3>
              <!-- <div class="hover-indicator">
                <span>Tìm hiểu thêm</span>
                <span class="arrow">→</span>
              </div> -->
            </div>
            <div class="card-back">
              <div class="back-content">
                <h3 class="value-title">{{ value.title }}</h3>
                <div class="value-description">
                  <p v-for="(desc, idx) in value.description" :key="idx">
                    {{ desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="values-footer">
        <div class="footer-quote">
          <span class="quote-icon">"</span>
          <p>Mỗi sản phẩm AR Vietwood không chỉ là món đồ chơi, mà là cầu nối giữa quá khứ và tương lai, giữa truyền thống và công nghệ.</p>
          <span class="quote-icon closing">"</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const cardRefs = ref([])
const visibleCards = ref({})

const coreValues = [
  {
    title: 'Khơi dậy sự tò mò',
    image: new URL('../assets/images/khơi_dậy_sự_tò_mò_1.png', import.meta.url).href,
    description: [
      'Kích thích trí tò mò, khát vọng tìm hiểu "đằng sau mỗi công trình có câu chuyện gì?".',
      'Biến việc học lịch sử thành hành trình chơi – khám phá – tìm hiểu'
    ]
  },
  {
    title: 'An',
    image: new URL('../assets/images/An_2.png', import.meta.url).href,
    description: [
      'Chất liệu gỗ tự nhiên, an toàn, không độc hại cho sức khỏe trẻ.',
      'Thiết kế tỉ mỉ, cạnh bo tròn, cha mẹ có thể an tâm khi con chơi.',
      'Tạo không gian chơi lành mạnh, tránh xa thiết bị điện tử.'
    ]
  },
  {
    title: 'Học qua công nghệ sống động',
    image: new URL('../assets/images/Học_qua_công_nghệ_sống_động_3.png', import.meta.url).href,
    description: [
      'Chúng tôi mang lịch sử và di sản Việt Nam đến gần hơn với trẻ bằng công nghệ AR và mô hình 3D, giúp việc học trở nên dễ dàng, hứng thú và giàu trải nghiệm.'
    ]
  },
  {
    title: 'Tự hào nguồn cội',
    image: new URL('../assets/images/HTự_hào_cội_nguồn_4.png', import.meta.url).href,
    description: [
      'Gieo trong trẻ niềm tự hào về văn hoá và di sản dân tộc.',
      'Mỗi mô hình là một "câu chuyện Việt Nam thu nhỏ", giúp trẻ thấy lịch sử không xa lạ, mà gần gũi và đáng tự hào.'
    ]
  },
  {
    title: 'Kiến tạo tương lai',
    image: new URL('../assets/images/Kiến_thiết_tương_lai_5.png', import.meta.url).href,
    description: [
      'Từ việc dựng xây mô hình, trẻ học cách kiến tạo thế giới.',
      'Mỗi mảnh ghép là một bài học về kiên nhẫn và tư duy logic, đặt viên gạch đầu tiên cho những người dựng xây đất nước mai sau.'
    ]
  }
]

let observer

const setupObserver = () => {
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = cardRefs.value.indexOf(entry.target)
        if (index !== -1) {
          visibleCards.value[index] = true
        }
      }
    })
  }, observerOptions)

  cardRefs.value.forEach((card) => {
    if (card) {
      observer.observe(card)
    }
  })
}

onMounted(() => {
  // Small delay to ensure refs are populated
  setTimeout(() => {
    setupObserver()
  }, 100)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.core-values {
  padding: 6rem 5%;
  background: linear-gradient(135deg, #8B1C23 0%, #a52229 50%, #8B1C23 100%);
  position: relative;
  overflow: hidden;
}

.core-values::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(201, 164, 100, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(26, 26, 26, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Header */
.values-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title {
    font-size: 2.5rem;
    color: white;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
}

.title-main {
  font-size: 3rem;
  font-weight: 900;
  color: #C9A464;
  letter-spacing: 0.1em;
  text-shadow: 0 4px 20px rgba(201, 164, 100, 0.6);
  animation: fadeInDown 1s ease;
}

.title-sub {
  font-size: 1.2rem;
  color: #FFFFFF;
  opacity: 0.9;
  letter-spacing: 0.15em;
  animation: fadeInDown 1.2s ease;
}

.title-brand {
  font-size: 2.5rem;
  font-weight: 900;
  color: #C9A464;
  letter-spacing: 0.1em;
  text-shadow: 0 4px 20px rgba(201, 164, 100, 0.6);
  animation: fadeInDown 1.4s ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Values Grid */
.values-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-bottom: 5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: stretch;
}

.value-card {
  flex: 0 0 calc(33.333% - 1.7rem);
  min-width: 320px;
}

/* Value Card with Flip Effect */
.value-card {
  height: 450px;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.value-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.value-card.value-1 { transition-delay: 0s; }
.value-card.value-2 { transition-delay: 0.1s; }
.value-card.value-3 { transition-delay: 0.2s; }
.value-card.value-4 { transition-delay: 0.1s; }
.value-card.value-5 { transition-delay: 0.2s; }

.card-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-style: preserve-3d;
}

.value-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 15px 50px rgba(0, 0, 0, 0.5),
    0 5px 20px rgba(201, 164, 100, 0.2);
}

/* Front Side */
.card-front {
  background: #FFFFFF;
  border: 2px solid #C9A464;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
}

.value-number {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #8B1C23;
  color: #C9A464;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 900;
  box-shadow: 0 5px 20px rgba(139, 28, 35, 0.5);
}

.value-image {
  width: 100%;
  height: 250px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
}

.value-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.4s ease;
  filter: brightness(0.9);
}

.value-card:hover .value-image img {
  transform: scale(1.05);
  filter: brightness(1);
}

.card-front .value-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #8B1C23;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(139, 28, 35, 0.2);
}

.hover-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1A1A1A;
  opacity: 0.7;
  font-size: 0.9rem;
  margin-top: auto;
}

.arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.value-card:hover .arrow {
  transform: translateX(5px);
}

/* Back Side */
.card-back {
  background: #8B1C23;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2.5rem;
  border: 2px solid #C9A464;
}

.back-content {
  text-align: center;
}

.card-back .value-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #C9A464;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.value-description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.value-description p {
  color: #FFFFFF;
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
  text-align: left;
  padding-left: 1.5rem;
  position: relative;
}

.value-description p::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: #C9A464;
  font-size: 1rem;
}

/* Footer Quote */
.values-footer {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
}

.footer-quote {
  max-width: 900px;
  background: #EADBC8;
  border: 2px solid #C9A464;
  border-radius: 20px;
  padding: 3rem 4rem;
  position: relative;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.quote-icon {
  font-size: 4rem;
  color: #C9A464;
  opacity: 0.5;
  position: absolute;
  top: 10px;
  left: 20px;
  font-family: Georgia, serif;
}

.quote-icon.closing {
  top: auto;
  bottom: 10px;
  left: auto;
  right: 20px;
}

.footer-quote p {
  color: #1A1A1A;
  font-size: 1.2rem;
  line-height: 1.8;
  font-style: italic;
  margin: 0;
  position: relative;
  z-index: 1;
}

/* Responsive */
@media (max-width: 1200px) {
  .values-grid {
    gap: 2rem;
  }
  
  .value-card {
    flex: 0 0 calc(50% - 1rem);
    min-width: 280px;
  }
}

@media (max-width: 768px) {
  .core-values {
    padding: 4rem 5%;
  }

  .title-main {
    font-size: 2rem;
  }

  .title-brand {
    font-size: 1.8rem;
  }

  .values-grid {
    gap: 1.5rem;
  }
  
  .value-card {
    flex: 0 0 100%;
    min-width: auto;
    max-width: 400px;
    height: 400px;
  }

  .footer-quote {
    padding: 2rem 1.5rem;
  }

  .footer-quote p {
    font-size: 1rem;
  }

  .quote-icon {
    font-size: 3rem;
    top: 5px;
    left: 10px;
  }

  .quote-icon.closing {
    bottom: 5px;
    right: 10px;
  }
}

/* Animation for cards on scroll */
@media (prefers-reduced-motion: no-preference) {
  .value-card {
    animation: fadeInUp 0.8s ease forwards;
    opacity: 0;
  }

  .value-card:nth-child(1) { animation-delay: 0.1s; }
  .value-card:nth-child(2) { animation-delay: 0.2s; }
  .value-card:nth-child(3) { animation-delay: 0.3s; }
  .value-card:nth-child(4) { animation-delay: 0.4s; }
  .value-card:nth-child(5) { animation-delay: 0.5s; }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
