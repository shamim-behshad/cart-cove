import { ArticlesType } from "../page";
interface ArticleProps {
    params : Promise<{id: string}>;
    searchParams : Promise<{}>
}

async function Article(props:ArticleProps) {
    const {id} = await props.params;
    console.log(props)

    const results = await fetch(`http://localhost:3001/articles/${id}`);
    const data = await results.json() as ArticlesType;

  return (
    <div>{data.description}</div>
  )
}

export default Article