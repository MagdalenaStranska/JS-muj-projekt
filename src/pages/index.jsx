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

const Plysaci = () => {

  const Silvestr = () => {
    const plysakJmeno = 'Silvestr'
    const plysakObrazek = "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg"
    const plysakText = 'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.'

    return (
      <div class='plushy'>
        <img src={plysakObrazek} />
        <strong>{plysakJmeno}</strong>
        <p>{plysakText}</p>
      </div>
    )
  }

  const Ctirad = () => {
    const plysakJmeno = 'Ctirad'
    const plysakObrazek = "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg"
    const plysakText = 'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.'

    return (
      <div>
        <img src={plysakObrazek} />
        <strong>{plysakJmeno}</strong>
        <p>{plysakText}</p>
      </div>
    )
  }

  return (
    <div>
      <Silvestr />
      <Ctirad />
    </div>
  )
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Plysaci</h1>
      <br />
      <Odkazy />
    </header>
    <main>
      <p>Moje naklonovaná stránka.</p>
      <br />
      <Plysaci />

    </main>
    <Footer />
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
