"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    lng: "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
    resources: {
      ru: {
        translation: {
          search: "Поиск",
          inventory: "INVENTORY",
          orders: "ПРИХОД",
          groups: "ГРУППЫ",
          products: "ПРОДУКТЫ",
          users: "ПОЛЬЗОВАТЕЛИ",
          settings: "НАСТРОЙКИ",
          ordersTitle: "Приходы /",
          productsTitle: "Продукты /",
          addProduct: "Добавить продукт",
          cancel: "ОТМЕНИТЬ",
          delete: "УДАЛИТЬ",
          confirmDelete: "Вы уверены, что хотите удалить этот приход?",
          type: "Тип:",
          specification: "Спецификация:",
          all: "Все",
          newProduct: "Новый продукт",
          add: "Добавить",
          productNameError: "Название должно быть минимум 3 символа",
          free: "Свободен",
          repair: "В ремонте",
          product_few: "Продукта",
          monitors: "Мониторы",
          printers: "Принтеры",
          phones: "Телефоны",
        },
      },
      en: {
        translation: {
          search: "Search",
          inventory: "INVENTORY",
          orders: "ORDERS",
          groups: "GROUPS",
          products: "PRODUCTS",
          users: "USERS",
          settings: "SETTINGS",
          ordersTitle: "Orders /",
          productsTitle: "Products /",
          addProduct: "Add product",
          cancel: "CANCEL",
          delete: "DELETE",
          confirmDelete: "Are you sure you want to delete this order?",
          type: "Type:",
          specification: "Specification:",
          all: "All",
          newProduct: "New product",
          add: "Add",
          productNameError: "Name must contain at least 3 characters",
          free: "Free",
          repair: "Repair",
          product_few: "Products",
          monitors: "Monitors",
          printers: "Printers",
          phones: "Phones",
        },
      },
    },
  });
}

export default i18n;