import Articles from "@/components/Articles";
import Container from "@/components/Container";
import React from "react";

export interface ArticlesType {
  id: number;
  title: string;
  description: string;
}

async function Blogs() {
  const results = await fetch("http://localhost:3001/articles");
  const data = (await results.json()) as ArticlesType[];

  console.log(data);

  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 py-16">
        {data.map((item) => (
          <Articles />
        ))}
      </div>
    </Container>
  );
}

export default Blogs;
