import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const homeMenu = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => {
        setName(res.data.name);
        setGmail(res.data.gmail);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, { name, gmail })
      .then(res => {
        console.log(res);
        homeMenu('/');
      })
      .catch(err => console.log(err));
  };
  
    
  return (
    <div className="flex w-100 h-100 justify-center items-center min-h-screen">
      <div className="border-2 w-[50vw] h-[50vh] bg-gray-200 rounded-xl">
        <div className="text-2xl font-semibold mx-2 mt-2">Update User</div>
        <form >
          <div className="mb-2 flex flex-col mx-2 mt-4 gap-2">
            <label htmlFor="name">
              Your Name:
            </label>
            <input
              type="text"
              required
              placeholder="Enter Name"
              name="name"
              className="w-64 h-7 rounded-xl px-2"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-2 flex flex-col mx-2 mt-4 gap-2">
            <label htmlFor="email">
              Your Email:
            </label>
            <input
              type="email"
              required
              placeholder="Enter Email"
              name="email"
              className="w-64 h-7 rounded-xl px-2"
              value={gmail}
              onChange={e => setGmail(e.target.value)}
            />
          </div>
          </form>
          <div className="flex flex-row mt-8 mx-4">
          <button onClick={handleSubmit} type="submit" className="border-2 bg-gray-600 rounded-xl h-8 w-20 flex items-center justify-center cursor-cell ">
            Update
          </button>
        
        <button className="border-2 bg-gray-300 rounded-xl h-8 w-20 flex items-center justify-center cursor-not-allowed">
          <Link to="/">Cancel</Link>
        </button>
        </div>
      </div>
    </div>
  
  )
}


export default Update;