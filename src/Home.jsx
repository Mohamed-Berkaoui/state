import ProductBox from "./ProductBox";
import products from "./products";
function Home({ state }) {
  return (
    <div className="home">
      {products
        .filter((element) =>
          element.title.toLowerCase().includes(state.title.toLowerCase())
        )//[]
        .filter((element) =>
          state.category == "all" ? true : element.category == state.category
        )
        .map((prod) => ( 
          <ProductBox product={prod} />
        ))}
    </div>
  );
}

export default Home;
