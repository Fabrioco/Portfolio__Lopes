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
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

import apresentation from "./assets/apresentation.svg";
import me from "./assets/me.jpg";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="container">
        <header>
          <h1 className="title">Fabrício Lopes.</h1>
          <nav>
            <a href="">
              <span></span>
              <span></span>Início
            </a>
            <a href="">
              <span></span>
              <span></span>Sobre
            </a>
            <a href="">
              <span></span>
              <span></span>Projetos
            </a>
          </nav>
        </header>
        <main>
          <section className="main__content">
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
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaGithub />
                </a>
                <a href="">
                  <FaFacebook />
                </a>
                <a href="">
                  <FaLinkedin />
                </a>
              </nav>
            </article>
            <aside>
              <img src={apresentation} alt="" />
            </aside>
          </section>

          <section className="container__about">
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
                  <FaHtml5 />
                </i>
                <i>
                  <FaCss3 />
                </i>
                <i>
                  <IoLogoJavascript />
                </i>
                <i>
                  <FaBootstrap />
                </i>
                <i>
                  <FaReact />
                </i>
                <i>
                  <FaGitAlt />
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
          <section>
            <h1>Meus Projetos</h1>
            <article>
              <div>
                <img src="" alt="" />
                Projeto <button>Acessar</button>
              </div>
              <div>
                <img src="" alt="" />
                Projeto <button>Acessar</button>
              </div>
              <div>
                <img src="" alt="" />
                Projeto <button>Acessar</button>
              </div>
              <div>
                <img src="" alt="" />
                Projeto <button>Acessar</button>
              </div>
              <div>
                <img src="" alt="" />
                Projeto <button>Acessar</button>
              </div>
            </article>
          </section>
          <section>
            <h1>Contatos</h1>
            <p>
              <span></span>Fabriciooliveiralopes50@gmail.com
            </p>
            <p>
              <span></span>(11) 96016-8159
            </p>
          </section>
        </main>
        <footer>
          <p>&copy; Fabrício Oliveira Lopes</p>
        </footer>
      </div>
    </div>
  );
}
