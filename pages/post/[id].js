
export default function Blog({ post }) {
  return (
    <>
      <header>{post.title}</header>
      <main>{post.body}</main>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: String(post.id) }
  }))

  //  { fallback: false } 意味着当访问其他路由的时候返回 404
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()
 
  return { props: { post } }
}