
window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 720;
    canvas.height = 500;

    // เติมพื้นหลังสีฟ้า
    context.fillStyle = 'Blue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // โหลดรูปภาพสำหรับ texture
    const laptopTexture = new Image();
    laptopTexture.src = './images.jpg'; // ระบุเส้นทางไปยังไฟล์รูปภาพของคุณ

    laptopTexture.onload = function() {
        console.log('Texture image loaded successfully.');

        // วาดโน๊ตบุ๊ค
        function drawLaptop(x, y, bodyWidth, bodyHeight, screenHeight, screenWidth, baseHeight) {
            // สร้าง pattern จาก texture
            const pattern = context.createPattern(laptopTexture, 'repeat');

            // วาดฐานของโน๊ตบุ๊ค
            context.fillStyle = pattern;
            context.fillRect(x - bodyWidth / 2, y, bodyWidth, baseHeight);

            // วาดหน้าจอ
            context.fillStyle = pattern;
            context.fillRect(x - screenWidth / 2, y - screenHeight, screenWidth, screenHeight);

            // วาดบานพับ (เส้นเชื่อมฐานกับหน้าจอ)
            context.strokeStyle = pattern;
            context.lineWidth = 5;
            context.beginPath();
            context.moveTo(x - screenWidth / 2, y);
            context.lineTo(x - screenWidth / 2, y - screenHeight);
            context.moveTo(x + screenWidth / 2, y);
            context.lineTo(x + screenWidth / 2, y - screenHeight);
            context.stroke();
        }

        // เรียกใช้ฟังก์ชันวาดโน๊ตบุ๊ค
        drawLaptop(360, 350, 150, 50, 100, 140, 20);
    };

    laptopTexture.onerror = function() {
        console.error('Failed to load the texture image.');
    };
};