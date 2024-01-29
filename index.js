const express = require('express');
const path = require('path');
const app = express();

const PORT = 16205;

const cuhnsikfont = `
 ██████ ██   ██ ██    ██ ███    ██ ███████ ██ ██   ██ ███████  ██████  ███    ██ ████████ 
██      ██   ██ ██    ██ ████   ██ ██      ██ ██  ██  ██      ██    ██ ████   ██    ██    
██      ███████ ██    ██ ██ ██  ██ ███████ ██ █████   █████   ██    ██ ██ ██  ██    ██    
██      ██   ██ ██    ██ ██  ██ ██      ██ ██ ██  ██  ██      ██    ██ ██  ██ ██    ██    
 ██████ ██   ██  ██████  ██   ████ ███████ ██ ██   ██ ██       ██████  ██   ████    ██    
`;

console.log(cuhnsikfont);

// CORS 설정
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

let fontsPath;
if (process.pkg) {
    // pkg로 패키징된 실행 파일에서 실행 중
    fontsPath = path.join(path.dirname(process.execPath), 'fonts');
} else {
    // 개발 중 (Node.js를 통해 직접 실행 중)
    fontsPath = path.join(__dirname, 'fonts');
}
const fontsPathPkg = fontsPath;
console.debug(`Fonts directory (pkg): ${fontsPathPkg}`);

// 정적 파일 제공을 위한 폴더 설정
app.use('/fonts', express.static(fontsPathPkg), (req, res, next) => {
    const requestedPath = path.join(fontsPathPkg, req.path);
    console.log(`Requested path: ${requestedPath}`);
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const howToUseExplain = `
# 사용법
1. 폰트 파일을 fonts 폴더에 넣는다. 파일명은 알파벳과 숫자만 사용.  
    예시 : /fonts/NanumGothic.ttf
    .
    |-- fonts
    |   \`-- NanumGothic.ttf
    \`-- chunsik-font.exe

2. 서버를 실행한다.  

3. 폰트 URL 을 사용해서 CSS 에서 import 한다.  
    폰트 URL   http://localhost:${PORT}/fonts/폰트이름
    예시       http://localhost:${PORT}/fonts/NanumGothic.ttf
`;

const exampleCss = `
# CSS 예시  
@font-face {
  font-family: 'myfont';
  src: url('http://localhost:16205/fonts/NanumGothic.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  background-color: rgba(0, 0, 0, 0); 
  margin: 0px auto;
  font-family: 'myfont', sans-serif;
}

폰트 파일명에 맞춰서 src url 주소를 변경해 주시면 됩니다.  
예를 들어 font 파일명이 RoundedPen.ttf 라면 
src: url('http://localhost:16205/fonts/RoundedPen.ttf) format('truetype'); 
가 되어야 합니다.  
`;

setTimeout(() => {
    console.log(howToUseExplain);
    console.log(exampleCss);
}, 100);
