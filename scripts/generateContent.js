const fs = require('fs');

const jokes = require('./jokes.json');

// Lấy số thứ tự ngày trong năm (0–364)
const now = new Date();
const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)) - 1;

const joke = jokes[dayOfYear % jokes.length];

const emailContent = `Hôm nay em kể anh nghe một chuyện nha:

${joke}

Em mong câu chuyện kia khiến anh vui, Chúc anh ngủ ngon.
Em yêu anh 💕
`;

fs.writeFileSync('email.txt', emailContent);
