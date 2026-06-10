const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// public 폴더 내부의 정적 파일(html, csv)을 브라우저에 제공
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});