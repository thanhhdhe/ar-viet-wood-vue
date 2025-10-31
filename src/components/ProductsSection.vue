<template>
  <section id="products" class="products">
    <div class="container">
      <h2 class="section-title">Sản phẩm nổi bật</h2>
      <p class="section-subtitle">Khám phá bộ sưu tập mô hình gỗ cao cấp của chúng tôi</p>
      
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div class="product-carousel">
            <div 
              v-for="(product, index) in sortedProducts" 
              :key="index" 
              class="product-card"
              :class="carouselClass(index)"
            >
              <div class="product-image" @click="goToDetail(product)">
                <img v-if="product.image && product.image.startsWith('http') || product.image && product.image.includes('/')" 
                     :src="product.image" 
                     :alt="product.name"
                     class="product-img" />
                <span v-else class="product-icon">{{ product.image }}</span>
              </div>
              <div class="product-info">
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-price">Liên hệ</p>
                <button class="btn-add-cart" @click="goToDetail(product)">Xem chi tiết</button>
              </div>
            </div>
          </div>
        </div>
        
        <button class="carousel-btn prev-btn" @click="prevProduct">
          <span>‹</span>
        </button>
        <button class="carousel-btn next-btn" @click="nextProduct">
          <span>›</span>
        </button>
        
        <div class="carousel-dots">
          <button 
            v-for="(product, index) in products" 
            :key="index"
            class="dot"
            :class="{ 'active': index === currentIndex }"
            @click="goToProduct(index)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({ products: Array })

const currentIndex = ref(0)
const prevIndex = ref(null)

const nextProduct = () => {
  prevIndex.value = currentIndex.value
  currentIndex.value = (currentIndex.value + 1) % props.products.length
}

const prevProduct = () => {
  prevIndex.value = currentIndex.value
  currentIndex.value = (currentIndex.value - 1 + props.products.length) % props.products.length
}

const goToProduct = (index) => {
  prevIndex.value = currentIndex.value
  currentIndex.value = index
}

const goToDetail = (product) => {
  if (product.id) {
    router.push({ name: 'ProductDetail', params: { id: product.id } })
  }
}

// Sắp xếp lại mảng để active luôn render sau cùng
const sortedProducts = computed(() => {
  const arr = []
  for (let i = 0; i < props.products.length; i++) {
    if (i !== currentIndex.value) arr.push(props.products[i])
  }
  arr.push(props.products[currentIndex.value])
  return arr
})

const carouselClass = (index) => {
  // index trong sortedProducts
  const realIndex = index === sortedProducts.value.length - 1 ? currentIndex.value : index < currentIndex.value ? index : index + 1
  if (realIndex === currentIndex.value) return 'active'
  if (realIndex === (currentIndex.value + 1) % props.products.length) return 'right'
  if (realIndex === (currentIndex.value - 1 + props.products.length) % props.products.length) return 'left'
  return 'hidden'
}
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
  font-weight: 700;
  text-align: center;
  color: var(--dark);
  font-size: 1.1rem;
  margin-bottom: 4rem;
  opacity: 0.8;
}
.products {
  padding: 6rem 5%;
  background: var(--light-wood);
}
.carousel-container {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem 0;
}
.carousel-wrapper {
  perspective: 2000px;
  position: relative;
  height: 60vh;
  max-height: 600px;
  min-height: 350px;
}
.product-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}
.product-card {
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 70vh;
  background: var(--white);
  border-radius: 15px;
  overflow: hidden;
box-shadow: inset -1px -3px 7px 4px rgba(0, 0, 0, 0.2), 0 1.5rem 2.5rem -1.5rem rgba(139, 28, 35, 0.25), 0 0.5rem 1rem 0 rgba(255, 215, 0, 0.10);
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: center center;
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}
.product-card.active {
  opacity: 1;
  pointer-events: auto;
  transform: rotateY(0deg) translateZ(150px) scale(1);
  z-index: 10;
}
.product-card.left {
  opacity: 0.7;
  pointer-events: none;
  transform: rotateY(45deg) translateX(-80%) translateZ(-100px) scale(0.75);
  z-index: 2;
  filter: blur(5px);
}
.product-card.right {
  opacity: 0.7;
  pointer-events: none;
  transform: rotateY(-45deg) translateX(80%) translateZ(-100px) scale(0.75);
  z-index: 2;
  filter: blur(5px);
}
.product-card.hidden {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  z-index: 1;
}
.product-card.active:hover {
  transform: rotateY(0deg) translateZ(120px) scale(1.02);
  box-shadow:
    0 20px 60px rgba(139, 28, 35, 0.3),
    0 2.5rem 4rem -2rem rgba(139, 28, 35, 0.35),
    0 1rem 2rem 0 rgba(255, 215, 0, 0.18);
}
.product-image {
  height: 30vh;
  max-height: 250px;
  min-height: 150px;
  background: linear-gradient(135deg, var(--primary-red), var(--darker-red));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.product-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
.product-icon {
  font-size: 6rem;
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));
}
.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 26, 26, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}
.product-card.active:hover .product-overlay {
  opacity: 1;
}
.btn-ar {
  background: var(--gold-accent);
  color: var(--dark);
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-ar:hover {
  transform: scale(1.05);
}
.product-info {
  padding: 1.5rem;
  text-align: center;
}
.product-name {
  font-size: 1.3rem;
  color: var(--primary-red);
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.product-price {
  font-size: 1.5rem;
  color: var(--gold-accent);
  font-weight: bold;
  margin-bottom: 1rem;
}
.btn-add-cart {
    box-shadow: inset -1px -3px 7px 4px rgba(0, 0, 0, 0.2), 0 1.5rem 2.5rem -1.5rem rgba(139, 28, 35, 0.25), 0 0.5rem 1rem 0 rgba(255, 215, 0, 0.10);
  background: var(--primary-red);
  color: var(--white);
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-add-cart:hover {
  background: var(--darker-red);
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
  .carousel-container {
    max-width: 90%;
  }
  .carousel-wrapper {
    height: 500px;
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
