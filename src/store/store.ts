import { combineReducers } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slice/userSlice";
import headerReducer from "./slice/headerSlice";
import { configureStore } from "@reduxjs/toolkit";
import { header, UserState } from "../types/store.types";

export interface RootState {
  user: UserState;
  header: header;
}

const userPersistConfig: PersistConfig<UserState> = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  header: headerReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
