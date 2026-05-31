import type { Order, Product } from "@/types";

export let productsDb: Product[] = [
  {
    id: 1,
    serialNumber: "SN-12.3456789",
    isNew: 1,
    photo: "/assets/monitor.svg",
    title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
    type: "Monitors",
    specification: "Moni I",
    guarantee: { start: "2017-04-06 12:09:33", end: "2025-08-06 12:09:33" },
    price: [
      { value: 2500, symbol: "USD", isDefault: 0 },
      { value: 250000.5, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-04-06 12:09:33",
  },
  {
    id: 2,
    serialNumber: "SN-12.3456789",
    isNew: 0,
    photo: "/assets/monitor.svg",
    title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
    type: "Monitors",
    specification: "Moni I",
    guarantee: { start: "2017-04-06 12:09:33", end: "2025-08-06 12:09:33" },
    price: [
      { value: 2500, symbol: "USD", isDefault: 0 },
      { value: 250000.5, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-04-06 12:09:33",
  },
  {
    id: 3,
    serialNumber: "SN-12.3456789",
    isNew: 1,
    photo: "/assets/monitor.svg",
    title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
    type: "Monitors",
    specification: "Moni II",
    guarantee: { start: "2017-04-06 12:09:33", end: "2025-08-06 12:09:33" },
    price: [
      { value: 2500.85, symbol: "USD", isDefault: 0 },
      { value: 50.25, symbol: "UAH", isDefault: 1 },
    ],
    order: 3,
    date: "2017-06-06 12:09:33",
  },
  {
    id: 4,
    serialNumber: "SN-12.3456789",
    isNew: 0,
    photo: "/assets/monitor.svg",
    title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
    type: "Printers",
    specification: "Print I",
    guarantee: { start: "2017-04-06 12:09:33", end: "2025-08-06 12:09:33" },
    price: [
      { value: 2500, symbol: "USD", isDefault: 0 },
      { value: 250000.5, symbol: "UAH", isDefault: 1 },
    ],
    order: 4,
    date: "2017-02-06 12:09:33",
  },
  {
    id: 5,
    serialNumber: "SN-12.3456789",
    isNew: 1,
    photo: "/assets/monitor.svg",
    title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
    type: "Phones",
    specification: "Phone I",
    guarantee: { start: "2017-04-06 12:09:33", end: "2025-08-06 12:09:33" },
    price: [
      { value: 2500.85, symbol: "USD", isDefault: 0 },
      { value: 50.25, symbol: "UAH", isDefault: 1 },
    ],
    order: 3,
    date: "2017-06-06 12:09:33",
  },
  {
    id: 6,
    serialNumber: "SN-12.3456789",
    isNew: 1,
    photo: "/assets/monitor.svg",
    title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
    type: "Monitors",
    specification: "Moni I",
    guarantee: { start: "2017-04-06 12:09:33", end: "2025-08-06 12:09:33" },
    price: [
      { value: 2500, symbol: "USD", isDefault: 0 },
      { value: 250000.5, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2017-09-06 12:09:33",
  },
];

export let ordersDb: Omit<Order, "products">[] = [
  {
    id: 1,
    title: "Длинное предлинное длиннючее название прихода",
    date: "2017-04-06 12:09:33",
    description: "desc",
  },
  {
    id: 2,
    title: "Длинное название прихода",
    date: "2017-09-06 12:09:33",
    description: "desc",
  },
  {
    id: 3,
    title: "Длинное предлинное длиннючее название прихода",
    date: "2017-06-06 12:09:33",
    description: "desc",
  },
  {
    id: 4,
    title: "Длинное предлинное название прихода",
    date: "2017-02-06 12:09:33",
    description: "desc",
  },
];

export const getOrdersWithProducts = (): Order[] =>
  ordersDb.map((order) => ({
    ...order,
    products: productsDb.filter((product) => product.order === order.id),
  }));

export const deleteOrderFromDb = (id: number) => {
  ordersDb = ordersDb.filter((order) => order.id !== id);
  productsDb = productsDb.filter((product) => product.order !== id);
};

export const createProduct = (data: {
  title: string;
  type: string;
  order: number;
  specification?: string;
}): Product => {
  const product: Product = {
    id: Date.now(),
    serialNumber: "SN-12.3456789",
    isNew: 1,
    photo: "/assets/monitor.svg",
    title: data.title,
    type: data.type,
    specification: data.specification || "Moni I",
    guarantee: { start: "2017-04-06 12:09:33", end: "2025-08-06 12:09:33" },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: data.order,
    date: new Date().toISOString(),
  };
  productsDb.push(product);
  return product;
};
