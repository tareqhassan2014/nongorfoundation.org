import Footer from "@/components/footer/Footer";
import NavBar from "@/components/header/headerComponents/NavBar";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import React, { Suspense } from "react";

interface childrenType {
    children: React.ReactNode;
    lang: "bn" | "en";
}

const LayoutComponents = ({ children, lang }: childrenType) => {
    return (
        <>
            <NavBar lan={lang} />
            <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
            <Footer />
        </>
    );
};

export default LayoutComponents;
