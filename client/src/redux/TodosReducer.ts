import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import { TodosType } from '../types/Types'; 
import axios from 'axios';

const initialState: TodosType[] = [
  // {
  //   id: 1,
  //   text: "Go to home",
  //   isCompleted : false
  // }
  
];
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://127.0.0.1:3001/api/todos');

  return response.data.data;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});



export const { addToDo, removeTodo,makeDone ,clearCompleted } = TodosSlice.actions;
export default TodosSlice.reducer;