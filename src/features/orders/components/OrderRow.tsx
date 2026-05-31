"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { askDelete, selectOrder } from "../ordersSlice";
import { formatLong, formatShort, money, sumByCurrency } from "@/shared/format";
import { useAppDispatch } from "@/app/hooks";
import type { Order } from "@/types";
import AppButton from "@/shared/ui/AppButton";

 const OrderRow = forwardRef<
  HTMLDivElement,
  { order: Order; compact: boolean, id: number, selected: Order | undefined }
>(function OrderRow({ order, compact, id, selected }, ref) {
  const dispatch = useAppDispatch();
  const usd = sumByCurrency(order.products, "USD");
  const uah = sumByCurrency(order.products, "UAH");
  const { t } = useTranslation();

  return (
    <motion.div
      ref={ref}
      layout="position"
      initial={false}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -35, transition: { duration: 0.2 } }}
      transition={{ layout: { duration: 0.22 } }}
      className={`order-card ${compact ? "order-card--compact" : ""}`}
      onClick={() => dispatch(selectOrder(order.id))}
    >
      {!compact && <a className="order-card__title">{order.title}</a>}
      <div className="order-card__count">
        <span className="order-card__icon">
          <i className="bi bi-list-ul order-card__icon-symbol" />
        </span>
        <b className="order-card__count-value">{order.products.length || 23}</b>
        <small className="order-card__count-label">{t("product_few")}</small>
      </div>
      <div className="order-card__date">
        <small className="order-card__date-small">
          {formatShort(order.date)}
        </small>
        <span className="order-card__date-main">{formatLong(order.date)}</span>
      </div>
      {!compact && (
        <div className="order-card__sum">
          <small className="order-card__sum-small">{money(usd)} $</small>
          <span className="order-card__sum-main">{money(uah)} UAH</span>
        </div>
      )}
      {compact && selected?.id === id && <div className="order-card__arrow">›</div>}
      {!compact && (
        <AppButton
          variant="link"
          className="order-card__delete"
          onClick={(event) => {
            event.stopPropagation();
            dispatch(askDelete(order.id));
          }}
          icon="bi-trash3-fill"
        />
      )}
    </motion.div>
  );
});


export default OrderRow;