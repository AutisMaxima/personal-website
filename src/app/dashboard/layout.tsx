import { Fragment } from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// This is the ideal place to add headers, footers, and navbars
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <Fragment>
            <Navbar />
            {children}
            <Footer />
        </Fragment>
    );
  }