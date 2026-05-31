"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/app/hooks";
import AppButton from "@/shared/ui/AppButton";
import OrderRow from "./components/OrderRow";
import OrderDetails from "./components/OrderDetails";
import DeleteOrderModal from "./components/DeleteOrderModal";
import "./OrdersPage.css";

 const OrdersPage = () => {
  const { t } = useTranslation();
  const { items, selectedId, pendingDelete } = useAppSelector(
    (state) => state.orders,
  );
  const selected = items.find((order) => order.id === selectedId);
  const del = items.find((order) => order.id === pendingDelete);

  return (
    <div className="orders-page">
      <div className="orders-page__header">
        <AppButton
          variant="circle"
          className="orders-page__add-button"
          icon="bi-plus"
        />
        <h1 className="orders-page__title">
          {t("ordersTitle")} {items.length}
        </h1>
      </div>
      <LayoutGroup>
        <div
          className={`orders-page__content ${selected ? "orders-page__content--details" : ""}`}
        >
          <motion.div layout className="orders-page__list">
            <AnimatePresence initial={false} mode="popLayout">
              {items.map((order) => (
                <OrderRow
                  key={order.id}
                  selected={selected}
                  id={order.id}
                  order={order}
                  compact={!!selected}
                />
              ))}
            </AnimatePresence>
          </motion.div>
          <AnimatePresence mode="wait">
            {selected && <OrderDetails key={selected.id} order={selected} />}
          </AnimatePresence>
        </div>
      </LayoutGroup>
      <AnimatePresence mode="wait" initial={false}>
        {del && <DeleteOrderModal key={del.id} order={del} />}
      </AnimatePresence>
    </div>
  );
}

export default OrdersPage;