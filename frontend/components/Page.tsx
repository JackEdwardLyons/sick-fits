import Header from './Header'

function Page({ children }: { children: any }) {
  return (
    <main>
      <Header />
      <h1>Page Component</h1>
      <div>{children}</div>
    </main>
  )
}

export default Page
