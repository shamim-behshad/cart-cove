import { ArticlesType } from "@/app/blogs/page";
import React from "react";

function Articles({title, description}: ArticlesType) {
  return (
    <div className="shadow p-4">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  );
}

export default Articles;
