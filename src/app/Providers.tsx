"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { io, type Socket } from "socket.io-client";
import { store } from "./store";
import { fetchOrders } from "@/features/orders/ordersSlice";
import { fetchProducts } from "@/features/products/productsSlice";
import { setSessions } from "@/shared/uiSlice";
import "@/i18n";

function Bootstrapper({ children }: { children: ReactNode }) {
  const socketRef = useRef<Socket | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadInitialData = useCallback(() => {
    store.dispatch(fetchOrders());
    store.dispatch(fetchProducts());
  }, []);

  const connectSocket = useCallback(() => {
    if (socketRef.current) {
      if (socketRef.current.connected) {
        socketRef.current.emit("sessions:request");
      } else {
        socketRef.current.connect();
      }

      return;
    }

    const socket = io({
      path: "/socket.io",
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 500,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("sessions:request");
    });

    socket.on("sessions:count", (count: number) => {
      store.dispatch(setSessions(count));
    });
  }, []);

  const initPage = useCallback(() => {
    loadInitialData();
    connectSocket();
  }, [loadInitialData, connectSocket]);

  useEffect(() => {
    initPage();

    const handlePageShow = (event: PageTransitionEvent) => {
      console.log("pageshow persisted:", event.persisted);
      initPage();
    };

    const handleFocus = () => {
      initPage();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        initPage();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      socketRef.current?.disconnect();
      socketRef.current = null;
    };
  }, [initPage]);

  if (!mounted) {
    return null;
  }

  return children;
}

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Bootstrapper>{children}</Bootstrapper>
    </Provider>
  );
};

export default Providers;