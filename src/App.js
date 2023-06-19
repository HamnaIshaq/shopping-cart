import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { data } from "./data/data";
import "./assets/reset.css";
import "./assets/style.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container products-container">
        {data.map((product) => {
          return (
            <ProductCard
              productImg={product.img}
              productTitle={product.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
