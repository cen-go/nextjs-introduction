function BlogPostPage({ params }) {
  return (
    <main>
      <h2>Blog Post</h2>
      <p>{params.slug}</p>
    </main>
  )
}

export default BlogPostPage