// Confetti animation function
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#FF6B9D', '#FF8FA3', '#FFB3D9', '#FF7FA0', '#E84A7B', '#FFC0E0'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 0.5;
        const xPos = Math.random() * 100;
        
        confetti.style.cssText = `
            position: fixed;
            left: ${xPos}%;
            top: 0;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${duration}s linear ${delay}s forwards;
        `;
        
        container.appendChild(confetti);
    }
    
    // Clean up confetti after animation
    setTimeout(() => {
        container.innerHTML = '';
    }, 6000);
}

// Add confetti animation keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Show photo function
function showPhoto() {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'block';
    createConfetti();
}

// Handle other surprises
function handleSurprise(num) {
    createConfetti();
    const messages = [
        "You're absolutely amazing! 💫",
        "I'm so lucky to know you! 💕",
        "Your smile brightens my day! ✨",
        "Thank you for being you! 🌟",
        "I hope today is as special as you are! 💝",
        "Make a wish! 🎂",
        "You deserve all the happiness! 🎉"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showCustomPopup(randomMessage);
}

// Close photo function
function closePhoto() {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'none';
}

// Show GIF function
function showGif() {
    const modal = document.getElementById('gifModal');
    modal.style.display = 'block';
    createConfetti();
}

// Close GIF function
function closeGif() {
    const modal = document.getElementById('gifModal');
    modal.style.display = 'none';
}

// Open envelope function
function openEnvelope() {
    const modal = document.getElementById('envelopeModal');
    const envelope = document.querySelector('.envelope');
    modal.style.display = 'block';
    
    // Remove the open class if it exists from a previous opening
    envelope.classList.remove('open');
    
    // Show closed envelope for 2 seconds, then open it
    setTimeout(() => {
        envelope.classList.add('open');
    }, 2000);
    
    createConfetti();
}

// Close envelope function
function closeEnvelope() {
    const modal = document.getElementById('envelopeModal');
    const envelope = document.querySelector('.envelope');
    envelope.classList.remove('open');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const photoModal = document.getElementById('photoModal');
    const envelopeModal = document.getElementById('envelopeModal');
    const gifModal = document.getElementById('gifModal');
    if (event.target === photoModal) {
        photoModal.style.display = 'none';
    }
    if (event.target === envelopeModal) {
        closeEnvelope();
    }
    if (event.target === gifModal) {
        closeGif();
    }
}



// Custom popup function
function showCustomPopup(message) {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%);
        color: white;
        padding: 30px 50px;
        border-radius: 20px;
        font-size: 1.3rem;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(255, 107, 157, 0.3);
        animation: popupAppear 0.5s ease-out;
        text-align: center;
        border: 2px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    `;
    
    popup.textContent = message;
    document.body.appendChild(popup);
    
    // Add popup animation
    const popupStyle = document.createElement('style');
    popupStyle.textContent = `
        @keyframes popupAppear {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        @keyframes popupDisappear {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
        }
    `;
    document.head.appendChild(popupStyle);
    
    // Remove popup after 3 seconds
    setTimeout(() => {
        popup.style.animation = 'popupDisappear 0.5s ease-out';
        setTimeout(() => {
            popup.remove();
        }, 500);
    }, 3000);
}

// Add shake animation
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(shakeStyle);

// Initialize with birthday music-like background sound cue
window.addEventListener('load', () => {
    // You can add audio initialization here if desired
    console.log('Birthday website loaded! 🎉');
});

// Add some interactivity to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'galleryClick 0.6s ease-out';
        }, 10);
    });
});

// Gallery click animation
const galleryStyle = document.createElement('style');
galleryStyle.textContent = `
    @keyframes galleryClick {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.1) rotate(5deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
`;
document.head.appendChild(galleryStyle);

// Create mouse follow effect for the background
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Subtle background shift on mouse move
    document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});
