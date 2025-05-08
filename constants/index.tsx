export const BASE_URL = "https://api.example.com";
export const endpoints = {
  GET_PRODUCTS: "/products",
  GET_PRODUCT: (id: number) => `/products/${id}`,
  GET_CATEGORIES: "/categories",
  GET_CATEGORY: (id: number) => `/categories/${id}`,
  GET_CART: "/cart",
  GET_CART_ITEM: (id: number) => `/cart/${id}`,
  GET_CART_ITEMS: (ids: number[]) => `/cart?ids=${ids.join(",")}`,
  GET_CART_ITEM_BY_PRODUCT_ID: (productId: number) =>
    `/cart?productId=${productId}`,
  GET_CART_ITEM_BY_PRODUCT_ID_AND_USER_ID: (
    productId: number,
    userId: number
  ) => `/cart?productId=${productId}&userId=${userId}`,
  GET_CART_ITEM_BY_USER_ID: (userId: number) => `/cart?userId=${userId}`,
  GET_CART_ITEM_BY_USER_ID_AND_PRODUCT_ID: (
    userId: number,
    productId: number
  ) => `/cart?userId=${userId}&productId=${productId}`,
  GET_CART_ITEM_BY_USER_ID_AND_PRODUCT_ID_AND_QUANTITY: (
    userId: number,
    productId: number,
    quantity: number
  ) => `/cart?userId=${userId}&productId=${productId}&quantity=${quantity}`,
  GET_CART_ITEM_BY_USER_ID_AND_PRODUCT_ID_AND_QUANTITY_AND_SIZE: (
    userId: number,
    productId: number,
    quantity: number,
    size: string
  ) =>
    `/cart?userId=${userId}&productId=${productId}&quantity=${quantity}&size=${size}`,
};
