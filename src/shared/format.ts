import type { CurrencySymbol, Product } from "@/types";

const months = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Мая",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];
const week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

export const formatShort = (date: string | Date) => {
  const x = new Date(date);
  return `${String(x.getMonth() + 1).padStart(2, "0")} / ${String(x.getDate()).padStart(2, "0")}`;
};

export const formatLong = (date: string | Date) => {
  const x = new Date(date);
  return `${String(x.getDate()).padStart(2, "0")} / ${months[x.getMonth()]} / ${x.getFullYear()}`;
};

export const formatToday = (date: Date) => {
  const x = new Date(date);
  return {
    day: week[x.getDay()],
    date: `${String(x.getDate()).padStart(2, "0")} ${months[x.getMonth()]}, ${x.getFullYear()}`,
    time: `${String(x.getHours()).padStart(2, "0")}:${String(x.getMinutes()).padStart(2, "0")}`,
  };
};

export const money = (num: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 }).format(num);

export const sumByCurrency = (products: Product[], symbol: CurrencySymbol) =>
  products.reduce(
    (sum, p) => sum + (p.price.find((x) => x.symbol === symbol)?.value || 0),
    0,
  );
