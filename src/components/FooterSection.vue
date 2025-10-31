<template>
  <footer id="contact" class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section about">
            <div class="logo-footer">
              <img src="/logo.png" alt="AR Vietwood" class="footer-logo-img" />
              <h3 class="footer-title">AR Vietwood</h3>
            </div>
            <p class="footer-description">
              Mô hình lắp ghép gỗ thông minh kết hợp công nghệ AR tiên tiến. 
              Mang đến trải nghiệm học tập sáng tạo và thú vị cho trẻ em.
            </p>
            <div class="social-links">
              <a href="https://www.facebook.com/ARVIETWOOD" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
                <span class="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0"/>
                  </svg>
                </span>
              </a>
              <a href="https://www.tiktok.com/@ar.vietwood" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="TikTok">
                <span class="social-icon">
                  <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.5 6c.2 4.2 3.2 7.6 7.5 8v5.2c-3.2.3-6.2-1.1-8.5-3.3v14.6c0 6.2-5 11.2-11.2 11.2S11 36.7 11 30.5c0-6.2 5-11.2 11.2-11.2.7 0 1.4.1 2.1.2v5.3c-.7-.2-1.4-.3-2.1-.3-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6V6h5.3z"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-heading">Khám phá</h4>
            <ul class="footer-links">
              <li><router-link to="/">Trang chủ</router-link></li>
              <li><router-link to="/ar-experience">AR Camera</router-link></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </div>
          
          <!-- <div class="footer-section">
            <h4 class="footer-heading">Hỗ trợ</h4>
            <ul class="footer-links">
              <li><a href="#">Câu hỏi thường gặp</a></li>
              <li><a href="#">Hướng dẫn sử dụng</a></li>
              <li><a href="#">Chính sách bảo hành</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
            </ul>
          </div> -->
          
          <div class="footer-section">
            <h4 class="footer-heading">Liên hệ</h4>
            <ul class="footer-contact">
              <li>
                <span class="contact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="email">
                    <path fill="#ffffff" d="M2 5.5C2 4.12 3.12 3 4.5 3h15C20.88 3 22 4.12 22 5.5v13c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13zM4.5 6.25L12 11.5 19.5 6.25V5.5L12 10 4.5 5.5v.75z"/>
                  </svg>
                </span>
                <a href="mailto:arvietwood@gmail.com">arvietwood@gmail.com</a>
              </li>
              <li>
                <span class="contact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="phone">
                    <path fill="#ffffff" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.06-.24c1.17.47 2.44.72 3.75.72a1 1 0 011 1V20a2 2 0 01-2 2C9.27 22 2 14.73 2 5a2 2 0 012-2h3.5a1 1 0 011 1c0 1.31.25 2.58.72 3.75.14.34.06.73-.24 1.06l-2.36 2.98z"/>
                  </svg>
                </span>
                <a href="tel:0976476207">0976 476 207</a>
              </li>
              <li>
                <span class="contact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="location">
                    <path fill="#ffffff" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>
                </span>
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p class="copyright">&copy; 2025 AR Vietwood. All rights reserved.</p>
          <!-- <div class="footer-bottom-links">
            <a href="#">Điều khoản sử dụng</a>
            <span class="separator">|</span>
            <a href="#">Chính sách bảo mật</a>
          </div> -->
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
// No props needed
</script>
<style scoped>
.footer {
  background: linear-gradient(180deg, var(--dark) 0%, #0d0d0d 100%);
  color: var(--white);
}

.footer-top {
  padding: 4rem 5% 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 3rem;
}

.footer-section.about {
  max-width: 350px;
}

.logo-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.footer-logo-img {
  height: 45px;
  width: auto;
}

.footer-title {
  font-size: 1.5rem;
  color: var(--gold-accent);
  font-weight: bold;
  margin: 0;
}

.footer-description {
  color: var(--white);
  opacity: 0.85;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(201, 164, 100, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  text-decoration: none;
}

.social-link:hover {
  background: var(--gold-accent);
  transform: translateY(-3px);
}

.social-link:hover .social-icon {
  color: var(--dark);
}

.social-icon {
  width: 20px;
  height: 20px;
  color: var(--white);
  transition: color 0.3s;
}

.footer-heading {
  color: var(--gold-accent);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--gold-accent);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: var(--white);
  text-decoration: none;
  opacity: 0.85;
  transition: all 0.3s;
  display: inline-block;
}

.footer-links a:hover {
  color: var(--gold-accent);
  opacity: 1;
  padding-left: 5px;
}

.footer-contact {
  list-style: none;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--white);
  opacity: 0.85;
}

.contact-icon {
  font-size: 1.2rem;
  color: var(--gold-accent);
}

.footer-contact a {
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-contact a:hover {
  color: var(--gold-accent);
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem 5%;
  border-top: 1px solid rgba(201, 164, 100, 0.1);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: var(--white);
  opacity: 0.7;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-bottom-links a {
  color: var(--white);
  text-decoration: none;
  opacity: 0.7;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.footer-bottom-links a:hover {
  color: var(--gold-accent);
  opacity: 1;
}

.separator {
  color: var(--white);
  opacity: 0.3;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-section.about {
    grid-column: span 2;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer-section.about {
    grid-column: span 1;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
}
</style>
