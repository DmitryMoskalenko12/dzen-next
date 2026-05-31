"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { closeOrder } from "../ordersSlice";
import { useAppDispatch } from "@/app/hooks";
import type { Order } from "@/types";
import AppButton from "@/shared/ui/AppButton";

const OrderDetails = ({ order }: { order: Order }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <section
      className="order-details"
    >
      <AppButton
        variant="light"
        className="order-details__close"
        onClick={() => dispatch(closeOrder())}
      >
        ×
      </AppButton>
      <h2 className="order-details__title">{order.title}</h2>
      <AppButton
        variant="link"
        className="order-details__add"
        icon="bi-plus-circle-fill"
      >
        <span className="order-details__add-text">{t("addProduct")}</span>
      </AppButton>
      <div className="order-details__list">
        {order.products.map((product) => (
          <div className="order-details__product" key={product.id}>
            <i
              className={`order-details__status ${product.isNew ? "" : "order-details__status--dark"}`}
            />
            <img
              className="order-details__image"
              src="/assets/monitor.svg"
              alt="monitor"
            />
            <div className="order-details__product-info">
              <a className="order-details__product-title">{product.title}</a>
              <small className="order-details__serial">
                SN-{product.serialNumber}
              </small>
            </div>
            <span className="order-details__condition">
              {product.isNew ? t("free") : t("repair")}
            </span>
            <AppButton
              variant="link"
              className="order-details__delete"
              icon="bi-trash3-fill"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrderDetails;