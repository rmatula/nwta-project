import { FavoritesActionTypes } from "./favorites/favoritesTypes";
import { UserActionTypes } from "./user/userTypes";
import { NavbarActionTypes } from "./navbar/navbarTypes";
import { CartActionTypes } from "./cart/cartTypes";

export type AppActions =
  | NavbarActionTypes
  | UserActionTypes
  | FavoritesActionTypes
  | CartActionTypes;
