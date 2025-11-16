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
        <a-scene mindar-image="imageTargetSrc: /ar/targets_4.mind; maxTrack: 4; filterMinCF: 0.0001; filterBeta: 0.0001; missTolerance: 5; warmupTolerance: 3"
            color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false"
            device-orientation-permission-ui="enabled: false" embedded>

            <a-assets>
                <a-asset-item id="model-lang-bac" src="./ar/lang_bac_ho.glb"></a-asset-item>
                <a-asset-item id="model-nha-san" src="./ar/nha_san.glb"></a-asset-item>
                <a-asset-item id="model-ben-nha-rong" src="./ar/ben_nha_rong.glb"></a-asset-item>
                <a-asset-item id="model-khue-van-cac" src="./ar/hue_van_cac.glb"></a-asset-item>
                
                <audio id="audio-lang-bac" src="./ar/audio/lang_bac.mp3" preload="metadata" playsinline></audio>
                <audio id="audio-nha-san" src="./ar/audio/nha_san.mp3" preload="metadata" playsinline></audio>
                <audio id="audio-ben-nha-rong" src="./ar/audio/ben_nha_rong.mp3" preload="metadata" playsinline></audio>
                <audio id="audio-khue-van-cac" src="./ar/audio/khue_van_cac.mp3" preload="metadata" playsinline></audio>
            </a-assets>

            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

            <!-- Target 1 - Lăng Bác Hồ -->
            <a-entity mindar-image-target="targetIndex: 0; autoHide: false" @targetFound="onTargetFound(0)" @targetLost="onTargetLost(0)">
                <a-entity position="0 0 0">
                    <a-gltf-model id="model-0" src="#model-lang-bac" position="0 0 0" rotation="0 0 0"
                        scale="0.02 0.02 0.02" visible="false" animation-mixer>
                    </a-gltf-model>
                </a-entity>
            </a-entity>

            <!-- Target 2 - Nhà Sàn -->
            <a-entity mindar-image-target="targetIndex: 3; autoHide: false" @targetFound="onTargetFound(1)" @targetLost="onTargetLost(1)">
                <a-entity position="0 0 0">
                    <a-gltf-model id="model-1" src="#model-nha-san" position="0 0 0" rotation="0 0 0"
                        scale="0.8 0.8 0.8" visible="false" animation-mixer>
                    </a-gltf-model>
                </a-entity>
            </a-entity>

            <!-- Target 3 - Bến Nhà Rồng -->
            <a-entity mindar-image-target="targetIndex: 1; autoHide: false" @targetFound="onTargetFound(2)" @targetLost="onTargetLost(2)">
                <a-entity position="0 0 0">
                    <a-gltf-model id="model-2" src="#model-ben-nha-rong" position="0 0 0" rotation="0 0 0"
                        scale="0.02 0.02 0.02" visible="false" animation-mixer>
                    </a-gltf-model>
                </a-entity>
            </a-entity>

            <!-- Target 4 - Khuê Văn Các -->
            <a-entity mindar-image-target="targetIndex: 2; autoHide: false" @targetFound="onTargetFound(3)" @targetLost="onTargetLost(3)">
                <a-entity position="0 0 0">
                    <a-gltf-model id="model-3" src="#model-khue-van-cac" position="0 0 0" rotation="0 0 0"
                        scale="0.02 0.02 0.02" visible="false" animation-mixer>
                    </a-gltf-model>
                </a-entity>
            </a-entity>
        </a-scene>
    </div>
</template>

<script setup>
import SimpleHeader from '../components/SimpleHeader.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showPopup = ref(true)
const rotationState = ref({
    isRotating: false,
    startX: 0,
    startY: 0,
    currentRotationY: 0,
    currentRotationX: 0,
    currentScale: 0.02,
    baseScale: 0.02, 
    activeModelIndex: null,
    // Pinch zoom
    isPinching: false,
    initialPinchDistance: 0
})
let sceneEl = null
let currentAudio = null
let hideTimeouts = {} // Object để lưu timeout cho từng model
let audioStates = {} // Object để lưu trạng thái audio của từng target
let lastFoundTime = {} // Track thời gian tìm thấy target gần nhất
let stabilityCounters = {} // Đếm số lần target được tìm thấy liên tiếp

// Map target index to base scale
const scaleMap = {
    0: 0.02,  // Lăng Bác Hồ
    1: 1,     // Nhà Sàn
    2: 0.02,  // Bến Nhà Rồng
    3: 0.02   // Khuê Văn Các
}

// Map target index to audio id
const audioMap = {
    0: 'audio-lang-bac',
    1: 'audio-nha-san',
    2: 'audio-ben-nha-rong',
    3: 'audio-khue-van-cac'
}

function startAR() {
    showPopup.value = false
    const silentAudio = new Audio()
    silentAudio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAABhADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dX//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAYS3/f8s//tQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tQZDUD8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=='
    silentAudio.play().catch(() => {})
}

function onTargetFound(index) {
    console.log(`Target ${index} found - showing 3D model`)
    
    // Ghi nhận thời gian tìm thấy
    lastFoundTime[index] = Date.now()
    
    // Tăng stability counter
    stabilityCounters[index] = (stabilityCounters[index] || 0) + 1
    
    // Hủy timeout ẩn model nếu có
    if (hideTimeouts[index]) {
        clearTimeout(hideTimeouts[index])
        delete hideTimeouts[index]
        console.log(`Cancelled hide timeout for target ${index}`)
    }
    
    const model = document.getElementById(`model-${index}`)
    if (model) {
        model.setAttribute('visible', 'true')
        rotationState.value.activeModelIndex = index
        // Set base scale cho model hiện tại
        rotationState.value.baseScale = scaleMap[index] || 0.02
        rotationState.value.currentScale = rotationState.value.baseScale
        enableRotation(index)
        
        const audioId = audioMap[index]
        if (audioId) {
            const audio = document.getElementById(audioId)
            if (audio) {
                // Nếu audio đang phát cho target này, không làm gì
                if (audioStates[index] && audioStates[index].isPlaying && currentAudio === audio) {
                    console.log(`Audio for target ${index} already playing, continuing...`)
                    return
                }
                
                // Dừng audio khác nếu có
                if (currentAudio && currentAudio !== audio) {
                    currentAudio.pause()
                    currentAudio.currentTime = 0
                    // Reset trạng thái audio cũ
                    Object.keys(audioStates).forEach(key => {
                        if (audioStates[key] && audioStates[key].audio === currentAudio) {
                            audioStates[key].isPlaying = false
                        }
                    })
                }
                
                // Chỉ phát audio nếu chưa phát hoặc target đã stable
                if (!audioStates[index] || !audioStates[index].isPlaying) {
                    audio.load()
                    audio.currentTime = 0

                    const playPromise = audio.play()
                    if (playPromise !== undefined) {
                        playPromise
                            .then(() => {
                                console.log('Audio playing successfully')
                                currentAudio = audio
                                audioStates[index] = { audio: audio, isPlaying: true }
                            })
                            .catch(err => {
                                console.log('Audio play error (iOS may require user interaction):', err)
                                setTimeout(() => {
                                    audio.play().then(() => {
                                        currentAudio = audio
                                        audioStates[index] = { audio: audio, isPlaying: true }
                                    }).catch(() => {})
                                }, 100)
                            })
                    } else {
                        currentAudio = audio
                        audioStates[index] = { audio: audio, isPlaying: true }
                    }
                }
            }
        }
    }
}

function onTargetLost(index) {
    console.log(`Target ${index} lost - scheduling hide model`)
    
    // Reset stability counter
    stabilityCounters[index] = 0
    
    // Tính toán delay time dựa trên thời gian tracking gần nhất
    const timeSinceFound = Date.now() - (lastFoundTime[index] || 0)
    let delayTime = 3000 // Default 3 giây
    
    // Nếu target vừa mới được tìm thấy (< 2 giây), tăng delay time
    if (timeSinceFound < 2000) {
        delayTime = 5000 // 5 giây delay
        console.log(`Target ${index} was recently found, using longer delay: ${delayTime}ms`)
    }
    
    // KHÔNG ẩn model ngay lập tức, model vẫn visible
    // Chỉ đặt timeout để ẩn sau delay time
    hideTimeouts[index] = setTimeout(() => {
        const model = document.getElementById(`model-${index}`)
        if (model) {
            model.setAttribute('visible', 'false')
            console.log(`Model ${index} hidden after ${delayTime}ms timeout`)
        }
        
        if (rotationState.value.activeModelIndex === index) {
            rotationState.value.activeModelIndex = null
        }
        
        // Dừng audio sau khi model bị ẩn
        const audioId = audioMap[index]
        if (audioId) {
            const audio = document.getElementById(audioId)
            if (audio && audioStates[index] && audioStates[index].isPlaying) {
                audio.pause()
                audio.currentTime = 0
                audioStates[index].isPlaying = false
                if (currentAudio === audio) {
                    currentAudio = null
                }
                console.log(`Audio for target ${index} stopped after timeout`)
            }
        }
        
        // Xóa timeout khỏi object
        delete hideTimeouts[index]
    }, delayTime)
}

function enableRotation(index) {
    const container = document.getElementById('ar-container')
    if (!container) return

    // Helper function để tính khoảng cách giữa 2 điểm (pinch)
    const getDistance = (touch1, touch2) => {
        const dx = touch1.clientX - touch2.clientX
        const dy = touch1.clientY - touch2.clientY
        return Math.sqrt(dx * dx + dy * dy)
    }

    const onTouchStart = (e) => {
        if (rotationState.value.activeModelIndex !== index) return
        
        // Kiểm tra nếu là pinch (2 ngón)
        if (e.touches && e.touches.length === 2) {
            rotationState.value.isPinching = true
            rotationState.value.isRotating = false
            rotationState.value.initialPinchDistance = getDistance(e.touches[0], e.touches[1])
        } else if (e.touches && e.touches.length === 1) {
            rotationState.value.isRotating = true
            rotationState.value.isPinching = false
            rotationState.value.startX = e.touches[0].clientX
            rotationState.value.startY = e.touches[0].clientY
        } else {
            // Mouse
            rotationState.value.isRotating = true
            rotationState.value.startX = e.clientX
            rotationState.value.startY = e.clientY
        }
    }

    const onTouchMove = (e) => {
        if (rotationState.value.activeModelIndex !== index) return
        e.preventDefault()

        // Pinch zoom với 2 ngón
        if (e.touches && e.touches.length === 2 && rotationState.value.isPinching) {
            const currentDistance = getDistance(e.touches[0], e.touches[1])
            const scaleDelta = (currentDistance - rotationState.value.initialPinchDistance) * 0.00005
            
            const baseScale = rotationState.value.baseScale
            const minScale = baseScale * 0.5  // Tối thiểu 50% scale gốc
            const maxScale = baseScale * 2    // Tối đa 200% scale gốc
            
            rotationState.value.currentScale = Math.max(minScale, Math.min(maxScale, rotationState.value.currentScale + scaleDelta))
            
            const model = document.getElementById(`model-${index}`)
            if (model) {
                const scale = rotationState.value.currentScale
                model.setAttribute('scale', `${scale} ${scale} ${scale}`)
            }
            
            rotationState.value.initialPinchDistance = currentDistance
            return
        }

        // Rotation với 1 ngón hoặc chuột
        if (!rotationState.value.isRotating) return
        
        const currentX = e.touches ? e.touches[0].clientX : e.clientX
        const currentY = e.touches ? e.touches[0].clientY : e.clientY
        
        const deltaX = currentX - rotationState.value.startX
        const deltaY = currentY - rotationState.value.startY
        
        rotationState.value.currentRotationY += deltaX * 0.3  // Giảm độ nhạy rotation
        rotationState.value.currentRotationX -= deltaY * 0.2  // Giảm độ nhạy rotation
        
        // Giới hạn góc xoay X để không bị lộn ngược
        rotationState.value.currentRotationX = Math.max(-85, Math.min(85, rotationState.value.currentRotationX))
        
        const model = document.getElementById(`model-${index}`)
        if (model) {
            model.setAttribute('rotation', 
                `${rotationState.value.currentRotationX} ${rotationState.value.currentRotationY} 0`
            )
        }
        
        rotationState.value.startX = currentX
        rotationState.value.startY = currentY
    }

    const onTouchEnd = () => {
        rotationState.value.isRotating = false
        rotationState.value.isPinching = false
    }

    // Mouse wheel zoom cho desktop
    const onWheel = (e) => {
        if (rotationState.value.activeModelIndex !== index) return
        e.preventDefault()
        
        const delta = e.deltaY * -0.0001
        const baseScale = rotationState.value.baseScale
        const minScale = baseScale * 0.5  // Tối thiểu 50% scale gốc
        const maxScale = baseScale * 2    // Tối đa 200% scale gốc
        
        rotationState.value.currentScale = Math.max(minScale, Math.min(maxScale, rotationState.value.currentScale + delta))
        
        const model = document.getElementById(`model-${index}`)
        if (model) {
            const scale = rotationState.value.currentScale
            model.setAttribute('scale', `${scale} ${scale} ${scale}`)
        }
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
    
    // Wheel event cho zoom
    container.addEventListener('wheel', onWheel, { passive: false })
}

onMounted(() => {
    console.log('MindAR scene mounted.')

    // Đợi scene khởi tạo xong
    sceneEl = document.querySelector('a-scene')
    if (sceneEl) {
        sceneEl.addEventListener('loaded', () => {
            console.log('A-Frame scene loaded successfully')
        })
    }
    
    // iOS Safari: Preload audio elements
    Object.values(audioMap).forEach(audioId => {
        const audio = document.getElementById(audioId)
        if (audio) {
            audio.load()
        }
    })
})

onBeforeUnmount(() => {
    console.log('Cleaning up MindAR scene...')
    
    // Clear tất cả timeout
    Object.values(hideTimeouts).forEach(timeoutId => {
        clearTimeout(timeoutId)
    })
    hideTimeouts = {}
    audioStates = {}
    lastFoundTime = {}
    stabilityCounters = {}
    
    // Dừng audio hiện tại
    if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
        currentAudio = null
    }
    
    // Stop và cleanup MindAR
    if (sceneEl) {
        const arSystem = sceneEl.systems['mindar-image-system']
        if (arSystem) {
            arSystem.stop()
        }
    }
    
    // Xóa tất cả UI overlays của MindAR
    const mindAROverlays = document.querySelectorAll('.mindar-ui-overlay, .mindar-ui-loading, .mindar-ui-compatibility')
    mindAROverlays.forEach(el => {
        if (el && el.parentNode) {
            el.parentNode.removeChild(el)
        }
    })
    
    // Dừng camera stream - iOS Safari compatible
    if (navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                stream.getTracks().forEach(track => {
                    track.stop()
                    track.enabled = false
                })
            })
            .catch(() => {})
    }
})
</script>

<style scoped>
/* AR Container */
#ar-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 77px);
    overflow: hidden;
    z-index: 1;
    background: linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 100%);
}

#ar-container::before {
    /* content: 'Đang khởi tạo camera AR...'; */
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
    top: 77px;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(100vh - 77px);
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
