<template>
  <!-- Header -->
  <simple-header />
  
  <div class="product-detail">
    <!-- Breadcrumb -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/" class="breadcrumb-item">Trang chủ</a>
          <!-- <span class="separator">/</span> -->
          <!-- <a href="/products" class="breadcrumb-item">Sản phẩm</a> -->
          <span class="separator">/</span>
          <span class="breadcrumb-current">{{ product.name }}</span>
        </nav>
      </div>
    </div>

    <!-- Product Content -->
    <section class="product-content">
      <div class="container">
        <div class="product-grid">
          <!-- Product Images -->
          <div class="product-images">
            <div class="main-image">
              <img :src="currentImage" :alt="product.name" />
              <div class="image-badges">
                <span class="badge new">Mới</span>
                <span class="badge ar">AR</span>
              </div>
            </div>
            <div class="thumbnail-list">
              <div 
                v-for="(image, index) in product.images" 
                :key="index"
                class="thumbnail"
                :class="{ active: currentImage === image }"
                @click="currentImage = image"
              >
                <img :src="image" :alt="`${product.name} - ${index + 1}`" />
              </div>
            </div>
          </div>

          <!-- Product Info -->
          <div class="product-info">
            <h1 class="product-title">{{ product.name }}</h1>
            
            <div class="product-price">
              <span class="price-label">Giá:</span>
              <span class="price">Liên hệ</span>
            </div>

            <div class="product-meta">
              <div class="meta-item">
                <span class="meta-label">Mã sản phẩm:</span>
                <span class="meta-value">{{ product.sku }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Tình trạng:</span>
                <span class="meta-value in-stock">Còn hàng</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Thương hiệu:</span>
                <span class="meta-value">AR Vietwood</span>
              </div>
            </div>

            <div class="product-actions">
              <button class="btn-contact-now" @click="showContactPopup = true">
                Liên hệ ngay
              </button>
            </div>

            <div class="product-features">
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>100% gỗ thông tự nhiên</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>An toàn, thân thiện môi trường</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Tích hợp công nghệ AR</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Made in Vietnam</span>
              </div>
            </div>

            <button class="btn-ar-view">
              <span class="icon">📱</span>
              Xem với AR
            </button>
          </div>
        </div>

        <!-- Product Details Tabs -->
        <div class="product-tabs">
          <div class="tab-header">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              class="tab-button"
              :class="{ active: activeTab === tab.id }"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="tab-content">
            <!-- Mô tả -->
            <div v-if="activeTab === 'description'" class="tab-pane">
              <h2 class="section-title">Mô tả sản phẩm</h2>
              <div class="description-content" v-html="product.description"></div>
            </div>

            <!-- Thông số kỹ thuật -->
            <div v-if="activeTab === 'specifications'" class="tab-pane">
              <h2 class="section-title">Thông số kỹ thuật</h2>
              <table class="specs-table">
                <tbody>
                  <tr>
                    <td class="spec-label">Kích thước</td>
                    <td class="spec-value">{{ product.specs.size }}</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Cân nặng đóng gói</td>
                    <td class="spec-value">{{ product.specs.weight }}</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Chất liệu</td>
                    <td class="spec-value">{{ product.specs.material }}</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Xuất xứ</td>
                    <td class="spec-value">{{ product.specs.origin }}</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Thương hiệu</td>
                    <td class="spec-value">{{ product.specs.brand }}</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Độ tuổi khuyến nghị</td>
                    <td class="spec-value">{{ product.specs.age }}</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Số chi tiết</td>
                    <td class="spec-value">{{ product.specs.parts }}</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Thời gian lắp ráp</td>
                    <td class="spec-value">{{ product.specs.time }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Đánh giá -->
            <div v-if="activeTab === 'reviews'" class="tab-pane">
              <h2 class="section-title">Đánh giá của khách hàng</h2>
              <div class="reviews-summary">
                <div class="rating-overview">
                  <div class="rating-score">5.0</div>
                  <div class="rating-stars">⭐⭐⭐⭐⭐</div>
                  <div class="rating-count">0 đánh giá</div>
                </div>
              </div>
              <div class="review-list">
                <!-- <div class="review-item">
                  <div class="review-header">
                    <strong>Nguyễn Văn A</strong>
                    <span class="review-date">15/10/2025</span>
                  </div>
                  <div class="review-rating">⭐⭐⭐⭐⭐</div>
                  <p class="review-text">
                    Sản phẩm rất đẹp và chất lượng. Chi tiết được cắt laser rất tinh xảo, lắp ráp dễ dàng. Rất hài lòng!
                  </p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Popup -->
    <div v-if="showContactPopup" class="contact-popup-overlay" @click="showContactPopup = false">
      <div class="contact-popup" @click.stop>
        <button class="close-popup" @click="showContactPopup = false">✕</button>
        <h2 class="popup-title">Liên hệ tư vấn</h2>
        <p class="popup-description">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn cho bạn sớm nhất</p>
        
        <form @submit.prevent="submitContact" class="contact-form">
          <div class="form-group">
            <label for="name">Họ và tên *</label>
            <input 
              type="text" 
              id="name" 
              v-model="contactForm.name" 
              required 
              placeholder="Nhập họ tên của bạn"
            />
          </div>
          
          <div class="form-group">
            <label for="phone">Số điện thoại *</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="contactForm.phone" 
              required 
              placeholder="Nhập số điện thoại"
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="contactForm.email" 
              placeholder="Nhập email của bạn"
            />
          </div>
          
          <div class="form-group">
            <label for="message">Lời nhắn</label>
            <textarea 
              id="message" 
              v-model="contactForm.message" 
              rows="4"
              placeholder="Nhập nội dung bạn muốn tư vấn..."
            ></textarea>
          </div>
          
          <button type="submit" class="btn-submit-contact">
            Gửi thông tin
          </button>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <footer-section />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import SimpleHeader from '../components/SimpleHeader.vue'
import FooterSection from '../components/FooterSection.vue'

const route = useRoute()

// Database sản phẩm
const productsData = {
  'lang-bac': {
    name: 'Lăng Bác - Lăng Chủ tịch Hồ Chí Minh',
    sku: 'LB-001',
    description: `<strong>Lăng Bác</strong> là một đài hoa vĩnh cửu, một không gian thiêng liêng, nơi hội tụ niềm tin, gửi gắm tình cảm kính yêu của nhân dân đối với Chủ tịch Hồ Chí Minh.<br><br>
      Đáp lại tình cảm của đại đa số những người đam mê lắp ráp Mô hình 3D, <strong>AR Vietwood</strong> thực hiện Bộ lắp ráp Mô hình gỗ 3D Lăng Bác - Lăng Chủ Tịch Hồ Chí Minh với hi vọng, đây sẽ là món quà tinh thần giá trị trong những dịp trọng đại của đất nước.<br><br>
      <strong>Đặc điểm nổi bật:</strong> Bạn có thể tự tay lắp ráp Mô hình gỗ 3D với những chi tiết được cắt sẵn cực sắc sảo, với 100% gỗ thông tự nhiên, gỗ bo tròn và sơn chuyên dụng an toàn.`,
    images: [
      new URL('../assets/images/lang_Bac.png', import.meta.url).href,
      new URL('../assets/images/lang_Bac.png', import.meta.url).href,
    ],
    specs: {
      size: '37cm x 37cm x 8cm',
      weight: '1kg',
      material: '100% gỗ thông tự nhiên',
      origin: 'Made in Vietnam',
      brand: 'AR Vietwood',
      age: '10 tuổi trở lên',
      parts: '250+ chi tiết',
      time: '3-4 giờ'
    }
  },
  'ben-nha-rong': {
    name: 'Bến Nhà Rồng',
    sku: 'BNR-001',
    description: `<strong>Bến Nhà Rồng</strong> (tên cũ là Messageries Maritimes) là địa điểm lịch sử quan trọng, nơi Chủ tịch Hồ Chí Minh ra đi tìm đường cứu nước vào năm 1911.<br><br>
      Mô hình gỗ 3D <strong>Bến Nhà Rồng</strong> của AR Vietwood tái hiện chân thực kiến trúc đặc trưng của công trình lịch sử này, với những chi tiết tinh xảo được khắc họa tỉ mỉ.<br><br>
      <strong>Đặc điểm nổi bật:</strong> Mô hình được thiết kế với độ chi tiết cao, dễ dàng lắp ráp, phù hợp làm quà tặng ý nghĩa hoặc trang trí không gian học tập, làm việc.`,
    images: [
      new URL('../assets/images/ben_nha_rong.png', import.meta.url).href,
      new URL('../assets/images/ben_nha_rong_1.png', import.meta.url).href,
    ],
    specs: {
      size: '35cm x 25cm x 10cm',
      weight: '0.8kg',
      material: '100% gỗ thông tự nhiên',
      origin: 'Made in Vietnam',
      brand: 'AR Vietwood',
      age: '10 tuổi trở lên',
      parts: '200+ chi tiết',
      time: '2-3 giờ'
    }
  },
  'nha-san-bac-ho': {
    name: 'Nhà Sàn Bác Hồ',
    sku: 'NSB-001',
    description: `<strong>Nhà Sàn Bác Hồ</strong> là nơi Chủ tịch Hồ Chí Minh sinh hoạt và làm việc trong những năm tháng cuối đời. Ngôi nhà mang kiến trúc đơn giản, gần gũi với thiên nhiên, thể hiện tư tưởng sống giản dị của Người.<br><br>
      Mô hình gỗ 3D <strong>Nhà Sàn Bác Hồ</strong> tái hiện trung thực kiến trúc nhà sàn dân tộc Thái, nơi Bác đã sống và làm việc trong suốt 11 năm (1958-1969).<br><br>
      <strong>Đặc điểm nổi bật:</strong> Chi tiết chân thực từ cột nhà, mái lợp, cầu thang đến ao cá xung quanh. Sản phẩm mang giá trị giáo dục cao, phù hợp cho mọi lứa tuổi.`,
    images: [
      new URL('../assets/images/nha_san_bac_ho.png', import.meta.url).href,
      new URL('../assets/images/nha_san_bac_ho_1.png', import.meta.url).href,
    ],
    specs: {
      size: '30cm x 25cm x 15cm',
      weight: '0.7kg',
      material: '100% gỗ thông tự nhiên',
      origin: 'Made in Vietnam',
      brand: 'AR Vietwood',
      age: '10 tuổi trở lên',
      parts: '180+ chi tiết',
      time: '2-3 giờ'
    }
  },
  'khue-van-cac': {
    name: 'Khuê Văn Các',
    sku: 'KVC-001',
    description: `<strong>Khuê Văn Các</strong> là biểu tượng của Văn Miếu - Quốc Tử Giám Hà Nội, được xây dựng năm 1805 dưới triều vua Gia Long. Đây là công trình kiến trúc độc đáo, tiêu biểu cho nền giáo dục Việt Nam.<br><br>
      Mô hình gỗ 3D <strong>Khuê Văn Các</strong> của AR Vietwood tái hiện chi tiết kiến trúc mái cong đặc trưng, các hoa văn trang trí tinh xảo và cấu trúc 4 trụ cột chắc chắn.<br><br>
      <strong>Đặc điểm nổi bật:</strong> Mô hình thể hiện tài hoa của nghệ nhân Việt, kết hợp giữa truyền thống và hiện đại. Là món quà tri ân ý nghĩa cho thầy cô, bạn bè yêu văn hóa Việt.`,
    images: [
      new URL('../assets/images/khue_van_cac.png', import.meta.url).href,
      new URL('../assets/images/khue_van_cac.png', import.meta.url).href,
    ],
    specs: {
      size: '25cm x 25cm x 20cm',
      weight: '0.6kg',
      material: '100% gỗ thông tự nhiên',
      origin: 'Made in Vietnam',
      brand: 'AR Vietwood',
      age: '10 tuổi trở lên',
      parts: '150+ chi tiết',
      time: '2 giờ'
    }
  }
}

const product = computed(() => {
  const productId = route.params.id
  const data = productsData[productId]
  if (!data) {
    return {
      name: 'Sản phẩm không tồn tại',
      sku: 'N/A',
      description: 'Không tìm thấy thông tin sản phẩm',
      images: [],
      specs: {}
    }
  }
  return {
    ...data,
    price: 'Liên hệ'
  }
})

const currentImage = ref(product.value.images[0])
const activeTab = ref('description')
const showContactPopup = ref(false)
const contactForm = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const tabs = [
  { id: 'description', label: 'Mô tả' },
  { id: 'specifications', label: 'Thông số kỹ thuật' },
  { id: 'reviews', label: 'Đánh giá' }
]

const submitContact = () => {
  console.log('Contact form submitted:', contactForm.value)
  // TODO: Gửi form đến backend/email
  alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm nhất.')
  showContactPopup.value = false
  // Reset form
  contactForm.value = {
    name: '',
    phone: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
/* Breadcrumb */
.breadcrumb-section {
  background: #EADBC8;
  padding: 1.5rem 10%;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.breadcrumb-item {
  color: #1A1A1A;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-item:hover {
  color: #8B1C23;
}

.separator {
  color: #1A1A1A;
  opacity: 0.5;
}

.breadcrumb-current {
  color: #8B1C23;
  font-weight: 600;
}

/* Product Content */
.product-content {
  padding: 4rem 5%;
  background: #FFFFFF;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

/* Product Images */
.product-images {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.product-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: #F5F5F5;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 2px solid #EADBC8;
  cursor: default;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-badges {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
}

.badge {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.badge.new {
  background: #8B1C23;
  color: #FFFFFF;
}

.badge.ar {
  background: #C9A464;
  color: #1A1A1A;
}

.thumbnail-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.thumbnail {
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s;
}

.thumbnail:hover {
  border-color: #C9A464;
}

.thumbnail.active {
  border-color: #8B1C23;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Product Info */
.product-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.product-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #8B1C23;
  line-height: 1.2;
  margin: 0;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stars {
  display: flex;
  gap: 0.2rem;
}

.star {
  font-size: 1.2rem;
}

.rating-text {
  color: #1A1A1A;
  opacity: 0.7;
}

.product-price {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #EADBC8 0%, #f5ece0 100%);
  border-radius: 15px;
  border-left: 4px solid #8B1C23;
}

.price-label {
  font-size: 1rem;
  color: #1A1A1A;
  opacity: 0.8;
}

.price {
  font-size: 2rem;
  font-weight: 800;
  color: #8B1C23;
}

.product-meta {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem;
  background: #F5F5F5;
  border-radius: 15px;
}

.meta-item {
  display: flex;
  justify-content: space-between;
}

.meta-label {
  color: #1A1A1A;
  opacity: 0.7;
}

.meta-value {
  font-weight: 600;
  color: #1A1A1A;
}

.meta-value.in-stock {
  color: #27ae60;
}

/* Product Actions */
.product-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.quantity-selector {
  display: flex;
  border: 2px solid #C9A464;
  border-radius: 10px;
  overflow: hidden;
}

.qty-btn {
  width: 40px;
  height: 50px;
  background: #FFFFFF;
  border: none;
  font-size: 1.5rem;
  color: #8B1C23;
  cursor: pointer;
  transition: background 0.3s;
}

.qty-btn:hover {
  background: #EADBC8;
}

.qty-input {
  width: 60px;
  text-align: center;
  border: none;
  border-left: 1px solid #C9A464;
  border-right: 1px solid #C9A464;
  font-size: 1.1rem;
  font-weight: 600;
}

.btn-add-cart {
  flex: 1;
  min-width: 200px;
  padding: 1rem 2rem;
  background: #FFFFFF;
  color: #8B1C23;
  border: 2px solid #8B1C23;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s;
}

.btn-add-cart:hover {
  background: #8B1C23;
  color: #FFFFFF;
}

.btn-contact-now {
  width: 100%;
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, #8B1C23 0%, #C9A464 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(139, 28, 35, 0.3);
}

.btn-contact-now:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 28, 35, 0.4);
}

.btn-contact-now .icon {
  font-size: 1.5rem;
}

/* Product Features */
.product-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1.5rem;
  background: #F5F5F5;
  border-radius: 15px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
  color: #1A1A1A;
}

.feature-icon {
  color: #27ae60;
  font-weight: bold;
}

.btn-ar-view {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #C9A464, #d4b076);
  color: #1A1A1A;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: all 0.3s;
}

.btn-ar-view:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(201, 164, 100, 0.3);
}

/* Product Tabs */
.product-tabs {
  margin-top: 4rem;
}

.tab-header {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid #EADBC8;
  margin-bottom: 2rem;
}

.tab-button {
  padding: 1rem 2rem;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1A1A1A;
  opacity: 0.6;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
}

.tab-button:hover {
  opacity: 1;
}

.tab-button.active {
  color: #8B1C23;
  opacity: 1;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #8B1C23;
}

.tab-content {
  padding: 2rem 0;
}

.tab-pane {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: #8B1C23;
  margin-bottom: 1.5rem;
}

.description-content {
  line-height: 1.8;
  color: #1A1A1A;
}

.description-content p {
  margin-bottom: 1.2rem;
}

.description-content strong {
  color: #8B1C23;
}

/* Specifications Table */
.specs-table {
  width: 100%;
  border-collapse: collapse;
}

.specs-table tr {
  border-bottom: 1px solid #EADBC8;
}

.specs-table td {
  padding: 1.2rem;
}

.spec-label {
  font-weight: 600;
  color: #1A1A1A;
  width: 40%;
}

.spec-value {
  color: #1A1A1A;
  opacity: 0.8;
}

/* Reviews */
.reviews-summary {
  background: #F5F5F5;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.rating-overview {
  text-align: center;
}

.rating-score {
  font-size: 3rem;
  font-weight: 800;
  color: #8B1C23;
}

.rating-stars {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.rating-count {
  color: #1A1A1A;
  opacity: 0.7;
}

.review-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.review-item {
  padding: 1.5rem;
  background: #FFFFFF;
  border: 1px solid #EADBC8;
  border-radius: 15px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.review-date {
  color: #1A1A1A;
  opacity: 0.6;
  font-size: 0.9rem;
}

.review-rating {
  margin-bottom: 0.8rem;
}

.review-text {
  color: #1A1A1A;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 968px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .product-images {
    position: static;
  }

  .product-title {
    font-size: 2rem;
  }

  .product-features {
    grid-template-columns: 1fr;
  }

  .tab-header {
    overflow-x: auto;
  }
}

/* Contact Popup */
.contact-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.contact-popup {
  background: #FFFFFF;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: popupSlide 0.3s ease-out;
}

@keyframes popupSlide {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.close-popup {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #1A1A1A;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s;
}

.close-popup:hover {
  background: #F5F5F5;
  transform: rotate(90deg);
}

.popup-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #8B1C23;
  margin-bottom: 0.5rem;
  text-align: center;
}

.popup-description {
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #1A1A1A;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 0.9rem 1.2rem;
  border: 2px solid #E0E0E0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #C9A464;
  box-shadow: 0 0 0 3px rgba(201, 164, 100, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.btn-submit-contact {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #8B1C23 0%, #C9A464 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(139, 28, 35, 0.3);
}

.btn-submit-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 28, 35, 0.4);
}

@media (max-width: 768px) {
  .product-content {
    padding: 2rem 5%;
  }

  .thumbnail-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .product-actions {
    flex-direction: column;
  }

  .quantity-selector {
    width: 100%;
  }
}
</style>
