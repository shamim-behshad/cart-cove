import Articles from "@/components/Articles";
import Container from "@/components/Container";
import React from "react";

 function Blogs() {
  // const results = await fetch('http://localhost:3001/articles');
  // const data = await results.json();

  // console.log(data)

  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 py-16">
        <Articles />
        <Articles />
        <Articles />
        <Articles />
        <Articles />
        <Articles />
      </div>
    </Container>
  );
}

export default Blogs;
