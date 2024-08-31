# Express CRUD API Template

이 프로젝트는 Express를 사용하여 CRUD(Create, Read, Update, Delete) API를 구축하는 기본 템플릿입니다.

## 주요 기능

- **생성(Create)**: 새로운 Todo 항목을 추가합니다.
- **조회(Read)**: 모든 Todo 항목 또는 특정 항목을 ID로 조회합니다.
- **수정(Update)**: 기존 Todo 항목을 수정합니다.
- **삭제(Delete)**: Todo 항목을 삭제합니다.

## API 엔드포인트

- GET `/api/todos` - 모든 Todo 항목 조회
- GET `/api/todos/:id` - 특정 Todo 항목을 ID로 조회
- POST `/api/todos` - 새로운 Todo 항목 생성
- PUT `/api/todos/:id` - 기존 Todo 항목 수정
- DELETE `/api/todos/:id` - Todo 항목 삭제
