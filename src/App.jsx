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
          <h1>Fabrício Lopes</h1>
          <nav>
            <a href="">Início</a>
            <a href="">Sobre</a>
            <a href="">Projetos</a>
          </nav>
        </header>
        <main>
          <section>
            <article>
              <p>
                Me chamo <span>Fabrício</span> Sou desenvolvedor Front-end
              </p>
              <nav>
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
            <article>
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
            <article>
              <h2>Conhecimentos</h2>
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
