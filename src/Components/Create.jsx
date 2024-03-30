import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    gmail : ''
  })

  const navigate = useNavigate();
  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res)
        navigate("/");
      })
      .catch((err) => console.log(err));

  }

  return (
    <div className="flex w-100 h-100 justify-center items-center min-h-screen">
      <div className="border-2 w-[50vw] h-[50vh] bg-gray-200 rounded-xl">
        <div className="text-2xl font-semibold mx-2 mt-2">Add New User</div>
        <form >
          <div className="mb-2 flex flex-col mx-2 mt-4 gap-2">
            <label htmlFor="name">
              Your Name:
            </label>
            <input onChange={e => setValues({...values, name : e.target.value})} type="text" required  placeholder="Enter Name" name="name" className="w-64 h-7 rounded-xl px-2"/>
          </div>
          <div className="mb-2 flex flex-col mx-2 mt-4 gap-2">
            <label htmlFor="name">
              Your Email:
            </label>
            <input onChange={e => setValues({...values, gmail : e.target.value})} type="email" required  placeholder="Enter Email" name="name" className="w-64 h-7 rounded-xl px-2"/>
          </div>
        </form>
        <div className="mt-12 mx-4 flex flex-row gap-12">
          <button onClick={handleSubmit} className="border-2 bg-gray-600 rounded-xl h-8 w-20 flex items-center justify-center cursor-cell ">
            Submit
          </button>
          <button className="border-2 bg-gray-300 rounded-xl h-8 w-20 flex items-center justify-center cursor-not-allowed">
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
