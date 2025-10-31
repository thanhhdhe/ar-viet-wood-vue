<script setup>
import { ref } from 'vue'
import LiquidGlassHeader from '../components/LiquidGlassHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import ARTechnologySection from '../components/ARTechnologySection.vue'
import ProductsSection from '../components/ProductsSection.vue'
import PromotionBanner from '../components/PromotionBanner.vue'
import CoreValuesSection from '../components/CoreValuesSection.vue'
import MissionVisionSection from '../components/MissionVisionSection.vue'
import ARGuideSection from '../components/ARGuideSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import ContactFormSection from '../components/ContactFormSection.vue'
import CTASection from '../components/CTASection.vue'
import FooterSection from '../components/FooterSection.vue'
import ModalARDemo from '../components/ModalARDemo.vue'
import SocialQRSticky from '../components/SocialQRSticky.vue'

const features = [
  {
    icon: '🎯',
    title: 'Công nghệ AR Tiên tiến',
    description: 'Trải nghiệm thực tế ảo tăng cường, xem sản phẩm trong không gian thực của bạn'
  },
  {
    icon: '🪵',
    title: 'Gỗ Thông Minh',
    description: 'Mô hình lắp ghép từ gỗ tự nhiên cao cấp, thiết kế thông minh, dễ dàng lắp ráp'
  },
  {
    icon: '✨',
    title: 'Sang Trọng & Bền Vững',
    description: 'Kết hợp giữa nghệ thuật truyền thống và công nghệ hiện đại'
  }
]

const products = [
  {
    id: 'lang-bac',
    name: 'Lăng Chủ tịch Hồ Chí Minh',
    image: new URL('../assets/images/lang_Bac.png', import.meta.url).href,
    price: 'Liên hệ'
  },
  {
    id: 'ben-nha-rong',
    name: 'Bến Nhà Rồng',
    image: new URL('../assets/images/ben_nha_rong.png', import.meta.url).href,
    price: 'Liên hệ'
  },
  {
    id: 'nha-san-bac-ho',
    name: 'Nhà Sàn Bác Hồ',
    image: new URL('../assets/images/nha_san_bac_ho.png', import.meta.url).href,
    price: 'Liên hệ'
  },
  {
    id: 'khue-van-cac',
    name: 'Khuê Văn Các',
    image: new URL('../assets/images/khue_van_cac.png', import.meta.url).href,
    price: 'Liên hệ'
  }
]

const showARDemo = ref(false)
</script>

<template>
  <div class="landing-page">
    <section class="hero">
      <liquid-glass-header />
      <hero-section @show-ar-demo="showARDemo = true" />
    </section>
    <features-section :features="features" />
    <ar-technology-section />
    <products-section :products="products" />
    <promotion-banner />
    <mission-vision-section />
    <core-values-section />
    <a-r-guide-section />
    <testimonials-section />
    <contact-form-section />
    <cta-section />
    <footer-section />
    <modal-a-r-demo :show="showARDemo" @close="showARDemo = false" />
    <SocialQRSticky />
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
  color: #1A1A1A;
  overflow-x: hidden;
}

.hero {
  background: linear-gradient(135deg, #8B1C23 0%, #6a151a 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
