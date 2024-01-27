import './ListGroup.css';
import advil from '../assets/advil.png';
import bioflu from '../assets/bioflu.png';
import biogesic from '../assets/biogesic.png';
import bonamine from '../assets/bonamine.png';
import calciumcee from '../assets/calciumeee.png';
import calvit from '../assets/calvit.png';
import cetirizine from '../assets/cetirizine.png';
import cherifer from '../assets/cherifer.png';
import folicard from '../assets/folicard.png';
import gaviscon from '../assets/gaviscon.png';
import kremils from '../assets/kremil-s.png';
import medicol from '../assets/medicol.png';
import moriamin from '../assets/moriamin.png';
import msg from '../assets/msg.png';
import potencee from '../assets/potencee.png';
import salonpas from '../assets/salonpas.png';

function ListGroup() {
  return (
    <div>
      <div className="list">
        <ul className="list-group">
          <button className="list-group-item"><img src = {biogesic} className="list-img"></img></button>
          <button className="list-group-item"><img src = {bioflu} className="list-img"></img></button>
          <button className="list-group-item"><img src = {medicol} className="list-img"></img></button>
          <button className="list-group-item"><img src = {cetirizine} className="list-img"></img></button>
          <button className="list-group-item"><img src = {advil} className="list-img"></img></button>
          <button className="list-group-item"><img src = {gaviscon} className="list-img"></img></button>
          <button className="list-group-item"><img src = {kremils} className="list-img"></img></button>
          <button className="list-group-item"><img src = {salonpas} className="list-img"></img></button>
          <button className="list-group-item"><img src = {potencee} className="list-img"></img></button>
          <button className="list-group-item"><img src = {cherifer} className="list-img"></img></button>
          <button className="list-group-item"><img src = {bonamine} className="list-img"></img></button>
          <button className="list-group-item"><img src = {calciumcee} className="list-img"></img></button>
          <button className="list-group-item"><img src = {moriamin} className="list-img"></img></button>
          <button className="list-group-item"><img src = {calvit} className="list-img"></img></button>
          <button className="list-group-item"><img src = {folicard} className="list-img"></img></button>
          <button className="list-group-item"><img src = {msg} className="list-img"></img></button>
        </ul>
        <h1>Mode of Payment:</h1>
        <ul className ="payment">
          <button className="list-group-item">Cash</button>
          <button className="list-group-item">E-Money</button>
        </ul>
      </div>
      <div className="searchBar">
      <form className="form">
        <button>
            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
        <input className="input" placeholder="Search your medicine" required type="text"></input>
        <button className="reset" type="reset">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
     </form>
      </div>
      <div className="quantity">
        <div className="label"><h1>Quantity:</h1></div>
        <div className="quantity-btn">
          <button className="qtybtn-1">+</button>
          <textarea className="txtarea"></textarea>
          <button className="qtybtn-2">-</button>
        </div>
      </div>
      <div className="moneyChanger">
        <h1>Cash Changer</h1>
        <h3>Total Amount Due:</h3>
        <textarea className="mc1"></textarea>
        <h3>Cash Given:</h3>
        <textarea className="mc2"></textarea>
        <h3>Change:</h3>
        <textarea className="mc3"></textarea>
        <button className="confirm">Confirm</button>
        <button className="cancel">Cancel</button>
      </div>
    </div>
  );
}

export default ListGroup;
