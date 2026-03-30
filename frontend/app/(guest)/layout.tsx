"use client";

import { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "@/components/common/Footer";

export default function GuestLayout({children}: {children: React.ReactNode}) {
  const [active, setActive] = useState("Home");
  return (
    <>
    <Header isVisited={active} setIsVisited={setActive} />
    <main>
      {children}
    </main>
    <Footer />
    </>
  )
}