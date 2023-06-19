import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counter.slice";
import cocktailReducer from "../reducers/cocktail.slice";
import { cocktailApi } from "../reducers/cocktailapi.slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cocktail: cocktailReducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailApi.middleware),
});

export { store };
