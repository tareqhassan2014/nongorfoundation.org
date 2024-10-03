import Footer from "@/components/footer/Footer";
import NavBar from "@/components/header/headerComponents/NavBar";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import React, { Suspense } from "react";

interface childrenType {
  children: React.ReactNode;
}

const LayoutComponents = ({ children }: childrenType) => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      <Footer />
    </>
  );
};

export default LayoutComponents;
