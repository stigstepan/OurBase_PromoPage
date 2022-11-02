import { promoText } from './Promo.const';
import './Promo.css';
import logo from '../../assets/Fanta_Logo_2008.png'
import promoImage from '../../assets/fanta.jpeg'

export function Promo () {
    return (
        <div className="Promo">
            <div className="PromoBlock">
                <img className="Logo" src={logo} />
                <div className="Text" >
                    {promoText}
                </div>
            </div>
            <img className="Image" src={promoImage}/>
        </div>
    );
}