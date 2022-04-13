import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

const Dashboard = ({
  categories,
  addToCart,
  products,
  setProducts,
  changeCategory,
  currentCategory,
}) => {
  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-lg-3 col-sm-12 p-0 m-0">
          <CategoryList
            categories={categories}
            currentCategory={currentCategory}
            changeCategory={changeCategory}
          />
        </div>
        <div className="col-lg-9 col-sm-12 m-0 p-0">
          <ProductList addToCart={addToCart} products={products} setProducts={setProducts} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
