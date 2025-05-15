"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import Container from "./Container";
import { useShopingCartContext } from "@/context/ShopingCartContext";

function Navbar() {
  const pathname = usePathname();
  const {cartTotalQty} = useShopingCartContext()

  const navLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
    },
  ];

  return (
    <nav className="shadow p-4">
      <Container>
        <div className="flex justify-between">
          <div>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                className={`pr-4 ${
                  pathname === item.href ? "text-sky-500" : ""
                }`}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <Link href={"./cart"}>Cart</Link>
            <span className="bg-red-600 px-1 py-1 rounded-full ml-1">{cartTotalQty}</span>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
