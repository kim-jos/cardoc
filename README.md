
# [Assignment 7] 카닥

### 원티드x위코드 백엔드 프리온보딩 과제 7

### **[과제 출제 기업 정보]**

[기업명] 카닥

## 📖 과제 내용

### [필수 포함 사항]

- READ.ME 작성
  - 프로젝트 빌드, 자세한 실행 방법 명시
  - 구현 방법과 이유에 대한 간략한 설명
  - **서버 구조 및 디자인 패턴에 대한 개략적인 설명**
  - 완료된 시스템이 배포된 서버의 주소
  - 해당 과제를 진행하면서 회고 내용 블로그 포스팅
- Swagger나 Postman을 이용하여 API 테스트 가능하도록 구현

### [개발 요구사항]

#### 확인 사항

- ORM 사용 필수
  - 데이터베이스는 SQLite로 구현
  - secret key, api key 등을 레포지토리에 올리지 않도록 유의
  - README.md 에 관련 설명 명시 필요

#### 과제 안내
다음 사항들을 충족하는 서비스를 구현해주세요.

- 데이터베이스 환경은 별도로 제공하지 않습니다.
 **RDB중 원하는 방식을 선택**하면 되며, sqlite3 같은 별도의 설치없이 이용 가능한 in-memory DB도 좋으며, 가능하다면 Docker로 준비하셔도 됩니다.
  - 단, 결과 제출 시 README.md 파일에 실행 방법을 완벽히 서술하여 DB를 포함하여 전체적인 서버를 구동하는데 문제없도록 해야합니다.
  - 데이터베이스 관련처리는 raw query가 아닌 **ORM을 이용하여 구현**합니다.
  - Response Codes API를 성공적으로 호출할 경우 200번 코드를 반환하고, 그 외의 경우에는 아래의 코드로 반환합니다....


#### 도전 과제: 스스로에게도 도움이 되는 내용 + 추가 가산점

- 배포하여 웹에서 사용 할 수 있도록 제공
- 임상정보 검색 API 제공

</br>
</br>

## 🛠 사용 기술 및 Tools

### [Back-End] ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 

### [Deploy] <img src="https://img.shields.io/badge/AWS_EC2-232F3E?style=for-the-badge&logo=Amazon&logoColor=white"/>

### [Etc.] <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white">


<br>
<br>

## DB Schema


![image](https://user-images.githubusercontent.com/77760709/143807206-252d2dff-46e8-44b2-bd9d-ab68e4ed7151.png)

</br>
</br>

## 📌 구현 기능

### 사용자 생성 기능

사용자 생성 API를 만들었습니다.
안전성을 위해 비밀번호는 외부 라이브러리 bcrypt를 사용해 해시를 한 후에 저장을 했습니다. 

### 자동차 종 및 타이어 정보 저장 기능

아래 DB 다지안으로 볼 수 있듯이 하나의 user는 하나 이상의 Trim (자동차)를 보유할 수 있도록 했습니다.

저장하는 방식을 아래와 같습니다:
1. User가 존재하는지 확인합니다. 존재하지 않다면 error가 뜹니다.
2. Response에 있는 타이어 정보를 DB에 저장합니다.
3. Response에 있는 Trim(자동차)가 있다면 있는 것을 사용하고 아니라면 새로 생성해서 저장합니다. 
4. 관계 정리해줍니다 (User에는 trim을 넣어주고, trim에는 tire를 넣어줍니다).

### 자동차 종 및 타이어 검색 기능

UserId로 자동차 종 및 타이어 검색 기능을 만들었습니다. 

방법은 아래와 같습니다:
1. User가 존재하는지 확인합니다. 존재하지 않다면 error가 뜹니다.
2. User가 보유하는 보든 trim을 갖고 온 다음에 각 trim에 해당하는 타이어를 loop을 통해 검색합니다.

<br>
<br>

## 📖 API Document

[🔗 Swagger ](http://13.125.0.161:3015/api/)

### API Test 방법

## 🪄 설치 및 실행 방법

### 설치

1. 레포지토리를 clone 받습니다

```
$ git clone
```

2. clone한 경로에 들어간 후 의존성을 설치하고 환경 셋팅을 진행합니다.

```
$ cd cardoc
$ npm install
```

3.서버를 구동합니다.

```
$ npm start
```

</br>
</br>
