import Footer from "@/ui/containers/Footer";
import Header from "@/ui/containers/Header";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default HomeLayout;
