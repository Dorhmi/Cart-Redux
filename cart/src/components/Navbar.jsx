import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux';



export default function Navbar () {
    const {amount} = useSelector((store)=>store.cart)
    return (
        <nav className="nav-container">
            <div className="nav-center">
                <h1 className="nav-title">Cart Redux</h1>
                <div className="nav-icon">
                    <FaShoppingCart className="icon"/>
                    <span className="nav-amount">{amount}</span>
                </div>
            </div>
        </nav>
    )
}