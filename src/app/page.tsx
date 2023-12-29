import Link from "next/link"

const App = () => {
  return(
    <main>
      <h1>Food App</h1>
      <p><Link href={"/meals"}>Comidas</Link></p>
      <p><Link href={"/meals/share"}>Compartilhar comidas</Link></p>
      <p><Link href={"/community"}>Comunidade</Link></p>
    </main>
  )
}

export default App