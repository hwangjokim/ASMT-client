﻿[2023 소프트웨어공모전 금상🏆]![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.001.png)

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.002.png)

출품 분야 : 반응형 웹 사이트

## 1. 작품명 

- 안숭맛춤 : 쓰고 싶은 만큼만 쓰는 식사

## 2. 팀 구성 

- 팀장 - 컴퓨터학부 20212908 이진
- 팀원 – 컴퓨터학부 20211405 김은수
- 팀원 – 컴퓨터학부 20212895 김황조
- 팀원 – 컴퓨터학부 20211442 정종우

## 3. 기획의도 

` `"점메추"(점심메뉴추천)라는  유행어가  만들어지기도  한  만큼  식사  메뉴를 정하는 것은 많은 사람들이 고민하는 일상생활과 밀접한 문제이다. 음식을 선택할 때 가장 중요한 요소로는 가격, 거리, 맛에 대한 평점 등이 있다. 

` `기존의 음식점 검색 서비스들은 보편화되어 있지만, 인기순, 거리순, 주문 많은 순 등만 기준으로 정렬하고, 가격을 기준으로 한 정렬 기능이 부족하다 는 사실을 발견했다. 이에 우리는 이러한 부족한 점을 보완하고자 프로젝트 를 기획하게 되었다. 

` `프로젝트의 부제목인 "'안숭맛춤 : 쓰고 싶은 만큼만 쓰는 식사'"에서도 알 수 있듯이, 우리의 프로젝트는 '가격'을 중점으로 한 맛집 검색 기능을 제공 한다. 특히 외부에서 음식을 많이 사 먹는 집단 중, 비교적 금전적 여유가 부 족한 '대학생'들을 주요 타겟층으로 삼았다. 사용자들은 자신의 학교를 선택 하여 학교 근처의 맛집 정보를 가격 순으로 획득할 수 있다. 

` `이 프로젝트를 통해 대학생들이 가격을 중요시 여기며 즐겁게 식사 메뉴를 선택할 수 있는 편리한 플랫폼을 제공하여, 음식 선택에 대한 고민을 덜어주 고 학교 주변의 다양한 맛집을 소개하는데 도움이 되기를 바라는 기획의도 로 프로젝트를 진행하게 되었다. 

## 4. 작품 설명
### 가. 작품 개요 
- 개발 목표 : 가격 기준 식사 메뉴 검색 서비스로, 대학별 맛집 정보를 제 공하여 메뉴 선정에 도움을 줄 수 있는 플랫폼을 구축하는 것이다. 
- 개발 개요 
1) 프론트엔드 개발: UI 컴포넌트들의 스타일링을 적용하고, React Rou ter 를 이용하여 페이지 간의 라우팅을 처리한다. 사용자의 디바이스 환경에 따라 반응형 웹 디자인을 구현하고,  Intersection Observer 를 이용하여 무한 스크롤 기능을 구현한다. 
2) 백엔드 개발: MySQL 데이터베이스와의 통신을 위해 JPA 를 활용하 고, RESTful API 를 설계하여 클라이언트와 서버 간의 데이터 통신 을 처리한다. 데이터베이스에는 음식점, 북마크, 랭킹 정보를 저장하 고 동적으로 쿼리를 구성하여 필터링된 데이터를 제공한다. 
3) 데이터 관리: 음식점 데이터를 얻기 위해 네이버 지도 데이터를 크롤 링하여 수집하였다. 크롤링 과정에서 robots.txt 규약을 지키고, 필요 한 데이터 형식에 맞게 재가공하여 사용한다. 

### 나. 시스템 구성도 

- ERD (Entity Relationship Diagram) 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.003.jpeg)

- 배포 구성도 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.004.png)

### 다. 구현기능 

#### 시작 페이지 
1) 가격 레인지 슬라이더바

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.005.png)

- 메뉴를 검색하고자 하는 가격 범위를 설정할 수 있다. 
- 가격 범위는 0 원부터 20000 원+이다. 
2) 학교 선택 버튼 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.006.png)

- 서울에 있는 대학교 중 검색하고자 하는 대학의 첫 자음을 선택 하면 해당 첫 자음을 가진 대학교 리스트가 나온다. 
- 그 중 하나를 선택하면 검색 페이지로 이동한다. 

#### 검색 페이지 
1) “안숭맛춤” 로고 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.007.png)

- 클릭 시, 시작페이지로 돌아간다. 
- 로고 밑에는 시작페이지에서 선택한 대학교 이름이 명시된다. 
2) 검색창 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.008.png)

- 검색어 입력 후 엔터를 쳐도 적용되고, 검색 아이콘을 눌러도  적용된다. 
- 최대 5 개까지의 메뉴를 필터링할 수 있다. 

ex. 제육, 피자를 검색했을 때, 두 가지 메뉴들의 정보만 메 뉴 리스트에 표시된다. 

- 메뉴 검색한 개수가 검색 창 내에 표시된다. 

ex. (2/5) = (현재 검색한 개수) / (최대 검색 가능한 개수) 

- 검색창 아래 검색한 키워드 메뉴가 툴 팁으로 표시된다. 
- 툴 팁 오른쪽의 ‘x’마크 클릭 시, 해당 키워드는 검색 필터로 부터 삭제되고, 메뉴 리스트에서도 삭제된다. 
3) 랭킹 바 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.009.png)

- 사용자가 검색하고 있는 시점에서 가장 많이 클릭된 메뉴를 기준으로 1 위부터 5 위까지까지의 랭킹이 표시된다. 
- 시간이 흐름에 따라 자동으로 1 위부터 5 위까지 차례대로 순환하며 표시된다. 
- 랭킹 바에 커서를 대면 아래 사진과 같이 색상이 바뀌며 하이 라이팅 효과를 준다. 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.010.png)

- 클릭 시, 랭킹을 자세히 보여주는 랭킹 모달창이 표시된다. 
4) 랭킹 모달창 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.011.png)

- 사용자가 검색하고 있는 시점에서 가장 많이 클릭된 메뉴를 기준으로 1 위부터 5 위까지까지의 랭킹이 표시된다. 
- 표시되는 정보는 메뉴 리스트에 표시된 정보와 동일하다. 
- 메뉴에 커서를 대면, 아래와 같이 하이라이팅 된다. 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.012.png)

- 메뉴 클릭 시, 추가정보를 얻을 수 있도록 해당 음식점의 네 이버 플레이스로 링크를 연결한다. (해당 링크는 새 탭에서  연결된다.) 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.013.png)

- 랭킹 모달창 외부 아무 곳이나 클릭 시, 모달창이 닫아진다.
  
5) 가격 레인지 슬라이더 바 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.014.png)

- 메뉴를 검색하고자 하는 가격 범위를 설정할 수 있다. 
- 가격 범위는 0 원부터 20,000 원+이다. 
- 2,000 원이하의 가격 범위를 설정할 경우, 2,000 원으로 매핑  한다. 이는, 2000 원이하의 메뉴는 데이터의 유의미성이 부족   하다 판단하였기 때문이다. 
- 가격범위의 최댓값을 20,000 원으로 설정할 경우, 20,000 원  이 넘는 메뉴들도 표시된다. 이는 레인지 슬라이더 눈금의 가 시성을 높이기 위함이다.
  
6) 정렬 라디오 버튼 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.015.png)

- 최저가순 : 사용자가 설정한 가격 범위 내에서 가격이 낮은 순 서대로 정렬된 메뉴리스트가 아래에 표시된다. 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.016.png)

- 최고가순 : 사용자가 설정한 가격 범위 내에서 가격이 높은 순 서대로 정렬된 메뉴리스트가 아래에 표시된다. 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.017.png)

- 거리순 : 사용자가 선택한 학교에서부터 거리가 가까운 순서 대로 정렬된 메뉴리스트가 아래에 표시된다. 
7) 메뉴 리스트 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.018.png)

- 검색 리스트, 가격 범위, 정렬 기준으로 필터링된 메뉴 리스트 가 표시된다. 
- 메뉴 리스트는 무한 스크롤 방식으로 구현하여 사용자가 페이 지를 넘기지 않고도 계속해서 다음 메뉴를 확인할 수 있다. 이 를 통해 사용자들은 끊임없이 새로운 메뉴를 탐색할 수 있다. 
- 각 메뉴마다 메뉴 이름, 가격, 음식점 이름, 학교부터 음식점 까지의 거리, 네이버 플레이스 기준 평점의 정보를 제공한다. 
- 해당 정보를 효율적으로 관리하기 위해 데이터베이스를 구축 하고 관리한다. 이를 통해 웹 앱이 실시간으로 최신 정보를 제 공할 수 있고, 효율적인 데이터 관리를 통해 원활한 서비스를 제공한다. 
- 메뉴에 커서를 대면, 색상이 바뀌면서 아래와 같이 하이라이 팅 된다. 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.019.png)

- 메뉴 우상단에 있는 북마크 버튼 클릭 시, 사용자는 좋아하는  메뉴나 다시 보고 싶은 메뉴를 저장할 수 있다. 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.020.png)

- 북마크가 설정 되어있는 메뉴의 북마크 버튼 클릭 시, 저장된  목록에서 삭제된다. 
- 메뉴 클릭 시, 영업시간, 위치, 외의 메뉴 등 추가 정보를 얻을  수  있도록  해당  음식점의  네이버  플레이스로  링크를  연결한 다. (해당 링크는 새 탭에서 연결된다.) 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.021.png)

8) 북마크 리스트 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.022.png)

- 메뉴 리스트 우상단에 있는 북마크 버튼을 클릭하면 사용자가  북마크 표시해 놓은 메뉴들만 리스트에 표시된다. 
- 회원가입 기능을 제공하지 않고, 사용자를 식별하기 위한 고 유한 ID 를 생성한다. 이를 통해 회원가입없이 서비스에 간편 하게 접근할 수 있고 개인정보를 보호할 수 있으며 유입 경로 를 다양하게 만든다. 
- 해당 사용자가 웹 브라우저를 사용할 경우, 사용자를 식별하 기 위한 고유한 ID 는 브라우저 쿠키를 이용하여 관리한다. 
- 해당 사용자가 모바일을 사용할 경우, 디바이스 기기 아이디 를 받아와 사용자를 식별하기 위한 고유한 ID 로 사용한다. 이 를 통해 로그인  없이도 사용자가 북마크한 정보를 유지할 수 있다. 
- 북마크 리스트에 대해서도 최저가순, 최고가순, 거리순 정렬  기능을 사용할 수 있다. 
- 북마크 리스트에서도 마찬가지로 커서를 대면 하이라이팅 기 능을 제공한다. 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.023.png)

- 북마크 리스트에서도 마찬가지로 클릭 시, 영업시간, 위치, 외 의 메뉴 등 추가 정보를 얻을 수 있도록 해당 음식점의 네이버 플레이스로 링크를 연결한다. (해당 링크는 새 탭에서 연결된 다.) 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.024.png)

- 반응형 웹 

![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.025.png)![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.026.png) ![](./readmeSrc/Aspose.Words.d16303b8-dd23-4b5c-88e0-1480d87e904d.027.png)

- 모바일 기기부터 데스크탑까지 다양한 디바이스에서 동작하는 반 응형 웹을 제공한다. 이를 통해 사용자들에게 다양한 디바이스에서 편리하고 최적화된 경험을 제공할 수 있다. 
- 모바일 화면에서는 단순하고 직관적인 디자인을 적용하고, 데스크 탑 화면에서는 넓은 공간을 활용해 풍부한 콘텐츠를  제공할 수  있 다.
  
## 5. 개발환경 
- Front End 

  React +styled-components + TypeScript 

- Back End 

  SpringBoot +JPA + MySql 

- CI/CD 

  AWS EC2 Instance 
