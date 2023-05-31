import { createSlice } from '@reduxjs/toolkit';
import { TodosType } from '../types/Types';

const initialState: TodosType[] = [];

const TodosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      state = state.filter((todo: TodosType) => todo.id !== action.payload);
      },
      MakeDone: (state, action) =>
      {
          const newArray = state.map(e =>
          {
              if (e.id === action.payload)
              {
                  return { ...e, isCompleted: !e.isCompleted };
              }
              else
              {
                  return e
              }
              state = newArray;
              
            })
        }
  },
});

export const { addToDo, removeTodo,MakeDone } = TodosSlice.actions;
export default TodosSlice.reducer;