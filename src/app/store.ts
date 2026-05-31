import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "@/features/orders/ordersSlice";
import productsReducer from "@/features/products/productsSlice";
import uiReducer from "@/shared/uiSlice";

export const store = configureStore({
  reducer: { orders: ordersReducer, products: productsReducer, ui: uiReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
