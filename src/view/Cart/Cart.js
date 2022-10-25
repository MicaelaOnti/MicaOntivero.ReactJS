import React from 'react'
import { Link } from 'react-router-dom';
import ItemCart from '../../components/ItemCart/ItemCart';
import { useCartContext } from '../../Context/CartContext'
import "./Cart.css"

export default function Cart() {
  const {cart, totalPrice} = useCartContext();

  if (cart.length === 0){
    return(
      <>
        <p>El carrito se encuentra vacio</p>
        <Link to="/">Seguir comprando</Link>
      </>
    )
  }

  return (
    <>
      <div className='carrito'>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      </div>
      <h1>  Total $ {totalPrice()}</h1>
      
      
      <Link to="/shop"> <button >Terminar compra</button></Link>
    </>
  )
}