import axios from 'axios';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e :any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/send-email', formData);
      alert('Email sent successfully: ' + response.data);
    } catch (error :any) {
      alert('Error sending email: ' + error.toString());
    }
  };
  return (
    <>
    <div className='w-full flex flex-col justify-center items-center bg-gray-900'>
      {/* <div className=" flex justify-center items-center text-white text-3xl font-bold w-[900px] p-4">
        WANT TO REACH OUT TO US?
      </div> */}
      <div className="flex lg:flex-row flex-col  w-full justify-center items-center xs:p-16 p-2">
    <div className=" flex flex-1 flex-col justify-center md:w-1/2 w-full p-4 text-4xl lg:text-6xl  font-bold text-white" >
      <p className=" text-center lg:w-auto lg:block flex justify-center w-full ">CONTACT US FROM </p><p className=" text-center lg:w-auto lg:block flex justify-center w-full text-yellow-400">ANY PART OF THE WORLD</p>
    </div>
      <form onSubmit={handleSubmit} action="" className="h-96 flex flex-col sm:w-1/2 px-6 justify-between py-6 md:w-96 w-full text-yellow-400">
        <input value={formData.name} onChange={handleChange} required className="md:w-80 w-full p-2 rounded-xl bg-gray-800" type="text" name="name" placeholder="Your good name" />
        <input value={formData.email} onChange={handleChange} required className="md:w-80 w-full p-2 rounded-xl bg-gray-800" type="email" name="email" placeholder="Your E-mail Address" />
        <textarea value={formData.message} onChange={handleChange} required name="message" className="h-32 md:w-96 w-full p-2 rounded-xl bg-gray-800" placeholder="Your Message" />
        <button className="w-32 h-10 p-2 bg-gray-800 hover:bg-yellow-400 hover:text-black rounded-xl  text-white">
              Submit
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Contact
