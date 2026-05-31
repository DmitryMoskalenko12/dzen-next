"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  addProduct,
  fetchProducts,
  setSpecification,
  setType
} from "./productsSlice";
import { ProductForm as ProductFormState } from "@/types";
import { fetchOrders } from "@/features/orders/ordersSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import ProductFilters from "./components/ProductFilters";
import ProductForm from "./components/ProductForm";
import ProductsTable from "./components/ProductsTable";
import "./ProductsPage.css";

const ProductsPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { items, type, specification } = useAppSelector(
    (state) => state.products,
  );
  const orders = useAppSelector((state) => state.orders.items);
  const [form, setForm] = useState<ProductFormState>({
    title: "",
    type: "Monitors",
    order: 1,
    specification: "Moni I",
  });
  const [error, setError] = useState("");
  const types = useMemo(
    () => [...new Set(items.map((product) => product.type))],
    [items],
  );
  const specs = useMemo(
    () => [...new Set(items.map((product) => product.specification))],
    [items],
  );

  const updateFilters = (
    next: Partial<{ type: string; specification: string }>,
  ) => {
    if ("type" in next) dispatch(setType(next.type ?? ""));
    if ("specification" in next)
      dispatch(setSpecification(next.specification ?? ""));
      dispatch(
      fetchProducts({
        type: next.type ?? type,
        specification: next.specification ?? specification,
      }),
    );
  };
  
  const changeForm = (nextForm: ProductFormState) => {
    setForm(nextForm);

    if (error && nextForm.title.trim().length >= 3) {
      setError("");
    }
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (form.title.trim().length < 3) {
      setError(t("productNameError"));
      return;
    }
    setError("");
    await dispatch(addProduct(form));
    await dispatch(fetchOrders());
    setForm({ ...form, title: "" });
  };

  return (
    <div className="products-page">
      <ProductFilters
        items={items}
        type={type}
        specification={specification}
        types={types}
        specs={specs}
        onChange={updateFilters}
      />
      <ProductForm
        form={form}
        orders={orders}
        error={error}
        onChange={changeForm}
        onSubmit={submit}
      />
      <ProductsTable products={items} orders={orders} />
    </div>
  );
}

export default ProductsPage;