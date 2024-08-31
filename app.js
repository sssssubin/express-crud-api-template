// 모듈 임포트 및 환경 설정 로드
// 필요한 모듈들을 불러오고, dotenv를 사용하여 환경 변수를 로드합니다.
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");

// 라우터 임포트
// 프로젝트에 필요한 라우터들을 불러옵니다.
// 이 부분은 프로젝트에 따라 다르게 설정될 수 있습니다.
const indexRouter = require("./routes/index");

// 애플리케이션 초기화
// express 애플리케이션을 초기화하고, dotenv를 통해 환경 변수를 설정합니다.
const app = express();
dotenv.config();

// 포트 및 MongoDB URL 설정
// 환경 변수에서 포트와 MongoDB URL을 가져옵니다.
// 만약 환경 변수에 설정이 없으면 기본값을 사용합니다.
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

// MongoDB 연결 설정
// mongoose를 사용하여 MongoDB에 연결합니다.
// 연결 성공 및 실패 시 로그를 출력합니다.
mongoose
  .connect(MONGOURL)
  .then(() => console.log("몽구스 연결 성공"))
  .catch((err) => console.log("몽구스 연결 실패", err));

// 미들웨어 설정
// 각종 미들웨어들을 설정합니다.
// CORS, body-parser, static 파일 제공, 그리고 EJS 레이아웃 설정이 포함됩니다.
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);

// View 엔진 설정
// EJS를 사용하여 템플릿을 렌더링하며, 뷰 파일과 레이아웃 파일의 경로를 설정합니다.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layout");

// 라우팅 설정
// 프로젝트에서 사용하는 라우터를 정의합니다.
app.use("/", indexRouter);

// 서버 실행
// 애플리케이션이 지정된 포트에서 실행되도록 설정합니다.
app.listen(PORT, () => console.log(`서버 실행 중: http://localhost:${PORT}`));
