import Head from 'next/head'
import SectionDeveloper from '../components/SectionDeveloper'

export default function Home() {
  return (
    <main>
      <Head>
        <title>TREMA</title>
        <link rel="icon" href="/vercel.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <section className="hero-section">
        <header className="hero-section__header">
          <div className="hero-section__logo">
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.61328C0 2.96094 2.96094 0 6.61328 0H55.3867C59.0391 0 62 2.96094 62 6.61328V55.3867C62 59.0391 59.0391 62 55.3867 62H6.61328C2.96094 62 0 59.0391 0 55.3867V6.61328ZM25.9688 45.707C25.9688 43.3945 25.1445 41.2773 23.7773 39.6289C22.0312 37.5156 19.3867 36.168 16.4297 36.168C11.1602 36.168 6.89062 40.4375 6.89062 45.707C6.89062 50.9727 11.1602 55.2461 16.4297 55.2461C21.6953 55.2461 25.9688 50.9727 25.9688 45.707ZM45.043 36.168C50.3125 36.168 54.582 40.4375 54.582 45.707C54.582 50.9727 50.3125 55.2461 45.043 55.2461C39.7773 55.2461 35.5039 50.9727 35.5039 45.707C35.5039 40.4375 39.7773 36.168 45.043 36.168Z" fill="white"/>
            </svg>
          </div>
          <nav className="hero-section__nav">
            <button className="button button__secondary">LOGIN</button>
          </nav>
        </header>

        <div className="hero-section__container-hero">
          <div className="hero-section__container-title">
            <h1 className="hero-section__title typo typo__headline-2 typo__headline-2--bold">
              Gerencie seus artefatos
            </h1>
            
            <h2 className="hero-section__subtitle  typo typo__headline-5">
              Matenha toda documentação de seu projeto em um só lugar
            </h2>

            <div className="hero-section__container-button">
              <button className="hero-section__btn button button__primary">download</button>
              <button className="hero-section__saiba-mais button button__tertiary">saiba mais</button>
            </div>
          </div>

          <div className="hero-section__pagina-hero">
          </div>
        </div>
      </section>
      
      <div className="descricao">
        <div className="descricao__container-title">
          <div className="descricao__title typo typo__headline-3 typo__headline-3--bold">Tudo em um só aplicativo</div>
          <div className="descricao__subtitle typo typo__headline-6 typo__headline-6--normal">Todos seus artefatos de engenharia de software, bem como design e gerenciamento de projeto podem trabalhar juntos como Trema. </div>
        </div>

        <div className="atributos">
          <div className="atributos__card">
            <div className="atributos__icon"></div>
            <div className="atributos__title typo typo__headline-5 typo__headline-5--bold">Open source</div>
            <div className="atributos__subtitle typo typo__headline-6 typo__headline-6--normal">Todo o projeto Trema é de código livre, você pode modificar e compartilhar</div>
          </div>
          <div className="atributos__card">
            <div className="atributos__icon"></div>
            <div className="atributos__title typo typo__headline-5 typo__headline-5--bold">Auto-hosting</div>
            <div className="atributos__subtitle typo typo__headline-6 typo__headline-6--normal">Preparamos  tudo para você criar toda a infraestrutura dos projetos Trema</div>
          </div>
          <div className="atributos__card">
            <div className="atributos__icon"></div>
            <div className="atributos__title typo typo__headline-5 typo__headline-5--bold">Usabilidade</div>
            <div className="atributos__subtitle typo typo__headline-6 typo__headline-6--normal">Construido pensando no usuário, a experiência com o Trema é única</div>
          </div>
        </div>
      </div>
      
      <section className="secao">
        <div className="secao__container-foto">
          <div className="secao__foto secao__foto--versionamento-estilo">
            <img src="/versionamento.png" alt="" />
          </div>
        </div>

        <div className="secao__container-title">
          <h2 className="secao__title typo typo__headline-3 typo__headline-3--bold">Versionamento</h2>
          <h3 className="secao__subtitle typo typo__headline-6 typo__headline-6--normal">Todos os seus artefatos, documentos e telas são  versionados e rastreados. Você tem um maior controle de todos os seus projetos.</h3>
          <div className="secao__btn">
            <button className="button button__secondary button__secondary--primary-color">saiba mais</button>
          </div>
        </div>
      </section>
      
      <section className="secao">
        <div className="secao__container-foto">
          <div className="secao__foto secao__foto--equipe-estilo">
            <img src="/equipe.png" alt="" />
          </div>
        </div>
        
        <div className="secao__container-title">
          <h2 className="secao__title typo typo__headline-3 typo__headline-3--bold">Toda a equipe</h2>
          <h3 className="secao__subtitle typo typo__headline-6 typo__headline-6--normal">Designers, gerentes de projetoe, programadores e stakeholders pode trabalhar e acompanhar todo o desenvolvimento e criação de artefatos.</h3>
          <div className="secao__btn">
            <button className="button button__secondary button__secondary--primary-color">saiba mais</button>
          </div>
        </div>
      </section>
      
      <section className="secao">
        <header className="secao__container-foto">
          <div className="secao__foto secao__foto--integracao-estilo">
            <img src="/integracao.png" alt="" />
          </div>
        </header>

        <div className="secao__container-title">
          <h2 className="secao__title typo typo__headline-3 typo__headline-3--bold">Integração</h2>
          <h3 className="secao__subtitle typo typo__headline-6 typo__headline-6--normal">Trelo, Figma, Github e muito outras aplicações pode ser integrada com o Trema para facilitar e centralizar toda documentação de seu projeto</h3>
          <div className="secao__btn">
            <button className="button button__secondary button__secondary--primary-color">saiba mais</button>
          </div>
        </div>
      </section>
      
      <section className="contato">
        <form action="pagina2" method="GET" className="contato__container">
          <h2 className="contato__title typo typo__headline-3 typo__headline-3--bold">Entre em contato</h2>
          <div className="contato__container-row">
            <div className="contato__container-field">
              <label className="typo typo__headline-6 typo__headline-6--normal" htmlFor="messagem">Messagem</label>
              <textarea className="textarea" name="messagem" id="messagem" />
            </div>
          </div>
          <div className="contato__container-row contato__container-row--row">
            <div className="contato__container-field">
              <label className="typo typo__headline-6 typo__headline-6--normal" htmlFor="nome">Seu nome</label>
              <input className="input" type="text" name="nome" id="nome" />
            </div>
            <div className="contato__container-field">
              <label className="typo typo__headline-6 typo__headline-6--normal" htmlFor="email">Seu email</label>
              <input className="input" type="text" name="email" id="email" />
            </div>
          </div>
          <div className="contato__container-row">
            <input type="submit" className="button button__primary button__primary--primary-color" value="enviar"/>
          </div>
        </form>
      </section>

      <section className="secao-download">
        <div className="secao-download__container-title">
          <h2 className="secao-download__title typo typo__headline-3">Tudo em um só aplicativo</h2>
          <div className="secao-download__download"><button className="button button__primary">download</button></div>
        </div>
        <div className="secao-download__foto">
        </div>
      </section>

      <SectionDeveloper />
    </main>
  )
}
