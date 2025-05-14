import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="shadow p-4">
      <Link className="pr-4" href={"./"}>Home</Link>
      <Link className="pr-4" href={"./store"}>Store</Link>
    </nav>
  );
}

export default Navbar;
