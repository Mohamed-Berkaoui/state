 import ProductBox from "./ProductBox"
import products from "./products"
function Home() {
  return (  
    <div className="home">
      {products.map(prod=><ProductBox product={prod} />)}

    </div>
  )
}

export default Home