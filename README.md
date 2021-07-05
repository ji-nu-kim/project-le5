# Project LE5

업사이클링 프로젝트의 소개 페이지입니다
스크롤을 활용해 텍스트와 이미지를 변형시켜 사용자의 호기심을 유발할 수 있도록 만들었습니다


### 사용한 기능
1. react
>섹션별로 나누어 코드를 관리할 수 있다는 장점때문에 react를 사용했습니다
2. styled-component
>컴포넌트 별로 스타일을 적용할 수 있다는 편리함때문에 styled-component를 사용했습니다

### utils함수
1. centerOfScreen
>element가 화면의 정중앙에 위치했음을 감지합니다
2. scrollCalculate
>페이지 전체의 높이 값을 0 ~ 1로 계산해 스크롤 값을 활용하기 편리하게 만들어줍니다
3. scrollValue
>스크롤 이벤트를 주고 싶은 구간에 원하는 값을 입력하면 값을 계산해줍니다

### components 구조

#### Main

>스크롤 값을 계산하고 각 section에 계산된 스크롤 값을 줍니다

#### Section1
![캡쳐이미지1](./public/capture1.gif "캡쳐이미지1")
- background 이미지의 트랜지션 기능
- scroll 값에 반응하는 텍스트 기능
(perspective와 translateZ값을 이용해 텍스트가 화면 밖에서 안으로 들어오는 효과를 만들었습니다)

#### Section2
![캡쳐이미지2](./public/capture3.gif "캡쳐이미지2")
- svg의 path를 이용해 글자를 만들어 이미지를 넣었습니다
- svg의 strokeWidth값을 이용해 글자에서 이미지로 변하는 효과를 만들었습니다

#### Section3
![캡쳐이미지3](./public/capture3.gif "캡쳐이미지3")
- position sticky를 이용해 외부 element를 화면에 고정되도록 만들었고
- 내부에 있는 이미지 element의 scale을 조정해 스크롤 값에 따라 이미지가 커지는 효과를 만들었습니다
