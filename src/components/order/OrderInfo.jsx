function OrderInfo() {
  const quantity = 5;
  const price = 450;
  const delivery = 100;
  const total = quantity * price + delivery;

  return (
    <section className="order-box" id="order">
      <h2>Your order</h2>
      <p>{quantity} x Chocolate Brownies at Rs {price}</p>
      <p>Delivery to your department: Rs {delivery}</p>
      <p className="order-total">Total: Rs {total}</p>
    </section>
  );
}

export default OrderInfo;