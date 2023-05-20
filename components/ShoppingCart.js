import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import Drawer from "./Drawer";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

export default function ShoppingCart() {
  const { shouldDisplayCart, cartCount, cartDetails, totalPrice } = useShoppingCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <button
        type="button"
        title="Mini Cart"
        className="text-black text-xl flex items-center"
        onClick={toggleCart}
      >
        <FiShoppingCart />
        <div className="text-white rounded-full bg-yellow-700 w-5 h-5 text-sm -ml-1">
          {cartCount}
        </div>
      </button>
      <Drawer isOpen={isCartOpen} onClose={toggleCart}>
        <header className="bg-gray-900 text-white py-4 flex items-center justify-end px-4 h-14">
          <button onClick={toggleCart}>Close</button>
        </header>
        <main className="bg-white p-4 text-black">
          {cartCount && cartCount > 0 ? (
            <>
              {Object.values(cartDetails ?? {}).map((entry) => (
                <CartItem key={entry.id} item={entry} />
              ))}
              <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-xl font-bold">${totalPrice}</span>
      </div>
              <CheckoutButton />
            </>
          ) : (
            <div className="p-5">You have no items in your cart</div>
          )}
        </main>
      </Drawer>
    </>
  );
}
