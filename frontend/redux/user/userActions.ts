import axios from "axios";
import { Dispatch } from "redux";
import { localStorageNames } from "../../constants";
import { AppActions } from "../actions";
import { AppState } from "../rootReducer";
import * as userActions from "./userTypes";
import * as orderActions from "../order/orderTypes";

export const signin = (email: string, password: string) => async (dispatch: Dispatch<AppActions>) => {
  dispatch({
    type: userActions.USER_SIGNIN_REQUEST,
  });
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    dispatch({ type: userActions.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem(localStorageNames.USER_INFO, JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userActions.USER_SIGNIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const register = (email: string, name: string, password: string) => async (dispatch: Dispatch<AppActions>) => {
  dispatch({
    type: userActions.USER_REGISTER_REQUEST,
  });
  try {
    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    dispatch({ type: userActions.USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem(localStorageNames.USER_INFO, JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userActions.USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const addComment = (body: string, name: string, rating: number, product: string, userId: string) => async (
  dispatch: Dispatch<AppActions>
) => {
  dispatch({
    type: userActions.USER_ADD_COMMENT_REQUEST,
  });
  try {
    await axios.post(`/api/products/${product}/reviews`, {
      body,
      name,
      rating,
      product,
      userId,
    });
    dispatch({ type: userActions.USER_ADD_COMMENT_SUCCESS });
  } catch (error) {
    dispatch({
      type: userActions.USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const deleteComment = (commentId: string, productId: string) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  dispatch({
    type: userActions.USER_DELETE_COMMENT_REQUEST,
  });
  const { user } = getState().user;

  try {
    await axios.delete(`/api/products/${productId}/reviews`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: {
        commentId,
      },
    });
    dispatch({ type: userActions.USER_DELETE_COMMENT_SUCCESS });
  } catch (error) {
    dispatch({
      type: userActions.USER_DELETE_COMMENT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const signOut = () => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
  localStorage.removeItem(localStorageNames.USER_INFO);
  localStorage.removeItem(localStorageNames.CART_ITEMS);
  dispatch({
    type: userActions.USER_SIGNOUT,
  });
  dispatch({
    type: orderActions.ORDER_CLEAN_UP,
  });
};

export const cleanUp = () => ({
  type: userActions.USER_CLEAN_UP,
});
