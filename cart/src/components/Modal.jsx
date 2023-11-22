import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../features/CartSlice"
import { closeModal } from "../features/ModalSlice"



export default function Modal () {
    const dispatch = useDispatch()
    const {amount} = useSelector((store)=>store.cart)
    return (
        <aside className="modal-container">
            <article className="modal-center">
                <h4 className="modal-title">remove all items from your shopping cart?</h4>
                <div className="btns-container">
                    <button onClick={()=>{
                        dispatch(clearCart())
                        dispatch(closeModal())
                        }} className="confirm-btn">confirm</button>
                    <button onClick={()=>{dispatch(closeModal())}} className="clear-btn">cancel</button>
                </div>
            </article>
        </aside>
    )
}