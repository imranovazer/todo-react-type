import { createSlice } from '@reduxjs/toolkit';
import { TodosType } from '../types/Types';

const initialState: TodosType[] = [
  {
    id: 1,
    text: "Go to home",
    isCompleted : false 
  } ,
   {
    id: 2,
    text: "Go to market",
    isCompleted : true 
  }
];

const TodosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo: TodosType) => todo.id !== action.payload);
    },
    makeDone: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
       
    },
    clearCompleted: (state) => {
      return state.filter(e =>{
        return e.isCompleted !== true;
      })
       }
      
  },
});

export const { addToDo, removeTodo,makeDone ,clearCompleted } = TodosSlice.actions;
export default TodosSlice.reducer;