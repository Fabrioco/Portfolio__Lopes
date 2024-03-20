import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaLock,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

import apresentation from "./assets/apresentation.svg";
import me from "./assets/me.jpg";
import transportadora from "./assets/tranportadora.svg";
import calculadora from "./assets/calculadora.jpg";
import primeflix from "./assets/prime_flix.jpg";
import chamados from "./assets/chamados.jpg";
import list from "./assets/lista.jpg";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="container">
        <header>
          <h1 className="title">Fabrício Lopes.</h1>
          <nav>
            <a href="#home">
              <span></span>
              <span></span>Início
            </a>
            <a href="#about">
              <span></span>
              <span></span>Sobre
            </a>
            <a href="#projects">
              <span></span>
              <span></span>Projetos
            </a>
          </nav>
        </header>
        <main>
          <section id="home" className="main__content">
            <article>
              <p>
                Olá, me chamo <span>Fabrício</span>
              </p>
              <div className="animated__text">
                <i className="text">&nbsp;Sou desenvolvedor Front-end&nbsp;</i>
                <span className="hover_text">
                  &nbsp;Sou desenvolvedor Front-End&nbsp;
                </span>
              </div>
              <nav className="nav__redes">
                <a id="instagram" href="">
                  <FaInstagram />
                </a>
                <a id="github" href="">
                  <FaGithub />
                </a>
                <a id="facebook" href="">
                  <FaFacebook />
                </a>
                <a id="linkedin" href="">
                  <FaLinkedin />
                </a>
              </nav>
            </article>
            <img src={apresentation} alt="" />
          </section>

          <section id="about" className="container__about">
            <article className="text_me">
              <h2>Mais sobre mim</h2>
              <p>
                Olá, tenho 20 anos e possuo habilidades em inglês, assim como
                conhecimento em HTML5, CSS3, JavaScript e ReactJS. Embora eu
                ainda não tenha experiência profissional, estou dedicando meu
                tempo aos estudos para adquirir os conhecimentos necessários e
                me preparar para ingressar na área da programação. Meu objetivo
                inicial é iniciar minha carreira como Desenvolvedor Front-End
                Junior.
              </p>
            </article>
            <img src={me} alt="" />
            <article className="courses">
              <h2>Conhecimentos</h2>
              <div>
                <i>
                  <FaHtml5 color="#FFA500" />
                </i>
                <i>
                  <FaCss3 color="#0000FF" />
                </i>
                <i>
                  <IoLogoJavascript color=" #FFFF00" />
                </i>
                <i>
                  <FaBootstrap color="#800080" />
                </i>
                <i>
                  <FaReact color="#ADD8E6" />
                </i>
                <i>
                  <FaGitAlt color=" #D8BFD8" />
                </i>
                <i>
                  <FaLock />
                </i>
                <i>
                  <FaLock />
                </i>
                <i>
                  <FaLock />
                </i>
              </div>
            </article>
          </section>
          <section id="projects" className="container__projects">
            <h2>Meus Projetos</h2>
            <article className="cardsProjects">
              <div>
                <img src={list} alt="" />
                <h3>To Do List</h3>
                <a
                  href="https://todolistfabricio.netlify.app/"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <p>
                  Pagina de lista, para que você possa fazer suas anotações,
                  edita-las e depois de feitas você pode apaga-las.
                </p>
              </div>
              <div>
                <img src={chamados} alt="" />
                <h3>Projeto Chamados</h3>
                <a
                  href="https://callproject.netlify.app/"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <p>
                  Projeto de chamados, para que você possa abrir um chamado para
                  o grupo de TI resolver seus problemas.
                </p>
              </div>
              <div>
                <img src={transportadora} alt="transportadora.svg" />
                <h3>Transportadora Lopes</h3>
                <a
                  href="https://newtransporterlopes.netlify.app/"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <p>
                  Meu primeiro projeto utilizando banco de dados, onde você pode
                  fazer login e continuar logado ou até mesmo fazer um cadastro
                  para entrar a primeira vez.
                </p>
              </div>
              <div>
                <img src={primeflix} alt="" />
                <h3>Prime Flix</h3>
                <a
                  href="https://primeflix-fabricio.netlify.app/"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <p>
                  Meu primeiro site utilizando API externa, onde atualiza e
                  mostra os filmes em cartaz, mostrando também classificação do
                  público.
                </p>
              </div>
              <div>
                <img src={calculadora} alt="calculadora.jpg" />
                <h3>Calculadora</h3>
                <a
                  href="https://newtransporterlopes.netlify.app/"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <p>
                  Calculadora feita para treinar minhas habilidades no
                  JavaScript.
                </p>
              </div>
            </article>
          </section>
          <section id="contacts" className="container__contacts">
            <h2>Contatos</h2>
            <div>
              <p>
                <FaEnvelope />
                Fabriciooliveiralopes50@gmail.com
              </p>
              <p>
                <FaPhone />
                (11) 96016-8159
              </p>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; Fabrício Oliveira Lopes</p>
        </footer>
      </div>
    </div>
  );
}
