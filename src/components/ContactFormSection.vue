<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-header">
        <h2 class="section-title">Liên hệ với chúng tôi</h2>
        <p class="section-subtitle">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn sản phẩm và dịch vụ AR</p>
      </div>

      <div class="contact-wrapper">
        <!-- Form Section -->
        <div class="form-container">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="fullName">
                Họ và tên <span class="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                v-model="formData.fullName"
                placeholder="Nhập họ và tên của bạn"
                required
                :class="{ 'error': errors.fullName }"
              />
              <span v-if="errors.fullName" class="error-message">{{ errors.fullName }}</span>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">
                  Email <span class="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="email@example.com"
                  required
                  :class="{ 'error': errors.email }"
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="phone">
                  Số điện thoại <span class="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="0912 345 678"
                  required
                  :class="{ 'error': errors.phone }"
                />
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="subject">
                Chủ đề <span class="required">*</span>
              </label>
              <select
                id="subject"
                v-model="formData.subject"
                required
                :class="{ 'error': errors.subject }"
              >
                <option value="" disabled>Chọn chủ đề liên hệ</option>
                <option value="product">Tư vấn sản phẩm</option>
                <option value="ar-demo">Trải nghiệm AR Demo</option>
                <option value="price">Bảng giá & Khuyến mãi</option>
                <option value="cooperation">Hợp tác kinh doanh</option>
                <option value="support">Hỗ trợ kỹ thuật</option>
                <option value="other">Khác</option>
              </select>
              <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
            </div>

            <div class="form-group">
              <label for="message">
                Nội dung tin nhắn <span class="required">*</span>
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                placeholder="Nhập nội dung bạn muốn trao đổi..."
                rows="5"
                required
                :class="{ 'error': errors.message }"
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="formData.agreedToTerms"
                  required
                />
                <span class="checkbox-text">
                  Tôi đồng ý với <a href="#" @click.prevent="showTerms = true">Điều khoản & Chính sách bảo mật</a>
                </span>
              </label>
            </div>

            <button type="submit" class="btn-submit" :disabled="isSubmitting">
              <span v-if="!isSubmitting">
                Gửi liên hệ
              </span>
              <span v-else class="loading">
                <span class="spinner"></span>
                Đang gửi...
              </span>
            </button>

            <div v-if="submitStatus === 'success'" class="success-message">
              <span class="success-icon">✅</span>
              Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ liên hệ sớm nhất.
            </div>
            <div v-if="submitStatus === 'error'" class="error-alert">
              <span class="error-icon">❌</span>
              Đã có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua hotline.
            </div>
          </form>
        </div>

        <!-- Contact Info Section -->
        <div class="contact-info">
          <div class="image-container">
            <img src="/src/assets/images/baobao.png" alt="AR Viet Wood Contact" class="contact-image" />
            <div class="image-overlay">
              <h3>Bảo bảo ở đây</h3>
              <p>Sẵn sàng hỗ trợ bạn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  agreedToTerms: false
})

const errors = reactive({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref('') // '', 'success', 'error'
const showTerms = ref(false)

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')

  // Validate full name
  if (formData.fullName.trim().length < 2) {
    errors.fullName = 'Họ tên phải có ít nhất 2 ký tự'
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Email không hợp lệ'
    isValid = false
  }

  // Validate phone
  const phoneRegex = /^[0-9]{10,11}$/
  if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
    errors.phone = 'Số điện thoại không hợp lệ'
    isValid = false
  }

  // Validate subject
  if (!formData.subject) {
    errors.subject = 'Vui lòng chọn chủ đề'
    isValid = false
  }

  // Validate message
  if (formData.message.trim().length < 10) {
    errors.message = 'Nội dung tin nhắn phải có ít nhất 10 ký tự'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitStatus.value = ''

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData)
    
    submitStatus.value = 'success'
    
    // Reset form
    Object.keys(formData).forEach(key => {
      if (key === 'agreedToTerms') {
        formData[key] = false
      } else {
        formData[key] = ''
      }
    })
  } catch (error) {
    console.error('Submit error:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    
    // Clear status after 5 seconds
    setTimeout(() => {
      submitStatus.value = ''
    }, 5000)
  }
}
</script>

<style scoped>
.contact-section {
  padding: 6rem 5%;
  background: linear-gradient(135deg, #f8f4ef 0%, #fff 50%, #f8f4ef 100%);
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 10% 20%, rgba(139, 28, 35, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-header {
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

.contact-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Form Container */
.form-container {
  background: var(--white);
  padding: 3rem;
  border-radius: 20px;
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(139, 28, 35, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--dark);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.label-icon {
  font-size: 1.2rem;
}

.required {
  color: var(--primary-red);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.9rem 1.2rem;
  border: 2px solid rgba(139, 28, 35, 0.2);
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: var(--white);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-red);
  box-shadow: 0 0 0 3px rgba(139, 28, 35, 0.1);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: -0.3rem;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox-group {
  margin-top: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  cursor: pointer;
  font-weight: normal;
}

.checkbox-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 2px;
}

.checkbox-text {
  flex: 1;
  font-size: 0.9rem;
  color: var(--dark);
  opacity: 0.8;
}

.checkbox-text a {
  color: var(--primary-red);
  text-decoration: none;
  font-weight: 600;
}

.checkbox-text a:hover {
  text-decoration: underline;
}

.btn-submit {
  padding: 1.2rem 2rem;
  background: #8B1C23;
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(139, 28, 35, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.btn-submit:hover:not(:disabled) {
  background: #a52229;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 28, 35, 0.4);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-icon {
  font-size: 1.3rem;
}

.loading {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.success-message,
.error-alert {
  padding: 1rem 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
  animation: slideIn 0.3s ease;
}

.success-message {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error-alert {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.success-icon,
.error-icon {
  font-size: 1.5rem;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 15px 50px rgba(0, 0, 0, 0.15),
    0 5px 20px rgba(139, 28, 35, 0.2);
  transition: all 0.4s ease;
}

.image-container:hover {
  transform: translateY(-10px);
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.2),
    0 10px 30px rgba(139, 28, 35, 0.3);
}

.contact-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.image-container:hover .contact-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(139, 28, 35, 0.95) 0%, rgba(139, 28, 35, 0.7) 50%, transparent 100%);
  padding: 2.5rem 2rem 2rem;
  transform: translateY(0);
  transition: all 0.4s ease;
}

.image-overlay h3 {
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.image-overlay p {
  color: var(--gold-accent);
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 968px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }

  .form-container {
    padding: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 4rem 5%;
  }

  .section-title {
    font-size: 2rem;
  }

  .form-container {
    padding: 1.5rem;
  }
}
</style>
