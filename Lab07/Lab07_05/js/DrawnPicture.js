
window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    // เติมพื้นหลังสีฟ้าอ่อน
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // วาดภูเขา (พื้นหลัง)
    function drawMountain(x, y, width, height) {
        context.beginPath();
        context.moveTo(x, y); // จุดบนยอดภูเขา
        context.lineTo(x - width / 2, y + height); // จุดซ้ายล่าง
        context.lineTo(x + width / 2, y + height); // จุดขวาล่าง
        context.closePath();
        context.fillStyle = 'green';
        context.fill();
        context.stroke();
    }

    // วาดน้ำตก
    function drawWaterfall(x, y, width, height) {
        context.fillStyle = 'blue';
        context.fillRect(x - width / 2, y, width, height);

        // วาดเส้นแนวตั้งเพื่อให้ดูเหมือนน้ำไหล
        context.strokeStyle = 'lightblue';
        context.lineWidth = 4;
        for (let i = 0; i <= width; i += 10) {
            context.beginPath();
            context.moveTo(x - width / 2 + i, y);
            context.lineTo(x - width / 2 + i, y + height);
            context.stroke();
        }
    }

    // วาดพระอาทิตย์
    function drawSun(x, y, radius) {
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = 'yellow';
        context.fill();
        context.stroke();
    }

    // วาดภูเขารอบๆ น้ำตก
    drawMountain(400, 250, 400, 350);
    drawMountain(200, 350, 300, 250);
    drawMountain(600, 350, 300, 250);

    // วาดน้ำตกที่กึ่งกลางภาพ
    drawWaterfall(400, 300, 60, 300);

    // วาดพระอาทิตย์ที่ด้านบนซ้าย
    drawSun(150, 100, 50);
};