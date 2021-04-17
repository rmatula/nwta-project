import { combineReducers } from "redux";
import navbarReducer from "./navbar/navbarReducer";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import favoritesReducer from "./favorites/favoritesReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
  navbar: navbarReducer,
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
