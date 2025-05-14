import Container from "@/components/Container";

function CreateBlog() {
  return (
    <Container>
      <div className="bg-slate-300 flex flex-col px-96">
        <label>Title</label>
        <input className="bg-white" type="text" />

        <label>Description</label>
        <textarea className="bg-white">description</textarea>

        <button className="bg-green-400 cursor-pointer mt-5">Submit</button>
      </div>
    </Container>
  );
}

export default CreateBlog;
