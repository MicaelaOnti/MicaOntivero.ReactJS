import React from 'react'
import { Link } from 'react-router-dom';
import ItemCart from '../../components/ItemCart/ItemCart';
import { useCartContext } from '../../Context/CartContext'
import {addDoc, collection, getFirestore} from "firebase/firestore"
import "./Cart.css"

export default function Cart() {
  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer: {
      name: "Micaela Ontivero",
      email: "Mica@gmail.com",
      phone: "1234567890",
      address: "Rivadavia 1234"
    },
    item: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () =>{
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id))
    alert("Gracias por su compra")
  }

  if (cart.length === 0){
    return(<><p>El carrito esta vacio</p><Link to="/">Seguir comprando</Link></>)
  }

  return (
    <>
      <div className='carrito'>
      {cart.map(product => <ItemCart key={product.id} product={product}/>)}
      </div>
      <h1>  Total: $ {totalPrice()}</h1>
      <button onClick={handleClick}>Confirmar compra.</button>
    </>
  )
}