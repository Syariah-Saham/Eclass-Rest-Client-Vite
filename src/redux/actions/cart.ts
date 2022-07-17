import { ICourseItemMember } from "../../interfaces/course-model";
import { ACTION_CART } from "../../types/cart";

export const storeCart = (data: ICourseItemMember[]) => {
  return {
    type: ACTION_CART.STORE,
    data,
  };
};

export const addCartItemAction = (data: ICourseItemMember) => {
  return {
    type: ACTION_CART.ADD_ITEM,
    newItem: data,
  };
};

export const removeCartItemAction = (data: { id: number }) => {
  return {
    type: ACTION_CART.REMOVE_ITEM,
    id: data.id,
  };
};
