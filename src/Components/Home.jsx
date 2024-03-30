import axios from "axios";
import { useEffect, useState } from "react";
import ShowData from "./ShowData";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const Attr = ["ID", "Name", "Email", "Actions"];

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="flex flex-col items-center min-h-screen justify-center gap-8">
      <div className="w-[75vw] flex flex-row justify-between items-center">
        <h1 className="text-3xl uppercase font-bold">List Of Users</h1>
        <button className=" border-2 w-16 h-8 flex items-center justify-center">
            <Link to="/create">
            New
            </Link>
        </button>
      </div>
      <div className="border w-[75vw] p-4  shadow-md">
        <ul className="flex flex-row justify-between items-center max-w-full">
          {Attr.map((att) => (
            <li key={att}>{att}</li>
          ))}
        </ul>
      </div>

      {data.map((infos) => (
        <ShowData
          key={infos.id}
          id={infos.id}
          name={infos.name}
          gmail={infos.gmail}
        />
      ))}
    </section>
  );
};

export default Home;
