import dynamic from "next/dynamic";

const ProductsPage = dynamic(
  () =>
    import("@/features/products/ProductsPage").then(
      (module) => module.default,
    ),
  {
    loading: () => (
      <div className="loader">
        <div className="loader__spinner" />
      </div>
    ),
  },
);

const ProductsRoute = () => {
  return <ProductsPage />;
}

export default ProductsRoute;