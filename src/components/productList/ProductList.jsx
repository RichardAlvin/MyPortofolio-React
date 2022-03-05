import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">RaP's Project</h1>
        <p className="pl-desc">
          Please enjoy my project. my project contains Frontend, IoT, Embedded, Backend, and Game. If you want to ask questions, you can send messages, or you can contact me.
          <br/>((UnderConstruction))
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
