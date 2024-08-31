const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// TODO의 스키마 정의
const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    isComplete: { type: Boolean, required: true, default: false },
  },
  { timestamps: true } // 생성 및 수정 시간 자동 추가
);

// 모델 생성 및 내보내기
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
