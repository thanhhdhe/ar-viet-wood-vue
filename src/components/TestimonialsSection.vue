<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="section-title">Khách hàng nói gì về chúng tôi</h2>
      <p class="section-subtitle">Những phản hồi chân thực từ khách hàng đã trải nghiệm sản phẩm</p>
      
      <div class="testimonial-carousel">
        <button class="carousel-btn prev-btn" @click="prevTestimonial">
          <span>‹</span>
        </button>
        
        <div class="testimonial-wrapper">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="testimonial-card"
            :class="{ 'active': index === currentIndex }"
          >
            <div class="quote-icon">❝</div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.avatar }}</div>
              <div class="author-info">
                <h4 class="author-name">{{ testimonial.name }}</h4>
                <p class="author-role">{{ testimonial.role }}</p>
              </div>
            </div>
            <div class="rating">
              <span v-for="n in 5" :key="n" class="star">⭐</span>
            </div>
          </div>
        </div>
        
        <button class="carousel-btn next-btn" @click="nextTestimonial">
          <span>›</span>
        </button>
        
        <div class="carousel-dots">
          <button 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="dot"
            :class="{ 'active': index === currentIndex }"
            @click="goToTestimonial(index)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const testimonials = [
  {
    text: 'Mô hình gỗ rất đẹp và chất lượng. Công nghệ AR giúp tôi xem trước sản phẩm trong nhà, rất tiện lợi. Con tôi rất thích!',
    name: 'Nguyễn Thị Hoa',
    role: 'Phụ huynh',
    avatar: '👩'
  },
  {
    text: 'Sản phẩm tuyệt vời cho lớp học! Học sinh rất hứng thú với mô hình AR. Chất lượng gỗ cao cấp, thiết kế thông minh.',
    name: 'Trần Văn Nam',
    role: 'Giáo viên',
    avatar: '👨'
  },
  {
    text: 'Dịch vụ chuyên nghiệp, giao hàng nhanh. Mô hình đẹp và dễ lắp ráp. Giá cả hợp lý, tôi sẽ giới thiệu cho bạn bè.',
    name: 'Lê Minh Tuấn',
    role: 'Khách hàng',
    avatar: '👦'
  }
]

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const goToTestimonial = (index) => {
  currentIndex.value = index
}
</script>

<style scoped>
.testimonials {
  padding: 6rem 5%;
  background: var(--white);
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

.testimonial-carousel {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.testimonial-wrapper {
  position: relative;
  height: 350px;
  overflow: hidden;
}

.testimonial-card {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--light-wood);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.6s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-card.active {
  box-shadow: inset -1px -3px 13px 0px rgba(0, 0, 0, 0.2), 0 1.5rem 2.5rem -1.5rem rgba(139, 28, 35, 0.25), 0 0.5rem 1rem 0 rgba(255, 215, 0, 0.10);
  opacity: 1;
  transform: translateX(0);
}

.quote-icon {
  font-size: 4rem;
  color: var(--gold-accent);
  line-height: 1;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.testimonial-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--dark);
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--gold-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-red);
  margin-bottom: 0.25rem;
}

.author-role {
  font-size: 1rem;
  color: var(--dark);
  opacity: 0.7;
}

.rating {
  display: flex;
  gap: 0.25rem;
}

.star {
  font-size: 1.2rem;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gold-accent);
  color: var(--dark);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.carousel-btn:hover {
  background: var(--darker-gold);
  transform: translateY(-50%) scale(1.1);
}

.prev-btn {
  left: -70px;
}

.next-btn {
  right: -70px;
}

.carousel-dots {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(139, 28, 35, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: var(--primary-red);
  transform: scale(1.3);
}

.dot:hover {
  background: var(--gold-accent);
}

@media (max-width: 768px) {
  .testimonial-carousel {
    max-width: 90%;
  }
  
  .testimonial-wrapper {
    height: 400px;
  }
  
  .testimonial-card {
    padding: 2rem 1.5rem;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
  
  .prev-btn {
    left: -10px;
  }
  
  .next-btn {
    right: -10px;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
}
</style>
