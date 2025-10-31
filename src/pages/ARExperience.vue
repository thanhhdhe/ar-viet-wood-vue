<template>
    <SimpleHeader />

    <!-- Popup Welcome -->
    <div v-if="showPopup" class="popup-overlay">
        <div class="popup-card">
            <div class="popup-header">
                <div class="icon-wrapper">
                    <span class="icon">📱</span>
                </div>
                <h2 class="popup-title">Trải nghiệm AR 3D</h2>
                <p class="popup-description">Nhấn "Bắt đầu" để mở camera và xem mô hình 3D của Lăng Bác Hồ</p>
            </div>
            
            <div class="instructions-list">
                <div class="instruction-item">
                    <span class="check-icon">✓</span>
                    <p class="instruction-text">Hướng camera vào mô hình</p>
                </div>
                <div class="instruction-item">
                    <span class="check-icon">✓</span>
                    <p class="instruction-text">Mô hình 3D sẽ xuất hiện tự động</p>
                </div>
                <div class="instruction-item">
                    <span class="check-icon">✓</span>
                    <p class="instruction-text">Vuốt màn hình để xoay mô hình 360°</p>
                </div>
            </div>

            <button class="start-button" @click="startAR">
                <span>🎬</span>
                <span>Bắt đầu trải nghiệm</span>
            </button>
        </div>
    </div>

    <div id="ar-container">
        <a-scene mindar-image="imageTargetSrc: /ar/targets.mind; maxTrack: 1; filterMinCF: 0.001; filterBeta: 0.001"
            color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false"
            device-orientation-permission-ui="enabled: false" embedded>

            <a-assets>
                <a-asset-item id="gltf-model" src="/ar/lang-bac-ho-gltf/lang-bac-ho.gltf"></a-asset-item>
            </a-assets>

            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

            <!-- Lặp target -->
            <template v-for="i in 20" :key="`target-${i}`">
                <a-entity :mindar-image-target="`targetIndex: ${i - 1}`" @targetFound="onTargetFound(i - 1)"
                    @targetLost="onTargetLost(i - 1)">

                    <!-- Nhóm bao ngoài để ổn định mô hình -->
                    <a-entity position="0 0 0">
                        <a-gltf-model :id="`model-${i - 1}`" src="#gltf-model" position="-0.4 0 0.3" rotation="0 270 -5"
                            scale="0.03 0.03 0.03" visible="false" animation-mixer>
                        </a-gltf-model>

                    </a-entity>
                </a-entity>
            </template>
        </a-scene>
    </div>
</template>

<script setup>
import SimpleHeader from '../components/SimpleHeader.vue'
import { ref, onMounted } from 'vue'

const showPopup = ref(true)
const rotationState = ref({
    isRotating: false,
    startX: 0,
    startY: 0,
    currentRotationY: 270,
    currentRotationX: -5,
    activeModelIndex: null
})

function startAR() {
    showPopup.value = false
}

function onTargetFound(index) {
    console.log(`Target ${index} found - showing 3D model`)
    const model = document.getElementById(`model-${index}`)
    if (model) {
        model.setAttribute('visible', 'true')
        rotationState.value.activeModelIndex = index
        enableRotation(index)
    }
}

function onTargetLost(index) {
    console.log(`Target ${index} lost - hiding model`)
    const model = document.getElementById(`model-${index}`)
    if (model) {
        model.setAttribute('visible', 'false')
        rotationState.value.activeModelIndex = null
    }
}

function enableRotation(index) {
    const container = document.getElementById('ar-container')
    if (!container) return

    const onTouchStart = (e) => {
        if (rotationState.value.activeModelIndex !== index) return
        rotationState.value.isRotating = true
        rotationState.value.startX = e.touches ? e.touches[0].clientX : e.clientX
        rotationState.value.startY = e.touches ? e.touches[0].clientY : e.clientY
    }

    const onTouchMove = (e) => {
        if (!rotationState.value.isRotating || rotationState.value.activeModelIndex !== index) return
        
        e.preventDefault()
        const currentX = e.touches ? e.touches[0].clientX : e.clientX
        const currentY = e.touches ? e.touches[0].clientY : e.clientY
        
        const deltaX = currentX - rotationState.value.startX
        const deltaY = currentY - rotationState.value.startY
        
        rotationState.value.currentRotationY += deltaX * 0.5
        rotationState.value.currentRotationX -= deltaY * 0.3
        
        // Giới hạn góc xoay X để không bị lộn ngược
        rotationState.value.currentRotationX = Math.max(-85, Math.min(85, rotationState.value.currentRotationX))
        
        const model = document.getElementById(`model-${index}`)
        if (model) {
            model.setAttribute('rotation', 
                `${rotationState.value.currentRotationX} ${rotationState.value.currentRotationY} -5`
            )
        }
        
        rotationState.value.startX = currentX
        rotationState.value.startY = currentY
    }

    const onTouchEnd = () => {
        rotationState.value.isRotating = false
    }

    // Touch events cho mobile
    container.addEventListener('touchstart', onTouchStart, { passive: false })
    container.addEventListener('touchmove', onTouchMove, { passive: false })
    container.addEventListener('touchend', onTouchEnd)

    // Mouse events cho desktop
    container.addEventListener('mousedown', onTouchStart)
    container.addEventListener('mousemove', onTouchMove)
    container.addEventListener('mouseup', onTouchEnd)
    container.addEventListener('mouseleave', onTouchEnd)
}

onMounted(() => {
    console.log('MindAR scene mounted.')

    // Đợi scene khởi tạo xong
    const scene = document.querySelector('a-scene')
    if (scene) {
        scene.addEventListener('loaded', () => {
            console.log('A-Frame scene loaded successfully')
        })
    }
})
</script>

<style scoped>
/* AR Container */
#ar-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
    background: linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 100%);
}

#ar-container::before {
    content: 'Đang khởi tạo camera AR...';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #C9A464;
    font-size: 1.2rem;
    font-weight: 600;
    z-index: 0;
    pointer-events: none;
}

/* Popup Overlay */
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

/* Popup Card */
.popup-card {
    background: #FFFFFF;
    border-radius: 1.5rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    text-align: center;
    max-width: 28rem;
    width: 100%;
    padding: 2rem;
    animation: popupSlideIn 0.3s ease-out;
}

@keyframes popupSlideIn {
    from {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Popup Header */
.popup-header {
    margin-bottom: 1.5rem;
}

.icon-wrapper {
    width: 5rem;
    height: 5rem;
    background: linear-gradient(135deg, #8B1C23 0%, #C9A464 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    box-shadow: 0 8px 16px rgba(139, 28, 35, 0.3);
}

.icon {
    font-size: 2.5rem;
}

.popup-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1A1A1A;
    margin: 0 0 0.5rem 0;
}

.popup-description {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
}

/* Instructions List */
.instructions-list {
    margin-bottom: 1.5rem;
}

.instruction-item {
    display: flex;
    align-items: flex-start;
    text-align: left;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
}

.instruction-item:last-child {
    margin-bottom: 0;
}

.check-icon {
    color: #8B1C23;
    font-size: 1.25rem;
    font-weight: bold;
    flex-shrink: 0;
}

.instruction-text {
    color: #666;
    font-size: 0.875rem;
    margin: 0;
    line-height: 1.5;
}

/* Start Button */
.start-button {
    width: 100%;
    background: linear-gradient(135deg, #8B1C23 0%, #C9A464 100%);
    color: #FFFFFF;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1.125rem;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(139, 28, 35, 0.3);
}

.start-button:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 20px rgba(139, 28, 35, 0.4);
}

.start-button:active {
    transform: translateY(0) scale(0.98);
}

/* Responsive */
@media (max-width: 640px) {
    .popup-card {
        padding: 1.5rem;
        margin: 1rem;
    }
    
    .icon-wrapper {
        width: 4rem;
        height: 4rem;
    }
    
    .icon {
        font-size: 2rem;
    }
    
    .popup-title {
        font-size: 1.25rem;
    }
    
    .start-button {
        font-size: 1rem;
        padding: 0.875rem 1.5rem;
    }
}
</style>
