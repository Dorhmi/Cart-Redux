import { FaChevronUp,FaChevronDown } from "react-icons/fa";



export default function CartItem ({id,title,price,img,amount}) {
    return (
        <article className="article-container">
            <img className="article-img" src={img} alt={title} />
            <div className="article-content">
                <h3 className="article-title">{title}</h3>
                <p className="article-price">${price}</p>
                <button className="remove-btn">remove</button>
            </div>
            <div className="article-footer">
                <FaChevronUp className="article-icon"/>
                <p className="article-amount">{amount}</p>
                <FaChevronDown className="article-icon"/>
            </div>
        </article>
    )
}