"use client";

import { useTranslation } from "react-i18next";
import { formatLong, formatShort, money } from "@/shared/format";
import type { Order, Product } from "@/types";
import AppButton from "@/shared/ui/AppButton";

const ProductRow = ({
  product,
  orders,
}: {
  product: Product;
  orders: Order[];
}) => {
  const { t } = useTranslation();

  return (
    <div className="product-row">
      <i
        className={`product-row__status ${product.isNew ? "" : "product-row__status--dark"}`}
      />
      <img
        className="product-row__image"
        src="/assets/monitor.svg"
        alt="monitor"
      />
      <div className="product-row__info">
        <a className="product-row__title">{product.title}</a>
        <small className="product-row__serial">SN-{product.serialNumber}</small>
      </div>
      <span
        className={`product-row__condition ${product.isNew ? "product-row__condition--free" : ""}`}
      >
        {product.isNew ? t("free") : t("repair")}
      </span>
      <div className="product-row__date">
        <div className="product-row__labelValueWrapper">
          <small className="product-row__date-label">с</small>{" "}
          <span className="product-row__date-value">
            {formatShort(product.guarantee.start)} / 2017
          </span>
        </div>
        <div className="product-row__labelValueWrapper">
          <small className="product-row__date-label">по</small>{" "}
          <span className="product-row__date-value">
            {formatShort(product.guarantee.end)} / 2025
          </span>
        </div>
      </div>
      <span className="product-row__state">
        {product.isNew ? "новый" : "Б / У"}
      </span>
      <div className="product-row__price">
        <small className="product-row__price-small">
          {money(
            product.price.find((item) => item.symbol === "USD")?.value || 0,
          )}{" "}
          $
        </small>
        <span className="product-row__price-main">
          {money(
            product.price.find((item) => item.symbol === "UAH")?.value || 0,
          )}{" "}
          UAH
        </span>
      </div>
      <a className="product-row__specification">{product.specification}</a>
      <span className="product-row__dash">—</span>
      <a className="product-row__order">
        {orders.find((order) => order.id === product.order)?.title || "—"}
      </a>
      <div className="product-row__date">
        <small className="product-row__date-label">
          {formatShort(product.date)}
        </small>
        <span className="product-row__date-value">
          {formatLong(product.date)}
        </span>
      </div>
      <AppButton
        variant="link"
        className="product-row__delete"
        icon="bi-trash3-fill"
      />
    </div>
  );
};

export default ProductRow;
