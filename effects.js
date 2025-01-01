// 创建音频上下文（但先不初始化）
let audioContext = null;

// 初始化音频上下文
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// 键盘音效
function playKeySound() {
    initAudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// 鼠标点击音效
function playClickSound() {
    initAudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.08);
}

// 为所有输入框添加键盘音效
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keydown', playKeySound);
});

// 为可点击元素添加点击音效
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('click', playClickSound);
});

// 添加页面点击音效
document.addEventListener('click', function(e) {
    // 如果点击的不是按钮或链接（因为它们已经有自己的点击音效了）
    if (!e.target.matches('button, a')) {
        playClickSound();
    }
});

// 添加按钮的鼠标跟踪效果
const button = document.querySelector('button');
const buttonBox = button.getBoundingClientRect();
const centerX = buttonBox.left + buttonBox.width / 2;
const centerY = buttonBox.top + buttonBox.height / 2;

button.addEventListener('mousemove', (e) => {
    const rotationStrength = 15; // 旋转强度
    const moveX = (centerX - e.clientX) / 20; // X轴移动
    const moveY = (centerY - e.clientY) / 20; // Y轴移动
    
    button.style.transform = `
        perspective(1000px)
        translate3d(${moveX}px, ${moveY}px, 0)
        rotateX(${(e.clientY - centerY) / buttonBox.height * rotationStrength}deg)
        rotateY(${(e.clientX - centerX) / buttonBox.width * -rotationStrength}deg)
    `;
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'perspective(1000px) translate3d(0, 0, 0) rotateX(0) rotateY(0)';
});

button.addEventListener('mousedown', () => {
    button.style.transform = 'perspective(1000px) translate3d(0, 0, 0) rotateX(0) rotateY(0) scale(0.98)';
});

button.addEventListener('mouseup', () => {
    button.style.transform = 'perspective(1000px) translate3d(0, 0, 0) rotateX(0) rotateY(0)';
});

// 更新按钮中心点位置
window.addEventListener('resize', () => {
    const buttonBox = button.getBoundingClientRect();
    centerX = buttonBox.left + buttonBox.width / 2;
    centerY = buttonBox.top + buttonBox.height / 2;
}); 