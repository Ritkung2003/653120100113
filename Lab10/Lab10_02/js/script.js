// DrawnPicture.js

window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 500;

    // เติมพื้นหลังสีดำ
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // ฟังก์ชันวาดจุด
    function drawPoint(cx, cy, radius, color) {
        context.beginPath();
        context.arc(cx, cy, radius, 0, 2 * Math.PI); // (x, y, radius, startAngle, endAngle)
        context.fillStyle = color;
        context.fill();
        context.closePath();
    }

    // วาดรูปแมว
    function drawCat() {
        // หัว
        drawPoint(300, 250, 50, 'grey'); // หัว

        // หูซ้าย
        drawPoint(250, 200, 30, 'grey'); // หูซ้าย
        drawPoint(250, 200, 20, 'lightgrey'); // ด้านในหูซ้าย

        // หูขวา
        drawPoint(350, 200, 30, 'grey'); // หูขวา
        drawPoint(350, 200, 20, 'lightgrey'); // ด้านในหูขวา

        // ตา
        drawPoint(280, 230, 15, 'green'); // ตาซ้าย
        drawPoint(320, 230, 15, 'green'); // ตาขวา
        drawPoint(280, 230, 8, 'black');  // ตาดำซ้าย
        drawPoint(320, 230, 8, 'black');  // ตาดำขวา

        // จมูก
        drawPoint(300, 270, 10, 'pink'); // จมูก

        // ปาก
        drawPoint(300, 290, 5, 'red');   // ปาก

        // ร่างกาย
        drawPoint(300, 355, 60, 'grey'); // ร่างกาย

        // แขนซ้าย
        drawPoint(230, 340, 30, 'grey'); // แขนซ้ายบน
        drawPoint(190, 370, 25, 'lightgrey'); // แขนซ้ายล่าง

        // แขนขวา
        drawPoint(380, 340, 30, 'grey'); // แขนขวาบน
        drawPoint(420, 370, 25, 'lightgrey'); // แขนขวาล่าง

        // ขาซ้าย
        drawPoint(260, 430, 35, 'grey'); // ขาซ้ายบน
        drawPoint(230, 470, 25, 'lightgrey'); // ขาซ้ายล่าง

        // ขาขวา
        drawPoint(340, 430, 35, 'grey'); // ขาขวาบน
        drawPoint(370, 470, 25, 'lightgrey'); // ขาขวาล่าง
    }

    drawCat();
};