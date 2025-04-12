// // src/Cart.js
// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   if (!cartItems) return <p>Loading cart...</p>;

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index}>
//               <strong>{item.name}</strong> - {item.price}
//               <button onClick={() => removeFromCart(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;


// updated with price
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, updateCartItem, removeFromCart } = useContext(CartContext);

  const handleQtyChange = (index, change) => {
    const item = cartItems[index];
    const newQty = Math.max(1, item.quantity + change);
    updateCartItem(index, { ...item, quantity: newQty });
  };

  const handleGramChange = (index, grams) => {
    const item = cartItems[index];
    updateCartItem(index, { ...item, grams });
  };

  const getTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + ((item.price * item.grams * item.quantity) / 1000),
      0
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Fruit</th>
              <th>Qty</th>
              <th>Grams</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => handleQtyChange(i, -1)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleQtyChange(i, 1)}>+</button>
                </td>
                <td>
                  <input
                    type="number"
                    value={item.grams}
                    onChange={(e) => handleGramChange(i, Number(e.target.value))}
                    style={{ width: "60px" }}
                  />
                  g
                </td>
                <td>₹{((item.price * item.grams * item.quantity) / 1000).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(i)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3>Total: ₹{getTotal().toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
