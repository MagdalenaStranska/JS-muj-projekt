import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './super.css';
//import {data} from './seznam.json';

const Odkazy = () => {
  return (
    <ul>
      <li><a href="#">Odkaz 1</a></li>
      <li><a href="#">Odkaz 2</a></li>
      <li><a href="#">Odkaz 3</a></li>
      <li><a href="#">Odkaz 4</a></li>
    </ul>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>Czechitas, nova paticka</p>
    </footer>
  );
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Moje super stranka z 2. lekce</h1>
      <br />
      <Odkazy />
    </header>
    <main>

    </main>
    <Footer />
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
