import { HeaderMenuItem } from './components/HeaderMenuItem';
import { menuItems } from './Header.const';
import './Header.css'

export function Header () {
    return (
    <div className="Header">
        {menuItems.map(item=> <HeaderMenuItem title={item.title} />)}
    </div>
    );
}