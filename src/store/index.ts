import { configureStore, Middleware } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import pokemonsReducer from "./pokemons/pokemonsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { localStorageMiddleware } from "./middlewares/localstorage-middleware";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
  /*middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware as Middleware),*/
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
