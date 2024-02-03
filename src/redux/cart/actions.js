import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = (payload) => ({
  type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});
export const decreaseProductQuantity = (payload) => ({
  type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
