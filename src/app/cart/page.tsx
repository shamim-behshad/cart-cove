import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import React from "react";

function Cart() {
  return (
    <Container>
      <h1 className="my-4">Cart</h1>
      <div className=" rounded-xl">
        <CartItem />
        <CartItem />
        <CartItem />    
      </div>
      <div className="border shadow-md p-4">
        <h3>Total price:<span>553$</span></h3>
        <h3>Discount:<span>43$</span></h3>
        <h3>Final price:<span>434$</span></h3>
        <div>
            <input className="border" placeholder="Enter your discount code" />
            <button className="bg-sky-600 text-white px-4 py-1 rounded">Enter</button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
