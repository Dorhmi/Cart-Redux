import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { fetchItems } from "./features/CartSlice";


export default function App () {
  const {isOpen} = useSelector((store)=>store.modal)
  const {isLoading} = useSelector((store)=>store.cart)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchItems())
  }, [])

  if(isLoading) {
    return(
      <div className="loading-section">
        <h2 className="loading">Loading...</h2>
      </div>
    )
  }

  return (
    <section className="section-container">
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </section>
  )
}