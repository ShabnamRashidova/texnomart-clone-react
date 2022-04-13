
const CartSummary = ({ cart, removeFromCart }) => {
  
  return (
    <div className="row">
      <div className="col-lg-12">
        <table className="card-table table">
          <thead>
            <tr >
              <th>Məhsul</th>
              <th>Məhsulun adı</th>
              <th>Miqdar</th>
              <th>Qiymət</th>
             
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
              <tr key={cartItem.product.id} >
                <td>
                  <img src={cartItem.product.img} alt='img'  />
                </td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.product.price} ₼</td>
             

                <td onClick={() => removeFromCart(cartItem.product)}>
                  <box-icon name="x-circle"></box-icon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
};

export default CartSummary;
