# Multi Play Game
[유니티 클라이언트 샘플](https://github.com/Ho-yeong/node5_unity_sample/tree/challenge2)과 통신하기 위한 서버.
게임 접속시 게임세션을 생성하고 플레이어들의 움직임을 취합해 클라이언트에게 반환함.

# 서버 프로젝트 구조

```plaintext
📂src
├── 📂 classes
│   ├── 📂 managers        # 게임 로직과 정보를 관리하는 매니저 클래스
│   └── 📂 models          # 데이터 모델들 (user, game session)
├── 📂 configs             # 상수 정보들을 객체로 관리하는 설정 파일
├── 📂 constants           # 서버의 상수 정보들
├── 📂 db
│   ├── 📂 migrations      # DB의 테이블을 생성하는 마이그레이션 파일
│   ├── 📂 sql             # SQL 쿼리 파일
│   ├── 📂 user            # 사용자 데이터베이스 유틸리티: 사용자 생성,삭제,검색,위치 갱신
│   └── 🟨 database.js     # 데이터베이스 커넥션 풀을 생성
├── 📂 events
│   ├── 🟨 onConnection.js # 클라이언트가 연결될 때의 이벤트 처리
│   ├── 🟨 onData.js       # 클라이언트로 요청 데이터를 처리
│   ├── 🟨 onEnd.js        # 연결 종료 이벤트 처리
│   └── 🟨 onError.js      # 서버 에러를 처리
├── 📂 handlers
│   ├── 📂 user            # 사용자의 생성 및 초기화 핸들러 포함
│   ├── 📂 game            # 세션 참여자들의 위치 갱신 핸들러 포함
│   └── 🟨 index.js        # 초기 핸들러
├── 📂 init
│   ├── 🟨 index.js        # 서버 초기화 로직 파일
│   └── 🟨 loadProtos.js   # Protobuf 파일들을 로드하고 설정하는 기능
├── 📂 protobuf
│   ├── 📂 notification    # 알림과 관련된 Protobuf 메시지 정의
│   ├── 📂 request         # 클라이언트 요청에 대한 Protobuf 메시지 정의
│   ├── 📂 response        # 서버 응답에 대한 Protobuf 메시지 정의
│   └── 🟨 packetName.js   # 서버 응답에 대한 Protobuf 메시지 정의
├── 📂 session
│   ├── 🟨 game.session.js # 게임 세션 관리를 위한 파일
│   ├── 🟨 session.js      # 세션이 저장되는 리스트
│   └── 🟨 user.session.js # 사용자 세션 관리를 위한 파일
├── 📂 utils
│   ├── 📂 notification    # 위치 갱신, 핑 체크 등 유틸리티 코드
│   ├── 📂 parser          # 데이터 파싱 유틸리티
│   ├── 📂 testConnection  # DB, 클라이언트 등 연결 확인 유틸리티
│   └── 📂 response        # 응답 처리 유틸리티
├── 🟨 server.js           # 서버의 시작 파일, 설정을 초기화하고 실행
├── 🟩 .env                # 환경 변수 설정 파일, DB, 프라이빗 IP 등 서버 정보 관리

```