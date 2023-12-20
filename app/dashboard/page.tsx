
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: 'hello, dashboard'
  }
}

export default async function DashboardPage() {
  const { message } = await getData()
  return <h1>{message}</h1>
}