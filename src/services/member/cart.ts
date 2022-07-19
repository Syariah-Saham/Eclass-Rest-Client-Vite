import { apiService, methodServices } from "../api-service";
import { store } from "../../redux/store";
import {
  IMCartAddItemResponse,
  IMCartCheckoutResponse,
  IMCartRemoveItemResponse,
  IMGetCartResponse,
} from "../../interfaces/api/member/cart";

const URL = {
  BASE_CART: "/member/cart",
};

export const getCartItems = () => {
  const token = store.getState().auth.token;
  return apiService<IMGetCartResponse, any>(
    URL.BASE_CART,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const addCartItem = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IMCartAddItemResponse, any>(
    URL.BASE_CART + `/${data.id}`,
    methodServices.POST,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const removeCartItem = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IMCartRemoveItemResponse, any>(
    URL.BASE_CART + `/${data.id}`,
    methodServices.DELETE,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const checkoutCart = () => {
  const token = store.getState().auth.token;
  return apiService<IMCartCheckoutResponse, any>(
    URL.BASE_CART + `/checkout`,
    methodServices.POST,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
