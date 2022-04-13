import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <section className="cart ">
      <div className="home ">
        <Link to="/">Ana səhifə </Link>/ Səbət
      </div>
      <div className="container">
        <h1 className="text-center my-4">
          {cart.length > 0 ? "Səbət" : "Səbət Boşdur"}
        </h1>
        {cart.length > 0 ? (
          <CartSummary cart={cart} removeFromCart={removeFromCart} />
        ) : null}
      </div>
    </section>
  );
};

export default Cart;
