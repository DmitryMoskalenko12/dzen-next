"use client";

import { useTranslation } from "react-i18next";
import AppInput from "@/shared/ui/AppInput";
import AppSelect from "@/shared/ui/AppSelect";
import AppButton from "@/shared/ui/AppButton";
import { ProductFormProps } from "@/types";

const ProductForm = ({
  form,
  orders,
  error,
  onChange,
  onSubmit,
}: ProductFormProps) => {
  const { t } = useTranslation();

  return (
    <form className="product-form" onSubmit={onSubmit}>
      <AppInput
        className="product-form__input"
        placeholder={t("newProduct")}
        value={form.title}
        onChange={(event) => onChange({ ...form, title: event.target.value })}
      />
      <AppSelect
        className="product-form__select"
        value={form.type}
        onChange={(event) => onChange({ ...form, type: event.target.value })}
      >
        <option className="product-form__option">Monitors</option>
        <option className="product-form__option">Printers</option>
        <option className="product-form__option">Phones</option>
      </AppSelect>
      <AppSelect
        className="product-form__select"
        value={form.order}
        onChange={(event) =>
          onChange({ ...form, order: Number(event.target.value) })
        }
      >
        {orders.map((order) => (
          <option
            className="product-form__option"
            key={order.id}
            value={order.id}
          >
            {order.title}
          </option>
        ))}
      </AppSelect>
      <AppButton
        type="submit"
        variant="success"
        className="product-form__button"
        icon="bi-plus-circle"
      >
        {t("add")}
      </AppButton>
      {error && <span className="product-form__error">{error}</span>}
    </form>
  );
}

export default ProductForm;