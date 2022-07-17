import { ICourseItemMember } from "../../interfaces/course-model";
import { ACTION_WISHLIST } from "../../types/wishlist";

export const storeWishlist = (data: ICourseItemMember[]) => {
  return {
    type: ACTION_WISHLIST.STORE,
    data,
  };
};

export const addWishlistItemAction = (data: ICourseItemMember) => {
  return {
    type: ACTION_WISHLIST.ADD_ITEM,
    newItem: data,
  };
};

export const removeWishlistItemAction = (data: { id: number }) => {
  return {
    type: ACTION_WISHLIST.REMOVE_ITEM,
    id: data.id,
  };
};
