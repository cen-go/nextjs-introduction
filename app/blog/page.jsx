import Link from "next/link";

function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <div>
        <Link href="blog/post-1">Post 1</Link>
      </div>
      <div>
        <Link href="blog/post-2">Post 2</Link>
      </div>
    </main>
  )
}

export default BlogPage;