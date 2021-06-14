import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  const [messagem, setMessage] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    setMessage(urlParams.get('messagem'))
    setNome(urlParams.get('email'))
    setEmail(urlParams.get('nome'))
  }, [])

  return (
    <div>
      <Head>
        <title>TREMA</title>
        <link rel="icon" href="/vercel.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <div>
        <p><b>messagem:</b> {messagem}</p>
        <p><b>nome:</b> {nome}</p>
        <p><b>email:</b> {email}</p>
      </div>
    </div>
  )
}
