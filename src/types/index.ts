import type { FormEvent } from "react";
import type { ButtonHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

export type CurrencySymbol = 'USD' | 'UAH';

export interface Price { value: number; symbol: CurrencySymbol; isDefault: 0 | 1 };

export interface Product {
  id: number;
  serialNumber: number | string;
  isNew: 0 | 1;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: { start: string; end: string };
  price: Price[];
  order: number;
  date: string;
};

export interface Order {
  id: number;
  title: string;
  date: string;
  description: string;
  products: Product[];
};

export interface OrdersState {
  items: Order[];
  selectedId: number | null;
  pendingDelete: number | null;
};

export interface ProductFiltersProps {
  type: string;
  specification: string;
  types: string[];
  specs: string[];
  items: Product[];
  onChange: (next: Partial<{ type: string; specification: string }>) => void;
};

export interface ProductsState {
  items: Product[];
  type: string;
  specification: string;
  formError: string;
};

export interface ProductForm {
  title: string;
  type: string;
  order: number;
  specification: string;
};

export interface ProductFormProps {
  form: ProductForm;
  orders: Order[];
  error: string;
  onChange: (form: ProductForm) => void;
  onSubmit: (event: FormEvent) => void;
};

export type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  variant?: "success" | "link" | "light" | "danger" | "circle";
  children?: ReactNode;
};

export type AppSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: Array<{ value: string | number; label: string }>;
};