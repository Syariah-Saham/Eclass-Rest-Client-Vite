import { apiService, methodServices } from "../api-service";
import { store } from "../../redux/store";
import {
  IMGetWishlistResponse,
  IMWishlistAddItemResponse,
  IMWishlistRemoveItemResponse,
} from "../../interfaces/api/member/wishlist";

const URL = {
  BASE_WISHLIST: "/member/wishlist",
};

export const getWishlistItems = () => {
  const token = store.getState().auth.token;
  return apiService<IMGetWishlistResponse, any>(
    URL.BASE_WISHLIST,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const addWishlistItem = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IMWishlistAddItemResponse, any>(
    URL.BASE_WISHLIST + `/${data.id}`,
    methodServices.POST,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const removeWishlistItem = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IMWishlistRemoveItemResponse, any>(
    URL.BASE_WISHLIST + `/${data.id}`,
    methodServices.DELETE,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
