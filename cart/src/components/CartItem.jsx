import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/CartSlice";


export default function CartItem ({id,title,price,img,amount}) {
    const dispatch = useDispatch();
    return (
        <article className="article-container">
            <img className="article-img" src={img} alt={title} />
            <div className="article-content">
                <h3 className="article-title">{title}</h3>
                <p className="article-price">${price}</p>
                <button className="remove-btn" onClick={()=>dispatch(removeItem(id))}>remove</button>
            </div>
            <div className="article-footer">
                <FaChevronUp className="article-icon"/>
                <p className="article-amount">{amount}</p>
                <FaChevronDown className="article-icon"/>
            </div>
        </article>
    )
}