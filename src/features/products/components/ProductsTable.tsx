"use client";

import type { Order, Product } from "@/types";
import ProductRow from "./ProductRow";

 const ProductsTable = ({
  products,
  orders,
}: {
  products: Product[];
  orders: Order[];
}) => {
  return (
    <div className="products-wrapper">
      <div className="products-table">
        {products.map((product) => (
          <ProductRow key={product.id} product={product} orders={orders} />
        ))}
      </div>
    </div>
  );
}

export default ProductsTable;