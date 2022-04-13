import React from "react";

const ProductList = ({ products ,addToCart }) => {
  return (
    
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-4 col-6 mb-3" key={product.id}>
            <div className="product">
              <div className="product-inner">
                <div className="product-absolute-button p-4">
               <box-icon name='heart'></box-icon>
               
                </div>
                <div className="product-thubmnail">
                  <a href="d">
                    <img src={product.img} alt="" className="product-img" />
                  </a>
                </div>
                <div className="product-details">
                  <div className="product-content">
                    <a href="fc" className="product-name">
                      {" "}
                      {product.productName}
                

                    </a>
                  </div>
                  <div className="product-price-box">
                    <span className="price">
                      <span className="amount">
                        <small className="amount-title">Qiymət :</small>
                        <span className="price-amount">{product.price}₼</span>
                      </span>
                    
                    </span>
                  </div>
                  <div className="product-buttons">
                    <button  className="button" onClick={()=>addToCart(product)}>Səbətə at</button>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default ProductList;
