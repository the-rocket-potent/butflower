const canvas = document.getElementById('sakura-canvas');
const ctx = canvas.getContext('2d');
const petals = [];

// 꽃잎 설정
const petalCount = 300; // 숫자를 높일수록 '인정사정없이' 내립니다.

class Petal {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 2 + 1; // 떨어지는 속도
        this.wind = Math.random() * 2 - 1; // 좌우 흔들림
    }
    update() {
        this.y += this.speed;
        this.x += this.wind;

        // 바닥에 닿았을 때 (쌓이는 느낌을 위해 약간의 딜레이 후 리셋 가능)
        if (this.y > canvas.height) {
            this.reset();
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#FFB7C5'; // 벚꽃 분홍색
        ctx.fill();
    }
}

// 애니메이션 루프
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}