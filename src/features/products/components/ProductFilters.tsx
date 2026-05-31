"use client";

import { useTranslation } from "react-i18next";
import AppSelect from "@/shared/ui/AppSelect";
import { ProductFiltersProps } from "@/types";

const ProductFilters = ({
  type,
  specification,
  types,
  items,
  specs,
  onChange,
}: ProductFiltersProps) => {
  const { t } = useTranslation();

  return (
    <div className="products-filters">
      <h1 className="products-filters__title">
        {t("productsTitle")} {items?.length}
      </h1>
      <label className="products-filters__label">
        {t("type")}
        <AppSelect
          className="form-select-sm products-filters__select"
          value={type}
          onChange={(event) => onChange({ type: event.target.value })}
        >
          <option className="products-filters__option" value="">
            {t("all")}
          </option>
          {types.map((item) => (
            <option className="products-filters__option" key={item}>
              {item}
            </option>
          ))}
        </AppSelect>
      </label>
      <label className="products-filters__label">
        {t("specification")}
        <AppSelect
          className="form-select-sm products-filters__select"
          value={specification}
          onChange={(event) => onChange({ specification: event.target.value })}
        >
          <option className="products-filters__option" value="">
            {t("all")}
          </option>
          {specs.map((item) => (
            <option className="products-filters__option" key={item}>
              {item}
            </option>
          ))}
        </AppSelect>
      </label>
    </div>
  );
}

export default ProductFilters;