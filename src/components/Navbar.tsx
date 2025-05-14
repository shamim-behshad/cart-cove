import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="shadow p-4">
      <Link className="pr-4" href={"./"}>Home</Link>
      <Link className="pr-4" href={"./blogs"}>Blogs</Link>
      <Link href={"./create-blog"}>Create</Link>
    </div>
  );
}

export default Navbar;
