import { newsApi } from "@/entites/news/api/newsApi";
import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "@/entites/news/model/newsSlice";
import { categoriesApi } from "@/entites/category/api/categoriesApi";

export const rootReducer = combineReducers({
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
});