import Axios from 'axios'
import React,{useState, useEffect} from 'react';
import { text } from 'stream/consumers';

const CtaHome = ({ scrollToAbout }: { scrollToAbout: () => void }) => {
const [name] = useState("");
const [description] = useState("2.5%");
const [dbDescription,setDbDescription] = useState([]);
useEffect(()=>{
  console.log('asas');
Axios.get("http://localhost:3002/api/get").then((data)=>{
  setDbDescription(data.data.description)
});
},[])

  const submitPost = () => {
    Axios.post('http://localhost:3002/api/update', {name: name, description: description})
    }
  return (
    <div
      id="cta-container"
      className="h-screen flex flex-col justify-center md:flex-row md:justify-start items-center p-0 md:px-28 "
    >
      <div>
        <h2 className="text-5xl sm:text-7xl my-5 font-bold">Vive libre,</h2>
        <h2 className="text-5xl sm:text-7xl my-5 font-bold">vive Huit´s</h2>
        <button
          className=" gradient text-white rounded-full py-3 mt-20 md:mt-0 text-xl w-72 sm:w-96 h-16"
          onClick={submitPost}
        >
          Inicio
        </button>
      </div>
    <div>
      <input type='text' value={dbDescription} className="ml-72 text-black">          
        </input>  
    </div>       
    </div>
  );
};

export default CtaHome;
