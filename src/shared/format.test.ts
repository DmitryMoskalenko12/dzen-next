import { describe, expect, it } from "vitest";
import { formatLong, sumByCurrency } from "./format";
import type { Product } from "@/types";

describe("format helpers", () => {
  it("formats long date in screen format", () => {
    expect(formatLong("2017-04-06 12:09:33")).toBe("06 / Апр / 2017");
  });

  it("sums products by currency", () => {
    const products = [
      {
        price: [
          { value: 10, symbol: "USD", isDefault: 0 },
          { value: 260, symbol: "UAH", isDefault: 1 },
        ],
      },
    ] as Product[];
    expect(sumByCurrency(products, "UAH")).toBe(260);
  });
});
