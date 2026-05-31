"use client";
import { type ReactNode } from "react";
import TopMenu from "./TopMenu";
import AsideMenu from "./AsideMenu";

 const LayoutShell = ({ children }: { children: ReactNode }) => {

  return (
    <div className="app">
      <TopMenu/>
      <AsideMenu/>
      <main className="app__content">{children}</main>
    </div>
  );
}

export default LayoutShell;