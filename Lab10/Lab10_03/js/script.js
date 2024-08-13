window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    // เติมพื้นหลังเป็นสีฟ้าอ่อน (เพื่อเลียนแบบท้องฟ้า)
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // ฟังก์ชันวาดน้ำตกด้วยการไล่ระดับสี
    function drawWaterfall(x, y, width, height) {
        // สร้างการไล่ระดับสีแบบ Linear สำหรับน้ำตก
        const gradient = context.createLinearGradient(x, y, x, y + height);
        gradient.addColorStop(0, 'lightblue');
        gradient.addColorStop(0.5, 'blue');
        gradient.addColorStop(1, 'darkblue');

        // ใช้การไล่ระดับสีในการวาดน้ำตก
        context.fillStyle = gradient;
        context.fillRect(x - width / 2, y, width, height);
    }

    // ฟังก์ชันวาดหินด้านข้างน้ำตก
    function drawRock(x, y, width, height) {
        context.fillStyle = 'grey';
        context.fillRect(x - width / 2, y, width, height);
    }

    // วาดหินด้านข้างน้ำตก
    drawRock(250, 200, 100, 400);  // หินด้านซ้าย
    drawRock(550, 200, 100, 400);  // หินด้านขวา

    // วาดน้ำตกที่กึ่งกลางของภาพ
    drawWaterfall(400, 200, 200, 400);

    // วาดสายน้ำที่ตกกระทบด้านล่าง
    function drawWaterSplash(x, y, radius) {
        // สร้างการไล่ระดับสีแบบ Radial สำหรับน้ำที่กระเด็น
        const splashGradient = context.createRadialGradient(x, y, 0, x, y, radius);
        splashGradient.addColorStop(0, 'white');
        splashGradient.addColorStop(0.5, 'lightblue');
        splashGradient.addColorStop(1, 'blue');

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fillStyle = splashGradient;
        context.fill();
        context.closePath();
    }

    // วาดสายน้ำที่ตกกระทบ
    drawWaterSplash(400, 580, 80);
};