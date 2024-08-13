window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 720;
    canvas.height = 500;

    // เติมพื้นหลังสีดำ
    context.fillStyle = 'Blue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // โหลดรูปภาพสำหรับ texture
    const chairTexture = new Image();
    chairTexture.src = './frieren-frieren-beyond-journeys-end-172@3@a-thumb.jpg'; // ระบุเส้นทางไปยังไฟล์รูปภาพของคุณ

    chairTexture.onload = function() {
        console.log('Texture image loaded successfully.');

        // วาดเก้าอี้
        function drawChair(x, y, seatWidth, seatHeight, backHeight, legWidth, legHeight) {
            // สร้าง pattern จาก texture
            const pattern = context.createPattern(chairTexture, 'repeat');

            // วาดที่นั่งเก้าอี้
            context.fillStyle = pattern;
            context.fillRect(x - seatWidth / 2, y - seatHeight / 2, seatWidth, seatHeight);

            // วาดพนักพิงเก้าอี้
            context.fillRect(x - seatWidth / 2, y - seatHeight / 2 - backHeight, seatWidth, backHeight);

            // วาดขาเก้าอี้
            context.fillRect(x - seatWidth / 2, y + seatHeight / 2, legWidth, legHeight);
            context.fillRect(x + seatWidth / 2 - legWidth, y + seatHeight / 2, legWidth, legHeight);
        }

        // เรียกใช้ฟังก์ชันวาดเก้าอี้
        drawChair(400, 400, 100, 50, 80, 10, 50);
    };

    chairTexture.onerror = function() {
        console.error('Failed to load the texture image.');
    };
};