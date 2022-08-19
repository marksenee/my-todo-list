
// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHECK_TODO = "CHECK_TODO";

let nextId = 5;

// Action Creator
export const addTodo = ( title, content ) => { // 받아오는 인자에  { title, content } 이런식으로 받아오면 undefined라고 뜸 
    return {
        type: ADD_TODO,
        todo: {
            id: nextId++,
            title : title,
            content: content,
            isDone: false
        },
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const checkTodo = (id) => {
    return {
        type: CHECK_TODO,
        id
    }
}

// Initial State
const initialState = {
    todos: [
        {
            id: 1,
            title : "리액트",
            content: "리액트 hooks 공부하기",
            isDone: false
          },
          {
            id: 2,
            title : "TIL",
            content: "매일 TIL 작성하기",
            isDone: true
          },
          {
            id: 3,
            title : "WIL",
            content: "일요일 WIL 제출하기",
            isDone: false
          },
          {
            id: 4,
            title : "JavaScript",
            content: "JavaScript 공부하기",
            isDone: false
          }
    ]
}

// Reducer

// 등록
// 완료, 취소 상태 

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
                // state.concat(action.todo)
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        case CHECK_TODO:
            return state.map(todo => todo.id === state.id ? {...todo, isDone: !todo.done} : todo);
        default: 
            return state;
    }
}


// export default reducer
export default todos;