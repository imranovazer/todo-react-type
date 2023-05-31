
import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "./TodosReducer";

const store = configureStore({
    reducer: {
        todos : TodosReducer
    }
})
export default store;