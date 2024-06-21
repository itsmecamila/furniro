import type { Product } from "./reducer";

export const CLEAN = "CLEAN";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const cleanCart = () => ({ type: CLEAN });
export const addProduct = (product: Omit<Product, "quantity">, quantity: number) => ({
  type: ADD_PRODUCT,
  payload: { ...product, quantity },
});
export const removeProduct = (productId: string, quantity: number) => ({
  type: REMOVE_PRODUCT,
  payload: { productId, quantity }
});