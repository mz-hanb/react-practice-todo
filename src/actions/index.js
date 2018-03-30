// action 생성함수
import * as actionTypes from './actionTypes';

// 생성
export const create = (desc) => ({
  type: actionTypes.CREATE,  
  desc
});

// 완료
export const complete = (id, completed) => ({
  type: actionTypes.COMPLETE, 
  id,
  completed  
});

// 삭제
export const deleteTodo = (id) => ({
  type: actionTypes.DELETE, 
  id
})




