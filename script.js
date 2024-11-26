
const canvas = document.getElementById('fortune-wheel');
const ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 300;

const segments = [
    "Скидка 10%",
    "Бесплатный анализ",
    "Пробный пост",
    "Скидка 50%",
    "Попробуйте снова",
];

const colors = ["#FFDD57", "#FFA500", "#FFD700", "#FF8C00", "#FF4500"];
let startAngle = 0;

function drawWheel() {
    const arcSize = (2 * Math.PI) / segments.length;
    for (let i = 0; i < segments.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 150, startAngle, startAngle + arcSize, false);
        ctx.lineTo(150, 150);
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(
            segments[i],
            150 + Math.cos(startAngle + arcSize / 2) * 100,
            150 + Math.sin(startAngle + arcSize / 2) * 100
        );
        startAngle += arcSize;
    }
}

function spinWheel() {
    const randomSpin = Math.random() * 360;
    alert(`Поздравляем! ${segments[Math.floor(randomSpin % segments.length)]}`);
    drawWheel();
}

drawWheel();
