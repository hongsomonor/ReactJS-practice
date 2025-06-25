import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const apiUrl = "https://api.escuelajs.co/api/v1/categories";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(apiUrl);
        setProducts(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <h1 className="text-center text-black font-extrabold text-6xl mt-[100px]">
        Loading products.....
      </h1>
    );
  }

  if (isError) {
    return (
      <h1 className="text-center text-black font-extrabold text-6xl mt-[100px]">
        Something went wrong!!
      </h1>
    );
  }

  return (
    // <div className="grid grid-cols-6 gap-6 mt-[100px] w-[90%] mx-auto">
      {products.map((p) => {
        return <Card {...p} key={p.id} />;
      })}
    </div>
  );
};

export default App;
