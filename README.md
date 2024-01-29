# 춘식폰트 - CSS에 로컬 폰트 파일 사용하기

로컬 웹 서버를 사용하여 폰트 파일을 CSS 에서 import 할 수 있도록 도와주는 웹 서버입니다.

<br><br>

# 사용법

## 0. 압축 파일을 받아서 압축을 풀어 주세요.

[다운로드 - chunsik-font.zip]()

### 주의사항

-   1. ❗❗ 경로상에 **한글 이름 폴더**가 있으면 **에러**가 날 수 있습니다
-   2. ❗❗ **바탕화면에 두고 사용**하면 **에러**가 날 수 있습니다

<br><br>

## 1. fonts 폴더에 폰트 파일 넣기

```
.
├fonts
│└폰트파일.ttf
└chunsik-font.exe
```

fonts 폴더 안에 폰트 파일을 넣으세요.

<br><br>

## 2. 서버 실행 (chunsik-font.exe)

chunsik-font.exe 파일을 실행하세요.

### 주의 사항

-   1. ❗❗ **exe 파일 경고**가 나오면 **허용**해 주세요.
-   2. ❗❗ **관리자 권한으로 실행**해 주세요.
-   3. ❗❗ **방화벽 권한**을 요구하면 **허용**해주세요.

<br><br>

## 3. CSS 로 폰트 넣기

### 폰트 파일 URL 설명

```
http://localhost:16205/fonts/폰트파일명
```

#### 예시 : RoundedPen.ttf

```
http://localhost:16205/fonts/RoundedPen.ttf
```

위와 예시와 같이 폰트 파일을 url 로 얻어올 수 있습니다.

### CSS 에 폰트 URL 사용

CSS 로 아래와 같이 폰트 파일을 가져와 적용할 수 있습니다.

```
@font-face {
  font-family: 'myfont';
  src: url('http://localhost:16205/fonts/폰트파일명') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0px auto;
  font-family: 'myfont', sans-serif;
}
```

#### 예시 : RoundedPen.ttf

```
@font-face {
  font-family: 'myfont';
  src: url('http://localhost:16205/fonts/RoundedPen.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0px auto;
  font-family: 'myfont', sans-serif;
}
```
