import { promoText } from './Promo.const';
import './Promo.css';
import logo from '../../assets/mainLogo.png'
import promoImage from '../../assets/blueBackgroundWithLogo.jpg'

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
