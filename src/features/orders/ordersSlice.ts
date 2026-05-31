import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { api } from "@/shared/api";
import type { Order } from "@/types";
import { OrdersState } from "@/types";

export const fetchOrders = createAsyncThunk<Order[]>(
  "orders/fetch",
  async () => (await api.get<Order[]>("/orders")).data,
);

export const deleteOrder = createAsyncThunk<number, number>(
  "orders/delete",
  async (id) => {
    await api.delete(`/orders/${id}`);
    return id;
  },
);

const initialState: OrdersState = {
  items: [],
  selectedId: null,
  pendingDelete: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    selectOrder: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
    closeOrder: (state) => {
      state.selectedId = null;
    },
    askDelete: (state, action: PayloadAction<number>) => {
      state.pendingDelete = action.payload;
    },
    cancelDelete: (state) => {
      state.pendingDelete = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (order) => order.id !== action.payload,
        );
        if (state.selectedId === action.payload) state.selectedId = null;
        state.pendingDelete = null;
      }),
});

export const { selectOrder, closeOrder, askDelete, cancelDelete } =
  ordersSlice.actions;
export default ordersSlice.reducer;
