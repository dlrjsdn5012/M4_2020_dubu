# 2020_M4_dubu - C.lab
## Git & GitHub
- __Git이란 무엇인가?__ 
<img src="https://miro.medium.com/max/910/1*BCZkmZR1_YzDZy22Vn4uUw.png" width="400">

프로그램 등의 소스 코드관리를 하는 버전 관리 프로그램이다.

- __Git을 사용하는 이유는 무엇인가?__

한마디로 작업의 기록을 남겨서 수정 및 보완 등의 이력을 추적하기 위함이다. 이는 사람들과의 협업을 용이하게 한다.

---

- __GitHub란 무엇인가?__ 
<img src="https://mblogthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc4/MDAxNTc2NDE0MTAwNjg1.cp_9N4gi8GOe7idQjx6pC1LUhK9EqpIs9uArKqZq6iUg.1vF6bTjG3vJW4mb_WagZ5gh0gfwjoo2bznBTEs-tyXkg.JPEG.nilsine11202/github.jpg?type=w800" width="400">

Git이 프로그램이라면 GitHub는 파일의 버전 관리를 다른 사람들이 볼 수 있게 정보 교환이 이루어지는 일종의 서버(홈페이지)라고 볼 수 있다..

- __GitHub를 사용하는 이유는 무엇인가?__

협업을 하고 소스에 대한 이력관리를 하고 소셜코딩을 할 수 있으며, 다른 사람들이 개발한 코드를 볼 수 있고, 진행되고 있는 프로젝트에 함께 참여하며 수정 및 보완 작업을 통해 협업하기 위함이다.

---

- __Git과 GitHub의 차이는 무엇인가?__

| 종류 | 차이점 |
| ------ | ----------- |
| Git   | 로컬에서 관리되는 버전 관리 시스템 (VCS : Version Control System) |
| GitHub | 클라우드 방식으로 관리되는 버전 관리 시스템(VCS) |

---

## 인터넷의 원리
- __인터넷은 어떻게 작동하는가?__ 
<img src="http://tcpschool.com/lectures/img_webbasic_10.png" width="400">

> *다음은 우리가 웹 브라우저를 통해 웹 사이트에 접속하여 원하는 웹 페이지를 가져오는 과정을 도식화한 그림이다.*

+ ①,② 사용자가 웹 브라우저를 통해 찾고 싶은 웹 페이지의 URL 주소를 입력함.
+ ③ 사용자가 입력한 URL 주소 중에서 도메인 네임(domain name) 부분을 DNS 서버에서 검색함.
+ ④ DNS 서버에서 해당 도메인 네임에 해당하는 IP 주소를 찾아 사용자가 입력한 URL 정보와 함께 전달함.

+ ⑤,⑥ 웹 페이지 URL 정보와 전달받은 IP 주소는 HTTP 프로토콜을 사용하여 HTTP 요청 메시지를 생성함.
이렇게 생성된 HTTP 요청 메시지는 TCP 프로토콜을 사용하여 인터넷을 거쳐 해당 IP 주소의 컴퓨터로 전송됨.

+ ⑦ 이렇게 도착한 HTTP 요청 메시지는 HTTP 프로토콜을 사용하여 웹 페이지 URL 정보로 변환됨.
+ ⑧ 웹 서버는 도착한 웹 페이지 URL 정보에 해당하는 데이터를 검색함.

+ ⑨,⑩ 검색된 웹 페이지 데이터는 또 다시 HTTP 프로토콜을 사용하여 HTTP 응답 메시지를 생성함.
이렇게 생성된 HTTP 응답 메시지는 TCP 프로토콜을 사용하여 인터넷을 거쳐 원래 컴퓨터로 전송됨.

+ ⑪ 도착한 HTTP 응답 메시지는 HTTP 프로토콜을 사용하여 웹 페이지 데이터로 변환됨.
+ ⑫ 변환된 웹 페이지 데이터는 웹 브라우저에 의해 출력되어 사용자가 볼 수 있게 됨.
---

- __현대의 브라우저가 해석할 수 있는 파일의 종류는 어떤 것들이 있고, 각각은 어떠한 역할을 하는가?__ 

| 종류 | 역할 |
| ------ | ----------- |
| HTML   | 웹 페이지에서 제목, 이미지, 동영상, 문단, 표, 등을 정의하고 그 구조와 의미를 부여하는 정적 언어이다.   **웹의 구조를 담당 한다.** |
| CSS | 마크업 언어가 실제 표시되는 방법(색상, 레이아웃, 크기, 폰트 등)을 지정하여 콘텐츠 구조를 꾸며주는 정적 언어이다.   **웹의 시각적인 표현을 담당한다.** |
| JS    | 콘텐츠를 바꾸고 움직이는 등 페이지를 동적으로 꾸며주는 역할을 하는 프로그래밍 언어이다.   **웹의 동적 처리를 담당한다.** |

> *쉽게 정리하면 HTML로 웹페이지의 뼈대를 만들고 CSS로 웹 페이지의 옷을 입히고, Javascript로 기능을 추가한다고 할 수 있다.*   출처: https://junghn.tistory.com/entry/htmlcss-HTMLCSSJavascript-의-정의와-차이점 [코딩 시그널] 

---

- __HTML 기본구조__
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```
