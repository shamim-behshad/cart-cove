import Container from "@/components/Container"

function CreateBlog() {
  return (
    <Container>
        <label>Title</label>
        <input type="text" />
        <label>Description</label>
        <textarea> </textarea>
    </Container>
  )
}

export default CreateBlog