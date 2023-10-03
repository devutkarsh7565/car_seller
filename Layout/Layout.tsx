// components/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" bg-primary w-full min-h-screen p-5">
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
