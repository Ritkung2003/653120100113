
window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    // เติมพื้นหลังสีขาว
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // ฟังก์ชันวาดตึก
    function drawBuilding(x, y, width, height) {
        // วาดฐานของตึก
        context.fillStyle = '#A9A9A9';
        context.fillRect(x, y, width, height);

        // วาดหน้าต่าง
        context.fillStyle = '#FFFFFF';
        let windowRows = 4;
        let windowCols = 3;
        let windowWidth = 40;
        let windowHeight = 40;
        let windowSpacingX = (width - windowCols * windowWidth) / (windowCols + 1);
        let windowSpacingY = (height - windowRows * windowHeight) / (windowRows + 1);

        for(let i = 0; i < windowRows; i++) {
            for(let j = 0; j < windowCols; j++) {
                let wx = x + windowSpacingX + j * (windowWidth + windowSpacingX);
                let wy = y + windowSpacingY + i * (windowHeight + windowSpacingY);
                context.fillRect(wx, wy, windowWidth, windowHeight);
            }
        }

        // วาดประตู
        context.fillStyle = '#8B4513';
        let doorWidth = 60;
        let doorHeight = 80;
        context.fillRect(x + (width - doorWidth) / 2, y + height - doorHeight, doorWidth, doorHeight);

        // วาดหลังคา
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + width, y);
        context.lineTo(x + width / 2, y - height / 3);
        context.closePath();
        context.fillStyle = '#B22222';
        context.fill();
    }

    // วาดตึกที่จุดกึ่งกลางของ canvas
    drawBuilding(300, 200, 200, 300);
};