import { useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";


export default function App () {
  const {isOpen} = useSelector((store)=>store.modal)
  return (
    <section className="section-container">
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </section>
  )
}