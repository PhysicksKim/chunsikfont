# 춘식폰트 
  
"춘식폰트"는 본인이 가지고 있는 폰트 파일을 OBS 브라우저 소스에 적용할 수 있도록 도와주는 프로그램입니다.  
    
특히, 유료 폰트와 같이 URL로 폰트를 얻어올 수 없는 경우 CSS 에 적용시키기 힘든데  
이를 해결하기 위해서 로컬에 웹 서버를 띄워서 폰트를 제공하는 URL 을 만들어 줍니다.  
  
간략히 아래와 같은 방법으로 폰트를 적용할 수 있습니다.  
  
1. 'fonts' 폴더에 원하는 폰트 파일을 넣는다      
2. 프로그램을 실행한다.  
3. CSS 에서 <code>url('http:/\/localhost:16205/fonst/폰트파일명')</code> 으로 폰트를 가져올 수 있습니다.   
  
> - CSS 는 별도로 작성해야 합니다.
> - 현재 프로그램 실행 시 예시 CSS 로 [축구 입중계용 타이머 - 계춘회](https://github.com/PhysicksKim/FootballScoreBoard-gyechunhoe) 용 CSS를 보여주고 있습니다.  

<br>  
  
## 다운로드  
[다운로드 - chunsik-font.zip](https://github.com/PhysicksKim/chunsikfont/releases/tag/v1.0.x)
   
<br><br>
  
# 설정 방법  
  
![image](https://github.com/PhysicksKim/chunsikfont/assets/101965836/2a2a5df0-300f-466c-bbf0-8ac12bf0fd68)  
  
### [적용 영상으로 보기](https://youtu.be/aJVfU5bGavI?si=r0cS6-wpEJTi0BM8)  
  
<br><br>  
  
# ❗ 문제 발생시 대처법    
1. 폰트 적용 후에도 exe 파일(chunsik-font.exe)을 계속 실행 해두셔야 합니다.  
   
2. 폰트가 제대로 **적용되지 않는다면** 아래 사항을 체크해보세요.
  - obs 브라우저 새로고침  
  - obs css 다시 확인 해보세요. 기존 CSS에 있던 \{ \} ; , 같은 기호들을 제대로 지우지 않고 붙여넣기를 했을 수 있습니다.      
  - exe 파일이 실행 중인지 체크    
  - exe 파일 관리자 권한으로 실행 해보기    
  - "" obs 재시작 , obs 브라우저 소스 다시 추가하기 , obs 브라우저 소스 캐시 초기화 "" 를 시도해 보세요     

  
3. exe 파일을 실행하자 마자 닫힌다면 프로그램 에러입니다. 별도로 문의해주세요.  
  
<br><br>

---

# 설명  
  
## 0. 압축 파일을 받아서 압축을 풀어 주세요.
  
[다운로드 - chunsik-font.zip](https://github.com/PhysicksKim/chunsikfont/releases/tag/v1.0.x)

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
  
이제 OBS 브라우저 소스에서 필요한 곳에 CSS로 폰트를 적용할 수 있습니다.    
  
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
  
