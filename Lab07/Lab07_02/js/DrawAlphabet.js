window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const points = [];

    for (let y = 100; y <= 400; y += 20) {
        points.push({ x: 100, y: y, color: 'black' });
    }

    for (let i = 0; i <= 150; i += 20) {
        points.push({ x: 100 + i, y: 400 - i, color: 'black' });
    }

    for (let i = 0; i <= 150; i += 20) {
        points.push({ x: 250 + i, y: 250 + i, color: 'black' });
    }

    for (let y = 100; y <= 400; y += 20) {
        points.push({ x: 400, y: y, color: 'black' });
    }

    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = point.color;
        ctx.fill();
        ctx.closePath();
    });
};