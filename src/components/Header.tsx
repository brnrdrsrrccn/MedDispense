import './Header.css';
import logoimg from '../assets/logo.png';

function Header(){
    return(
        <div className = "head">
            <img src = {logoimg} className = "logo"></img>
            <h1 className = "title">MedDispense</h1>
            <h1 className = "divider">l</h1>
            <h3 className = "day">Monday</h3>
            <h3 className = "date">01-22-23</h3>
            <h3 className = "time">8:24 PM</h3>
        </div>
    );
}

export default Header;