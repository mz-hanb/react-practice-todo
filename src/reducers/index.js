import * as actionTypes from '../actions/actionTypes';

// 초기 상태 정의
// todo = {id: string, desc: string, completed: bool}
const initialState = {
  todos: [], 
  desc: ''
}

// 리듀서 함수의 정의
function planTodo( state = initialState, action ){
  const { todos, desc } = state;
  console.log( action );
  console.log( state );

  switch(action.type){
    case actionTypes.CREATE:       
      return {
        todos: [
          ...todos, 
          {
            id: new Date().toISOString(), 
            desc: action.desc,
            completed: false
          }
        ],
        desc       
      }; 

    case actionTypes.DELETE:
      const idx = todos.findIndex( (todo) => todo.id === action.id );
      const tgArray = todos.concat();
      tgArray.splice(idx, 1);
      return{
        todos: tgArray
      };
    
    case actionTypes.COMPLETE:
      const tgIdx = todos.findIndex( (todo) => todo.id === action.id );
      return{
        todos: [
          ...todos.splice(0, tgIdx), 
          {
            ...todos[tgIdx], 
            completed: action.completed
          }, 
          ...todos.splice(tgIdx+1, todos.length)
        ]
      };    

    default: 
      return state;
  }
}

export default planTodo;

