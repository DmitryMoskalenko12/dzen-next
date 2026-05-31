import type { Metadata } from "next";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import "@/features/orders/OrdersPage.css";
import "@/features/orders/components/OrderRow.css";
import "@/features/orders/components/OrderDetails.css";
import "@/features/orders/components/DeleteOrderModal.css";
import "@/features/products/ProductsPage.css";
import "@/features/products/components/ProductFilters.css";
import "@/features/products/components/ProductForm.css";
import "@/features/products/components/ProductsTable.css";
import "@/features/products/components/ProductRow.css";
import Providers from "./Providers";
import LayoutShell from "@/components/LayoutShell";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Inventory Orders & Products",
  description: "Next.js App Router Inventory SPA",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="page" lang="ru">
      <head>
        <Script id="duplicate-tab-hard-fix" strategy="beforeInteractive">
        {`
          (() => {
            const TAB_KEY = "inventory_tab_id";
            const RELOAD_KEY = "inventory_normal_reload";
            const DUPLICATE_FIXED_KEY = "inventory_duplicate_fixed";

            const nav = performance.getEntriesByType("navigation")[0];
            const isReload = nav && nav.type === "reload";

            let tabId = sessionStorage.getItem(TAB_KEY);
            const normalReload = sessionStorage.getItem(RELOAD_KEY);
            const alreadyFixed = sessionStorage.getItem(DUPLICATE_FIXED_KEY);

            if (!tabId) {
              tabId = crypto.randomUUID();
              sessionStorage.setItem(TAB_KEY, tabId);
              localStorage.setItem("active_tab_" + tabId, String(Date.now()));
            } else {
              const activeTab = localStorage.getItem("active_tab_" + tabId);

              const looksLikeDuplicate =
                activeTab &&
                !normalReload &&
                !isReload &&
                !alreadyFixed;

              if (looksLikeDuplicate) {
                const newTabId = crypto.randomUUID();

                sessionStorage.setItem(TAB_KEY, newTabId);
                sessionStorage.setItem(DUPLICATE_FIXED_KEY, "true");
                localStorage.setItem("active_tab_" + newTabId, String(Date.now()));

                window.location.replace(window.location.href);
                return;
              }

              localStorage.setItem("active_tab_" + tabId, String(Date.now()));
            }

            sessionStorage.removeItem(RELOAD_KEY);

            window.addEventListener("beforeunload", () => {
              sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
            });
          })();
        `}
      </Script>
      </head>

      <body className="page__body">
        <Providers>
          <LayoutShell>
            <PageTransition>{children}</PageTransition>
          </LayoutShell>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;