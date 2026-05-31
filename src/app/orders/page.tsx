import dynamic from "next/dynamic";

const OrdersPage = dynamic(
  () =>
    import("@/features/orders/OrdersPage").then((module) => module.default),
  {
    loading: () => (
      <div className="loader">
        <div className="loader__spinner" />
      </div>
    ),
  },
);

const OrdersRoute = () => {
  return <OrdersPage />;
}
export default OrdersRoute