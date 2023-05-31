
import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "./TodosReducer";

const store = configureStore({
    reducer: {
        Todos : TodosReducer
    }
})
export default store;