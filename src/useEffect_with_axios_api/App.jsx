import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const App = () => {
  const [isLoarding, setIsLoarding] = useState(true);
  const [isError, setIsError] = useState(false);
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // use Axios instead of fetch
        const { data } = await axios(url); // data is property of axios
        setUsers(data);
        // const respone = await fetch(url);
        // const data = await respone.json();
        // setUsers(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoarding(false);
    };
    fetchData();
  }, []);

  // after show data , show loarding message
  if (isLoarding) {
    return (
      <h1 className=" text-6xl font-bold text-neutral-600 text-center mt-[300px]">
        Loarding data......
      </h1>
    );
  }

  // if api error
  if (isError) {
    return (
      <h1 className=" text-6xl font-bold text-red-400 text-center mt-[300px]">Something went wrong</h1>
    );
  }

  return (
    <div className=" w-[90%] h-full mx-auto mt-9 grid grid-cols-7 gap-[20px] bg-gray-100">
      {users.map((u) => {
        return <Card {...u} key={u.id} />;
      })}
    </div>
  );
};

export default App;
