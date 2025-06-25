import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const api = "http://localhost/api/dashboard/product";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(api);
        setProducts(data);
      } catch (error) {
        console.log(error);
        setErr(true);
        2;
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <h1 className="text-black text-4xl font-extrabold text-center mt-[100px]">
        Loading data....
      </h1>
    );
  }

  if (err) {
    return (
      <h1 className="text-red-600 text-4xl font-extrabold text-center mt-[100px]">
        Something went wrong !
      </h1>
    );
  }

  return (
    <>
      <h1 className=" text-center text-6xl font-bold text-red-700 mt-10">Fast Food</h1>
      <div className=" container mx-auto mt-20 grid grid-cols-5 gap-5">
        {products.map((p) => {
          return <ProductCard {...p} key={p.id} />;
        })}
      </div>
    </>
  );
};

export default App;
