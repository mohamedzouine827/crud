import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ShowData = ({ id, name, gmail}) => {

  const handleDelete = (id) => {
    const confirm = window.confirm("sure about it?")
    if (confirm) {
      axios.delete(`http://localhost:3000/users/${id}`)
      .then((res) => {
         // log the id here
        location.reload();
        console.log(res);
      }).catch(err => console.log(err))
    }
    console.log(id);
  }

    return (
        <div className='flex flex-row'>
            <div className="border w-[60vw] p-4 shadow-md justify-between">
                <ul className="flex justify-between items-center max-w-full text-black">
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{gmail}</li>
                </ul>
            </div>
            <div className='w-[15vw] flex flex-row items-center gap-12'>
                <Link to={`/update/${id}`}>
                    <button className='uppercase bg-slate-600 rounded-lg transition-all duration-200 ease-linear hover:bg-slate-300 hover:text-black  font-bold border-2 w-16 h-8 flex items-center justify-center text-center text-white'>
                        UPDATE
                    </button>
                </Link>
                <button onClick={() => handleDelete(id)} className='uppercase bg-red-600 rounded-lg transition-all duration-200 ease-linear hover:bg-red-300 hover:text-black  font-bold border-2 w-16 h-8 flex items-center justify-center text-center text-white'>
                    DELETE
                </button>
            </div>
        </div>
    )
}

ShowData.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    gmail: PropTypes.string.isRequired,
};

export default ShowData;