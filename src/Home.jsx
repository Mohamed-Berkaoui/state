import ProductBox from "./ProductBox";
import products from "./products";
function Home({ state }) {
  return (
    <div className="home">
      {products
        .filter((element) =>
          element.title.toLowerCase().includes(state.toLowerCase())
        )
        .map((prod) => (
          <ProductBox product={prod} />
        ))}
    </div>
  );
}

export default Home;
