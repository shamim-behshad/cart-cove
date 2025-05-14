"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

function Navbar() {
  const pathname = usePathname();

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
        <div className="flex flex-row-reverse">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              className={`pr-4 ${pathname === item.href ? "text-sky-500" : ""}`}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
