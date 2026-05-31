import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { api } from "@/shared/api";
import type { Product } from "@/types";
import { ProductsState } from "@/types";
import { ProductForm } from "@/types";

export const fetchProducts = createAsyncThunk<
  Product[],
  Partial<{ type: string; specification: string }> | undefined
>(
  "products/fetch",
  async (params = {}) =>
    (await api.get<Product[]>("/products", { params })).data,
);

export const addProduct = createAsyncThunk<Product, ProductForm>(
  "products/add",
  async (data) => (await api.post<Product>("/products", data)).data,
);

const initialState: ProductsState = {
  items: [],
  type: "",
  specification: "",
  formError: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setSpecification: (state, action: PayloadAction<string>) => {
      state.specification = action.payload;
    },
    setFormError: (state, action: PayloadAction<string>) => {
      state.formError = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.formError = action.error.message || "Error";
      }),
});

export const { setType, setSpecification, setFormError } =
  productsSlice.actions;
export default productsSlice.reducer;
