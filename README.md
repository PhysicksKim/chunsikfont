# 춘식폰트 

로컬 웹 서버를 사용하여 폰트 파일을 CSS 에서 import 할 수 있도록 도와주는 웹 서버입니다.  
  
<br><br>
  
# 사용법  
  
![image](https://github.com/PhysicksKim/chunsikfont/assets/101965836/2a2a5df0-300f-466c-bbf0-8ac12bf0fd68)  

### [적용 영상으로 보기](https://youtu.be/aJVfU5bGavI?si=r0cS6-wpEJTi0BM8)  
  
<br><br>

---

# 설명  
  
## 0. 압축 파일을 받아서 압축을 풀어 주세요.
  
[다운로드 - chunsik-font.zip]()

### 주의사항

- ❗❗ 압축을 푼 경로상에 **한글 이름 폴더**가 있으면 **에러**가 날 수 있습니다
- ❗❗ **바탕화면에 두고 사용**하면 **에러**가 날 수 있습니다

<br><br>

## 1. fonts 폴더에 폰트 파일 넣기

```
.
├─ fonts
│  └ 폰트파일.ttf
└ chunsik-font.exe
```

fonts 폴더 안에 폰트 파일을 넣으세요.

<br><br>

## 2. 서버 실행 (chunsik-font.exe)  
  
chunsik-font.exe 파일을 실행하세요.  
  
### 주의 사항  
  
- ❗ **exe 파일 경고**가 나오면 **허용**해 주세요.  
- ❗ **방화벽 권한**을 요구하면 **허용**해주세요.  
- ❗ 만약, 정상적으로 실행되지 않는 경우 **관리자 권한으로 실행**해 주세요.  
  
<br><br>  
  
## 3. CSS 로 폰트 넣기  

#### 폰트 URL 예시  
  
```
http://localhost:16205/fonts/폰트파일명
```
  
fonts 폴더에 넣은 폰트 파일들은  
위와 같은 URL 로 접근할 수 있습니다.   
  
#### OBS 사용자 지정 CSS 에 입력    

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
  
> css 에서 @import , @font-face 등을 사용해 url 로 폰트를 가져올 수 있습니다.  
  
<br><br><br>
  
---
  
<br><br><br>  
   
### 예시 : 폰트 파일 명 RoundedPen.ttf  
  
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
OBS 브라우저 소스의 사용자 지정 CSS 에 위 내용을 붙여넣기 하면 됩니다.  
  
> #### ❗❗ 중요. 폰트 파일명 일치   
> fonts 폴더에 넣은 폰트 파일명과, src: url('...') 에서 적은 **폰트 파일명을 일치** 시켜주셔야 합니다.   
>    
> ```  
> .
> ├─ fonts
> │  └ RoundedPen.ttf
> └ chunsik-font.exe
> ```
>  
> <code>src: url('http://localhost:16205/fonts/RoundedPen.ttf')</code>   
  
