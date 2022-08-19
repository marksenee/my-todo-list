import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
    todos: todos, // 모듈을 스토어와 연결 
});
const store = createStore(rootReducer);

export default store;
