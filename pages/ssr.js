export default function Page({ data }) {
  return <p>{JSON.stringify(data)}</p>
}

// 这个函数会在每次请求的时候被调用。返回的数据会通过组件的 props 属性传递给组件。
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  return { props: { data } }
}