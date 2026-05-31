"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cancelDelete, deleteOrder } from "../ordersSlice";
import { useAppDispatch } from "@/app/hooks";
import type { Order } from "@/types";
import AppButton from "@/shared/ui/AppButton";
import { Product } from "@/types";

 const DeleteOrderModal = ({ order }: { order: Order }) => {
  const dispatch = useAppDispatch();
  const products = order.products;
  const { t } = useTranslation();

  return (
    <motion.div
      className="delete-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="delete-modal__dialog"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.22 }}
      >
        <AppButton
          variant="light"
          className="delete-modal__close"
          onClick={() => dispatch(cancelDelete())}
        >
          ×
        </AppButton>
        <h3 className="delete-modal__title">{t("confirmDelete")}</h3>
        {products.length > 0
          ? products.slice(0, 4).map((product: Product) => {
              return (
                <div key={product.id} className="delete-modal__product">
                  <i className="delete-modal__status" />
                  <img
                    className="delete-modal__image"
                    src="/assets/monitor.svg"
                    alt="monitor"
                  />
                  <div className="delete-modal__product-info">
                    <a className="delete-modal__product-title">
                      {product.title}
                    </a>
                    <small className="delete-modal__serial">
                      SN-{product.serialNumber}
                    </small>
                  </div>
                </div>
              );
            })
          : null}
        <footer className="delete-modal__footer">
          <AppButton
            variant="link"
            className="delete-modal__cancel"
            onClick={() => dispatch(cancelDelete())}
          >
            {t("cancel")}
          </AppButton>
          <AppButton
            variant="light"
            className="delete-modal__danger"
            onClick={() => void dispatch(deleteOrder(order.id))}
            icon="bi-trash3-fill"
          >
            {t("delete")}
          </AppButton>
        </footer>
      </motion.div>
    </motion.div>
  );
}

export default DeleteOrderModal;