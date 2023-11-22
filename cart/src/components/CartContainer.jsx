import { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux"
import CartItem from "./CartItem";
import {totals} from "../features/CartSlice";
import { openModal } from "../features/ModalSlice";


export default function CartContainer () {
    const dispatch = useDispatch();
    const {items,total,amount} = useSelector((store)=>store.cart);

    useEffect(()=>{
        dispatch(totals())
    }, [items])

    if (amount === 0 ) {
        return (
            <div className="cart-container">
                <h2 className="cart-title">YOUR BAG</h2>
                <p className="cart-empty">is currently empty</p>
            </div>
        )
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">YOUR BAG</h2>
            <div className="cart-items">
                {items.map((item)=>{
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer className="cart-footer">
                <div className="cart-total">
                    <p>total</p>
                    <span className="dollar">${total.toFixed(2)}</span>
                </div>
                <button onClick={()=> dispatch(openModal())} className="clear-btn">Clear Items</button>
            </footer>
        </div>
    )
}